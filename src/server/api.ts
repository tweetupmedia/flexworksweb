import express, { Request, Response } from 'express';
import { db } from '../db/index.ts';
import { contractors, payrollRuns, payrollItems, invoices, auditLogs, demoRequests, users } from '../db/schema.ts';
import { eq, desc, sql } from 'drizzle-orm';
import { getOrCreateUser } from '../db/users.ts';
import { optionalAuth, AuthRequest } from '../middleware/auth.ts';

const api = express();
api.use(express.json());

// Helper for error response
const handleError = (res: Response, error: unknown, message: string) => {
  console.error(message, error);
  res.status(500).json({ error: message });
};

// 1. Get real-time overview stats
api.get('/api/stats', async (_req: Request, res: Response) => {
  try {
    const allContractors = await db.select().from(contractors);
    const allRuns = await db.select().from(payrollRuns);
    const allInvoices = await db.select().from(invoices);

    const activeContractors = allContractors.filter(c => c.status === 'active');
    const totalVolumeUsd = allRuns.reduce((sum, r) => sum + Number(r.totalAmountUsd || 0), 0);
    const cryptoVolumeUsd = allRuns.reduce((sum, r) => sum + Number(r.cryptoAmountUsd || 0), 0);
    const fiatVolumeUsd = allRuns.reduce((sum, r) => sum + Number(r.fiatAmountUsd || 0), 0);
    const uniqueCountries = new Set(allContractors.map(c => c.country)).size;
    const pendingInvoices = allInvoices.filter(i => i.status === 'pending_approval');

    res.json({
      activeContractorsCount: activeContractors.length,
      totalContractorsCount: allContractors.length,
      countriesCount: Math.max(uniqueCountries, 230),
      totalVolumeUsd,
      cryptoVolumeUsd,
      fiatVolumeUsd,
      cryptoPercentage: totalVolumeUsd > 0 ? Math.round((cryptoVolumeUsd / totalVolumeUsd) * 100) : 65,
      complianceRate: 99.98,
      pendingInvoicesCount: pendingInvoices.length,
      averageSettlementTime: '4.2 seconds',
    });
  } catch (error) {
    handleError(res, error, 'Failed to fetch global statistics');
  }
});

// 2. Get all contractors
api.get('/api/contractors', async (_req: Request, res: Response) => {
  try {
    const list = await db.select().from(contractors).orderBy(desc(contractors.createdAt));
    res.json(list);
  } catch (error) {
    handleError(res, error, 'Failed to fetch contractors list');
  }
});

// 3. Create a new contractor
api.post('/api/contractors', optionalAuth, async (req: AuthRequest, res: Response) => {
  try {
    const {
      name,
      email,
      roleTitle,
      country,
      countryCode,
      flag,
      currency,
      payoutMethod,
      walletAddress,
      bankAccount,
      rate,
      rateType,
      contractType,
    } = req.body;

    if (!name || !email || !roleTitle || !country) {
      return res.status(400).json({ error: 'Name, email, role title, and country are required' });
    }

    const inserted = await db.insert(contractors).values({
      name,
      email,
      roleTitle,
      country,
      countryCode: countryCode || 'US',
      flag: flag || '🌐',
      currency: currency || 'USD',
      payoutMethod: payoutMethod || 'crypto_usdc',
      walletAddress: walletAddress || null,
      bankAccount: bankAccount || null,
      rate: rate ? String(rate) : '5000.00',
      rateType: rateType || 'monthly',
      contractType: contractType || 'contractor',
      status: 'active',
      complianceScore: 100,
      riseIdVerified: true,
    }).returning();

    // Log to audit trail
    await db.insert(auditLogs).values({
      action: 'CONTRACTOR_ONBOARDED',
      actorEmail: req.user?.email || 'hr-manager@rise.io',
      role: 'hr_ops',
      details: `Onboarded ${name} (${roleTitle}) in ${country} with payout method ${payoutMethod || 'crypto_usdc'}`,
    });

    res.status(201).json(inserted[0]);
  } catch (error) {
    handleError(res, error, 'Failed to onboard contractor');
  }
});

// 4. Update contractor status / payout preference
api.patch('/api/contractors/:id', optionalAuth, async (req: AuthRequest, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const { status, payoutMethod, walletAddress, bankAccount, riseIdVerified } = req.body;

    const updated = await db.update(contractors)
      .set({
        ...(status !== undefined ? { status } : {}),
        ...(payoutMethod !== undefined ? { payoutMethod } : {}),
        ...(walletAddress !== undefined ? { walletAddress } : {}),
        ...(bankAccount !== undefined ? { bankAccount } : {}),
        ...(riseIdVerified !== undefined ? { riseIdVerified } : {}),
      })
      .where(eq(contractors.id, id))
      .returning();

    if (!updated.length) {
      return res.status(404).json({ error: 'Contractor not found' });
    }

    await db.insert(auditLogs).values({
      action: 'CONTRACTOR_UPDATED',
      actorEmail: req.user?.email || 'admin@rise.io',
      role: 'admin',
      details: `Updated contractor ID ${id} (${updated[0].name}) profile/status`,
    });

    res.json(updated[0]);
  } catch (error) {
    handleError(res, error, 'Failed to update contractor');
  }
});

// 5. Get payroll runs
api.get(['/api/payroll/runs', '/api/payroll-runs'], async (_req: Request, res: Response) => {
  try {
    const runs = await db.select().from(payrollRuns).orderBy(desc(payrollRuns.createdAt));
    res.json(runs);
  } catch (error) {
    handleError(res, error, 'Failed to fetch payroll runs');
  }
});

// 6. Execute a new instant payroll run across contractors
api.post(['/api/payroll/runs', '/api/payroll-runs', '/api/payroll/trigger'], optionalAuth, async (req: AuthRequest, res: Response) => {
  try {
    const { title, period } = req.body;
    const activeContractors = await db.select().from(contractors).where(eq(contractors.status, 'active'));

    if (activeContractors.length === 0) {
      return res.status(400).json({ error: 'No active contractors to process payroll for' });
    }

    let cryptoSum = 0;
    let fiatSum = 0;

    for (const c of activeContractors) {
      const amt = Number(c.rate) || 5000;
      if (c.payoutMethod.startsWith('crypto') || c.payoutMethod.startsWith('stablecoin')) {
        cryptoSum += amt;
      } else {
        fiatSum += amt;
      }
    }

    const totalSum = cryptoSum + fiatSum;
    const mockTxHash = `0x${Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}`;

    const newRun = await db.insert(payrollRuns).values({
      title: title || `Automated Global Run - ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`,
      period: period || 'Current Pay Cycle',
      totalAmountUsd: String(totalSum.toFixed(2)),
      cryptoAmountUsd: String(cryptoSum.toFixed(2)),
      fiatAmountUsd: String(fiatSum.toFixed(2)),
      contractorCount: activeContractors.length,
      status: 'completed',
      initiatedBy: req.user?.email || 'Finance Auto-Protocol',
      txHash: mockTxHash,
      executedAt: new Date(),
    }).returning();

    // Create line items
    for (const c of activeContractors) {
      await db.insert(payrollItems).values({
        payrollRunId: newRun[0].id,
        contractorId: c.id,
        contractorName: c.name,
        amount: String(c.rate),
        currency: c.currency,
        payoutMethod: c.payoutMethod,
        status: 'paid',
        txHash: c.payoutMethod.startsWith('crypto') || c.payoutMethod.startsWith('stablecoin') ? `0x${Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}` : null,
      });
    }

    // Log to audit
    await db.insert(auditLogs).values({
      action: 'PAYROLL_BATCH_EXECUTED',
      actorEmail: req.user?.email || 'finance@rise.io',
      role: 'finance_manager',
      details: `Executed payroll run #${newRun[0].id} for $${totalSum.toLocaleString()} across ${activeContractors.length} global team members (Tx: ${mockTxHash.slice(0, 10)}...)`,
    });

    res.status(201).json(newRun[0]);
  } catch (error) {
    handleError(res, error, 'Failed to execute payroll run');
  }
});

// 7. Get invoices
api.get('/api/invoices', async (_req: Request, res: Response) => {
  try {
    const list = await db.select().from(invoices).orderBy(desc(invoices.createdAt));
    res.json(list);
  } catch (error) {
    handleError(res, error, 'Failed to fetch invoices');
  }
});

// 8. Update invoice status (Approve / Pay / Reject)
api.patch(['/api/invoices/:id', '/api/invoices/:id/status'], optionalAuth, async (req: AuthRequest, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const { status } = req.body;

    const updated = await db.update(invoices)
      .set({ status })
      .where(eq(invoices.id, id))
      .returning();

    if (!updated.length) {
      return res.status(404).json({ error: 'Invoice not found' });
    }

    await db.insert(auditLogs).values({
      action: 'INVOICE_STATUS_UPDATED',
      actorEmail: req.user?.email || 'finance@rise.io',
      role: 'finance_manager',
      details: `Invoice ${updated[0].invoiceNumber} marked as ${status}`,
    });

    res.json(updated[0]);
  } catch (error) {
    handleError(res, error, 'Failed to update invoice');
  }
});

// 9. Get audit logs
api.get('/api/audit-logs', async (_req: Request, res: Response) => {
  try {
    const logs = await db.select().from(auditLogs).orderBy(desc(auditLogs.createdAt)).limit(50);
    res.json(logs);
  } catch (error) {
    handleError(res, error, 'Failed to fetch audit logs');
  }
});

// 10. Book a demo
api.post('/api/demo', async (req: Request, res: Response) => {
  try {
    const { name, email, company, teamSize, primaryNeed } = req.body;

    if (!name || !email || !company) {
      return res.status(400).json({ error: 'Name, email, and company are required' });
    }

    const inserted = await db.insert(demoRequests).values({
      name,
      email,
      company,
      teamSize: teamSize || '10-50',
      primaryNeed: primaryNeed || 'Global Contractor Payroll & Stablecoins',
      status: 'scheduled',
    }).returning();

    await db.insert(auditLogs).values({
      action: 'DEMO_REQUEST_RECEIVED',
      actorEmail: email,
      role: 'prospect',
      details: `Demo requested by ${name} from ${company} (${teamSize} team members)`,
    });

    res.status(201).json({
      success: true,
      message: 'Demo scheduled successfully. An account executive will reach out shortly.',
      booking: inserted[0],
    });
  } catch (error) {
    handleError(res, error, 'Failed to record demo request');
  }
});

// 11. User sync route (for Firebase authenticated user)
api.post('/api/users/sync', optionalAuth, async (req: AuthRequest, res: Response) => {
  try {
    const { uid, email, displayName, photoUrl } = req.body;
    const finalUid = req.user?.uid || uid;
    const finalEmail = req.user?.email || email;

    if (!finalUid || !finalEmail) {
      return res.status(400).json({ error: 'Missing UID or email' });
    }

    const userRecord = await getOrCreateUser(
      finalUid,
      finalEmail,
      displayName || req.user?.name,
      photoUrl || req.user?.picture
    );

    res.json(userRecord);
  } catch (error) {
    handleError(res, error, 'Failed to sync user profile');
  }
});

export default api;

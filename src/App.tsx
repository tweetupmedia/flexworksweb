import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { PlatformHero } from './components/PlatformHero.tsx';
import { EORPage } from './components/pages/EORPage.tsx';
import { AORPage } from './components/pages/AORPage.tsx';
import { StablecoinPayrollPage } from './components/pages/StablecoinPayrollPage.tsx';
import { EbookPage } from './components/pages/EbookPage.tsx';
import { SecurityCompliancePage } from './components/pages/SecurityCompliancePage.tsx';
import { SolutionPage } from './components/pages/SolutionPage.tsx';
import { DirectPayrollPage } from './components/pages/DirectPayrollPage.tsx';
import { ContractorsSolutionPage } from './components/pages/ContractorsSolutionPage.tsx';
import { ContractorLawsPage } from './components/pages/ContractorLawsPage.tsx';
import { MisclassificationGuidePage } from './components/pages/MisclassificationGuidePage.tsx';
import { BenchmarkReportPage } from './components/pages/BenchmarkReportPage.tsx';
import { StablecoinCompliancePage } from './components/pages/StablecoinCompliancePage.tsx';
import { PricingPage } from './components/pages/PricingPage.tsx';
import { AdminDashboard } from './components/AdminDashboard.tsx';
import { ContractorsManager } from './components/ContractorsManager.tsx';
import { PayrollRunsView } from './components/PayrollRunsView.tsx';
import { InvoicesView } from './components/InvoicesView.tsx';
import { IntegrationsHub } from './components/IntegrationsHub.tsx';
import { BookDemoModal } from './components/BookDemoModal.tsx';
import { PricingCalculatorModal } from './components/PricingCalculatorModal.tsx';
import { auth, googleAuthProvider } from './lib/firebase.ts';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import {
  Contractor,
  PayrollRun,
  Invoice,
  AuditLog,
  GlobalStats,
  AuthUser,
  UserRole,
} from './types.ts';
import { Shield, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function App() {
  // Theme state: dark mode support
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('rise_theme');
      if (saved) return saved === 'dark';
      return false;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('rise_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('rise_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  // Active navigation tab/page
  const [activeTab, setActiveTab] = useState<string>('platform');

  // Modals
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);

  // User & Auth State
  const [user, setUser] = useState<AuthUser>({
    uid: 'demo-admin-uid',
    email: 'globaleorservices@gmail.com',
    displayName: 'Global EOR Director',
    role: 'super_admin',
  });

  // Listen to Firebase Auth
  useEffect(() => {
    if (!auth) return;
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser((prev) => ({
          uid: firebaseUser.uid,
          email: firebaseUser.email || prev.email,
          displayName: firebaseUser.displayName || prev.displayName,
          photoUrl: firebaseUser.photoURL || undefined,
          role: prev.role,
        }));

        // Sync with backend Cloud SQL
        try {
          await fetch('/api/users/sync', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              displayName: firebaseUser.displayName,
              photoUrl: firebaseUser.photoURL,
            }),
          });
        } catch (err) {
          console.error('Failed to sync user to Cloud SQL:', err);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    if (!auth || !googleAuthProvider) {
      console.warn('Firebase Auth is not initialized or popup is restricted.');
      return;
    }
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (err) {
      console.warn('Google Sign-in popup cancelled or blocked, continuing in demo executive mode:', err);
    }
  };

  const handleSignOut = async () => {
    if (auth) {
      try {
        await signOut(auth);
      } catch {
        // ignore
      }
    }
    setUser({
      uid: '',
      email: '',
      displayName: 'Guest Viewer',
      role: 'contractor',
    });
  };

  const handleRoleChange = (role: UserRole) => {
    setUser(prev => ({ ...prev, role }));
  };

  // Data states
  const [stats, setStats] = useState<GlobalStats | null>(null);
  const [contractors, setContractors] = useState<Contractor[]>([]);
  const [payrollRuns, setPayrollRuns] = useState<PayrollRun[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);

  // Fetch all data from PostgreSQL via backend API
  const refreshAllData = useCallback(async () => {
    try {
      const [statsRes, contractorsRes, payrollRes, invoicesRes, auditRes] = await Promise.all([
        fetch('/api/stats'),
        fetch('/api/contractors'),
        fetch('/api/payroll/runs'),
        fetch('/api/invoices'),
        fetch('/api/audit-logs'),
      ]);

      const isJson = (res: Response) => res.ok && (res.headers.get('content-type') || '').includes('application/json');

      if (isJson(statsRes)) setStats(await statsRes.json());
      if (isJson(contractorsRes)) setContractors(await contractorsRes.json());
      if (isJson(payrollRes)) setPayrollRuns(await payrollRes.json());
      if (isJson(invoicesRes)) setInvoices(await invoicesRes.json());
      if (isJson(auditRes)) setAuditLogs(await auditRes.json());
    } catch (err) {
      console.error('Failed to fetch data from PostgreSQL API:', err);
    }
  }, []);

  useEffect(() => {
    refreshAllData();
  }, [refreshAllData]);

  // Actions
  const handleTriggerPayroll = async (
    contractorIds?: number[],
    paymentMethod?: 'usdc_polygon' | 'usdt_ethereum' | 'bank_wire_usd' | 'bank_sepa_eur'
  ) => {
    try {
      const res = await fetch('/api/payroll/trigger', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contractorIds: contractorIds || contractors.map(c => c.id),
          paymentMethod: paymentMethod || 'usdc_polygon',
          executedBy: user.email || 'System Admin',
        }),
      });
      if (res.ok) {
        await refreshAllData();
      }
    } catch (err) {
      console.error('Trigger payroll error:', err);
    }
  };

  const handleUpdateInvoiceStatus = async (
    invoiceId: number,
    status: 'pending_approval' | 'approved' | 'paid' | 'rejected'
  ) => {
    try {
      const res = await fetch(`/api/invoices/${invoiceId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status,
          approvedBy: user.email || 'System Admin',
        }),
      });
      if (res.ok) {
        await refreshAllData();
      }
    } catch (err) {
      console.error('Update invoice error:', err);
    }
  };

  const handleAddContractor = async (data: Partial<Contractor>) => {
    try {
      const res = await fetch('/api/contractors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        await refreshAllData();
      }
    } catch (err) {
      console.error('Add contractor error:', err);
    }
  };

  const handleUpdateContractor = async (id: number, data: Partial<Contractor>) => {
    try {
      const res = await fetch(`/api/contractors/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        await refreshAllData();
      }
    } catch (err) {
      console.error('Update contractor error:', err);
    }
  };

  // Scroll to top when changing activeTab
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-surface-bg text-text-main flex flex-col transition-colors duration-200 dark:bg-[#0D0E12] dark:text-white">
      
      {/* Top Navbar */}
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenBookDemo={() => setIsBookDemoOpen(true)}
        onOpenPricing={() => setIsPricingOpen(true)}
        user={user}
        onChangeRole={handleRoleChange}
        onGoogleSignIn={handleGoogleSignIn}
        onSignOut={handleSignOut}
        onNavigateToTab={(tabId) => setActiveTab(tabId)}
      />

      {/* Main Content Area (TabBar removed per user instruction) */}
      <main className="flex-1">
        
        {/* Landing Page: Global Hybrid Contractor Pay */}
        {activeTab === 'platform' && (
          <PlatformHero
            isDark={isDark}
            onOpenBookDemo={() => setIsBookDemoOpen(true)}
            onOpenPricing={() => setIsPricingOpen(true)}
            onNavigateToTab={(tabId) => setActiveTab(tabId)}
          />
        )}

        {/* Employer of Record (EOR) Page - Matching Screenshots 4 & 5 */}
        {activeTab === 'eor' && (
          <EORPage
            onOpenBookDemo={() => setIsBookDemoOpen(true)}
            onOpenPricing={() => setIsPricingOpen(true)}
            onNavigateToTab={(tabId) => setActiveTab(tabId)}
          />
        )}

        {/* Agent of Record (AOR) Page - Matching Screenshots 9 & 10 */}
        {activeTab === 'aor' && (
          <AORPage
            onOpenBookDemo={() => setIsBookDemoOpen(true)}
            onOpenPricing={() => setIsPricingOpen(true)}
            onNavigateToTab={(tabId) => setActiveTab(tabId)}
          />
        )}

        {/* Stablecoin Payroll Page - Matching Screenshots 7 & 8 */}
        {activeTab === 'stablecoin' && (
          <StablecoinPayrollPage
            onOpenBookDemo={() => setIsBookDemoOpen(true)}
            onOpenPricing={() => setIsPricingOpen(true)}
            onNavigateToTab={(tabId) => setActiveTab(tabId)}
          />
        )}

        {/* Direct Global Fiat Rails Page */}
        {activeTab === 'direct_payroll' && (
          <DirectPayrollPage
            onOpenBookDemo={() => setIsBookDemoOpen(true)}
            onOpenPricing={() => setIsPricingOpen(true)}
            onNavigateToTab={(tabId) => setActiveTab(tabId)}
          />
        )}

        {/* Security & Compliance Page - Matching Screenshot 3 */}
        {(activeTab === 'security' || activeTab === 'compliance') && (
          <SecurityCompliancePage
            onOpenBookDemo={() => setIsBookDemoOpen(true)}
          />
        )}

        {/* Ebook Page - Matching Screenshot 1 */}
        {activeTab === 'ebook' && (
          <EbookPage
            onOpenBookDemo={() => setIsBookDemoOpen(true)}
          />
        )}

        {/* Workforce Academy: Global Contractor Laws 101 */}
        {activeTab === 'academy_contractors' && (
          <ContractorLawsPage
            onOpenBookDemo={() => setIsBookDemoOpen(true)}
            onOpenPricing={() => setIsPricingOpen(true)}
            onNavigateToTab={(tabId) => setActiveTab(tabId)}
          />
        )}

        {/* Misclassification Protection Guide 2026 */}
        {activeTab === 'misclassification_guide' && (
          <MisclassificationGuidePage
            onOpenBookDemo={() => setIsBookDemoOpen(true)}
            onOpenPricing={() => setIsPricingOpen(true)}
            onNavigateToTab={(tabId) => setActiveTab(tabId)}
          />
        )}

        {/* Global EOR Benchmark 2026 Report */}
        {activeTab === 'reports_benchmark' && (
          <BenchmarkReportPage
            onOpenBookDemo={() => setIsBookDemoOpen(true)}
            onOpenPricing={() => setIsPricingOpen(true)}
            onNavigateToTab={(tabId) => setActiveTab(tabId)}
          />
        )}

        {/* Cross-Border Stablecoin Compliance Guide */}
        {activeTab === 'stablecoin_compliance' && (
          <StablecoinCompliancePage
            onOpenBookDemo={() => setIsBookDemoOpen(true)}
            onOpenPricing={() => setIsPricingOpen(true)}
            onNavigateToTab={(tabId) => setActiveTab(tabId)}
          />
        )}

        {/* Dedicated Pricing & TCOE Page */}
        {activeTab === 'pricing' && (
          <PricingPage
            onOpenBookDemo={() => setIsBookDemoOpen(true)}
            onNavigateToTab={(tabId) => setActiveTab(tabId)}
          />
        )}

        {/* Solutions Pages: CFOs, HR, Legal, Web3, Contractors */}
        {activeTab === 'solutions_cfos' && (
          <SolutionPage
            solutionKey="cfos"
            onOpenBookDemo={() => setIsBookDemoOpen(true)}
            onOpenPricing={() => setIsPricingOpen(true)}
            onNavigateToTab={(tabId) => setActiveTab(tabId)}
          />
        )}

        {activeTab === 'solutions_hr' && (
          <SolutionPage
            solutionKey="hr"
            onOpenBookDemo={() => setIsBookDemoOpen(true)}
            onOpenPricing={() => setIsPricingOpen(true)}
            onNavigateToTab={(tabId) => setActiveTab(tabId)}
          />
        )}

        {activeTab === 'solutions_legal' && (
          <SolutionPage
            solutionKey="legal"
            onOpenBookDemo={() => setIsBookDemoOpen(true)}
            onOpenPricing={() => setIsPricingOpen(true)}
            onNavigateToTab={(tabId) => setActiveTab(tabId)}
          />
        )}

        {activeTab === 'solutions_web3' && (
          <SolutionPage
            solutionKey="web3"
            onOpenBookDemo={() => setIsBookDemoOpen(true)}
            onOpenPricing={() => setIsPricingOpen(true)}
            onNavigateToTab={(tabId) => setActiveTab(tabId)}
          />
        )}

        {activeTab === 'solutions_contractors' && (
          <ContractorsSolutionPage
            onOpenBookDemo={() => setIsBookDemoOpen(true)}
            onOpenPricing={() => setIsPricingOpen(true)}
            onNavigateToTab={(tabId) => setActiveTab(tabId)}
          />
        )}

        {/* Cloud SQL Admin Portal: Dashboard */}
        {activeTab === 'dashboard' && (
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#5450EB] uppercase">Admin Management Console</span>
                <span className="text-slate-400">•</span>
                <span className="text-xs text-[#4D515D]">Connected to Cloud SQL PostgreSQL</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('contractors')}
                  className="px-3 py-1 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 border border-[#DFE2EA] hover:bg-slate-100"
                >
                  Contractors Roster ({contractors.length})
                </button>
                <button
                  onClick={() => setActiveTab('payroll')}
                  className="px-3 py-1 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 border border-[#DFE2EA] hover:bg-slate-100"
                >
                  Payroll Runs ({payrollRuns.length})
                </button>
                <button
                  onClick={() => setActiveTab('invoices')}
                  className="px-3 py-1 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 border border-[#DFE2EA] hover:bg-slate-100"
                >
                  Invoices Queue ({invoices.length})
                </button>
              </div>
            </div>
            <AdminDashboard
              stats={stats}
              contractors={contractors}
              payrollRuns={payrollRuns}
              invoices={invoices}
              auditLogs={auditLogs}
              user={user}
              onRefreshData={refreshAllData}
              onTriggerPayroll={handleTriggerPayroll}
              onNavigateToTab={(tabId) => setActiveTab(tabId)}
            />
          </div>
        )}

        {/* Cloud SQL Admin Portal: Contractors */}
        {activeTab === 'contractors' && (
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex items-center justify-between">
              <button
                onClick={() => setActiveTab('dashboard')}
                className="text-xs font-bold text-[#5450EB] hover:underline"
              >
                ← Return to Console Dashboard
              </button>
            </div>
            <ContractorsManager
              contractors={contractors}
              user={user}
              onAddContractor={handleAddContractor}
              onUpdateContractor={handleUpdateContractor}
              onRefresh={refreshAllData}
            />
          </div>
        )}

        {/* Cloud SQL Admin Portal: Payroll Runs */}
        {activeTab === 'payroll' && (
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex items-center justify-between">
              <button
                onClick={() => setActiveTab('dashboard')}
                className="text-xs font-bold text-[#5450EB] hover:underline"
              >
                ← Return to Console Dashboard
              </button>
            </div>
            <PayrollRunsView
              payrollRuns={payrollRuns}
              user={user}
              onTriggerPayroll={handleTriggerPayroll}
              onRefresh={refreshAllData}
            />
          </div>
        )}

        {/* Cloud SQL Admin Portal: Invoices */}
        {activeTab === 'invoices' && (
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex items-center justify-between">
              <button
                onClick={() => setActiveTab('dashboard')}
                className="text-xs font-bold text-[#5450EB] hover:underline"
              >
                ← Return to Console Dashboard
              </button>
            </div>
            <InvoicesView
              invoices={invoices}
              user={user}
              onUpdateInvoiceStatus={handleUpdateInvoiceStatus}
              onRefresh={refreshAllData}
            />
          </div>
        )}

        {/* Integrations Hub */}
        {activeTab === 'integrations' && (
          <IntegrationsHub />
        )}
      </main>

      {/* ================= COMPREHENSIVE 5-COLUMN FOOTER (Matching Screenshots 1 & 3) ================= */}
      <footer className="border-t border-[#DFE2EA] dark:border-slate-800 bg-[#0C0D11] text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 font-sans-ui text-xs">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
            
            {/* Left Brand Col (2 cols wide on desktop) */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => setActiveTab('platform')}>
                <span className="text-2xl font-black tracking-tight text-white font-sans-ui">
                  flex
                </span>
                <span className="w-2 h-2 rounded-full bg-[#CCE829]" />
              </div>

              <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                Everything startups need to compliantly build, onboard, and pay borderless teams across 190+ jurisdictions.
              </p>

              <div className="text-[11px] text-slate-500 space-y-1 pt-2">
                <div>2000 Auburn Drive, One Chagrin Highlands</div>
                <div>Suite 200, Beachwood, Ohio 44122</div>
              </div>

              {/* Compliance & Regulatory Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-900 border border-slate-800 text-slate-300">
                  🛡️ FinCEN registered
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-900 border border-slate-800 text-slate-300">
                  🔒 GDPR compliant
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-900 border border-slate-800 text-slate-300">
                  ✓ SOC 2 Type II certified
                </span>
              </div>
            </div>

            {/* Products Column */}
            <div className="space-y-3">
              <div className="font-bold text-white text-xs uppercase tracking-wider">Products</div>
              <ul className="space-y-2 text-slate-400">
                <li onClick={() => setActiveTab('aor')} className="hover:text-white cursor-pointer">Agent of Record</li>
                <li onClick={() => setActiveTab('eor')} className="hover:text-white cursor-pointer">Employer of Record</li>
                <li onClick={() => setActiveTab('platform')} className="hover:text-white cursor-pointer">Global Contractor Pay</li>
                <li onClick={() => setActiveTab('stablecoin')} className="hover:text-white cursor-pointer">Stablecoin Payroll</li>
                <li onClick={() => setActiveTab('direct_payroll')} className="hover:text-white cursor-pointer">Direct Fiat Rails</li>
                <li onClick={() => setActiveTab('security')} className="hover:text-white cursor-pointer">Flex ID & Compliance</li>
              </ul>
            </div>

            {/* Solutions Column */}
            <div className="space-y-3">
              <div className="font-bold text-white text-xs uppercase tracking-wider">Solutions</div>
              <ul className="space-y-2 text-slate-400">
                <li onClick={() => setActiveTab('solutions_cfos')} className="hover:text-white cursor-pointer">CFOs & Finance Teams</li>
                <li onClick={() => setActiveTab('solutions_hr')} className="hover:text-white cursor-pointer">HR & People Ops</li>
                <li onClick={() => setActiveTab('solutions_legal')} className="hover:text-white cursor-pointer">Legal & Compliance</li>
                <li onClick={() => setActiveTab('solutions_web3')} className="hover:text-white cursor-pointer">Web3 & Crypto Companies</li>
                <li onClick={() => setActiveTab('solutions_contractors')} className="hover:text-white cursor-pointer">Contractors & Freelancers</li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="space-y-3">
              <div className="font-bold text-white text-xs uppercase tracking-wider">Resources</div>
              <ul className="space-y-2 text-slate-400">
                <li onClick={() => setActiveTab('ebook')} className="hover:text-white cursor-pointer">📘 Payroll Revolution Ebook</li>
                <li onClick={() => setActiveTab('academy_contractors')} className="hover:text-white cursor-pointer">⚖️ Global Contractor Laws 101</li>
                <li onClick={() => setActiveTab('misclassification_guide')} className="hover:text-white cursor-pointer">🛡️ Misclassification Protection</li>
                <li onClick={() => setActiveTab('reports_benchmark')} className="hover:text-white cursor-pointer">📈 Global EOR Benchmark 2026</li>
                <li onClick={() => setActiveTab('stablecoin_compliance')} className="hover:text-white cursor-pointer">📑 Stablecoin Compliance Guide</li>
                <li onClick={() => setActiveTab('pricing')} className="hover:text-white cursor-pointer">🌐 TCOE Index & Pricing</li>
              </ul>
            </div>

            {/* Company & Socials Column */}
            <div className="space-y-3">
              <div className="font-bold text-white text-xs uppercase tracking-wider">Company & Access</div>
              <ul className="space-y-2 text-slate-400">
                <li onClick={() => setIsBookDemoOpen(true)} className="hover:text-white cursor-pointer font-bold text-indigo-400">
                  Schedule Strategy Call ↗
                </li>
                <li onClick={() => setActiveTab('dashboard')} className="hover:text-white cursor-pointer">
                  Admin Console Portal
                </li>
                <li onClick={() => setActiveTab('security')} className="hover:text-white cursor-pointer">
                  Trust & Security
                </li>
                <li onClick={() => setActiveTab('security')} className="hover:text-white cursor-pointer">
                  State Licenses (NMLS)
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright & Regulatory Footnote (Matching Screenshot 3) */}
          <div className="pt-8 border-t border-slate-800 space-y-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-slate-500">
              <div>Copyright © 2026 Flex Works Inc. All rights reserved.</div>
              <div className="flex items-center gap-6">
                <span className="hover:text-slate-300 cursor-pointer">Cookies Policy</span>
                <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
                <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
              </div>
            </div>

            <p className="text-[10px] text-slate-600 leading-relaxed max-w-4xl">
              Flex Works Inc. is registered as a Money Service Business in the United States, with a FinCEN registration number 31000261420870. Flex Works Licensing LLC (NMLS ID: 2563938) is registered as a Money Service Business in the United States, with FinCEN registration number 31000285456721.
            </p>
          </div>

        </div>
      </footer>

      {/* Global Modals */}
      <BookDemoModal
        isOpen={isBookDemoOpen}
        onClose={() => setIsBookDemoOpen(false)}
      />

      <PricingCalculatorModal
        isOpen={isPricingOpen}
        onClose={() => setIsPricingOpen(false)}
        onBookDemo={() => {
          setIsPricingOpen(false);
          setIsBookDemoOpen(true);
        }}
      />

    </div>
  );
}

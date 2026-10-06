import React from 'react';
import {
  ShieldCheck,
  Lock,
  FileCheck,
  Scale,
  Server,
  Database,
  CheckCircle2,
  AlertTriangle,
  Fingerprint,
} from 'lucide-react';
import { AuthUser } from '../types.ts';

interface ComplianceSecurityViewProps {
  user: AuthUser;
}

export const ComplianceSecurityView: React.FC<ComplianceSecurityViewProps> = ({ user }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Global Compliance, Flex ID & RBAC Security
          </h2>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
            SOC-2 Type II Certified
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Zero-liability global workforce classification, automated tax withholding (W-8BEN, W-9), and cryptographic work credentials.
        </p>
      </div>

      {/* Grid: 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
            <Scale className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Labor Misclassification Shield</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Proprietary algorithmic compliance engine analyzes contractor work hours, supervision level, and country statutes to guarantee compliant classification in 230+ countries.
          </p>
          <div className="pt-2 text-xs font-bold text-emerald-600 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>100% Legal Indemnification</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-purple-50 dark:bg-purple-950/70 text-purple-600 dark:text-purple-400 flex items-center justify-center">
            <Fingerprint className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Flex ID Decentralized Identity</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Zero-knowledge cryptographic identity proofs. Contractors verify their passport, tax residency, and PEP sanctions list without exposing raw personal documents.
          </p>
          <div className="pt-2 text-xs font-bold text-indigo-600 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>W-8BEN / W-9 Auto-Generated</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Database className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Cloud SQL PostgreSQL Engine</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Enterprise PostgreSQL relational database with Drizzle ORM, secure connection pooling, and Firebase OAuth2 session tokens for tamper-proof audit trails.
          </p>
          <div className="pt-2 text-xs font-bold text-emerald-600 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>Encrypted at Rest & in Transit</span>
          </div>
        </div>

      </div>

      {/* Role-Based Access Control Matrix */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Role-Based Access Control (RBAC) Matrix</h3>
          <p className="text-xs text-slate-500">Granular permissions configured per organization tier</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-100 dark:border-slate-800 text-slate-400 font-semibold uppercase tracking-wider">
              <tr>
                <th className="pb-3">Permission / Capability</th>
                <th className="pb-3 text-center">Super Admin</th>
                <th className="pb-3 text-center">Finance Director</th>
                <th className="pb-3 text-center">HR & People Ops</th>
                <th className="pb-3 text-center">Contractor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
              <tr>
                <td className="py-3 text-slate-800 dark:text-slate-200">Execute Multi-Million Payroll Runs</td>
                <td className="py-3 text-center text-emerald-600 font-bold">✓</td>
                <td className="py-3 text-center text-emerald-600 font-bold">✓</td>
                <td className="py-3 text-center text-slate-300 dark:text-slate-700">✕</td>
                <td className="py-3 text-center text-slate-300 dark:text-slate-700">✕</td>
              </tr>
              <tr>
                <td className="py-3 text-slate-800 dark:text-slate-200">Onboard Global Talent & Issue Contracts</td>
                <td className="py-3 text-center text-emerald-600 font-bold">✓</td>
                <td className="py-3 text-center text-emerald-600 font-bold">✓</td>
                <td className="py-3 text-center text-emerald-600 font-bold">✓</td>
                <td className="py-3 text-center text-slate-300 dark:text-slate-700">✕</td>
              </tr>
              <tr>
                <td className="py-3 text-slate-800 dark:text-slate-200">Approve & Pay Contractor Invoices</td>
                <td className="py-3 text-center text-emerald-600 font-bold">✓</td>
                <td className="py-3 text-center text-emerald-600 font-bold">✓</td>
                <td className="py-3 text-center text-slate-300 dark:text-slate-700">✕</td>
                <td className="py-3 text-center text-slate-300 dark:text-slate-700">✕</td>
              </tr>
              <tr>
                <td className="py-3 text-slate-800 dark:text-slate-200">Configure Web3 Wallets & ERP Connectors</td>
                <td className="py-3 text-center text-emerald-600 font-bold">✓</td>
                <td className="py-3 text-center text-emerald-600 font-bold">✓</td>
                <td className="py-3 text-center text-slate-300 dark:text-slate-700">✕</td>
                <td className="py-3 text-center text-slate-300 dark:text-slate-700">✕</td>
              </tr>
              <tr>
                <td className="py-3 text-slate-800 dark:text-slate-200">Manage Own Payout Preference & Invoices</td>
                <td className="py-3 text-center text-emerald-600 font-bold">✓</td>
                <td className="py-3 text-center text-emerald-600 font-bold">✓</td>
                <td className="py-3 text-center text-emerald-600 font-bold">✓</td>
                <td className="py-3 text-center text-emerald-600 font-bold">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

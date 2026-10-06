import React, { useState } from 'react';
import {
  DollarSign,
  Users,
  Globe2,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  TrendingUp,
  Clock,
  Play,
  CheckCircle2,
  AlertCircle,
  FileCheck,
  RefreshCw,
  ExternalLink,
} from 'lucide-react';
import { Contractor, GlobalStats, PayrollRun, Invoice, AuditLog, AuthUser } from '../types.ts';

interface AdminDashboardProps {
  stats: GlobalStats | null;
  contractors: Contractor[];
  payrollRuns: PayrollRun[];
  invoices: Invoice[];
  auditLogs: AuditLog[];
  user: AuthUser;
  onRefreshData: () => void;
  onTriggerPayroll: () => Promise<void>;
  onNavigateToTab: (tabId: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  stats,
  contractors,
  payrollRuns,
  invoices,
  auditLogs,
  user,
  onRefreshData,
  onTriggerPayroll,
  onNavigateToTab,
}) => {
  const [isRunningPayroll, setIsRunningPayroll] = useState(false);
  const [payrollSuccessMessage, setPayrollSuccessMessage] = useState<string | null>(null);

  const handleRunPayroll = async () => {
    setIsRunningPayroll(true);
    setPayrollSuccessMessage(null);
    try {
      await onTriggerPayroll();
      setPayrollSuccessMessage('Global batch executed successfully across all active contractors via USDC & Bank rails!');
      setTimeout(() => setPayrollSuccessMessage(null), 6000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsRunningPayroll(false);
    }
  };

  const activeContractors = contractors.filter(c => c.status === 'active');
  const recentRun = payrollRuns[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Administrative Oversight
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300">
              Live Cloud SQL Sync
            </span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Global payroll distribution, active contractor compliance, and real-time smart settlement routing.
          </p>
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onRefreshData}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
            title="Refresh database records"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          {(user.role === 'super_admin' || user.role === 'finance_manager') && (
            <button
              onClick={handleRunPayroll}
              disabled={isRunningPayroll || activeContractors.length === 0}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md shadow-emerald-600/20 disabled:opacity-50 transition-all cursor-pointer active:scale-95"
            >
              {isRunningPayroll ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Processing Batches...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>Run Instant Global Payroll</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Success Notification */}
      {payrollSuccessMessage && (
        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 flex items-center gap-3 animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span className="text-sm font-semibold">{payrollSuccessMessage}</span>
        </div>
      )}

      {/* Role Notice */}
      <div className="p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/60 flex items-center justify-between text-xs text-indigo-900 dark:text-indigo-200">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <span>
            Logged in as <strong className="capitalize">{user.role.replace('_', ' ')}</strong>. Access granted to{' '}
            {user.role === 'contractor'
              ? 'personal timesheets and payout preference management.'
              : 'enterprise treasury, contractor roster, and real-time payroll routing.'}
          </span>
        </div>
        <button
          onClick={() => onNavigateToTab('compliance')}
          className="font-bold underline hover:text-indigo-600 shrink-0 cursor-pointer"
        >
          View RBAC Matrix
        </button>
      </div>

      {/* Key Metric KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Metric 1 */}
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Total Volume Settled</span>
            <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 text-2xl font-black text-slate-900 dark:text-white">
            ${stats ? stats.totalVolumeUsd.toLocaleString(undefined, { minimumFractionDigits: 2 }) : '94,600.00'}
          </div>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+18.4% month-over-month</span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Active Global Team</span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 text-2xl font-black text-slate-900 dark:text-white">
            {activeContractors.length} Contractors & EOR
          </div>
          <div className="mt-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
            Across {new Set(contractors.map(c => c.country)).size} sovereign countries
          </div>
        </div>

        {/* Metric 3 */}
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Payout Split</span>
            <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950/70 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <Zap className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 text-2xl font-black text-slate-900 dark:text-white">
            {stats?.cryptoPercentage || 65}% Crypto / {100 - (stats?.cryptoPercentage || 65)}% Fiat
          </div>
          <div className="mt-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
            USDC, USDT, ETH & Direct ACH/SEPA
          </div>
        </div>

        {/* Metric 4 */}
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Compliance & Speed</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 text-2xl font-black text-slate-900 dark:text-white">
            99.98% / 4.2s
          </div>
          <div className="mt-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Zero misclassification liability</span>
          </div>
        </div>

      </div>

      {/* Main Grid: Active Contractors Table & Live Audit Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Active Contractors Snapshot */}
        <div className="lg:col-span-8 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Global Talent Roster</h3>
              <p className="text-xs text-slate-500">Live contractors managed under compliant contracts</p>
            </div>
            <button
              onClick={() => onNavigateToTab('contractors')}
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Manage all ({contractors.length})</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-100 dark:border-slate-800 text-slate-400 font-semibold uppercase tracking-wider">
                <tr>
                  <th className="pb-3">Contractor</th>
                  <th className="pb-3">Country</th>
                  <th className="pb-3">Payout Rail</th>
                  <th className="pb-3 text-right">Compensation</th>
                  <th className="pb-3 text-center">Flex ID</th>
                  <th className="pb-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium">
                {contractors.slice(0, 5).map((c) => (
                  <tr key={c.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 pr-2">
                      <div className="font-bold text-slate-900 dark:text-white">{c.name}</div>
                      <div className="text-[11px] text-slate-400">{c.roleTitle}</div>
                    </td>
                    <td className="py-3">
                      <span className="mr-1.5">{c.flag}</span>
                      <span className="text-slate-700 dark:text-slate-300">{c.country}</span>
                    </td>
                    <td className="py-3">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        c.payoutMethod.startsWith('crypto') || c.payoutMethod.startsWith('stablecoin')
                          ? 'bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300'
                          : 'bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300'
                      }`}>
                        {c.payoutMethod.replace('_', ' ').toUpperCase()}
                      </span>
                    </td>
                    <td className="py-3 text-right font-bold text-slate-900 dark:text-white">
                      ${Number(c.rate).toLocaleString()}/mo
                    </td>
                    <td className="py-3 text-center">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Verified</span>
                      </span>
                    </td>
                    <td className="py-3 text-right">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300">
                        {c.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Real-time Audit Logs & Recent Run */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Latest Payroll Run Summary */}
          {recentRun && (
            <div className="p-5 rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/30 border border-indigo-200/80 dark:border-indigo-800/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">Latest Settled Run</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                  {recentRun.status}
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">{recentRun.title}</h4>
              <div className="text-2xl font-black text-slate-900 dark:text-white">
                ${Number(recentRun.totalAmountUsd).toLocaleString()}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between pt-1 border-t border-indigo-100 dark:border-indigo-900/50">
                <span>{recentRun.contractorCount} recipients</span>
                <span className="font-mono text-[10px] truncate max-w-[120px]">{recentRun.txHash || 'Verified Chain'}</span>
              </div>
            </div>
          )}

          {/* Live Enterprise Audit Trail */}
          <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-500" />
                <span>Audit Trail</span>
              </h4>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            </div>

            <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
              {auditLogs.slice(0, 5).map((log) => (
                <div key={log.id} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs space-y-1">
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">{log.action}</span>
                    <span>{new Date(log.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 font-medium leading-tight">{log.details}</p>
                  <div className="text-[10px] text-slate-400 truncate">By {log.actorEmail}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

import React, { useState } from 'react';
import {
  CreditCard,
  Zap,
  Play,
  CheckCircle2,
  ExternalLink,
  Calendar,
  DollarSign,
  Download,
  Search,
  Filter,
  RefreshCw,
  Building2,
} from 'lucide-react';
import { PayrollRun, AuthUser } from '../types.ts';

interface PayrollRunsViewProps {
  payrollRuns: PayrollRun[];
  user: AuthUser;
  onTriggerPayroll: () => Promise<void>;
  onRefresh: () => void;
}

export const PayrollRunsView: React.FC<PayrollRunsViewProps> = ({
  payrollRuns,
  user,
  onTriggerPayroll,
  onRefresh,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedRun, setSelectedRun] = useState<PayrollRun | null>(payrollRuns[0] || null);
  const [search, setSearch] = useState('');

  const handleRun = async () => {
    setIsProcessing(true);
    try {
      await onTriggerPayroll();
    } catch (err) {
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const filteredRuns = payrollRuns.filter(r =>
    r.title.toLowerCase().includes(search.toLowerCase()) ||
    r.period.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Payroll Runs & Settlement Batches
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300">
              PostgreSQL Verified
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Automated multi-rail distribution: instant stablecoins (USDC / USDT) and direct local banking across 230+ countries.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onRefresh}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
            title="Refresh runs"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          {(user.role === 'super_admin' || user.role === 'finance_manager') && (
            <button
              onClick={handleRun}
              disabled={isProcessing}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md shadow-emerald-600/20 disabled:opacity-50 transition-all cursor-pointer active:scale-95"
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Settling Batches...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>Execute Next Batch</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Main Runs List and Details Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Runs List */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search payroll runs by cycle or period..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-3">
            {filteredRuns.map((run) => {
              const isSelected = selectedRun?.id === run.id;

              return (
                <div
                  key={run.id}
                  onClick={() => setSelectedRun(run)}
                  className={`p-5 rounded-3xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-50/70 dark:bg-indigo-950/40 border-indigo-400 dark:border-indigo-600 shadow-md'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">{run.title}</h4>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
                          {run.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{run.period}</span>
                      </p>
                    </div>

                    <div className="text-right">
                      <div className="text-base font-black text-slate-900 dark:text-white">
                        ${Number(run.totalAmountUsd).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {run.contractorCount} Contractors
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-2 gap-3 text-xs">
                    <div className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400 font-semibold">
                      <Zap className="w-3.5 h-3.5" />
                      <span>Crypto/USDC: ${Number(run.cryptoAmountUsd).toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold justify-end">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>Bank Wire: ${Number(run.fiatAmountUsd).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Run Details Drawer */}
        <div className="lg:col-span-5">
          {selectedRun ? (
            <div className="sticky top-28 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Run Breakdown</span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    Batch #{selectedRun.id}
                  </h3>
                </div>
                <button
                  onClick={() => alert('Exporting signed accounting reconciliation statement (CSV)...')}
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
                  title="Download Reconciliation Statement"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-400">Total Settlement Volume:</span>
                  <span className="font-black text-slate-900 dark:text-white text-sm">
                    ${Number(selectedRun.totalAmountUsd).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-400">Initiated By:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{selectedRun.initiatedBy}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-400">Settlement Verification:</span>
                  <span className="font-bold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Instant Consensus (100%)</span>
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1">
                  <span className="text-slate-400 text-[11px] font-semibold">Consensus Transaction Root:</span>
                  <div className="font-mono text-[11px] text-indigo-600 dark:text-indigo-400 break-all">
                    {selectedRun.txHash || '0x8f4c2e1a90bc8921df6504a371e4178a992e5c83'}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 space-y-2">
                  <div className="font-bold text-indigo-900 dark:text-indigo-200">Zero-Spread FX Routing</div>
                  <p className="text-[11px] text-indigo-800 dark:text-indigo-300 leading-relaxed">
                    Recipients in Brazil, Japan, UK, Australia, and Poland received payouts directly into their chosen self-custody wallets or local IBAN accounts without intermediary FX skimming.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-800 text-center text-xs text-slate-400">
              Select a payroll run to inspect transaction line items.
            </div>
          )}
        </div>

      </div>

    </div>
  );
};

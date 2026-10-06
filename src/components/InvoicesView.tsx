import React, { useState } from 'react';
import {
  FileText,
  CheckCircle2,
  XCircle,
  Clock,
  DollarSign,
  Download,
  Search,
  Filter,
  RefreshCw,
  Zap,
} from 'lucide-react';
import { Invoice, AuthUser } from '../types.ts';

interface InvoicesViewProps {
  invoices: Invoice[];
  user: AuthUser;
  onUpdateInvoiceStatus: (id: number, status: 'pending_approval' | 'approved' | 'paid' | 'rejected') => Promise<void>;
  onRefresh: () => void;
}

export const InvoicesView: React.FC<InvoicesViewProps> = ({
  invoices,
  user,
  onUpdateInvoiceStatus,
  onRefresh,
}) => {
  const [filter, setFilter] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [processingId, setProcessingId] = useState<number | null>(null);

  const handleAction = async (id: number, status: 'approved' | 'paid' | 'rejected') => {
    setProcessingId(id);
    try {
      await onUpdateInvoiceStatus(id, status);
    } catch (err) {
      console.error(err);
    } finally {
      setProcessingId(null);
    }
  };

  const filtered = invoices.filter((inv) => {
    const matchesFilter = filter === 'all' || inv.status === filter;
    const matchesSearch =
      inv.contractorName.toLowerCase().includes(search.toLowerCase()) ||
      inv.invoiceNumber.toLowerCase().includes(search.toLowerCase()) ||
      inv.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Invoices & Milestone Payouts
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300">
              Auto-Audit Ready
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Review submitted contractor milestone deliverables, timesheets, and execute instant smart approvals.
          </p>
        </div>

        <button
          onClick={onRefresh}
          className="self-start sm:self-auto p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
          title="Refresh invoices"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search invoice number, contractor, milestone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {(['all', 'pending_approval', 'approved', 'paid'] as const).map((st) => (
            <button
              key={st}
              onClick={() => setFilter(st)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition-colors cursor-pointer shrink-0 ${
                filter === st
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              {st.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Invoices Table */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-100 dark:border-slate-800 text-slate-400 font-semibold uppercase tracking-wider">
              <tr>
                <th className="pb-3">Invoice #</th>
                <th className="pb-3">Contractor</th>
                <th className="pb-3">Description / Milestone</th>
                <th className="pb-3">Due Date</th>
                <th className="pb-3 text-right">Amount</th>
                <th className="pb-3 text-center">Status</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium">
              {filtered.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="py-3.5 font-mono font-bold text-slate-900 dark:text-white">
                    {inv.invoiceNumber}
                  </td>
                  <td className="py-3.5 font-bold text-slate-800 dark:text-slate-200">
                    {inv.contractorName}
                  </td>
                  <td className="py-3.5 text-slate-600 dark:text-slate-400 max-w-xs truncate">
                    {inv.description}
                  </td>
                  <td className="py-3.5 text-slate-500 font-mono">
                    {inv.dueDate}
                  </td>
                  <td className="py-3.5 text-right font-black text-slate-900 dark:text-white">
                    ${Number(inv.amount).toLocaleString(undefined, { minimumFractionDigits: 2 })} {inv.currency}
                  </td>
                  <td className="py-3.5 text-center">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      inv.status === 'paid'
                        ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300'
                        : inv.status === 'approved'
                        ? 'bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300'
                        : 'bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300'
                    }`}>
                      {inv.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="py-3.5 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      {inv.status === 'pending_approval' && (
                        <button
                          onClick={() => handleAction(inv.id, 'approved')}
                          disabled={processingId === inv.id}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-blue-600 text-white hover:bg-blue-500 cursor-pointer disabled:opacity-50"
                        >
                          Approve
                        </button>
                      )}

                      {inv.status === 'approved' && (
                        <button
                          onClick={() => handleAction(inv.id, 'paid')}
                          disabled={processingId === inv.id}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-emerald-600 text-white hover:bg-emerald-500 cursor-pointer disabled:opacity-50 flex items-center gap-1"
                        >
                          <Zap className="w-3 h-3" />
                          <span>Pay USDC</span>
                        </button>
                      )}

                      {inv.status === 'paid' && (
                        <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Disbursed</span>
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

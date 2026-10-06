import React from 'react';
import {
  Globe2,
  LayoutDashboard,
  Users,
  CreditCard,
  FileText,
  Zap,
  ShieldCheck,
} from 'lucide-react';

export interface TabItem {
  id: string;
  label: string;
  shortLabel: string;
  badge?: number | string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

export const TABS: TabItem[] = [
  {
    id: 'platform',
    label: 'Global Platform',
    shortLabel: 'Platform',
    icon: Globe2,
    description: 'Interactive Globe, Hero & Network',
  },
  {
    id: 'dashboard',
    label: 'Admin Dashboard',
    shortLabel: 'Dashboard',
    icon: LayoutDashboard,
    description: 'Executive Oversight & Live Stats',
  },
  {
    id: 'contractors',
    label: 'Contractors & EOR',
    shortLabel: 'Contractors',
    icon: Users,
    description: '230+ Countries Talent Roster',
  },
  {
    id: 'payroll',
    label: 'Payroll Runs',
    shortLabel: 'Payroll',
    icon: CreditCard,
    description: 'Stablecoin & Fiat Payout Engine',
  },
  {
    id: 'invoices',
    label: 'Invoices Queue',
    shortLabel: 'Invoices',
    icon: FileText,
    description: 'Submissions & Fast Approvals',
  },
  {
    id: 'integrations',
    label: 'Integrations Hub',
    shortLabel: 'Integrations',
    icon: Zap,
    description: 'Accounting & Web3 Wallets',
  },
  {
    id: 'compliance',
    label: 'Compliance & RBAC',
    shortLabel: 'Compliance',
    icon: ShieldCheck,
    description: 'Audit Logs & Labor Shield',
  },
];

interface TabBarProps {
  activeTab: string;
  onTabChange: (id: string) => void;
  pendingInvoicesCount?: number;
  activeContractorsCount?: number;
}

export const TabBar: React.FC<TabBarProps> = ({
  activeTab,
  onTabChange,
  pendingInvoicesCount = 0,
  activeContractorsCount = 0,
}) => {
  return (
    <>
      {/* ================= DESKTOP & TABLET TAB BAR ================= */}
      <div className="hidden md:block w-full border-b border-[#E3E5EB] dark:border-slate-800 bg-[#FAFAFB]/80 dark:bg-[#0B0C0E]/60 backdrop-blur-sm sticky top-18 sm:top-20 z-30 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between overflow-x-auto py-2.5 no-scrollbar gap-2">
            <div className="flex items-center gap-1.5 min-w-max">
              {TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                const badge =
                  tab.id === 'invoices' && pendingInvoicesCount > 0
                    ? pendingInvoicesCount
                    : tab.id === 'contractors' && activeContractorsCount > 0
                    ? activeContractorsCount
                    : null;

                return (
                  <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`group relative flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold tracking-tight transition-all duration-200 cursor-pointer select-none ${
                      isActive
                        ? 'bg-[#0D0E11] text-white dark:bg-white dark:text-[#0D0E11] shadow-sm'
                        : 'text-[#4A4D57] dark:text-slate-400 hover:text-[#0D0E11] dark:hover:text-white hover:bg-white dark:hover:bg-slate-800/70 hover:shadow-xs'
                    }`}
                    title={tab.description}
                  >
                    {/* Icon with hover bounce */}
                    <Icon
                      className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110 ${
                        isActive
                          ? 'text-white dark:text-[#0D0E11]'
                          : 'text-[#4A4D57] dark:text-slate-400 group-hover:text-[#5C55FE]'
                      }`}
                    />

                    {/* Clear Text Label */}
                    <span>{tab.label}</span>

                    {/* Dynamic Badge Counter */}
                    {badge !== null && (
                      <span
                        className={`ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-black ${
                          isActive
                            ? 'bg-white/20 dark:bg-black/20 text-white dark:text-[#0D0E11]'
                            : 'bg-[#D8DBFD] text-[#0D0E11]'
                        }`}
                      >
                        {badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Helper Tag on the right */}
            <div className="hidden xl:flex items-center gap-2 text-[11px] font-bold text-[#4A4D57] dark:text-slate-400 pl-4 border-l border-[#E3E5EB] dark:border-slate-800">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>150+ In-Country Entities Live</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE BOTTOM TAB BAR ================= */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 px-2 py-1.5 shadow-2xl safe-area-pb">
        <div className="grid grid-cols-5 gap-1 items-center">
          {TABS.slice(0, 5).map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            const badge =
              tab.id === 'invoices' && pendingInvoicesCount > 0
                ? pendingInvoicesCount
                : null;

            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-200 cursor-pointer active:scale-95 ${
                  isActive
                    ? 'text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50/60 dark:bg-indigo-950/40'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                <div className="relative">
                  <Icon className={`w-5 h-5 transition-transform duration-150 ${isActive ? 'scale-110' : ''}`} />
                  {badge && (
                    <span className="absolute -top-1 -right-2 px-1 py-0.1 bg-rose-500 text-white text-[9px] font-black rounded-full min-w-3 text-center">
                      {badge}
                    </span>
                  )}
                </div>
                <span className="text-[10px] tracking-tight mt-0.5 truncate max-w-full">
                  {tab.shortLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

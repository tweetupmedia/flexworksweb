import React, { useState } from 'react';
import { X, Check, ArrowRight, Sparkles, DollarSign } from 'lucide-react';

interface PricingCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookDemo: () => void;
}

export const PricingCalculatorModal: React.FC<PricingCalculatorModalProps> = ({
  isOpen,
  onClose,
  onBookDemo,
}) => {
  const [contractorsCount, setContractorsCount] = useState<number>(12);
  const [eorCount, setEorCount] = useState<number>(2);

  if (!isOpen) return null;

  const contractorCost = contractorsCount * 29;
  const eorCost = eorCount * 499;
  const monthlyTotal = contractorCost + eorCost;

  // Comparison savings: Deel/Remote average $599/mo EOR + $49/mo contractor + 2% FX
  const competitorCost = contractorsCount * 49 + eorCount * 599 + (contractorsCount * 5000 * 0.02);
  const monthlySavings = Math.max(0, competitorCost - monthlyTotal);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-2xl bg-surface-card dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-surface-border dark:border-slate-800 space-y-6 max-h-[90vh] overflow-y-auto">
        
        <div className="flex items-center justify-between pb-3 border-b border-surface-border dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold text-text-main bg-brand-tint dark:bg-slate-800 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
              <span>Transparent & Fair TCOE Pricing</span>
            </div>
            <h3 className="text-xl font-bold text-text-main dark:text-white mt-1.5 font-editorial">
              Flex TCOE & Global Pricing Calculator
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-text-muted hover:text-text-main dark:hover:text-slate-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sliders */}
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-surface-bg dark:bg-slate-800/60 border border-surface-border dark:border-slate-700/80 space-y-2">
            <div className="flex justify-between items-center text-xs sm:text-sm font-bold">
              <span className="text-text-main dark:text-slate-300">Global Independent Contractors ($29/mo)</span>
              <span className="text-brand-primary font-extrabold text-sm">{contractorsCount} contractors</span>
            </div>
            <input
              type="range"
              min={1}
              max={150}
              value={contractorsCount}
              onChange={(e) => setContractorsCount(Number(e.target.value))}
              className="w-full accent-brand-primary cursor-pointer"
            />
          </div>

          <div className="p-4 rounded-2xl bg-surface-bg dark:bg-slate-800/60 border border-surface-border dark:border-slate-700/80 space-y-2">
            <div className="flex justify-between items-center text-xs sm:text-sm font-bold">
              <span className="text-text-main dark:text-slate-300">Full-Time EOR Employees ($449/mo)</span>
              <span className="text-brand-primary font-extrabold text-sm">{eorCount} employees</span>
            </div>
            <input
              type="range"
              min={0}
              max={30}
              value={eorCount}
              onChange={(e) => setEorCount(Number(e.target.value))}
              className="w-full accent-brand-primary cursor-pointer"
            />
          </div>
        </div>

        {/* Summary Card */}
        <div className="p-6 rounded-3xl bg-brand-tint dark:bg-[#1A1D33] text-text-main dark:text-slate-100 border border-surface-border dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-text-muted dark:text-slate-400">
              Estimated Monthly Platform Investment
            </span>
            <div className="text-3xl font-black text-text-main dark:text-white mt-1">
              ${monthlyTotal.toLocaleString()}<span className="text-sm font-normal text-text-muted dark:text-slate-400"> / month</span>
            </div>
            <div className="text-xs text-emerald-800 dark:text-emerald-400 font-bold mt-1">
              Save ~${Math.round(monthlySavings).toLocaleString()} / mo vs traditional EORs
            </div>
          </div>

          <div className="space-y-1.5 text-xs text-text-muted dark:text-slate-300 font-semibold">
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>150+ Direct In-Country Entities</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Multi-Currency & Stablecoin Payouts</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Automated W-8BEN & GDPR Compliance</span>
            </div>
          </div>
        </div>

        {/* Modal CTA */}
        <div className="pt-2 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs font-bold text-text-muted hover:text-text-main dark:hover:text-white cursor-pointer"
          >
            Close Calculator
          </button>

          <button
            onClick={() => {
              onClose();
              onBookDemo();
            }}
            className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-brand-primary hover:bg-brand-hover shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center gap-2 active:scale-95"
          >
            <span>Schedule Strategy Call ↗</span>
          </button>
        </div>

      </div>
    </div>
  );
};

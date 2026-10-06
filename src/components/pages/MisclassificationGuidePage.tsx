import React, { useState } from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  DollarSign,
  Calculator,
  Lock,
  FileText,
  Sparkles,
  Scale,
  Users,
  CheckCircle2,
} from 'lucide-react';

interface MisclassificationGuidePageProps {
  onOpenBookDemo: () => void;
  onOpenPricing: () => void;
  onNavigateToTab: (tabId: string) => void;
}

export const MisclassificationGuidePage: React.FC<MisclassificationGuidePageProps> = ({
  onOpenBookDemo,
  onOpenPricing,
  onNavigateToTab,
}) => {
  // Penalty calculator state
  const [headcount, setHeadcount] = useState<number>(5);
  const [monthlyComp, setMonthlyComp] = useState<number>(5000);
  const [tenureMonths, setTenureMonths] = useState<number>(12);

  // Financial calculations
  const totalPaid = headcount * monthlyComp * tenureMonths;
  const backTaxes = totalPaid * 0.18; // ~18% payroll & social contribution
  const statutoryBenefits = totalPaid * 0.12; // ~12% health, leave, severance
  const finesAndInterest = (backTaxes + statutoryBenefits) * 0.35; // ~35% penalties & legal fees
  const totalLiability = backTaxes + statutoryBenefits + finesAndInterest;

  return (
    <div className="font-sans-ui bg-[#FAFAFC] dark:bg-[#0B0C0E] text-[#0C0D11] dark:text-slate-100 transition-colors">
      
      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-12 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-7 relative rounded-[32px] bg-[#CCD1F8] dark:bg-[#181B2B] text-[#0C0D11] dark:text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between border border-[#BFC6F5] dark:border-slate-800 shadow-xs overflow-hidden">
            
            <div className="absolute top-6 right-6 w-11 h-11 rounded-full bg-[#CCE829] shadow-md flex items-center justify-center text-[#0C0D11] rotate-12 transition-transform hover:rotate-45 cursor-pointer">
              <ShieldCheck className="w-5 h-5 fill-current" />
            </div>

            <div className="self-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/80 text-[11px] font-bold text-[#0C0D11] dark:text-white shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#5450EB] animate-pulse" />
                <span>LEGAL DEFENSE GUIDE • ZERO LIABILITY INSULATION</span>
              </div>
            </div>

            <div className="my-8 space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-normal leading-[1.08] tracking-tight font-editorial">
                Insulate Your Enterprise Against <span className="text-[#5450EB] dark:text-indigo-400">Misclassification Fines</span>
              </h1>
              <p className="text-base sm:text-lg text-[#323642] dark:text-slate-300 max-w-xl font-normal leading-relaxed">
                A single reclassified international contractor can cost upward of $75,000 in retroactive taxes, penalties, and back wages. Flex acts as your legal firewall through Agent of Record (AOR) and Employer of Record (EOR) infrastructure.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenBookDemo}
                className="px-8 py-4 rounded-full text-xs sm:text-sm font-bold text-white bg-[#0C0D11] hover:bg-black dark:bg-white dark:text-[#0C0D11] shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2 active:scale-95"
              >
                <span>Get 100% Legal Indemnification</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigateToTab('aor')}
                className="px-7 py-4 rounded-full text-xs sm:text-sm font-bold text-[#0C0D11] dark:text-white bg-white dark:bg-slate-900 border border-[#DFE2EA] dark:border-slate-800 hover:bg-[#F3F4F8] transition-colors cursor-pointer"
              >
                Explore Flex AOR
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Penalty Exposure Calculator */}
          <div className="lg:col-span-5 bg-white dark:bg-[#121316] rounded-[32px] p-6 sm:p-8 border border-[#DFE2EA] dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E3E5EB] dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  Potential Liability Estimator
                </span>
                <span className="text-[11px] font-bold text-[#4A4D57]">Audited Model</span>
              </div>

              <div className="mt-5 space-y-4">
                {/* Headcount Slider */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-[#0D0E11] dark:text-white mb-1">
                    <span>Number of Contractors</span>
                    <span className="text-[#5450EB]">{headcount} contractors</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={headcount}
                    onChange={(e) => setHeadcount(Number(e.target.value))}
                    className="w-full accent-[#5450EB]"
                  />
                </div>

                {/* Monthly Comp Slider */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-[#0D0E11] dark:text-white mb-1">
                    <span>Avg Monthly Compensation</span>
                    <span className="text-[#5450EB]">${monthlyComp.toLocaleString()} USD</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="15000"
                    step="500"
                    value={monthlyComp}
                    onChange={(e) => setMonthlyComp(Number(e.target.value))}
                    className="w-full accent-[#5450EB]"
                  />
                </div>

                {/* Tenure Slider */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-[#0D0E11] dark:text-white mb-1">
                    <span>Average Working Tenure</span>
                    <span className="text-[#5450EB]">{tenureMonths} months</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="36"
                    value={tenureMonths}
                    onChange={(e) => setTenureMonths(Number(e.target.value))}
                    className="w-full accent-[#5450EB]"
                  />
                </div>

                {/* Estimated Fine Display */}
                <div className="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 space-y-2.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#4D515D] dark:text-slate-400">Back Taxes & FICA/Social:</span>
                    <span className="font-bold text-[#0C0D11] dark:text-white">${backTaxes.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#4D515D] dark:text-slate-400">Statutory Benefits & Severance:</span>
                    <span className="font-bold text-[#0C0D11] dark:text-white">${statutoryBenefits.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#4D515D] dark:text-slate-400">Statutory Fines & Legal Defense:</span>
                    <span className="font-bold text-[#0C0D11] dark:text-white">${finesAndInterest.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="pt-2 border-t border-rose-200 dark:border-rose-900/60 flex justify-between items-center">
                    <span className="text-xs font-bold text-rose-950 dark:text-rose-200">Total Company Exposure:</span>
                    <span className="text-base font-black text-rose-600 dark:text-rose-400 font-editorial">
                      ${totalLiability.toLocaleString('en-US', { maximumFractionDigits: 0 })} USD
                    </span>
                  </div>
                </div>

                {/* Flex Guarantee */}
                <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs text-emerald-800 dark:text-emerald-300 font-semibold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>With Flex AOR / EOR: Your liability is $0.00 (100% Indemnified)</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBookDemo}
              className="mt-6 w-full py-3.5 rounded-full text-xs font-bold text-white bg-[#0C0D11] hover:bg-black dark:bg-white dark:text-[#0C0D11] transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Eliminate Your Liability Today</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= 3 PILLARS OF PROTECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#CCD1F8] dark:bg-indigo-950 text-[#0C0D11] dark:text-indigo-300">
            THE FLEX SHIELD ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#0C0D11] dark:text-white font-editorial">
            How Flex Eliminates 100% of Worker Risk
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Master Service Agreement Firewall',
              desc: 'Your business contracts directly with Flex’s licensed entity, never the individual worker. Flex assumes the legal responsibility as the counterparty of record.',
              icon: Scale,
            },
            {
              title: 'Continuous Behavioral Audits',
              desc: 'Our platform actively scans engagement habits—email domains, meeting attendance, equipment usage—to prevent accidental behavioral subordination.',
              icon: ShieldCheck,
            },
            {
              title: 'Guaranteed Financial Indemnification',
              desc: 'In the rare event of a regulatory inquiry or labor audit, Flex covers defense legal counsel and any assessed retroactive employer taxes in full.',
              icon: Lock,
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white dark:bg-[#121316] rounded-3xl p-8 border border-[#DFE2EA] dark:border-slate-800 shadow-xs space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#CCD1F8] text-[#0C0D11] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0C0D11] dark:text-white">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#4D515D] dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

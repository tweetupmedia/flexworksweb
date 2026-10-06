import React, { useState } from 'react';
import { SlidingWord } from '../SlidingWord.tsx';
import {
  Check,
  ArrowRight,
  ArrowUpRight,
  Calculator,
  Sparkles,
  HelpCircle,
  Building,
  Users,
  Shield,
  Coins,
  CreditCard,
  Layers,
  ChevronDown,
} from 'lucide-react';

interface PricingPageProps {
  onOpenBookDemo: () => void;
  onNavigateToTab: (tabId: string) => void;
}

const TCOE_COUNTRIES = [
  { name: 'Germany', code: 'DE', overheadPct: 0.198, entitySetupCost: 85000, desc: 'Health, pension, unemployment, nursing care' },
  { name: 'United Kingdom', code: 'GB', overheadPct: 0.138, entitySetupCost: 65000, desc: 'Employer National Insurance (NICs)' },
  { name: 'Japan', code: 'JP', overheadPct: 0.152, entitySetupCost: 92000, desc: 'Health, welfare pension, labor insurance' },
  { name: 'Brazil', code: 'BR', overheadPct: 0.355, entitySetupCost: 78000, desc: 'CLT, INSS, FGTS, 13th month salary' },
  { name: 'Singapore', code: 'SG', overheadPct: 0.075, entitySetupCost: 55000, desc: 'Central Provident Fund (CPF)' },
  { name: 'Canada', code: 'CA', overheadPct: 0.115, entitySetupCost: 60000, desc: 'CPP, EI, provincial health tax' },
];

export const PricingPage: React.FC<PricingPageProps> = ({
  onOpenBookDemo,
  onNavigateToTab,
}) => {
  // Calculator state
  const [hiringModel, setHiringModel] = useState<'eor' | 'contractor' | 'aor'>('eor');
  const [selectedCountry, setSelectedCountry] = useState(TCOE_COUNTRIES[0]);
  const [headcount, setHeadcount] = useState<number>(3);
  const [avgSalary, setAvgSalary] = useState<number>(6500);

  // Computations
  const platformFeePerUser = hiringModel === 'eor' ? 499 : hiringModel === 'aor' ? 49 : 29;
  const totalBaseMonthly = headcount * avgSalary;
  const statutoryOverheadMonthly = hiringModel === 'eor' ? totalBaseMonthly * selectedCountry.overheadPct : 0;
  const platformTotalMonthly = headcount * platformFeePerUser;
  const totalMonthlyTCOE = totalBaseMonthly + statutoryOverheadMonthly + platformTotalMonthly;
  const annualEntitySavings = selectedCountry.entitySetupCost + 36000 - platformTotalMonthly * 12;

  // FAQ open toggle
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="font-sans-ui bg-[#FAFAFC] dark:bg-[#0B0C0E] text-[#0C0D11] dark:text-slate-100 transition-colors">
      
      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-12 lg:pb-20">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CCD1F8] dark:bg-indigo-950/80 text-[11px] font-black uppercase tracking-wider text-[#0C0D11] dark:text-indigo-300">
            <span className="w-2 h-2 rounded-full bg-[#CCE829]" />
            <span>TRANSPARENT GLOBAL PRICING</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-[#0C0D11] dark:text-white font-editorial">
            Simplify Global{' '}
            <SlidingWord
              words={['Pricing', 'TCOE Calculator', 'Cost Savings', 'Billing']}
              highlightClassName="text-[#5450EB] dark:text-indigo-400 font-semibold"
            />
          </h1>

          <p className="text-base sm:text-lg text-[#4D515D] dark:text-slate-300 font-normal leading-relaxed">
            No foreign entity establishment, no surprise currency conversion markups, and no lock-in contracts. Upgrade or scale your global workforce seamlessly.
          </p>
        </div>

        {/* 4 Tiered Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          
          {/* Card 1: Contractor Pay */}
          <div className="bg-white dark:bg-[#121316] rounded-3xl p-6 sm:p-8 border border-[#DFE2EA] dark:border-slate-800 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="text-xs font-black uppercase tracking-wider text-[#4A4D57]">Contractor Pay</div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-normal text-[#0C0D11] dark:text-white font-editorial">$29</span>
                <span className="text-xs text-[#4D515D] font-medium">/ contractor / mo</span>
              </div>
              <p className="text-xs text-[#4D515D] dark:text-slate-400 leading-relaxed">
                Automated multi-currency fiat & crypto disbursements in 190+ countries with invoice generation.
              </p>

              <div className="pt-4 border-t border-[#DFE2EA] dark:border-slate-800 space-y-2.5 text-xs text-[#0C0D11] dark:text-slate-200">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#5450EB]" /> <span>90+ Local Fiat & Stablecoin rails</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#5450EB]" /> <span>W-8BEN / W-9 digital collection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#5450EB]" /> <span>ERP sync (QuickBooks, Xero)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#5450EB]" /> <span>Zero FX markup guarantee</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigateToTab('platform')}
              className="mt-8 w-full py-3 rounded-full text-xs font-bold text-[#0C0D11] dark:text-white bg-[#F8F9FA] dark:bg-slate-800 hover:bg-[#EAEBFA] transition-colors cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Card 2: Agent of Record (AOR) */}
          <div className="bg-white dark:bg-[#121316] rounded-3xl p-6 sm:p-8 border border-[#DFE2EA] dark:border-slate-800 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="text-xs font-black uppercase tracking-wider text-[#5450EB]">Agent of Record (AOR)</div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-normal text-[#0C0D11] dark:text-white font-editorial">$49</span>
                <span className="text-xs text-[#4D515D] font-medium">/ contractor / mo</span>
              </div>
              <p className="text-xs text-[#4D515D] dark:text-slate-400 leading-relaxed">
                Everything in Contractor Pay plus 100% legal misclassification protection and master agreement signing.
              </p>

              <div className="pt-4 border-t border-[#DFE2EA] dark:border-slate-800 space-y-2.5 text-xs text-[#0C0D11] dark:text-slate-200">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#5450EB]" /> <span>100% Legal Indemnification</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#5450EB]" /> <span>Flex signs as legal principal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#5450EB]" /> <span>Milestone escrow protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#5450EB]" /> <span>Contractor dispute resolution</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigateToTab('aor')}
              className="mt-8 w-full py-3 rounded-full text-xs font-bold text-[#0C0D11] dark:text-white bg-[#F8F9FA] dark:bg-slate-800 hover:bg-[#EAEBFA] transition-colors cursor-pointer"
            >
              Explore AOR
            </button>
          </div>

          {/* Card 3: Employer of Record (EOR) - FEATURED */}
          <div className="relative rounded-3xl p-6 sm:p-8 bg-[#CCD1F8] dark:bg-[#181B2B] text-[#0C0D11] dark:text-white border-2 border-[#5450EB] shadow-lg flex flex-col justify-between">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#0C0D11] text-[#CCE829] text-[10px] font-black uppercase tracking-wider">
              Most Popular
            </div>

            <div className="space-y-4">
              <div className="text-xs font-black uppercase tracking-wider text-[#0C0D11] dark:text-slate-300">Employer of Record</div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-normal text-[#0C0D11] dark:text-white font-editorial">$499</span>
                <span className="text-xs text-[#323642] dark:text-slate-400 font-medium">/ employee / mo</span>
              </div>
              <p className="text-xs text-[#323642] dark:text-slate-300 leading-relaxed">
                Hire full-time international staff in 150+ countries without foreign entities. Turnkey benefits & taxes.
              </p>

              <div className="pt-4 border-t border-[#BFC6F5] dark:border-slate-700 space-y-2.5 text-xs text-[#0C0D11] dark:text-slate-200">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#0C0D11] dark:text-white" /> <span>Direct in-country entities in 150+ jurisdictions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#0C0D11] dark:text-white" /> <span>Statutory healthcare, pension & PTO</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#0C0D11] dark:text-white" /> <span>Automated local tax filings</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#0C0D11] dark:text-white" /> <span>Rapid 48-hour onboarding</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigateToTab('eor')}
              className="mt-8 w-full py-3.5 rounded-full text-xs font-bold text-white bg-[#0C0D11] hover:bg-black dark:bg-white dark:text-[#0C0D11] transition-all cursor-pointer shadow-md"
            >
              Hire Full-Time via EOR
            </button>
          </div>

          {/* Card 4: Enterprise Custom */}
          <div className="bg-white dark:bg-[#121316] rounded-3xl p-6 sm:p-8 border border-[#DFE2EA] dark:border-slate-800 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="text-xs font-black uppercase tracking-wider text-[#4A4D57]">Enterprise</div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-normal text-[#0C0D11] dark:text-white font-editorial">Custom</span>
              </div>
              <p className="text-xs text-[#4D515D] dark:text-slate-400 leading-relaxed">
                For scale-ups and multinationals with 50+ international workers. Volume tiers & custom SLAs.
              </p>

              <div className="pt-4 border-t border-[#DFE2EA] dark:border-slate-800 space-y-2.5 text-xs text-[#0C0D11] dark:text-slate-200">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#5450EB]" /> <span>Dedicated Compliance Director</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#5450EB]" /> <span>Custom ERP integrations (NetSuite, Workday)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#5450EB]" /> <span>Multi-sig treasury workflows</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#5450EB]" /> <span>Custom legal master agreements</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBookDemo}
              className="mt-8 w-full py-3 rounded-full text-xs font-bold text-[#0C0D11] dark:text-white bg-[#F8F9FA] dark:bg-slate-800 hover:bg-[#EAEBFA] transition-colors cursor-pointer"
            >
              Contact Sales
            </button>
          </div>

        </div>
      </section>

      {/* ================= INTERACTIVE TCOE CALCULATOR ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#DFE2EA] dark:border-slate-800">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#CCD1F8] dark:bg-indigo-950 text-[#0C0D11] dark:text-indigo-300">
            TOTAL COST OF EMPLOYMENT (TCOE)
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#0C0D11] dark:text-white font-editorial">
            Calculate Your In-Country Overhead & Entity Savings
          </h2>
        </div>

        <div className="max-w-5xl mx-auto bg-white dark:bg-[#121316] rounded-[32px] p-8 sm:p-12 border border-[#DFE2EA] dark:border-slate-800 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Model selector */}
            <div>
              <label className="text-xs font-bold text-[#0D0E11] dark:text-white block mb-2">Hiring Model</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'eor' as const, label: 'Full-Time (EOR)' },
                  { id: 'aor' as const, label: 'Indemnified (AOR)' },
                  { id: 'contractor' as const, label: 'Contractor Pay' },
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setHiringModel(m.id)}
                    className={`py-2 px-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                      hiringModel === m.id
                        ? 'bg-[#0C0D11] text-white dark:bg-white dark:text-[#0C0D11]'
                        : 'bg-[#F8F9FA] dark:bg-slate-800 text-[#4A4D57] hover:bg-slate-200'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Country Selector */}
            <div>
              <label className="text-xs font-bold text-[#0D0E11] dark:text-white block mb-2">Hiring Jurisdiction</label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
                {TCOE_COUNTRIES.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => setSelectedCountry(c)}
                    className={`py-2 px-1 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                      selectedCountry.code === c.code
                        ? 'bg-[#5450EB] text-white'
                        : 'bg-[#F8F9FA] dark:bg-slate-800 text-[#4A4D57] hover:bg-slate-200'
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-[#4D515D] dark:text-slate-400 mt-1.5">
                Statutory mandatory benefits in {selectedCountry.name}: {selectedCountry.desc} ({(selectedCountry.overheadPct * 100).toFixed(1)}%).
              </p>
            </div>

            {/* Headcount Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold text-[#0D0E11] dark:text-white mb-1">
                <span>Team Headcount</span>
                <span className="text-[#5450EB] font-bold">{headcount} people</span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                value={headcount}
                onChange={(e) => setHeadcount(Number(e.target.value))}
                className="w-full accent-[#5450EB]"
              />
            </div>

            {/* Average Salary Input */}
            <div>
              <label className="text-xs font-bold text-[#0D0E11] dark:text-white block mb-1">
                Average Monthly Salary (USD)
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-[#4A4D57]">$</span>
                <input
                  type="number"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(Math.max(500, Number(e.target.value)))}
                  className="w-full pl-8 pr-4 py-2.5 rounded-2xl bg-[#F8F9FA] dark:bg-slate-900 border border-[#DFE2EA] dark:border-slate-800 text-sm font-bold text-[#0D0E11] dark:text-white focus:outline-none"
                />
              </div>
            </div>

          </div>

          {/* Results Card (5 cols) */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-[#CCD1F8]/30 dark:bg-indigo-950/40 border border-[#CCD1F8] dark:border-indigo-900/60 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#4A4D57]">Estimated Monthly TCOE</div>
            
            <div className="text-3xl sm:text-4xl font-black text-[#0C0D11] dark:text-white font-editorial">
              ${totalMonthlyTCOE.toLocaleString('en-US', { maximumFractionDigits: 0 })} <span className="text-xs font-sans font-medium text-[#4D515D]">/ month</span>
            </div>

            <div className="pt-2 border-t border-[#BFC6F5]/50 dark:border-indigo-900/60 space-y-2 text-xs">
              <div className="flex justify-between text-[#4D515D] dark:text-slate-300">
                <span>Base Worker Compensation:</span>
                <span className="font-bold text-[#0C0D11] dark:text-white">${totalBaseMonthly.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#4D515D] dark:text-slate-300">
                <span>Statutory Benefits & Social:</span>
                <span className="font-bold text-[#0C0D11] dark:text-white">${statutoryOverheadMonthly.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
              </div>
              <div className="flex justify-between text-[#4D515D] dark:text-slate-300">
                <span>Flex Flat Platform Fee:</span>
                <span className="font-bold text-[#5450EB]">${platformTotalMonthly.toLocaleString()}</span>
              </div>
            </div>

            {/* Entity setup comparison */}
            <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs">
              <div className="font-bold text-emerald-800 dark:text-emerald-300">
                Estimated Annual Subsidiary Savings:
              </div>
              <div className="text-base font-black text-emerald-700 dark:text-emerald-400 font-editorial mt-0.5">
                +${Math.max(10000, annualEntitySavings).toLocaleString('en-US', { maximumFractionDigits: 0 })} USD saved
              </div>
              <p className="text-[10px] text-emerald-700/80 dark:text-emerald-400/80 mt-1">
                Compared to setting up and maintaining a local foreign corporate legal entity.
              </p>
            </div>

            <button
              onClick={onOpenBookDemo}
              className="w-full py-3.5 rounded-full text-xs font-bold text-white bg-[#0C0D11] hover:bg-black dark:bg-white dark:text-[#0C0D11] transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Schedule Cost Strategy Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ================= TRANSPARENT FAQ ================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-3xl font-normal text-[#0C0D11] dark:text-white font-editorial">
            Frequently Asked Pricing Questions
          </h2>
          <p className="text-xs text-[#4D515D]">Everything you need to know about our billing model.</p>
        </div>

        <div className="space-y-3">
          {[
            {
              q: 'Are there foreign exchange conversion fees or markups?',
              a: 'No. Flex passes through live mid-market exchange rates without the standard 2% to 4% markups added by traditional banks and legacy payroll providers.',
            },
            {
              q: 'Can we pay contractors in cryptocurrency without paying extra?',
              a: 'Yes. Stablecoin payroll (USDC and USDT) on supported EVM and Solana chains is included in the base Contractor Pay plan at no additional software cost.',
            },
            {
              q: 'What is included in the Employer of Record (EOR) $499 monthly fee?',
              a: 'The $499 flat fee includes complete legal employment via Flex’s owned local entities, statutory healthcare and pension enrollment, monthly payroll processing, end-of-year tax filings, and full labor law indemnity.',
            },
            {
              q: 'Can we switch between Contractor Pay and EOR for a worker?',
              a: 'Yes. You can transition an independent contractor to full-time EOR employee in under 48 hours without disrupting their payment history or onboarding documents.',
            },
          ].map((faq, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#121316] rounded-2xl border border-[#DFE2EA] dark:border-slate-800 p-5 cursor-pointer"
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            >
              <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-[#0C0D11] dark:text-white">
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === idx ? 'rotate-180 text-[#5450EB]' : ''}`} />
              </div>
              {openFaq === idx && (
                <p className="mt-3 text-xs text-[#4D515D] dark:text-slate-400 leading-relaxed pt-2 border-t border-[#DFE2EA] dark:border-slate-800">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

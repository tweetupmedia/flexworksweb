import React, { useState } from 'react';
import {
  ShieldCheck,
  Coins,
  ArrowRight,
  ArrowUpRight,
  Lock,
  Globe2,
  FileCheck,
  Sparkles,
  Layers,
  Scale,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

interface StablecoinCompliancePageProps {
  onOpenBookDemo: () => void;
  onOpenPricing: () => void;
  onNavigateToTab: (tabId: string) => void;
}

const REGULATORY_BODIES = [
  {
    region: 'United States',
    regulator: 'FinCEN & IRS',
    standards: 'MSB Registration & Notice 2014-21',
    details: 'Wages in cryptocurrency are treated as property subject to federal income tax withholding and FICA. Flex auto-calculates USD fair market value at the exact block timestamp.',
  },
  {
    region: 'European Union',
    regulator: 'ESMA & EBA (MiCA)',
    standards: 'Markets in Crypto-Assets & Travel Rule',
    details: 'Full originator and beneficiary KYC identity tagging for all crypto transfers exceeding €1,000. Flex binds verified Flex ID credentials directly to on-chain transactions.',
  },
  {
    region: 'Singapore',
    regulator: 'Monetary Authority of Singapore (MAS)',
    standards: 'Payment Services Act (PSA)',
    details: 'Stringent anti-money laundering (AML) and counter-financing of terrorism (CFT) controls for digital payment token services.',
  },
  {
    region: 'United Kingdom',
    regulator: 'FCA & HMRC',
    standards: 'Cryptoasset AML Regime',
    details: 'HMRC treats tokens received for employment as Money’s Worth subject to PAYE and National Insurance Contributions (NICs).',
  },
];

export const StablecoinCompliancePage: React.FC<StablecoinCompliancePageProps> = ({
  onOpenBookDemo,
  onOpenPricing,
  onNavigateToTab,
}) => {
  const [activeRegulator, setActiveRegulator] = useState(REGULATORY_BODIES[0]);

  return (
    <div className="font-sans-ui bg-[#FAFAFC] dark:bg-[#0B0C0E] text-[#0C0D11] dark:text-slate-100 transition-colors">
      
      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-12 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-7 relative rounded-[32px] bg-[#CCD1F8] dark:bg-[#181B2B] text-[#0C0D11] dark:text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between border border-[#BFC6F5] dark:border-slate-800 shadow-xs overflow-hidden">
            
            <div className="absolute top-6 right-6 w-11 h-11 rounded-full bg-[#CCE829] shadow-md flex items-center justify-center text-[#0C0D11] rotate-12 transition-transform hover:rotate-45 cursor-pointer">
              <Lock className="w-5 h-5 fill-current" />
            </div>

            <div className="self-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/80 text-[11px] font-bold text-[#0C0D11] dark:text-white shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#5450EB] animate-pulse" />
                <span>INSTITUTIONAL STABLECOIN COMPLIANCE</span>
              </div>
            </div>

            <div className="my-8 space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-normal leading-[1.08] tracking-tight font-editorial">
                Cross-Border Stablecoin Payroll with <span className="text-[#5450EB] dark:text-indigo-400">Institutional Regulatory Rigor</span>
              </h1>
              <p className="text-base sm:text-lg text-[#323642] dark:text-slate-300 max-w-xl font-normal leading-relaxed">
                Disburse compensation in USDC and USDT with total confidence. Flex combines FinCEN MSB registration, automated Travel Rule compliance, real-time sanctions screening, and IRS fair market value tax reporting.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenBookDemo}
                className="px-8 py-4 rounded-full text-xs sm:text-sm font-bold text-white bg-[#0C0D11] hover:bg-black dark:bg-white dark:text-[#0C0D11] shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2 active:scale-95"
              >
                <span>Review Compliance Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigateToTab('stablecoin')}
                className="px-7 py-4 rounded-full text-xs sm:text-sm font-bold text-[#0C0D11] dark:text-white bg-white dark:bg-slate-900 border border-[#DFE2EA] dark:border-slate-800 hover:bg-[#F3F4F8] transition-colors cursor-pointer"
              >
                Explore Stablecoin Rails
              </button>
            </div>
          </div>

          {/* Right Column: 4 Security Guardrails Card */}
          <div className="lg:col-span-5 bg-white dark:bg-[#121316] rounded-[32px] p-6 sm:p-8 border border-[#DFE2EA] dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E3E5EB] dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4A4D57]">On-Chain Compliance Engine</span>
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full">
                  100% Audited
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  { title: 'OFAC Sanctions & AML Screening', desc: 'Every recipient address is screened via Chainalysis oracle before contract payout authorization.' },
                  { title: 'Block-Level FMV Calculation', desc: 'IRS Notice 2014-21 compliant USD fair-market value logged to the exact second of on-chain execution.' },
                  { title: 'Automated Form 1099-DA & 1099-NEC', desc: 'Turnkey end-of-year digital asset tax reporting generated for US and non-US persons.' },
                  { title: 'Multi-Sig Safe Treasury Controls', desc: '3-of-5 corporate governance threshold with customizable department spending limits.' },
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-[#F8F9FA] dark:bg-slate-900/60 border border-[#DFE2EA] dark:border-slate-800 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0C0D11] dark:text-white">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#5450EB]" />
                      <span>{item.title}</span>
                    </div>
                    <div className="text-[11px] text-[#4D515D] dark:text-slate-400 pl-5 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenBookDemo}
              className="mt-6 w-full py-3.5 rounded-full text-xs font-bold text-white bg-[#0C0D11] hover:bg-black dark:bg-white dark:text-[#0C0D11] transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Speak with Digital Asset Legal Counsel</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= REGULATORY COMPARISON TABS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#CCD1F8] dark:bg-indigo-950 text-[#0C0D11] dark:text-indigo-300">
            REGULATORY MATRIX
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#0C0D11] dark:text-white font-editorial">
            Global Digital Asset Payroll Governance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REGULATORY_BODIES.map((r, i) => (
            <div key={i} className="bg-white dark:bg-[#121316] rounded-3xl p-6 border border-[#DFE2EA] dark:border-slate-800 shadow-xs space-y-3">
              <div className="text-xs font-bold text-[#5450EB] uppercase tracking-wider">{r.regulator}</div>
              <h3 className="text-base font-bold text-[#0C0D11] dark:text-white">{r.region}</h3>
              <div className="text-xs font-mono font-bold text-[#4D515D] dark:text-slate-300 bg-[#F8F9FA] dark:bg-slate-800 p-2 rounded-xl">
                {r.standards}
              </div>
              <p className="text-xs text-[#4D515D] dark:text-slate-400 leading-relaxed">{r.details}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

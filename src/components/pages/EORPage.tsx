import React, { useState } from 'react';
import { TrustedByMarquee } from '../TrustedByMarquee.tsx';
import { SlidingWord } from '../SlidingWord.tsx';
import {
  Globe2,
  Shield,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Check,
  Building,
  Users,
  Coins,
  CreditCard,
  Layers,
  Sparkles,
  FileText,
  Clock,
  Briefcase,
  HelpCircle,
  TrendingDown,
  Info,
  MapPin,
  ChevronDown,
} from 'lucide-react';

interface EORPageProps {
  onOpenBookDemo: () => void;
  onOpenPricing: () => void;
  onNavigateToTab: (tabId: string) => void;
}

const EOR_COUNTRIES = [
  { name: 'United States', flag: '🇺🇸', code: 'US', probation: 'At-will (most states)', notice: '2 weeks standard', onboard: '24 hours' },
  { name: 'Germany', flag: '🇩🇪', code: 'DE', probation: 'Up to 6 months', notice: '4 weeks to 7 months', onboard: '48 hours' },
  { name: 'United Kingdom', flag: '🇬🇧', code: 'GB', probation: '3 - 6 months', notice: '1 - 12 weeks statutory', onboard: '24 hours' },
  { name: 'Japan', flag: '🇯🇵', code: 'JP', probation: '3 months standard', notice: '30 days statutory', onboard: '48 hours' },
  { name: 'Singapore', flag: '🇸🇬', code: 'SG', probation: '3 - 6 months', notice: '1 day to 4 weeks', onboard: '24 hours' },
  { name: 'Canada', flag: '🇨🇦', code: 'CA', probation: '3 months statutory', notice: '1 - 8 weeks by province', onboard: '24 hours' },
  { name: 'Brazil', flag: '🇧🇷', code: 'BR', probation: 'Up to 90 days (CLT)', notice: '30+ days based on tenure', onboard: '48 hours' },
  { name: 'Australia', flag: '🇦🇺', code: 'AU', probation: '6 months statutory', notice: '1 - 5 weeks by award', onboard: '24 hours' },
];

export const EORPage: React.FC<EORPageProps> = ({
  onOpenBookDemo,
  onOpenPricing,
  onNavigateToTab,
}) => {
  const [selectedCountry, setSelectedCountry] = useState(EOR_COUNTRIES[1]);

  return (
    <div className="font-sans-ui bg-[#F8F9FA] dark:bg-[#0D0E12] text-[#0C0D11] dark:text-slate-100 transition-colors">
      
      {/* ================= HERO SECTION (Matching Screenshot 4) ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-14 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CCD1F8] dark:bg-indigo-950/80 text-[11px] font-black uppercase tracking-wider text-[#0C0D11] dark:text-indigo-300">
              <span className="w-2 h-2 rounded-full bg-[#CCE829]" />
              <span>EMPLOYER OF RECORD (EOR)</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-[#0C0D11] dark:text-white font-editorial">
              Simplify Global{' '}
              <SlidingWord
                words={['Employment', 'Hiring', 'Benefits', 'Expansion']}
                highlightClassName="text-[#5450EB] dark:text-indigo-400 font-semibold"
              />
            </h1>

            <p className="text-base sm:text-lg text-[#4D515D] dark:text-slate-300 max-w-xl font-normal leading-relaxed">
              Easily hire and pay full-time international employees in local currency or crypto while ensuring complete compliance and offering statutory health + tax benefits, without having to establish a foreign subsidiary.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBookDemo}
                className="px-8 py-4 rounded-full text-xs sm:text-sm font-bold text-white bg-[#0C0D11] hover:bg-black/90 dark:bg-white dark:text-[#0C0D11] shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2 active:scale-95"
              >
                <span>Schedule a Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('why-choose-eor');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-4 rounded-full text-xs sm:text-sm font-bold text-[#0C0D11] dark:text-white bg-white dark:bg-slate-900 border border-[#DFE2EA] dark:border-slate-800 hover:bg-[#F3F4F8] transition-colors cursor-pointer"
              >
                Why choose Flex?
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-xs font-semibold text-[#4D515D] dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#5450EB]" /> 150+ Direct Entities
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#5450EB]" /> Full Statutory Benefits
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#5450EB]" /> 48-Hour Onboarding
              </div>
            </div>
          </div>

          {/* Right Column: Visual Employee Onboarding Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="p-6 sm:p-7 rounded-[32px] bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#CCD1F8] flex items-center justify-center font-bold text-xs text-[#0C0D11]">
                    EOR
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0C0D11] dark:text-white">Add International Employee</div>
                    <div className="text-[10px] text-slate-500">Automated Contract & Benefits Provisioning</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  Ready to Issue
                </span>
              </div>

              {/* Employee Preview Details */}
              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-2xl bg-[#F8F9FA] dark:bg-slate-900 border border-[#DFE2EA]/70 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                      alt="Employee"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-[#0C0D11] dark:text-white">Maya Lindqvist</div>
                      <div className="text-[10px] text-slate-500">Staff Systems Architect • Germany 🇩🇪</div>
                    </div>
                  </div>
                  <span className="font-black text-[#0C0D11] dark:text-white">€8,200/mo</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#CCD1F8]/50 dark:bg-slate-900 border border-[#BFC6F5] space-y-2 text-[11px]">
                  <div className="font-bold text-[#0C0D11] dark:text-white flex items-center justify-between">
                    <span>Statutory Benefits Package</span>
                    <span className="text-emerald-700 font-extrabold">Active</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-[10px] text-[#4D515D] dark:text-slate-400">
                    <div>✓ Gesetzliche Krankenversicherung</div>
                    <div>✓ Rentenversicherung (9.3%)</div>
                    <div>✓ 25 Days Paid Vacation</div>
                    <div>✓ 6 Months Statutory Shield</div>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Disbursement Rail:</span>
                  <span className="font-bold text-[#5450EB]">SEPA Instant EUR (0% FX)</span>
                </div>
              </div>

              <button
                onClick={onOpenBookDemo}
                className="w-full py-3 rounded-2xl text-xs font-bold bg-[#0C0D11] text-white hover:bg-black/90 transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Generate Compliant EOR Contract →</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Trusted By Partner Logos Marquee */}
      <TrustedByMarquee title="TRUSTED BY INDUSTRY LEADERS IN GLOBAL PAYROLL & EMPLOYMENT" />

      {/* ================= FIND FLEX IN YOUR COUNTRY (Matching Screenshot 4) ================= */}
      <section className="py-14 sm:py-20 border-y border-[#DFE2EA] dark:border-slate-800 bg-white dark:bg-[#111218]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-[11px] font-black uppercase tracking-widest text-[#5450EB] dark:text-indigo-400">
              GLOBAL PRESENCE
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#0C0D11] dark:text-white font-editorial tracking-tight">
              Find Flex in your country
            </h2>
            <p className="text-sm text-[#4D515D] dark:text-slate-400">
              Pick a country to explore local employment statutes, statutory benefits, notice periods, and onboarding timelines.
            </p>

            {/* Country Selector Dropdown */}
            <div className="pt-2 flex justify-center">
              <div className="relative inline-block text-left w-72">
                <select
                  value={selectedCountry.code}
                  onChange={(e) => {
                    const c = EOR_COUNTRIES.find(x => x.code === e.target.value);
                    if (c) setSelectedCountry(c);
                  }}
                  className="w-full px-4 py-3 rounded-2xl bg-[#F8F9FA] dark:bg-slate-900 border border-[#DFE2EA] dark:border-slate-800 font-bold text-xs text-[#0C0D11] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0C0D11] cursor-pointer shadow-xs"
                >
                  {EOR_COUNTRIES.map(c => (
                    <option key={c.code} value={c.code}>
                      {c.flag} {c.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Selected Country Dossier Banner */}
          <div className="p-6 sm:p-8 rounded-[32px] bg-[#CCD1F8] dark:bg-[#181B2B] border border-[#BFC6F5] dark:border-slate-800 text-[#0C0D11] dark:text-white grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            <div>
              <div className="text-3xl">{selectedCountry.flag}</div>
              <div className="text-lg font-bold mt-1 font-editorial">{selectedCountry.name}</div>
              <div className="text-xs text-[#4D515D] dark:text-slate-400">Direct In-Country Entity</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 text-xs">
              <div className="text-[10px] font-bold text-slate-500 uppercase">Probation Period</div>
              <div className="font-extrabold text-[#0C0D11] dark:text-white mt-0.5">{selectedCountry.probation}</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 text-xs">
              <div className="text-[10px] font-bold text-slate-500 uppercase">Notice Period</div>
              <div className="font-extrabold text-[#0C0D11] dark:text-white mt-0.5">{selectedCountry.notice}</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 text-xs">
              <div className="text-[10px] font-bold text-slate-500 uppercase">Onboarding Speed</div>
              <div className="font-extrabold text-emerald-600 mt-0.5 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{selectedCountry.onboard}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE FLEX'S EOR SOLUTION? (Matching Screenshot 5) ================= */}
      <section id="why-choose-eor" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-[11px] font-black uppercase tracking-widest text-[#5450EB] dark:text-indigo-400">
            COMPLIANCE ASSURED
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#0C0D11] dark:text-white font-editorial tracking-tight">
            Why Choose Flex's EOR Solution?
          </h2>
          <p className="text-sm text-[#4D515D] dark:text-slate-400">
            Flex's Employer of Record (EOR) service manages employment responsibilities like compliance and payroll for your company, allowing you to hire globally without setting up local entities.
          </p>
        </div>

        {/* 5 Cards Grid (Matching Screenshot 5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-3xl bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#CCD1F8] flex items-center justify-center font-bold text-[#0C0D11]">
              ⚡
            </div>
            <h3 className="text-base font-bold text-[#0C0D11] dark:text-white">Automated Onboarding</h3>
            <p className="text-xs text-[#4D515D] dark:text-slate-400 leading-relaxed">
              Hire full-time employees via Flex-owned entities across the US, UK, EU, and Canada today, expanding to 60+ direct jurisdictions by EOY 2026.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#CCD1F8] flex items-center justify-center font-bold text-[#0C0D11]">
              ⚖️
            </div>
            <h3 className="text-base font-bold text-[#0C0D11] dark:text-white">Compliant Employment Agreements</h3>
            <p className="text-xs text-[#4D515D] dark:text-slate-400 leading-relaxed">
              Avoid misclassification penalties and labor disputes thanks to our dedicated in-house legal and compliance council.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#CCD1F8] flex items-center justify-center font-bold text-[#0C0D11]">
              🏥
            </div>
            <h3 className="text-base font-bold text-[#0C0D11] dark:text-white">Competitive Benefits Packages</h3>
            <p className="text-xs text-[#4D515D] dark:text-slate-400 leading-relaxed">
              Offer generous statutory healthcare, pension matching, and crypto-friendly retirement options tailored to each country.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#CCD1F8] flex items-center justify-center font-bold text-[#0C0D11]">
              💳
            </div>
            <h3 className="text-base font-bold text-[#0C0D11] dark:text-white">Payroll Flexibility</h3>
            <p className="text-xs text-[#4D515D] dark:text-slate-400 leading-relaxed">
              With hybrid payroll from Flex, you can pay in local fiat currency, stablecoins, or mixed currency allocations.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#CCD1F8] flex items-center justify-center font-bold text-[#0C0D11]">
              📑
            </div>
            <h3 className="text-base font-bold text-[#0C0D11] dark:text-white">Tax & Compliance Handled</h3>
            <p className="text-xs text-[#4D515D] dark:text-slate-400 leading-relaxed">
              Flex manages all monthly employer taxes, statutory deductions, social security withholdings, and end-of-year filings for you.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#CCD1F8] dark:bg-[#181B2B] border border-[#BFC6F5] dark:border-slate-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-black uppercase tracking-wider text-[#5450EB] dark:text-indigo-300">
                100% INDEMNIFIED
              </div>
              <h3 className="text-base font-bold text-[#0C0D11] dark:text-white mt-1">Zero Legal Liability Guarantee</h3>
              <p className="text-xs text-[#4D515D] dark:text-slate-300 mt-2 leading-relaxed">
                As the legal Employer of Record, Flex assumes full legal accountability for local labor law compliance.
              </p>
            </div>
            <button
              onClick={onOpenBookDemo}
              className="mt-4 px-4 py-2.5 rounded-full text-xs font-bold bg-[#0C0D11] text-white hover:bg-black/90 transition-all cursor-pointer"
            >
              Consult Legal Experts →
            </button>
          </div>

        </div>

        {/* Flexibility Across Borders Stats Bar */}
        <div className="pt-8 border-t border-[#DFE2EA] dark:border-slate-800">
          <div className="text-center text-xs font-black uppercase tracking-widest text-[#5450EB] mb-6">
            FLEXIBILITY ACROSS BORDERS
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-normal text-[#0C0D11] dark:text-white font-editorial">100+</div>
              <div className="text-xs text-[#4D515D] mt-1 font-semibold">Cryptocurrencies Supported</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-normal text-[#0C0D11] dark:text-white font-editorial">90+</div>
              <div className="text-xs text-[#4D515D] mt-1 font-semibold">Local Fiat Currencies</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-normal text-[#0C0D11] dark:text-white font-editorial">190+</div>
              <div className="text-xs text-[#4D515D] mt-1 font-semibold">Countries & Territories Covered</div>
            </div>
          </div>
        </div>

        {/* How It Works (4 Steps - Screenshot 5) */}
        <div className="pt-10 space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-normal text-[#0C0D11] dark:text-white font-editorial">
              How It Works
            </h3>
            <p className="text-xs text-[#4D515D] dark:text-slate-400">Simple, streamlined, 4-step global employment</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 space-y-2">
              <div className="text-3xl font-black text-[#CCD1F8] dark:text-slate-700">01</div>
              <h4 className="text-sm font-bold text-[#0C0D11] dark:text-white">Onboard Your Talent to Flex</h4>
              <p className="text-xs text-[#4D515D] dark:text-slate-400">We handle KYC, AML, localized employment contracts, and statutory compliance in minutes.</p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 space-y-2">
              <div className="text-3xl font-black text-[#CCD1F8] dark:text-slate-700">02</div>
              <h4 className="text-sm font-bold text-[#0C0D11] dark:text-white">Fund Your Payroll</h4>
              <p className="text-xs text-[#4D515D] dark:text-slate-400">Fund payroll in either US dollars via bank transfer or USDC/USDT stablecoin from corporate treasuries.</p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 space-y-2">
              <div className="text-3xl font-black text-[#CCD1F8] dark:text-slate-700">03</div>
              <h4 className="text-sm font-bold text-[#0C0D11] dark:text-white">Set Up Payment Schedules</h4>
              <p className="text-xs text-[#4D515D] dark:text-slate-400">Set up payments according to local labor requirements (monthly, bi-weekly, or milestone disbursements).</p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 space-y-2">
              <div className="text-3xl font-black text-[#CCD1F8] dark:text-slate-700">04</div>
              <h4 className="text-sm font-bold text-[#0C0D11] dark:text-white">Employees Withdraw In Preferred Currency</h4>
              <p className="text-xs text-[#4D515D] dark:text-slate-400">Employees withdraw their net earnings in their local bank fiat currency or cryptocurrency wallet.</p>
            </div>
          </div>
        </div>

        {/* Pricing Card ($399/mo - Screenshot 5) */}
        <div className="pt-12">
          <div className="max-w-2xl mx-auto p-8 sm:p-10 rounded-[32px] bg-[#CCD1F8] dark:bg-[#181B2B] border border-[#BFC6F5] dark:border-slate-800 text-center space-y-6">
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-[#5450EB] dark:text-indigo-300">
                TRANSPARENT PRICING
              </div>
              <h3 className="text-3xl font-normal text-[#0C0D11] dark:text-white font-editorial mt-1">
                Employer of Record
              </h3>
              <p className="text-xs text-[#4D515D] dark:text-slate-400 mt-1">
                Ideal for companies hiring globally without setting up local entities
              </p>
            </div>

            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl sm:text-6xl font-black text-[#0C0D11] dark:text-white font-editorial">$399</span>
              <span className="text-xs font-semibold text-[#4D515D]">Per Employee / Month</span>
            </div>

            <div className="space-y-2 text-xs font-semibold text-left max-w-md mx-auto pt-2">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hire employees globally without setting up local entities</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Stay compliant with local employment and tax laws</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Simplify payroll for full-time employees and contractors</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Onboard employees in days, not weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Reduce expansion costs and operational risks</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Provide benefits, insurance, and HR support worldwide</span>
              </div>
            </div>

            <button
              onClick={onOpenBookDemo}
              className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#0C0D11] text-white hover:bg-black/90 transition-all cursor-pointer inline-flex items-center gap-2 shadow-md"
            >
              <span>Continue with EOR →</span>
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};

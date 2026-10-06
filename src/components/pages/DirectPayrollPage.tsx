import React, { useState } from 'react';
import { SlidingWord } from '../SlidingWord.tsx';
import {
  Building2,
  Globe2,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  CreditCard,
  Zap,
  Repeat,
  ShieldCheck,
  TrendingDown,
  DollarSign,
  ChevronDown,
  Sparkles,
  Layers,
  FileCheck,
  Clock,
  Briefcase,
  HelpCircle,
} from 'lucide-react';

interface DirectPayrollPageProps {
  onOpenBookDemo: () => void;
  onOpenPricing: () => void;
  onNavigateToTab: (tabId: string) => void;
}

const SUPPORTED_RAILS = [
  { country: 'United States', code: 'USD', rail: 'FedNow / ACH / Wire', speed: 'Instant / Same-Day', fee: '0% Spread' },
  { country: 'European Union', code: 'EUR', rail: 'SEPA Instant Credit', speed: '< 10 Seconds', fee: '0% Spread' },
  { country: 'United Kingdom', code: 'GBP', rail: 'Faster Payments (FPS)', speed: 'Instant', fee: '0% Spread' },
  { country: 'Brazil', code: 'BRL', rail: 'Pix Instant Rail', speed: '< 5 Seconds', fee: '0% Spread' },
  { country: 'India', code: 'INR', rail: 'UPI / IMPS Local Rail', speed: 'Real-Time', fee: '0% Spread' },
  { country: 'Singapore', code: 'SGD', rail: 'FAST / PayNow', speed: 'Instant', fee: '0% Spread' },
  { country: 'Canada', code: 'CAD', rail: 'Interac / EFT Direct', speed: 'Same-Day', fee: '0% Spread' },
  { country: 'Australia', code: 'AUD', rail: 'NPP / Osko Rail', speed: 'Sub-Minute', fee: '0% Spread' },
];

export const DirectPayrollPage: React.FC<DirectPayrollPageProps> = ({
  onOpenBookDemo,
  onOpenPricing,
  onNavigateToTab,
}) => {
  const [fiatAmount, setFiatAmount] = useState<number>(10000);
  const [selectedCurrency, setSelectedCurrency] = useState<'EUR' | 'GBP' | 'BRL' | 'INR' | 'SGD'>('EUR');

  // Rates vs traditional banks
  const exchangeRates = {
    EUR: { rate: 0.92, traditionalFee: 310, flexFee: 0 },
    GBP: { rate: 0.79, traditionalFee: 285, flexFee: 0 },
    BRL: { rate: 5.45, traditionalFee: 420, flexFee: 0 },
    INR: { rate: 84.10, traditionalFee: 360, flexFee: 0 },
    SGD: { rate: 1.34, traditionalFee: 290, flexFee: 0 },
  };

  const currentRate = exchangeRates[selectedCurrency];
  const convertedAmount = (fiatAmount * currentRate.rate).toLocaleString('en-US', {
    maximumFractionDigits: 2,
  });
  const savedAmount = (fiatAmount * (currentRate.traditionalFee / 10000)).toFixed(0);

  return (
    <div className="font-sans-ui bg-[#FAFAFC] dark:bg-[#0B0C0E] text-[#0C0D11] dark:text-slate-100 transition-colors">
      
      {/* ================= HERO SECTION (Workssphere Layout) ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-12 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Editorial Headline & Value Proposition */}
          <div className="lg:col-span-7 relative rounded-[32px] bg-[#CCD1F8] dark:bg-[#181B2B] text-[#0C0D11] dark:text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between border border-[#BFC6F5] dark:border-slate-800 shadow-xs overflow-hidden">
            
            {/* High-Contrast Star Badge */}
            <div className="absolute top-6 right-6 w-11 h-11 rounded-full bg-[#CCE829] shadow-md flex items-center justify-center text-[#0C0D11] rotate-12 transition-transform hover:rotate-45 cursor-pointer">
              <Sparkles className="w-5 h-5 fill-current" />
            </div>

            {/* Tag */}
            <div className="self-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/80 text-[11px] font-bold text-[#0C0D11] dark:text-white shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#5450EB] animate-pulse" />
                <span>DIRECT FIAT RAILS • 90+ CURRENCIES</span>
              </div>
            </div>

            {/* Editorial Heading */}
            <div className="my-8 space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-normal leading-[1.08] tracking-tight font-editorial">
                Simplify Global{' '}
                <SlidingWord
                  words={['Payroll', 'Disbursements', 'Treasury', 'Liquidity']}
                  highlightClassName="text-[#5450EB] dark:text-indigo-400 font-semibold"
                />
              </h1>
              <p className="text-base sm:text-lg text-[#323642] dark:text-slate-300 max-w-xl font-normal leading-relaxed">
                Execute local currency payouts directly into contractor and employee bank accounts via domestic clearing houses—FedNow, SEPA Instant, Faster Payments, Pix, and UPI. No 3% SWIFT wire fees or multi-day settlement delays.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenBookDemo}
                className="px-8 py-4 rounded-full text-xs sm:text-sm font-bold text-white bg-[#0C0D11] hover:bg-black/90 dark:bg-white dark:text-[#0C0D11] shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2 active:scale-95"
              >
                <span>Schedule a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenPricing}
                className="px-7 py-4 rounded-full text-xs sm:text-sm font-bold text-[#0C0D11] dark:text-white bg-white dark:bg-slate-900 border border-[#DFE2EA] dark:border-slate-800 hover:bg-[#F3F4F8] transition-colors cursor-pointer"
              >
                Calculate Payroll Savings
              </button>
            </div>
          </div>

          {/* Right Column: Live Currency & Cost Calculator */}
          <div className="lg:col-span-5 bg-white dark:bg-[#121316] rounded-[32px] p-6 sm:p-8 border border-[#DFE2EA] dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E3E5EB] dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4A4D57]">Direct Clearing Estimator</span>
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full">
                  Real-Time Mid-Market
                </span>
              </div>

              {/* Amount Input */}
              <div className="mt-5 space-y-4">
                <div>
                  <label className="text-xs font-bold text-[#0D0E11] dark:text-white block mb-1">
                    Payroll Funding Amount (USD)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-[#4A4D57]">$</span>
                    <input
                      type="number"
                      value={fiatAmount}
                      onChange={(e) => setFiatAmount(Math.max(100, Number(e.target.value)))}
                      className="w-full pl-8 pr-4 py-3 rounded-2xl bg-[#F8F9FA] dark:bg-slate-900 border border-[#DFE2EA] dark:border-slate-800 text-sm font-bold text-[#0D0E11] dark:text-white focus:outline-none focus:border-[#5450EB]"
                    />
                  </div>
                </div>

                {/* Target Currency Selector */}
                <div>
                  <label className="text-xs font-bold text-[#0D0E11] dark:text-white block mb-1">
                    Destination Local Currency
                  </label>
                  <div className="grid grid-cols-5 gap-1.5">
                    {(['EUR', 'GBP', 'BRL', 'INR', 'SGD'] as const).map((curr) => (
                      <button
                        key={curr}
                        onClick={() => setSelectedCurrency(curr)}
                        className={`py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                          selectedCurrency === curr
                            ? 'bg-[#0C0D11] text-white dark:bg-white dark:text-[#0C0D11]'
                            : 'bg-[#F8F9FA] dark:bg-slate-800 text-[#4A4D57] hover:bg-slate-200'
                        }`}
                      >
                        {curr}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Output Breakdown */}
                <div className="p-4 rounded-2xl bg-[#CCD1F8]/30 dark:bg-indigo-950/40 border border-[#CCD1F8] dark:border-indigo-900/60 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#4D515D] dark:text-slate-400">Recipient Receives:</span>
                    <span className="text-base font-black text-[#0C0D11] dark:text-white font-editorial">
                      {convertedAmount} {selectedCurrency}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#4D515D] dark:text-slate-400">Flex FX Markup:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">0.00% (Mid-Market)</span>
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#4D515D] dark:text-slate-400">Settlement Speed:</span>
                    <span className="font-bold text-[#5450EB] dark:text-indigo-400">Same-Day Local Rail</span>
                  </div>

                  <div className="pt-2 border-t border-[#BFC6F5]/50 dark:border-indigo-900/60 flex justify-between items-center">
                    <span className="text-xs font-bold text-[#0C0D11] dark:text-white">Estimated FX Savings:</span>
                    <span className="text-sm font-black text-emerald-600 dark:text-emerald-400">
                      +${savedAmount} USD saved
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBookDemo}
              className="mt-6 w-full py-3.5 rounded-full text-xs font-bold text-white bg-[#0C0D11] hover:bg-black dark:bg-white dark:text-[#0C0D11] transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Activate Local Fiat Rails</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= METRIC PROOF BAR ================= */}
      <section className="border-y border-[#DFE2EA] dark:border-slate-800 bg-white dark:bg-[#0D0E12] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-normal text-[#0C0D11] dark:text-white font-editorial">90+</div>
            <div className="text-xs font-semibold text-[#4D515D] dark:text-slate-400 mt-1">Local Fiat Currencies Supported</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-normal text-[#0C0D11] dark:text-white font-editorial">0.00%</div>
            <div className="text-xs font-semibold text-[#4D515D] dark:text-slate-400 mt-1">Foreign Exchange Spread Markups</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-normal text-[#0C0D11] dark:text-white font-editorial">&lt; 10s</div>
            <div className="text-xs font-semibold text-[#4D515D] dark:text-slate-400 mt-1">SEPA, Pix & FedNow Clearing</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-normal text-[#0C0D11] dark:text-white font-editorial">100%</div>
            <div className="text-xs font-semibold text-[#4D515D] dark:text-slate-400 mt-1">Automated Accounting Reconciliation</div>
          </div>
        </div>
      </section>

      {/* ================= SUPPORTED CLEARING RAILS TABLE ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4 mb-10 text-center max-w-2xl mx-auto">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#CCD1F8] dark:bg-indigo-950 text-[#0C0D11] dark:text-indigo-300">
            DOMESTIC CLEARING NETWORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#0C0D11] dark:text-white font-editorial">
            Direct Local Rails Around the Globe
          </h2>
          <p className="text-sm text-[#4D515D] dark:text-slate-400">
            Say goodbye to intermediary correspondent banks that slice off $25 to $50 per wire transfer.
          </p>
        </div>

        <div className="bg-white dark:bg-[#121316] rounded-3xl border border-[#DFE2EA] dark:border-slate-800 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F8F9FA] dark:bg-slate-900/60 border-b border-[#DFE2EA] dark:border-slate-800 text-[#4D515D] font-bold uppercase tracking-wider">
                <tr>
                  <th className="py-4 px-6">Jurisdiction</th>
                  <th className="py-4 px-6">Currency</th>
                  <th className="py-4 px-6">Domestic Rail</th>
                  <th className="py-4 px-6">Typical Speed</th>
                  <th className="py-4 px-6">Flex Spread</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DFE2EA] dark:divide-slate-800 font-medium">
                {SUPPORTED_RAILS.map((r, i) => (
                  <tr key={i} className="hover:bg-[#F8F9FA] dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#0C0D11] dark:text-white flex items-center gap-2">
                      <span>{r.country}</span>
                    </td>
                    <td className="py-4 px-6 font-mono font-bold text-[#5450EB]">{r.code}</td>
                    <td className="py-4 px-6 text-[#323642] dark:text-slate-300">{r.rail}</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-semibold text-[11px]">
                        <Clock className="w-3 h-3" />
                        {r.speed}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-bold text-[#0C0D11] dark:text-white">{r.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= 4-STEP BATCH PAYROLL FLOW ================= */}
      <section className="bg-[#CCD1F8]/30 dark:bg-[#121422] py-16 border-t border-[#DFE2EA] dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-normal text-[#0C0D11] dark:text-white font-editorial">
              How Direct Global Payroll Works
            </h2>
            <p className="text-sm text-[#4D515D] dark:text-slate-400">
              One dashboard for international contractors, direct-hire employees, and milestone stipends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Fund Single Treasury', desc: 'Deposit in USD or EUR via ACH or SEPA wire. Flex consolidates your corporate treasury.' },
              { step: '02', title: 'Automated Tax Withholding', desc: 'Flex calculates in-country statutory contributions, income tax, and health insurance.' },
              { step: '03', title: 'Instant Domestic Clearing', desc: 'Payments disburse over FedNow, Faster Payments, Pix, and SEPA directly into recipient bank accounts.' },
              { step: '04', title: 'Real-Time ERP Sync', desc: 'Every transaction syncs automatically with QuickBooks, Xero, or NetSuite with categorized line items.' },
            ].map((s, idx) => (
              <div key={idx} className="bg-white dark:bg-[#151722] rounded-3xl p-6 border border-[#DFE2EA] dark:border-slate-800 shadow-xs space-y-3">
                <span className="text-xs font-black text-[#5450EB] font-mono px-2 py-0.5 rounded-md bg-[#CCD1F8]/50">
                  {s.step}
                </span>
                <h3 className="text-base font-bold text-[#0C0D11] dark:text-white">{s.title}</h3>
                <p className="text-xs text-[#4D515D] dark:text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL QUOTE ================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-white dark:bg-[#121316] border border-[#DFE2EA] dark:border-slate-800 p-8 sm:p-12 shadow-xs space-y-6 text-center">
          <p className="text-lg sm:text-xl font-normal text-[#0C0D11] dark:text-white font-editorial italic leading-relaxed">
            "We run payroll for 85 contractors and employees across 16 countries. Flex's direct domestic rails eliminated our $4,500/month wire fees and our engineers in Brazil and the UK now receive funds on payday morning without delays."
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#CCD1F8] flex items-center justify-center font-bold text-[#0C0D11]">
              MS
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-[#0C0D11] dark:text-white">Marcus Sterling</div>
              <div className="text-[11px] text-[#4D515D] dark:text-slate-400">VP of Finance, HyperScale Systems</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM BANNER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-[32px] bg-[#CCD1F8] dark:bg-[#181B2B] p-8 sm:p-14 border border-[#BFC6F5] dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-normal text-[#0C0D11] dark:text-white font-editorial">
              Ready to Upgrade to Direct Global Payroll?
            </h2>
            <p className="text-sm text-[#323642] dark:text-slate-300">
              Get started in 48 hours. Transparent flat rates with zero entity setup and zero hidden FX fees.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenBookDemo}
              className="px-8 py-4 rounded-full text-xs sm:text-sm font-bold text-white bg-[#0C0D11] hover:bg-black transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigateToTab('platform')}
              className="px-6 py-4 rounded-full text-xs sm:text-sm font-bold text-[#0C0D11] bg-white border border-[#DFE2EA] hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Explore Hybrid Crypto Rails
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

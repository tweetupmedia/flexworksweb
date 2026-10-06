import React, { useState } from 'react';
import {
  TrendingUp,
  Globe2,
  ArrowRight,
  ArrowUpRight,
  Download,
  DollarSign,
  Briefcase,
  Users,
  Sparkles,
  BarChart3,
  Layers,
  Building,
} from 'lucide-react';

interface BenchmarkReportPageProps {
  onOpenBookDemo: () => void;
  onOpenPricing: () => void;
  onNavigateToTab: (tabId: string) => void;
}

const SALARY_BENCHMARKS = {
  engineer: {
    title: 'Senior Full-Stack Engineer (5+ yrs)',
    data: {
      US: { p25: 145000, median: 175000, p75: 205000, overhead: '11% - 14%' },
      UK: { p25: 95000, median: 115000, p75: 135000, overhead: '13.8% NICs' },
      DE: { p25: 85000, median: 105000, p75: 125000, overhead: '19.8% Social' },
      PL: { p25: 55000, median: 72000, p75: 88000, overhead: '20.5% ZUS' },
      BR: { p25: 42000, median: 58000, p75: 74000, overhead: '35% CLT + FGTS' },
      IN: { p25: 28000, median: 40000, p75: 55000, overhead: '12% EPF + Gratuity' },
    },
  },
  ai_engineer: {
    title: 'Senior AI / Machine Learning Engineer',
    data: {
      US: { p25: 165000, median: 210000, p75: 260000, overhead: '11% - 14%' },
      UK: { p25: 110000, median: 140000, p75: 170000, overhead: '13.8% NICs' },
      DE: { p25: 100000, median: 128000, p75: 155000, overhead: '19.8% Social' },
      PL: { p25: 68000, median: 88000, p75: 112000, overhead: '20.5% ZUS' },
      BR: { p25: 52000, median: 72000, p75: 92000, overhead: '35% CLT + FGTS' },
      IN: { p25: 35000, median: 52000, p75: 72000, overhead: '12% EPF + Gratuity' },
    },
  },
  product: {
    title: 'Senior Product Manager',
    data: {
      US: { p25: 140000, median: 170000, p75: 200000, overhead: '11% - 14%' },
      UK: { p25: 90000, median: 112000, p75: 130000, overhead: '13.8% NICs' },
      DE: { p25: 82000, median: 98000, p75: 118000, overhead: '19.8% Social' },
      PL: { p25: 48000, median: 64000, p75: 80000, overhead: '20.5% ZUS' },
      BR: { p25: 38000, median: 52000, p75: 68000, overhead: '35% CLT + FGTS' },
      IN: { p25: 26000, median: 38000, p75: 50000, overhead: '12% EPF + Gratuity' },
    },
  },
};

export const BenchmarkReportPage: React.FC<BenchmarkReportPageProps> = ({
  onOpenBookDemo,
  onOpenPricing,
  onNavigateToTab,
}) => {
  const [selectedRole, setSelectedRole] = useState<'engineer' | 'ai_engineer' | 'product'>('engineer');
  const [selectedCountryCode, setSelectedCountryCode] = useState<'US' | 'UK' | 'DE' | 'PL' | 'BR' | 'IN'>('UK');

  const currentRole = SALARY_BENCHMARKS[selectedRole];
  const currentMetrics = currentRole.data[selectedCountryCode];

  return (
    <div className="font-sans-ui bg-[#FAFAFC] dark:bg-[#0B0C0E] text-[#0C0D11] dark:text-slate-100 transition-colors">
      
      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-12 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-7 relative rounded-[32px] bg-[#CCD1F8] dark:bg-[#181B2B] text-[#0C0D11] dark:text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between border border-[#BFC6F5] dark:border-slate-800 shadow-xs overflow-hidden">
            
            <div className="absolute top-6 right-6 w-11 h-11 rounded-full bg-[#CCE829] shadow-md flex items-center justify-center text-[#0C0D11] rotate-12 transition-transform hover:rotate-45 cursor-pointer">
              <TrendingUp className="w-5 h-5 fill-current" />
            </div>

            <div className="self-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/80 text-[11px] font-bold text-[#0C0D11] dark:text-white shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#5450EB] animate-pulse" />
                <span>GLOBAL BENCHMARK 2026 • 50+ TECH MARKETS</span>
              </div>
            </div>

            <div className="my-8 space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-normal leading-[1.08] tracking-tight font-editorial">
                The 2026 Global Workforce & <span className="text-[#5450EB] dark:text-indigo-400">Salary Benchmark Report</span>
              </h1>
              <p className="text-base sm:text-lg text-[#323642] dark:text-slate-300 max-w-xl font-normal leading-relaxed">
                Benchmark international compensation, statutory employer social contributions, and Total Cost of Employment (TCOE) across North America, Europe, LATAM, and APAC. Powered by verified Flex payroll data across 10,000+ placements.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenBookDemo}
                className="px-8 py-4 rounded-full text-xs sm:text-sm font-bold text-white bg-[#0C0D11] hover:bg-black dark:bg-white dark:text-[#0C0D11] shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2 active:scale-95"
              >
                <span>Download Executive Whitepaper</span>
                <Download className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenPricing}
                className="px-7 py-4 rounded-full text-xs sm:text-sm font-bold text-[#0C0D11] dark:text-white bg-white dark:bg-slate-900 border border-[#DFE2EA] dark:border-slate-800 hover:bg-[#F3F4F8] transition-colors cursor-pointer"
              >
                Use TCOE Calculator
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Compensation Explorer */}
          <div className="lg:col-span-5 bg-white dark:bg-[#121316] rounded-[32px] p-6 sm:p-8 border border-[#DFE2EA] dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E3E5EB] dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4A4D57]">Salary Explorer</span>
                <span className="text-[11px] font-mono font-bold text-[#5450EB]">USD / Annualized</span>
              </div>

              <div className="mt-4 space-y-4">
                {/* Role Selector */}
                <div>
                  <label className="text-xs font-bold text-[#0D0E11] dark:text-white block mb-1">Select Specialty Role</label>
                  <div className="grid grid-cols-3 gap-1.5 text-[11px]">
                    {[
                      { key: 'engineer' as const, label: 'Full-Stack' },
                      { key: 'ai_engineer' as const, label: 'AI / ML' },
                      { key: 'product' as const, label: 'Product' },
                    ].map((r) => (
                      <button
                        key={r.key}
                        onClick={() => setSelectedRole(r.key)}
                        className={`py-2 px-2 rounded-xl font-bold transition-colors cursor-pointer ${
                          selectedRole === r.key
                            ? 'bg-[#0C0D11] text-white dark:bg-white dark:text-[#0C0D11]'
                            : 'bg-[#F8F9FA] dark:bg-slate-800 text-[#4A4D57] hover:bg-slate-200'
                        }`}
                      >
                        {r.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Country Selector */}
                <div>
                  <label className="text-xs font-bold text-[#0D0E11] dark:text-white block mb-1">Target Hiring Market</label>
                  <div className="grid grid-cols-6 gap-1">
                    {[
                      { code: 'US' as const, label: '🇺🇸 US' },
                      { code: 'UK' as const, label: '🇬🇧 UK' },
                      { code: 'DE' as const, label: '🇩🇪 DE' },
                      { code: 'PL' as const, label: '🇵🇱 PL' },
                      { code: 'BR' as const, label: '🇧🇷 BR' },
                      { code: 'IN' as const, label: '🇮🇳 IN' },
                    ].map((c) => (
                      <button
                        key={c.code}
                        onClick={() => setSelectedCountryCode(c.code)}
                        className={`py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                          selectedCountryCode === c.code
                            ? 'bg-[#5450EB] text-white'
                            : 'bg-[#F8F9FA] dark:bg-slate-800 text-[#4A4D57] hover:bg-slate-200'
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Benchmark Output Card */}
                <div className="p-4 rounded-2xl bg-[#CCD1F8]/30 dark:bg-indigo-950/40 border border-[#CCD1F8] dark:border-indigo-900/60 space-y-3">
                  <div className="text-xs font-bold text-[#0C0D11] dark:text-white">
                    {currentRole.title}
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center pt-1">
                    <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-[#DFE2EA] dark:border-slate-800">
                      <div className="text-[10px] text-[#4D515D] font-bold">25th %</div>
                      <div className="text-xs font-black text-[#0C0D11] dark:text-white font-mono mt-0.5">
                        ${(currentMetrics.p25 / 1000).toFixed(0)}k
                      </div>
                    </div>
                    <div className="p-2 rounded-xl bg-[#0C0D11] text-white dark:bg-white dark:text-[#0C0D11] border border-transparent shadow-xs">
                      <div className="text-[10px] opacity-80 font-bold">Median (50th)</div>
                      <div className="text-sm font-black font-editorial mt-0.5">
                        ${(currentMetrics.median / 1000).toFixed(0)}k
                      </div>
                    </div>
                    <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-[#DFE2EA] dark:border-slate-800">
                      <div className="text-[10px] text-[#4D515D] font-bold">75th %</div>
                      <div className="text-xs font-black text-[#0C0D11] dark:text-white font-mono mt-0.5">
                        ${(currentMetrics.p75 / 1000).toFixed(0)}k
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#BFC6F5]/50 dark:border-indigo-900/60 flex justify-between items-center text-xs">
                    <span className="text-[#4D515D] dark:text-slate-400">Mandatory Employer Overhead:</span>
                    <span className="font-bold text-[#5450EB] dark:text-indigo-400">{currentMetrics.overhead}</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBookDemo}
              className="mt-6 w-full py-3.5 rounded-full text-xs font-bold text-white bg-[#0C0D11] hover:bg-black dark:bg-white dark:text-[#0C0D11] transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Request Custom Market Benchmark</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= 3 MACRO TRENDS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#CCD1F8] dark:bg-indigo-950 text-[#0C0D11] dark:text-indigo-300">
            KEY 2026 FINDINGS
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#0C0D11] dark:text-white font-editorial">
            How Global Hiring Has Shifted in 2026
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              metric: '72% Lower Cost',
              title: 'EOR vs. Entity Formation Threshold',
              desc: 'Startups and scale-ups with fewer than 15 employees in a country save an average of $84,000 annually by using Flex EOR rather than establishing and maintaining foreign subsidiaries.',
            },
            {
              metric: '48h vs. 6 Months',
              title: 'Hiring Velocity Acceleration',
              desc: 'International companies utilizing direct EOR onboarding retain top tier engineers 3.4x more effectively by issuing statutory offer letters in under 48 hours without corporate delay.',
            },
            {
              metric: '34% Volume Growth',
              title: 'Stablecoin Payroll Adoption',
              desc: 'In regions with volatile local currencies or stringent banking limits (such as Argentina, Brazil, and Nigeria), over 65% of technical contractors prefer payout splits in USDC/USDT.',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-[#121316] rounded-3xl p-8 border border-[#DFE2EA] dark:border-slate-800 shadow-xs space-y-4">
              <div className="text-3xl font-black text-[#5450EB] font-editorial">{item.metric}</div>
              <h3 className="text-base font-bold text-[#0C0D11] dark:text-white">{item.title}</h3>
              <p className="text-xs sm:text-sm text-[#4D515D] dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

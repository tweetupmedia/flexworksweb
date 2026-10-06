import React from 'react';
import { SlidingWord } from '../SlidingWord.tsx';
import {
  Coins,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Wallet,
  Zap,
  Shield,
  FileText,
  Clock,
  Check,
  Building,
  CreditCard,
  Layers,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

interface StablecoinPayrollPageProps {
  onOpenBookDemo: () => void;
  onOpenPricing: () => void;
  onNavigateToTab: (tabId: string) => void;
}

export const StablecoinPayrollPage: React.FC<StablecoinPayrollPageProps> = ({
  onOpenBookDemo,
  onOpenPricing,
  onNavigateToTab,
}) => {
  return (
    <div className="font-sans-ui bg-[#F8F9FA] dark:bg-[#0D0E12] text-[#0C0D11] dark:text-slate-100 transition-colors">
      
      {/* ================= HERO SECTION (Matching Screenshot 7) ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-14 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading & Value Prop */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CCD1F8] dark:bg-indigo-950/80 text-[11px] font-black uppercase tracking-wider text-[#0C0D11] dark:text-indigo-300">
              <span className="w-2 h-2 rounded-full bg-[#CCE829]" />
              <span>STABLECOIN PAYROLL</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-[#0C0D11] dark:text-white font-editorial">
              Simplify Global{' '}
              <SlidingWord
                words={['Stablecoins', 'Web3 Payroll', 'Instant Payouts', 'Treasury']}
                highlightClassName="text-[#5450EB] dark:text-indigo-400 font-semibold"
              />
            </h1>

            <p className="text-base sm:text-lg text-[#4D515D] dark:text-slate-300 max-w-xl font-normal leading-relaxed">
              Optimize global payroll with our stablecoin payroll system, providing seamless, flexible, and compliant payments to international contractors using stablecoins like USDC and USDT.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBookDemo}
                className="px-8 py-4 rounded-full text-xs sm:text-sm font-bold text-white bg-[#0C0D11] hover:bg-black/90 dark:bg-white dark:text-[#0C0D11] shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2 active:scale-95"
              >
                <span>Schedule a Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenPricing}
                className="px-7 py-4 rounded-full text-xs sm:text-sm font-bold text-[#0C0D11] dark:text-white bg-white dark:bg-slate-900 border border-[#DFE2EA] dark:border-slate-800 hover:bg-[#F3F4F8] transition-colors cursor-pointer"
              >
                Explore Gas-Free Rails
              </button>
            </div>
          </div>

          {/* Right Column: Web3 Direct Payment Mockup (Matching Screenshot 7) */}
          <div className="lg:col-span-5 relative">
            <div className="p-6 sm:p-7 rounded-[32px] bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#CCD1F8] flex items-center justify-center font-black text-xs text-[#0C0D11]">
                    $
                  </div>
                  <span className="text-xs font-bold text-[#0C0D11] dark:text-white">Direct Smart Contract Payment</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">
                  Sub-5s Settlement
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#CCD1F8]/40 dark:bg-slate-900 border border-[#BFC6F5] space-y-2 text-xs">
                <div className="flex justify-between font-bold">
                  <span>Selected Network:</span>
                  <span className="text-[#5450EB]">Base / Polygon (L2)</span>
                </div>
                <div className="flex justify-between text-[#4D515D] dark:text-slate-400">
                  <span>Asset:</span>
                  <span className="font-extrabold text-[#0C0D11] dark:text-white">USD Coin (USDC)</span>
                </div>
                <div className="flex justify-between text-[#4D515D] dark:text-slate-400">
                  <span>Recipient Flex ID:</span>
                  <span className="font-mono text-[11px] text-[#0C0D11] dark:text-white">0x742d...44e</span>
                </div>
                <div className="pt-2 border-t border-[#BFC6F5] flex justify-between font-black">
                  <span>Estimated Network Fee:</span>
                  <span className="text-emerald-600">$0.001 (Zero Spread)</span>
                </div>
              </div>

              <button
                onClick={onOpenBookDemo}
                className="w-full py-3 rounded-2xl text-xs font-bold bg-[#0C0D11] text-white hover:bg-black/90 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-[#CCE829]" />
                <span>Execute Batch Disbursement →</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 3 REASONS WHY STABLECOINS (Screenshot 7) ================= */}
      <section className="py-12 border-y border-[#DFE2EA] dark:border-slate-800 bg-white dark:bg-[#111218]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-[#4D515D] dark:text-slate-300 leading-relaxed">
            <div>
              <p>As the Web3 economy continues to evolve, the need for more efficient and adaptable payroll solutions is accelerating rapidly across borders.</p>
            </div>
            <div>
              <p>Stablecoins like USDC and USDT make it simple and effective to pay employees and contractors without the hassle of currency conversions, high transaction fees, or banking holidays.</p>
            </div>
            <div>
              <p>Because these digital currencies are pegged to traditional fiat values, they offer a secure and dependable form of payment without the extreme volatility typically associated with cryptocurrencies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SAY GOODBYE TO SPREADSHEETS (Screenshot 7) ================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-normal text-[#0C0D11] dark:text-white font-editorial tracking-tight">
            <span className="text-[#5450EB] dark:text-indigo-400">Say goodbye</span> to spreadsheets and manual wallet to wallet transfers
          </h2>
          <p className="text-sm text-[#4D515D] dark:text-slate-400 max-w-xl mx-auto">
            Setting up your stablecoin payroll with Flex is easy, quick, and hassle-free. Our system ensures your team is paid promptly and accurately in their preferred stablecoin, without manual intervention.
          </p>
        </div>

        {/* Big Visual Banner Card */}
        <div className="p-8 sm:p-14 rounded-[32px] bg-[#CCD1F8] dark:bg-[#181B2B] border border-[#BFC6F5] dark:border-slate-800 max-w-4xl mx-auto space-y-4">
          <div className="text-xs font-black uppercase tracking-widest text-[#5450EB] dark:text-indigo-300">
            THE PARADIGM SHIFT
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0C0D11] dark:text-white font-editorial">
            The future of payroll is <span className="font-bold">stable, global, and borderless.</span>
          </h3>
        </div>
      </section>

      {/* ================= 4 DEEP DIVE MODULES (Screenshots 2 & 8) ================= */}
      <section className="py-16 border-t border-[#DFE2EA] dark:border-slate-800 bg-[#FAFAFC] dark:bg-[#0B0C0E] space-y-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Module 1: Streamlined payment processing and compliance */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-normal text-[#0C0D11] dark:text-white font-editorial">
                Streamlined payment processing and compliance
              </h3>
              <p className="text-xs sm:text-sm text-[#4D515D] dark:text-slate-400">
                Ensure efficient and compliant global transactions with our streamlined payment processing system.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-2xl bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800">
                  <div className="font-bold text-xs text-[#0C0D11] dark:text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#5450EB]" /> Instant mass payouts
                  </div>
                  <p className="text-xs text-[#4D515D] dark:text-slate-400 mt-1">Execute large-scale payroll transactions swiftly, ensuring all team members are paid simultaneously without delays.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800">
                  <div className="font-bold text-xs text-[#0C0D11] dark:text-white flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#5450EB]" /> Global compliance
                  </div>
                  <p className="text-xs text-[#4D515D] dark:text-slate-400 mt-1">Navigate international tax laws and regulations confidently, maintaining compliance at a local level for every contractor.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 rounded-3xl bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 shadow-sm space-y-3">
              <div className="text-xs font-bold text-slate-500">Live Payroll Ledger Preview</div>
              <div className="p-4 rounded-2xl bg-[#F8F9FA] dark:bg-slate-900 text-xs space-y-2">
                <div className="flex justify-between font-bold">
                  <span>Batch #412 (32 Recipients)</span>
                  <span className="text-emerald-600">Disbursed (USDC)</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Total Transferred:</span>
                  <span className="font-black text-[#0C0D11] dark:text-white">$142,500.00 USDC</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Average Settlement Time:</span>
                  <span className="font-bold text-purple-600">3.8 Seconds</span>
                </div>
              </div>
            </div>
          </div>

          {/* Module 2: Flexible and fully integrated payment solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 p-6 rounded-3xl bg-[#CCD1F8] dark:bg-[#181B2B] border border-[#BFC6F5] space-y-3">
              <div className="text-xs font-bold text-[#0C0D11] dark:text-white">Last Completed Transactions</div>
              <div className="p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900 text-xs space-y-2">
                <div className="flex justify-between font-semibold">
                  <span>Wire Transfer (USD)</span>
                  <span className="font-bold text-emerald-600">$5,100.40</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Milestone (USDC Base)</span>
                  <span className="font-bold text-purple-600">3,250.00</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Hourly Rate (USDT Polygon)</span>
                  <span className="font-bold text-purple-600">2,180.00</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-normal text-[#0C0D11] dark:text-white font-editorial">
                Flexible and fully integrated payment solutions
              </h3>
              <p className="text-xs sm:text-sm text-[#4D515D] dark:text-slate-400">
                Whether your treasury sits in a bank account or in a digital wallet, Flex's infrastructure enables all kinds of payments. Your team is free to choose how they cash out to their bank account or crypto wallet, all on their own schedule.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-2xl bg-white dark:bg-[#14161F] border border-[#DFE2EA]">
                  <div className="font-bold text-xs text-[#0C0D11] dark:text-white">Dual funding options</div>
                  <p className="text-xs text-[#4D515D] mt-1">Choose between traditional fiat (USD) and stablecoins (USDC) to fund your payroll, accommodating diverse treasuries.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-[#14161F] border border-[#DFE2EA]">
                  <div className="font-bold text-xs text-[#0C0D11] dark:text-white">Varied payment schedules</div>
                  <p className="text-xs text-[#4D515D] mt-1">Tailor payment schedules to each contractor's needs: one-time payments, recurring salaries, or milestone remuneration.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Module 3: Automated and secure transactions (Screenshot 2) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-normal text-[#0C0D11] dark:text-white font-editorial">
                Automated and secure transactions
              </h3>
              <p className="text-xs sm:text-sm text-[#4D515D] dark:text-slate-400">
                Benefit from secure and automated payment processes powered by advanced smart contract technology and cryptographic identity.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-2xl bg-white dark:bg-[#14161F] border border-[#DFE2EA]">
                  <div className="font-bold text-xs text-[#0C0D11] dark:text-white">Smart contract automation</div>
                  <p className="text-xs text-[#4D515D] mt-1">Utilize smart contracts to automate and streamline payment processes, with direct triggers for payroll upon completion of approved tasks.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-[#14161F] border border-[#DFE2EA]">
                  <div className="font-bold text-xs text-[#0C0D11] dark:text-white">Enhanced security with Flex ID</div>
                  <p className="text-xs text-[#4D515D] mt-1">Rely on Flex ID for secure transaction authorization, ensuring all payments are verified and protected against unauthorized access.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 rounded-3xl bg-white dark:bg-[#14161F] border border-[#DFE2EA] space-y-3">
              <div className="text-xs font-bold text-slate-500">Verified Contractor Credentials</div>
              <div className="p-4 rounded-2xl bg-[#F8F9FA] dark:bg-slate-900 border border-slate-200 text-xs flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#0C0D11] dark:text-white">Elijah.eth</div>
                  <div className="text-[10px] text-slate-500">Verified Flex ID Credential</div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  Passed Sanctions
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

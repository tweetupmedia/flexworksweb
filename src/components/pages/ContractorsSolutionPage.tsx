import React, { useState } from 'react';
import { SlidingWord } from '../SlidingWord.tsx';
import {
  Wallet,
  Globe2,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  CreditCard,
  ShieldCheck,
  Coins,
  DollarSign,
  Sparkles,
  FileCheck,
  Clock,
  Briefcase,
  Layers,
  ChevronDown,
} from 'lucide-react';

interface ContractorsSolutionPageProps {
  onOpenBookDemo: () => void;
  onOpenPricing: () => void;
  onNavigateToTab: (tabId: string) => void;
}

export const ContractorsSolutionPage: React.FC<ContractorsSolutionPageProps> = ({
  onOpenBookDemo,
  onOpenPricing,
  onNavigateToTab,
}) => {
  const [selectedCurrency, setSelectedCurrency] = useState<'USD' | 'EUR' | 'USDC' | 'GBP'>('USDC');
  const [payoutOption, setPayoutOption] = useState<'bank' | 'crypto'>('crypto');

  return (
    <div className="font-sans-ui bg-[#FAFAFC] dark:bg-[#0B0C0E] text-[#0C0D11] dark:text-slate-100 transition-colors">
      
      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-12 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column */}
          <div className="lg:col-span-7 relative rounded-[32px] bg-[#CCD1F8] dark:bg-[#181B2B] text-[#0C0D11] dark:text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between border border-[#BFC6F5] dark:border-slate-800 shadow-xs overflow-hidden">
            
            <div className="absolute top-6 right-6 w-11 h-11 rounded-full bg-[#CCE829] shadow-md flex items-center justify-center text-[#0C0D11] rotate-12 transition-transform hover:rotate-45 cursor-pointer">
              <Sparkles className="w-5 h-5 fill-current" />
            </div>

            <div className="self-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/80 text-[11px] font-bold text-[#0C0D11] dark:text-white shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#5450EB] animate-pulse" />
                <span>FOR INDEPENDENT CONTRACTORS & FREELANCERS</span>
              </div>
            </div>

            <div className="my-8 space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-normal leading-[1.08] tracking-tight font-editorial">
                Simplify Global{' '}
                <SlidingWord
                  words={['Contractors', 'Invoicing', 'Tax Compliance', 'Payouts']}
                  highlightClassName="text-[#5450EB] dark:text-indigo-400 font-semibold"
                />
              </h1>
              <p className="text-base sm:text-lg text-[#323642] dark:text-slate-300 max-w-xl font-normal leading-relaxed">
                Work for clients worldwide without opening foreign entities or surrendering 4% of your hard-earned income to international wire fees. Choose exactly how you want your funds disbursed: direct local bank deposit, stablecoins (USDC/USDT), or crypto wallets.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenBookDemo}
                className="px-8 py-4 rounded-full text-xs sm:text-sm font-bold text-white bg-[#0C0D11] hover:bg-black dark:bg-white dark:text-[#0C0D11] shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2 active:scale-95"
              >
                <span>Create Contractor Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigateToTab('aor')}
                className="px-7 py-4 rounded-full text-xs sm:text-sm font-bold text-[#0C0D11] dark:text-white bg-white dark:bg-slate-900 border border-[#DFE2EA] dark:border-slate-800 hover:bg-[#F3F4F8] transition-colors cursor-pointer"
              >
                Learn About Flex Shield (AOR)
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Multi-Currency Contractor Wallet Preview */}
          <div className="lg:col-span-5 bg-white dark:bg-[#121316] rounded-[32px] p-6 sm:p-8 border border-[#DFE2EA] dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E3E5EB] dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#CCD1F8] flex items-center justify-center font-bold text-xs text-[#0C0D11]">
                    AC
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0C0D11] dark:text-white">Alex Chen</div>
                    <div className="text-[10px] text-[#4D515D] dark:text-slate-400">Verified Contractor • Flex ID</div>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  W-8BEN Active
                </span>
              </div>

              {/* Wallet Balance Card */}
              <div className="mt-5 p-5 rounded-2xl bg-[#F8F9FA] dark:bg-slate-900 border border-[#DFE2EA] dark:border-slate-800 space-y-3">
                <div className="flex justify-between items-center text-xs text-[#4D515D] dark:text-slate-400">
                  <span>Available Balance</span>
                  <span className="font-mono text-[11px] font-bold text-[#5450EB]">Instant 0% Withdrawal</span>
                </div>
                <div className="text-3xl font-black text-[#0C0D11] dark:text-white font-editorial">
                  $14,850.00 <span className="text-sm font-sans text-[#4D515D]">USD</span>
                </div>

                {/* Sub balances */}
                <div className="grid grid-cols-4 gap-2 pt-2 border-t border-[#DFE2EA] dark:border-slate-800 text-center">
                  {[
                    { curr: 'USDC', bal: '8,500' },
                    { curr: 'USD', bal: '4,200' },
                    { curr: 'EUR', bal: '1,850' },
                    { curr: 'GBP', bal: '300' },
                  ].map((b, i) => (
                    <div key={i} className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-[#DFE2EA] dark:border-slate-700">
                      <div className="text-[10px] font-bold text-[#4D515D] dark:text-slate-400">{b.curr}</div>
                      <div className="text-xs font-black text-[#0C0D11] dark:text-white">{b.bal}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instant Payout Method Selector */}
              <div className="mt-5 space-y-3">
                <label className="text-xs font-bold text-[#0D0E11] dark:text-white block">
                  Select Payout Destination:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setPayoutOption('crypto')}
                    className={`p-3 rounded-2xl border text-left transition-colors cursor-pointer ${
                      payoutOption === 'crypto'
                        ? 'border-[#5450EB] bg-[#CCD1F8]/30 dark:bg-indigo-950/40 text-[#0C0D11] dark:text-white font-bold'
                        : 'border-[#DFE2EA] dark:border-slate-800 hover:bg-[#F8F9FA] text-[#4A4D57]'
                    }`}
                  >
                    <div className="text-xs flex items-center gap-1.5">
                      <Coins className="w-3.5 h-3.5 text-[#5450EB]" />
                      <span>Web3 Wallet</span>
                    </div>
                    <div className="text-[10px] text-[#4D515D] mt-1">USDC / USDT in &lt; 5s</div>
                  </button>

                  <button
                    onClick={() => setPayoutOption('bank')}
                    className={`p-3 rounded-2xl border text-left transition-colors cursor-pointer ${
                      payoutOption === 'bank'
                        ? 'border-[#5450EB] bg-[#CCD1F8]/30 dark:bg-indigo-950/40 text-[#0C0D11] dark:text-white font-bold'
                        : 'border-[#DFE2EA] dark:border-slate-800 hover:bg-[#F8F9FA] text-[#4A4D57]'
                    }`}
                  >
                    <div className="text-xs flex items-center gap-1.5">
                      <CreditCard className="w-3.5 h-3.5 text-[#5450EB]" />
                      <span>Local Bank Account</span>
                    </div>
                    <div className="text-[10px] text-[#4D515D] mt-1">SEPA / Pix / ACH same day</div>
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBookDemo}
              className="mt-6 w-full py-3.5 rounded-full text-xs font-bold text-white bg-[#0C0D11] hover:bg-black dark:bg-white dark:text-[#0C0D11] transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Withdraw Funds Without Fees</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= 4 CONTRACTOR ADVANTAGES ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#CCD1F8] dark:bg-indigo-950 text-[#0C0D11] dark:text-indigo-300">
            CONTRACTOR SUPERPOWERS
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#0C0D11] dark:text-white font-editorial">
            Everything You Need to Run Your Global Career
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Multi-Currency Flex Wallet',
              desc: 'Hold USD, EUR, GBP, USDC, and USDT in one account. Swap between fiat and digital assets at true mid-market rates without hidden spreads.',
              icon: Wallet,
            },
            {
              title: 'Automated Tax Compliance',
              desc: 'Generate signed W-8BEN, W-9, and localized certificates of residence in one click so clients pay you compliantly without friction.',
              icon: FileCheck,
            },
            {
              title: 'Guaranteed Escrow Security',
              desc: 'Flex AOR holds project milestone funds in escrow. You never have to worry about unpaid invoices after delivering high quality work.',
              icon: ShieldCheck,
            },
            {
              title: 'Decentralized Flex ID',
              desc: 'Pass identity verification once. Carry your verified contractor reputation, certifications, and compliance status across any employer.',
              icon: Sparkles,
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white dark:bg-[#121316] rounded-3xl p-6 border border-[#DFE2EA] dark:border-slate-800 shadow-xs space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-[#CCD1F8] text-[#0C0D11] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0C0D11] dark:text-white">{item.title}</h3>
                <p className="text-xs text-[#4D515D] dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-[32px] bg-[#CCD1F8] dark:bg-[#181B2B] p-8 sm:p-14 border border-[#BFC6F5] dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-normal text-[#0C0D11] dark:text-white font-editorial">
              Invite Your Client to Pay You via Flex
            </h2>
            <p className="text-sm text-[#323642] dark:text-slate-300">
              Save your client hours of legal paperwork and unlock instant, fee-free payouts directly to your preferred account.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenBookDemo}
              className="px-8 py-4 rounded-full text-xs sm:text-sm font-bold text-white bg-[#0C0D11] hover:bg-black transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Get Started as Contractor</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

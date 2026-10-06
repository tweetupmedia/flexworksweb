import React, { useState } from 'react';
import { TrustedByMarquee } from './TrustedByMarquee.tsx';
import { SlidingWord } from './SlidingWord.tsx';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  Shield,
  Layers,
  Sparkles,
  Users,
  Building2,
  FileCheck,
  Calculator,
  Compass,
  FileText,
  Clock,
  Briefcase,
  Check,
  TrendingDown,
  Info,
  Coins,
  CreditCard,
  Wallet,
  Zap,
  Lock,
  Download,
  BookOpen,
  Send,
  Building,
  DollarSign,
  Repeat,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

interface PlatformHeroProps {
  isDark: boolean;
  onOpenBookDemo: () => void;
  onOpenPricing: () => void;
  onNavigateToTab: (tabId: string) => void;
}

export const PlatformHero: React.FC<PlatformHeroProps> = ({
  isDark,
  onOpenBookDemo,
  onOpenPricing,
  onNavigateToTab,
}) => {
  // Ebook lead capture state
  const [ebookEmail, setEbookEmail] = useState('');
  const [ebookSubmitted, setEbookSubmitted] = useState(false);
  const [isSubmittingEbook, setIsSubmittingEbook] = useState(false);

  const handleEbookSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ebookEmail) return;
    setIsSubmittingEbook(true);
    try {
      await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Ebook Requester',
          email: ebookEmail,
          company: 'Global Workforce Reader',
          teamSize: '10-50',
          primaryNeed: 'Hybrid Payroll Ebook & Guide',
        }),
      });
      setEbookSubmitted(true);
    } catch (err) {
      console.error(err);
      setEbookSubmitted(true);
    } finally {
      setIsSubmittingEbook(false);
    }
  };

  return (
    <div className="relative overflow-hidden font-sans-ui bg-[#FAFAFC] dark:bg-[#0B0C0E] transition-colors duration-200">
      
      {/* =========================================================================
          SECTION 1: HERO SPLIT BANNER (2-Column Desktop Grid)
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-10 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column (7 cols): Editorial Typography & Direct Value Prop */}
          <div className="lg:col-span-7 relative rounded-[28px] sm:rounded-[32px] bg-[#CCD1F8] dark:bg-[#181B2B] text-[#0C0D11] dark:text-slate-100 p-8 sm:p-12 lg:p-14 flex flex-col justify-between border border-[#BFC6F5] dark:border-slate-800 shadow-xs overflow-hidden">
            
            {/* Concentric Circular Background Pattern */}
            <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full border border-indigo-400/20 dark:border-indigo-400/10 pointer-events-none" />
            <div className="absolute -top-28 -right-28 w-96 h-96 rounded-full border border-indigo-400/15 dark:border-indigo-400/10 pointer-events-none" />
            
            {/* High-Contrast Faded Lime Star Badge (#CCE829) */}
            <div className="absolute top-6 right-6 w-11 h-11 rounded-full bg-[#CCE829] shadow-md flex items-center justify-center text-[#0C0D11] rotate-12 transition-transform hover:rotate-45 cursor-pointer">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2L14.39 8.26L21 9.27L16.27 13.88L17.5 20.47L12 17.27L6.5 20.47L7.73 13.88L3 9.27L9.61 8.26L12 2Z" />
              </svg>
            </div>

            {/* Top Pill Tag */}
            <div className="self-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/80 text-[11px] font-bold text-[#0C0D11] dark:text-white shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#5450EB] animate-pulse" />
                <span>Global Hybrid Contractor Pay • Flex Engine</span>
              </div>
            </div>

            {/* Editorial Serif Headline & Sub-headline with Refined Typographic Hierarchy */}
            <div className="my-7 sm:my-9 lg:my-10">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.12] sm:leading-[1.1] font-normal tracking-[-0.02em] text-[#0C0D11] dark:text-white font-editorial font-serif [font-family:var(--font-serif)] mb-7 sm:mb-8 lg:mb-10">
                Simplify Global{' '}
                <SlidingWord
                  words={['Workforce', 'Payments', 'Compliance', 'Expansion']}
                  highlightClassName="text-[#5450EB] dark:text-indigo-400 font-semibold"
                />
              </h1>

              <p className="text-base sm:text-lg lg:text-[18px] text-[#2C303B] dark:text-slate-200 max-w-xl font-normal leading-[1.68] font-sans-ui tracking-normal">
                Hire, manage, and compensate international contractors and employees in seconds. Bridge corporate bank rails (ACH, SEPA, SWIFT) with on-chain stablecoin liquidity (USDC, USDT) with zero FX spread markups and ironclad compliance across 190+ countries.
              </p>
            </div>

            {/* CTAs & Feature Checklist */}
            <div className="space-y-6 pt-2">
              <div className="flex flex-wrap items-center gap-3.5">
                {/* Primary Black Pill CTA */}
                <button
                  onClick={onOpenBookDemo}
                  className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#0C0D11] hover:bg-black/90 dark:bg-white dark:text-[#0C0D11] dark:hover:bg-slate-100 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-95 flex items-center gap-2"
                >
                  <span>Schedule a Demo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                {/* Secondary Outlined White Pill CTA */}
                <button
                  onClick={onOpenPricing}
                  className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#0C0D11] dark:text-white bg-white dark:bg-slate-900 border border-[#BFC6F5] dark:border-slate-700 hover:bg-[#F8F9FA] dark:hover:bg-slate-800 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex items-center gap-2"
                >
                  <Calculator className="w-4 h-4 text-[#5450EB]" />
                  <span>See Pricing & Calculator</span>
                </button>
              </div>

              {/* 3 Value Pillars */}
              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-semibold text-[#0C0D11] dark:text-slate-200">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5450EB] shrink-0" />
                  <span>Zero Entity Setup</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5450EB] shrink-0" />
                  <span>100+ Currencies Supported</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5450EB] shrink-0" />
                  <span>Sub-5 Second Settlement</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Live Payout Schedule & Multi-Account Disbursement Mockup */}
          <div className="lg:col-span-5 relative rounded-[28px] sm:rounded-[32px] bg-white dark:bg-[#121316] border border-[#E3E5EB] dark:border-slate-800 shadow-sm p-6 sm:p-7 flex flex-col justify-between space-y-6">
            
            {/* Top Mockup Header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#F0F2F5] dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#D8DBFD] flex items-center justify-center font-black text-xs text-[#0D0E11]">
                    W
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#0D0E11] dark:text-white">Active Disbursement Queue</h3>
                    <div className="text-[10px] text-[#4A4D57] dark:text-slate-400">Semi-Monthly Global Batch #942</div>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Ready to Settle
                </span>
              </div>

              {/* Treasury Balances */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="p-3.5 rounded-2xl bg-[#F8F9FA] dark:bg-slate-800/80 border border-[#E3E5EB]/60 dark:border-slate-700/60">
                  <div className="text-[10px] font-bold text-[#4A4D57] uppercase tracking-wider">USD Fiat Treasury</div>
                  <div className="text-base font-black text-[#0D0E11] dark:text-white mt-1">$124,500.00</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">JPMorgan Chase ACH</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#EAEBFA] dark:bg-slate-800/80 border border-[#D8DBFD] dark:border-slate-700/60">
                  <div className="text-[10px] font-bold text-[#5C55FE] uppercase tracking-wider">USDC Smart Vault</div>
                  <div className="text-base font-black text-[#0D0E11] dark:text-white mt-1">84,200 USDC</div>
                  <div className="text-[10px] text-indigo-600 dark:text-indigo-400 mt-0.5">Ethereum Multi-Sig</div>
                </div>
              </div>

              {/* Sample Contractor Disbursement Items */}
              <div className="mt-5 space-y-2.5">
                <div className="text-[10px] font-black uppercase tracking-wider text-[#4A4D57] dark:text-slate-400">
                  Pending Payout Distribution (Sample)
                </div>

                <div className="p-3 rounded-xl bg-[#FAFAFC] dark:bg-slate-900 border border-[#E3E5EB] dark:border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-base">🇧🇷</span>
                    <div>
                      <div className="font-bold text-[#0D0E11] dark:text-white">Sofia Silva</div>
                      <div className="text-[10px] text-[#4A4D57]">70% BRL Bank • 30% USDC</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-[#0D0E11] dark:text-white">$7,500.00</div>
                    <div className="text-[10px] font-semibold text-emerald-600">Auto-split approved</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FAFAFC] dark:bg-slate-900 border border-[#E3E5EB] dark:border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-base">🇩🇪</span>
                    <div>
                      <div className="font-bold text-[#0D0E11] dark:text-white">Lukas Weber</div>
                      <div className="text-[10px] text-[#4A4D57]">100% EUR SEPA Instant</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-[#0D0E11] dark:text-white">€6,800.00</div>
                    <div className="text-[10px] font-semibold text-emerald-600">SEPA Instant Rail</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FAFAFC] dark:bg-slate-900 border border-[#E3E5EB] dark:border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-base">🇯🇵</span>
                    <div>
                      <div className="font-bold text-[#0D0E11] dark:text-white">Kenji Sato</div>
                      <div className="text-[10px] text-[#4A4D57]">100% USDT Polygon</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-[#0D0E11] dark:text-white">6,200 USDT</div>
                    <div className="text-[10px] font-semibold text-emerald-600">Circle Rail • Instant Payout</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Guarantee Badges */}
            <div className="pt-4 border-t border-[#F0F2F5] dark:border-slate-800 flex items-center justify-between text-[11px] font-bold text-[#4A4D57] dark:text-slate-300">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#5C55FE]" />
                <span>Zero Misclassification Guarantee</span>
              </div>
              <span className="text-emerald-600">Audited W-8/W-9</span>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          TRUSTED BY MARQUEE: PARTNER AUTHORITY (ADP, Circle, Global EOR Services, Payoneer, Papaya Global)
          ========================================================================= */}
      <TrustedByMarquee />

      {/* =========================================================================
          SECTION 2: METRIC PROOF BAR (3-Column Stats Bar)
          ========================================================================= */}
      <section className="w-full border-y border-[#E3E5EB] dark:border-slate-800 bg-white dark:bg-[#0E0F12] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#E3E5EB] dark:divide-slate-800">
            
            <div className="pt-4 md:pt-0 px-4">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0D0E11] dark:text-white font-editorial tracking-tight">
                100+
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#4A4D57] dark:text-slate-300 mt-2">
                Cryptocurrencies & Digital Assets Supported
              </div>
              <div className="text-[11px] text-[#717684] dark:text-slate-500 mt-1">
                USDC, USDT, ETH, SOL, POL, BASE, OP, AVAX, ARB
              </div>
            </div>

            <div className="pt-4 md:pt-0 px-4">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0D0E11] dark:text-white font-editorial tracking-tight">
                90+
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#4A4D57] dark:text-slate-300 mt-2">
                Local Currencies & Real-Time FX Rails
              </div>
              <div className="text-[11px] text-[#717684] dark:text-slate-500 mt-1">
                USD, EUR, GBP, JPY, CAD, AUD, BRL, SGD, CHF with 0% spread
              </div>
            </div>

            <div className="pt-4 md:pt-0 px-4">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0D0E11] dark:text-white font-editorial tracking-tight">
                190+
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#4A4D57] dark:text-slate-300 mt-2">
                Countries Covered with Zero Entity Burden
              </div>
              <div className="text-[11px] text-[#717684] dark:text-slate-500 mt-1">
                Compliant W-8BEN, W-9, and GDPR tax audit trails
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: 4-STEP ONBOARDING PROCESS GRID ("Say goodbye to spreadsheets...")
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#EBF0FF] dark:bg-[#141624] border-b border-[#E3E5EB] dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#5C55FE] dark:text-indigo-400">
              FRICTIONLESS CONTRACTOR LIFECYCLE
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#0D0E11] dark:text-white font-editorial tracking-tight">
              Say goodbye to spreadsheets, wire delays, and FX penalties
            </h2>
            <p className="text-sm text-[#4A4D57] dark:text-slate-300">
              Run your entire international contractor operations in four automated, compliant steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#121316] border border-[#E3E5EB] dark:border-slate-800 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#D8DBFD] text-[#0D0E11] font-black text-sm flex items-center justify-center mb-5">
                  1
                </div>
                <h3 className="text-base font-bold text-[#0D0E11] dark:text-white mb-2">
                  Onboard Compliantly
                </h3>
                <p className="text-xs text-[#4A4D57] dark:text-slate-400 leading-relaxed">
                  Generate localized IP assignment agreements, non-disclosure contracts, and automated W-8BEN/W-9 tax classification in under 60 seconds.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] font-bold text-[#5C55FE]">
                Zero Misclassification →
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#121316] border border-[#E3E5EB] dark:border-slate-800 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#D8DBFD] text-[#0D0E11] font-black text-sm flex items-center justify-center mb-5">
                  2
                </div>
                <h3 className="text-base font-bold text-[#0D0E11] dark:text-white mb-2">
                  Fund in USD or Crypto
                </h3>
                <p className="text-xs text-[#4A4D57] dark:text-slate-400 leading-relaxed">
                  Deposit via domestic bank transfer (ACH, FedNow, SEPA) or send USDC, USDT, or ETH directly from corporate multi-sig wallets like Safe.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] font-bold text-[#5C55FE]">
                Dual Treasury Support →
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#121316] border border-[#E3E5EB] dark:border-slate-800 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#D8DBFD] text-[#0D0E11] font-black text-sm flex items-center justify-center mb-5">
                  3
                </div>
                <h3 className="text-base font-bold text-[#0D0E11] dark:text-white mb-2">
                  Schedule Mass Payouts
                </h3>
                <p className="text-xs text-[#4A4D57] dark:text-slate-400 leading-relaxed">
                  Set recurring bi-weekly schedules, milestone sign-offs, or execute 1-click batch disbursements to hundreds of global contractors simultaneously.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] font-bold text-[#5C55FE]">
                Automated Batches →
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#121316] border border-[#E3E5EB] dark:border-slate-800 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#D8DBFD] text-[#0D0E11] font-black text-sm flex items-center justify-center mb-5">
                  4
                </div>
                <h3 className="text-base font-bold text-[#0D0E11] dark:text-white mb-2">
                  Custom Contractor Payout
                </h3>
                <p className="text-xs text-[#4A4D57] dark:text-slate-400 leading-relaxed">
                  Contractors decide their preferred payout split: deposit directly to their local domestic bank account, their crypto wallet, or a custom ratio.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] font-bold text-[#5C55FE]">
                Flexible Withdrawal →
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: EDITORIAL COMPARISON - MODERN RAIL VS. LEGACY BANKING
          (Replaces dark digital gas meter / crypto dashboard with Workssphere editorial cards)
          ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest bg-[#0D0E11] text-white dark:bg-white dark:text-[#0D0E11] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#D2F801]" />
            INFRASTRUCTURE COMPARISON
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#0D0E11] dark:text-white font-editorial tracking-tight leading-[1.15]">
            A generational leap beyond legacy cross-border banking
          </h2>
          <p className="text-base text-[#475569] dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Eliminate correspondent banking hops, opaque currency conversion spreads, and manual compliance bottlenecks with Flex’s unified hybrid rails.
          </p>
        </div>

        {/* 2-Column Editorial Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Legacy Banking & Bureaucracy (Pure White Card with Slate Accent) */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-[32px] bg-white dark:bg-[#121316] border border-[#E2E8F0] dark:border-slate-800 shadow-xs flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-slate-800">
                <div className="space-y-1">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#64748B] dark:text-slate-400">
                    TRADITIONAL FINANCIAL SYSTEM
                  </span>
                  <h3 className="text-2xl font-normal font-editorial text-[#0D0E11] dark:text-white">
                    Legacy Banking & SWIFT
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>

              {/* Comparison Line Items */}
              <div className="space-y-4 text-xs sm:text-[13px]">
                <div className="p-4 rounded-2xl bg-[#FAFAFC] dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-1">
                  <div className="font-bold text-[#0D0E11] dark:text-white flex items-center justify-between">
                    <span>Settlement Timeline</span>
                    <span className="text-rose-600 font-extrabold">3 to 7 Business Days</span>
                  </div>
                  <p className="text-[#64748B] dark:text-slate-400 text-xs">
                    Trapped in intermediary correspondent bank hops with zero real-time status visibility.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAFAFC] dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-1">
                  <div className="font-bold text-[#0D0E11] dark:text-white flex items-center justify-between">
                    <span>FX Spreads & Intermediary Fees</span>
                    <span className="text-rose-600 font-extrabold">3.5% to 6.2% Markup</span>
                  </div>
                  <p className="text-[#64748B] dark:text-slate-400 text-xs">
                    Hidden conversion margins plus $25–$65 unexpected correspondent wire deductions.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAFAFC] dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-1">
                  <div className="font-bold text-[#0D0E11] dark:text-white flex items-center justify-between">
                    <span>Bank Holidays & Weekend Lockouts</span>
                    <span className="text-rose-600 font-extrabold">Wires Frozen</span>
                  </div>
                  <p className="text-[#64748B] dark:text-slate-400 text-xs">
                    Disbursements completely halted during weekends, Federal Reserve, and foreign holidays.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAFAFC] dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-1">
                  <div className="font-bold text-[#0D0E11] dark:text-white flex items-center justify-between">
                    <span>Tax & Contractor Audits</span>
                    <span className="text-[#64748B] dark:text-slate-400 font-extrabold">Fragmented PDFs</span>
                  </div>
                  <p className="text-[#64748B] dark:text-slate-400 text-xs">
                    Manual email chains for W-8BENs, high risk of misclassification exposure.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-[#64748B] dark:text-slate-400">
              <span>Overall Efficiency Score</span>
              <span className="font-bold text-[#0D0E11] dark:text-white">Legacy Baseline</span>
            </div>
          </div>

          {/* Card 2: Flex Modern Hybrid Rail (Soft Lavender Workssphere Card) */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-[32px] bg-[#D8DBFD] dark:bg-[#151829] border border-[#BFC6F5] dark:border-slate-700 shadow-sm flex flex-col justify-between relative overflow-hidden text-[#0D0E11] dark:text-white">
            
            {/* Background Architectural Wireframe Graphic Motif */}
            <div className="pointer-events-none absolute -right-16 -top-16 w-64 h-64 opacity-20 dark:opacity-10">
              <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full text-[#5450EB]">
                <circle cx="100" cy="100" r="90" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="70" strokeWidth="1.5" />
                <circle cx="100" cy="100" r="50" strokeWidth="1" />
                <circle cx="100" cy="100" r="30" strokeWidth="1.5" strokeDasharray="2 2" />
                <line x1="10" y1="100" x2="190" y2="100" strokeWidth="1" />
                <line x1="100" y1="10" x2="100" y2="190" strokeWidth="1" />
              </svg>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between pb-5 border-b border-indigo-200/70 dark:border-slate-700">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#5450EB] dark:text-indigo-300">
                      THE WORKSSPHERE STANDARD
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-[#0D0E11] text-[#D2F801] dark:bg-white dark:text-[#0D0E11] shadow-xs">
                      ● ACTIVE
                    </span>
                  </div>
                  <h3 className="text-2xl font-normal font-editorial text-[#0D0E11] dark:text-white">
                    Flex Modern Hybrid Rails
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 text-[#0D0E11] dark:text-white flex items-center justify-center shadow-xs">
                  <Zap className="w-5 h-5 text-[#5450EB] dark:text-indigo-400" />
                </div>
              </div>

              {/* Comparison Line Items */}
              <div className="space-y-4 text-xs sm:text-[13px]">
                <div className="p-4 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-white/80 dark:border-slate-700 shadow-xs space-y-1">
                  <div className="font-bold text-[#0D0E11] dark:text-white flex items-center justify-between">
                    <span>Settlement Timeline</span>
                    <span className="text-emerald-600 font-black">&lt; 5 Seconds Direct</span>
                  </div>
                  <p className="text-[#475569] dark:text-slate-300 text-xs">
                    Circle USDC digital dollar rails & instant domestic clearing (SEPA, FedNow, Pix, ACH).
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-white/80 dark:border-slate-700 shadow-xs space-y-1">
                  <div className="font-bold text-[#0D0E11] dark:text-white flex items-center justify-between">
                    <span>FX Spreads & Intermediary Fees</span>
                    <span className="text-emerald-600 font-black">0.00% Wholesale Spread</span>
                  </div>
                  <p className="text-[#475569] dark:text-slate-300 text-xs">
                    Direct mid-market execution with zero deduction penalties on recipient balances.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-white/80 dark:border-slate-700 shadow-xs space-y-1">
                  <div className="font-bold text-[#0D0E11] dark:text-white flex items-center justify-between">
                    <span>Bank Holidays & Weekend Lockouts</span>
                    <span className="text-emerald-600 font-black">24/7/365 Continuous</span>
                  </div>
                  <p className="text-[#475569] dark:text-slate-300 text-xs">
                    Disburse day or night across 190+ jurisdictions without banking calendar interruptions.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-white/80 dark:border-slate-700 shadow-xs space-y-1">
                  <div className="font-bold text-[#0D0E11] dark:text-white flex items-center justify-between">
                    <span>Tax & Contractor Audits</span>
                    <span className="text-emerald-600 font-black">Automated & Audited</span>
                  </div>
                  <p className="text-[#475569] dark:text-slate-300 text-xs">
                    Instant verified W-8BEN/W-9 generation, Flex ID credentials, and $100k indemnity guarantee.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-indigo-200/70 dark:border-slate-700 flex items-center justify-between text-xs font-bold relative z-10">
              <span className="text-[#5450EB] dark:text-indigo-300">Cost & Velocity Advantage</span>
              <span className="px-3 py-1 rounded-full bg-[#0D0E11] text-white dark:bg-white dark:text-[#0D0E11]">
                94% Lower Cost • 99.8% Faster
              </span>
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION 5: 3-CARD MODULAR GRID WITH ARCHITECTURAL WIREFRAMES
          (Directly matching Workssphere Framer card architecture)
          ========================================================================= */}
      <section className="py-20 sm:py-24 border-t border-surface-border dark:border-slate-800 bg-surface-bg dark:bg-[#0B0C0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-primary dark:text-indigo-400">
              ENGINEERED FOR SCALE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal text-text-main dark:text-white font-editorial tracking-tight">
              Modular infrastructure for global workforce velocity
            </h2>
            <p className="text-sm sm:text-base text-text-muted dark:text-slate-400">
              Three synchronized systems purpose-built to eliminate administrative friction and legal liability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Modular Card 1: Direct Entity & EOR Network */}
            <div className="bg-surface-card dark:bg-[#121316] border border-surface-border dark:border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:border-brand-primary/40 transition-colors flex flex-col justify-between relative overflow-hidden group">
              
              {/* Architectural Wireframe Header Visual */}
              <div className="h-44 rounded-2xl bg-surface-subtle dark:bg-slate-900 border border-surface-border dark:border-slate-800 flex items-center justify-center relative overflow-hidden mb-6 p-4">
                <svg viewBox="0 0 160 120" fill="none" stroke="currentColor" className="w-36 h-28 text-brand-primary stroke-[1.2]">
                  {/* Wireframe Globe / Entity Coordinate Grid */}
                  <ellipse cx="80" cy="60" rx="55" ry="40" strokeDasharray="3 3" />
                  <ellipse cx="80" cy="60" rx="30" ry="40" />
                  <line x1="25" y1="60" x2="135" y2="60" />
                  <line x1="80" y1="20" x2="80" y2="100" />
                  {/* Entity Node Markers */}
                  <circle cx="55" cy="45" r="3.5" fill="currentColor" />
                  <circle cx="105" cy="50" r="3.5" fill="currentColor" />
                  <circle cx="80" cy="75" r="3.5" fill="currentColor" />
                  <path d="M55 45L80 75L105 50" strokeWidth="1" strokeDasharray="2 2" />
                </svg>
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-tint text-brand-dark">
                  150+ Direct Entities
                </div>
              </div>

              <div className="space-y-2">
                <span className="inline-block bg-brand-tint text-brand-dark text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2">
                  EOR Infrastructure
                </span>
                <h3 className="text-xl font-semibold text-text-main dark:text-white tracking-tight group-hover:text-brand-primary transition-colors">
                  Direct Global EOR Network
                </h3>
                <p className="text-text-muted text-sm mt-2 leading-relaxed dark:text-slate-400">
                  Hire statutory employees in 150+ countries without establishing foreign entities. Powered by our primary partnership with Global EOR Services.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-surface-border dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-brand-primary">
                <button
                  onClick={() => onNavigateToTab('eor')}
                  className="inline-flex items-center gap-1.5 hover:underline cursor-pointer"
                >
                  <span>Explore EOR Jurisdictions</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Modular Card 2: Circle-Powered Hybrid Treasury */}
            <div className="bg-surface-card dark:bg-[#121316] border border-surface-border dark:border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:border-brand-primary/40 transition-colors flex flex-col justify-between relative overflow-hidden group">
              
              {/* Architectural Wireframe Header Visual */}
              <div className="h-44 rounded-2xl bg-surface-subtle dark:bg-slate-900 border border-surface-border dark:border-slate-800 flex items-center justify-center relative overflow-hidden mb-6 p-4">
                <svg viewBox="0 0 160 120" fill="none" stroke="currentColor" className="w-36 h-28 text-brand-primary stroke-[1.2]">
                  {/* Dual Orbital Concentric Circles for Fiat & Digital Dollar */}
                  <circle cx="55" cy="60" r="32" strokeDasharray="4 4" />
                  <circle cx="105" cy="60" r="32" />
                  {/* Central Liquidity Intersection */}
                  <path d="M80 40C88 48 88 72 80 80C72 72 72 48 80 40Z" fill="currentColor" fillOpacity="0.15" />
                  <circle cx="55" cy="60" r="4" fill="currentColor" />
                  <circle cx="105" cy="60" r="4" fill="currentColor" />
                  <line x1="55" y1="60" x2="105" y2="60" strokeWidth="1.5" />
                </svg>
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-tint text-brand-dark">
                  Sub-5s Settlement
                </div>
              </div>

              <div className="space-y-2">
                <span className="inline-block bg-brand-tint text-brand-dark text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2">
                  Treasury Rails
                </span>
                <h3 className="text-xl font-semibold text-text-main dark:text-white tracking-tight group-hover:text-brand-primary transition-colors">
                  Circle USDC Treasury Rails
                </h3>
                <p className="text-text-muted text-sm mt-2 leading-relaxed dark:text-slate-400">
                  Bridge institutional USD/EUR fiat treasuries with programmable digital dollars. Disburse globally in seconds with wholesale zero-markup foreign exchange.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-surface-border dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-brand-primary">
                <button
                  onClick={() => onNavigateToTab('stablecoin')}
                  className="inline-flex items-center gap-1.5 hover:underline cursor-pointer"
                >
                  <span>View Settlement Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Modular Card 3: Shield Compliance & Flex ID */}
            <div className="bg-surface-card dark:bg-[#121316] border border-surface-border dark:border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:border-brand-primary/40 transition-colors flex flex-col justify-between relative overflow-hidden group">
              
              {/* Architectural Wireframe Header Visual */}
              <div className="h-44 rounded-2xl bg-surface-subtle dark:bg-slate-900 border border-surface-border dark:border-slate-800 flex items-center justify-center relative overflow-hidden mb-6 p-4">
                <svg viewBox="0 0 160 120" fill="none" stroke="currentColor" className="w-36 h-28 text-brand-primary stroke-[1.2]">
                  {/* Architectural Geometric Shield & Verification Calipers */}
                  <path d="M80 20L120 38V68C120 90 80 105 80 105C80 105 40 90 40 68V38L80 20Z" />
                  <path d="M68 62L76 70L94 52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="20" y1="20" x2="35" y2="20" />
                  <line x1="20" y1="20" x2="20" y2="35" />
                  <line x1="140" y1="20" x2="125" y2="20" />
                  <line x1="140" y1="20" x2="140" y2="35" />
                </svg>
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-tint text-brand-dark">
                  $100k Indemnity
                </div>
              </div>

              <div className="space-y-2">
                <span className="inline-block bg-brand-tint text-brand-dark text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2">
                  Legal Shield
                </span>
                <h3 className="text-xl font-semibold text-text-main dark:text-white tracking-tight group-hover:text-brand-primary transition-colors">
                  Shield & Flex ID Indemnity
                </h3>
                <p className="text-text-muted text-sm mt-2 leading-relaxed dark:text-slate-400">
                  Automated local contract generation, W-8BEN / W-9 verification, and background sanctions screening backed by an ironclad $100k misclassification guarantee.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-surface-border dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-brand-primary">
                <button
                  onClick={() => onNavigateToTab('security')}
                  className="inline-flex items-center gap-1.5 hover:underline cursor-pointer"
                >
                  <span>Review Compliance Shield</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: ZIG-ZAG FEATURE SHOWCASE (4 Deep Dives in Flex Light Theme)
          ========================================================================= */}
      <section className="py-16 sm:py-24 border-t border-[#E3E5EB] dark:border-slate-800 bg-[#FAFAFC] dark:bg-[#0B0C0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#5C55FE] dark:text-indigo-400">
              POWERFUL ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#0D0E11] dark:text-white font-editorial tracking-tight">
              Enterprise capability built for the speed of modern tech
            </h2>
          </div>

          {/* Block 1: Text Left + Payroll Dashboard Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest bg-[#0D0E11] text-white dark:bg-white dark:text-[#0D0E11] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#D2F801]" />
                MASS DISBURSEMENT
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#0D0E11] dark:text-white font-editorial leading-[1.14] tracking-tight mt-5 mb-4">
                Streamlined payment processing & automated global tax compliance
              </h3>
              <p className="text-base sm:text-lg text-[#323642] dark:text-slate-300 font-normal leading-relaxed max-w-xl mb-6">
                Execute cross-border payouts to hundreds of international contractors in a single transaction. Flex calculates statutory tax obligations, issues W-8BEN and W-9 certificates automatically, and eliminates human errors with real-time audit logging.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-[#0D0E11] dark:text-slate-200 pt-1">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5C55FE] shrink-0" /> 1-Click Mass Payroll execution via Bank or Crypto
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5C55FE] shrink-0" /> Automated withholding and 1099-NEC / 1042-S tax reporting
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5C55FE] shrink-0" /> Syncs seamlessly with QuickBooks, Xero, and NetSuite
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 p-6 rounded-3xl bg-white dark:bg-[#121316] border border-[#E3E5EB] dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0F2F5] dark:border-slate-800 text-xs font-bold text-[#0D0E11] dark:text-white">
                <span>Payroll Execution Batch #128</span>
                <span className="text-emerald-600 font-extrabold">$48,400.00 Total</span>
              </div>
              <div className="mt-4 space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-[#F8F9FA] dark:bg-slate-800/60 flex items-center justify-between">
                  <div className="font-bold text-[#0D0E11] dark:text-white">8 Contractors in 8 Jurisdictions</div>
                  <span className="text-emerald-600 font-bold">100% Reconciled</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F8F9FA] dark:bg-slate-800/60 flex items-center justify-between">
                  <div className="text-[#4A4D57] dark:text-slate-400">Total Execution Time:</div>
                  <span className="font-extrabold text-purple-600">4.2 Seconds</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F8F9FA] dark:bg-slate-800/60 flex items-center justify-between">
                  <div className="text-[#4A4D57] dark:text-slate-400">Compliance Audit:</div>
                  <span className="font-extrabold text-[#0D0E11] dark:text-white">SOC2 Clean Hash #8f3a</span>
                </div>
              </div>
            </div>
          </div>

          {/* Block 2: Transaction History Left + Text Right (Targeted Elements) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 p-6 rounded-3xl bg-[#D8DBFD] dark:bg-[#1A1D33] border border-[#C5CAFC] dark:border-slate-700 shadow-sm space-y-3">
              <div className="text-xs font-bold text-[#0D0E11] dark:text-white">
                Multi-Milestone Retainer Agreement
              </div>
              <div className="p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 text-xs space-y-2 border border-white/60 dark:border-slate-700">
                <div className="flex justify-between font-bold">
                  <span>Milestone 1: Smart Contract Audit</span>
                  <span className="text-emerald-600">$4,500 USDC (Paid)</span>
                </div>
                <div className="w-full h-1.5 bg-[#EAEBFA] rounded-full overflow-hidden">
                  <div className="w-full h-full bg-emerald-500" />
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 text-xs space-y-2 border border-white/60 dark:border-slate-700">
                <div className="flex justify-between font-bold">
                  <span>Milestone 2: Multi-chain Deployment</span>
                  <span className="text-[#5C55FE]">$3,000 USDC (In Review)</span>
                </div>
                <div className="w-full h-1.5 bg-[#EAEBFA] rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-[#5C55FE]" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest bg-[#0D0E11] text-white dark:bg-white dark:text-[#0D0E11] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#D2F801]" />
                FLEXIBLE SCHEDULES
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#0D0E11] dark:text-white font-editorial leading-[1.14] tracking-tight mt-5 mb-4">
                Flexible & fully integrated payment solutions
              </h3>
              <p className="text-base sm:text-lg text-[#323642] dark:text-slate-300 font-normal leading-relaxed max-w-xl mb-6">
                Whether you pay hourly retainers, monthly salaries, or milestone-based project deliverables, Flex adapts to your workflow. Fund from corporate fiat accounts or crypto multi-sigs without manually calculating conversions.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-[#0D0E11] dark:text-slate-200 pt-1">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5C55FE] shrink-0" /> Milestone approvals with optional escrow releases
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5C55FE] shrink-0" /> Dual funding options: Fiat Treasury & Web3 Wallets
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5C55FE] shrink-0" /> Multi-currency contractor invoice uploads
                </li>
              </ul>
            </div>
          </div>

          {/* Block 3: Text Left + Contractor ID / Smart Contract Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest bg-[#0D0E11] text-white dark:bg-white dark:text-[#0D0E11] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#D2F801]" />
                IDENTITY & SECURITY
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#0D0E11] dark:text-white font-editorial leading-[1.14] tracking-tight mt-5 mb-4">
                Automated & secure on-chain transactions with Flex ID
              </h3>
              <p className="text-base sm:text-lg text-[#323642] dark:text-slate-300 font-normal leading-relaxed max-w-xl mb-6">
                Every contractor receives a verified Flex ID credential. KYC/KYB identity validation, sanctions screening, and bank verification happen in background pipelines, ensuring your enterprise is completely protected from fraud and misclassification audits.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-[#0D0E11] dark:text-slate-200 pt-1">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5C55FE] shrink-0" /> Smart contract automation triggers on milestone approval
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5C55FE] shrink-0" /> Cryptographically verifiable Flex ID identity passports
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5C55FE] shrink-0" /> Continuous PEP and OFAC sanctions compliance monitoring
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 p-6 rounded-3xl bg-white dark:bg-[#121316] border border-[#E3E5EB] dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0F2F5] dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#5C55FE]" />
                  <span className="font-bold text-xs text-[#0D0E11] dark:text-white">Flex ID Digital Credential</span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  Verified Identity
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8F9FA] dark:bg-slate-800/80 text-xs space-y-2">
                <div className="flex justify-between font-semibold">
                  <span className="text-[#4A4D57]">Contractor:</span>
                  <span className="font-bold text-[#0D0E11] dark:text-white">Elena Rostova</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span className="text-[#4A4D57]">Jurisdiction:</span>
                  <span className="font-bold text-[#0D0E11] dark:text-white">Estonia (EE)</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span className="text-[#4A4D57]">KYC Status:</span>
                  <span className="text-emerald-600 font-bold">Passport & Proof of Address Audited</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span className="text-[#4A4D57]">Tax Classification:</span>
                  <span className="font-bold text-[#0D0E11] dark:text-white">W-8BEN On File</span>
                </div>
              </div>
            </div>
          </div>

          {/* Block 4: Analytical Spend Dashboard Left + Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 p-6 rounded-3xl bg-white dark:bg-[#121316] border border-[#E3E5EB] dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0F2F5] dark:border-slate-800 text-xs font-bold text-[#0D0E11] dark:text-white">
                <span>Contractor Spend Breakdown (Q3)</span>
                <span className="text-[#5C55FE]">$94,600 Total Volume</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#F8F9FA] dark:bg-slate-800/60">
                  <div className="text-[10px] text-[#4A4D57] font-bold">Stablecoin Payouts</div>
                  <div className="text-base font-extrabold text-[#0D0E11] dark:text-white mt-0.5">$61,200 (65%)</div>
                </div>
                <div className="p-3 rounded-xl bg-[#F8F9FA] dark:bg-slate-800/60">
                  <div className="text-[10px] text-[#4A4D57] font-bold">Fiat Bank Payouts</div>
                  <div className="text-base font-extrabold text-[#0D0E11] dark:text-white mt-0.5">$33,400 (35%)</div>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold flex items-center justify-between">
                <span>Average Wire/FX Fee Saved:</span>
                <span>$4,120.00 this month</span>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest bg-[#0D0E11] text-white dark:bg-white dark:text-[#0D0E11] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#D2F801]" />
                REAL-TIME ANALYTICS
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#0D0E11] dark:text-white font-editorial leading-[1.14] tracking-tight mt-5 mb-4">
                Contractor management & transparent expense tracking
              </h3>
              <p className="text-base sm:text-lg text-[#323642] dark:text-slate-300 font-normal leading-relaxed max-w-xl mb-6">
                Maintain complete fiscal visibility across your entire remote workforce. Track active contracts, pending invoice queues, currency exposures, and export audit-ready CSV reports mapped to your general ledger chart of accounts.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-[#0D0E11] dark:text-slate-200 pt-1">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5C55FE] shrink-0" /> In-app contractor invoice submission and approval flows
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5C55FE] shrink-0" /> Transparent financial reporting with historical FX rates
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5C55FE] shrink-0" /> Role-based permission controls for finance & HR managers
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CUSTOMER TESTIMONIAL QUOTE CARD
          ========================================================================= */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-[32px] bg-white dark:bg-[#121316] border border-[#E3E5EB] dark:border-slate-800 shadow-sm max-w-4xl mx-auto text-center space-y-6">
          <div className="text-3xl sm:text-4xl text-[#5C55FE] font-serif">“</div>
          <p className="text-xl sm:text-2xl text-[#0D0E11] dark:text-white font-normal leading-relaxed font-editorial">
            Flex lets us punch above our weight internationally. We can hire and compensate the best engineering talent regardless of where they live without it turning into an operational burden or regulatory headache.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-[#F0F2F5] dark:border-slate-800">
            <div className="w-12 h-12 rounded-full bg-[#D8DBFD] flex items-center justify-center font-black text-sm text-[#0D0E11]">
              CS
            </div>
            <div className="text-center sm:text-left">
              <div className="font-extrabold text-sm text-[#0D0E11] dark:text-white">Colton Seal</div>
              <div className="text-xs text-[#4A4D57] dark:text-slate-400">CEO & Founder at Routefusion</div>
            </div>
            <span className="hidden sm:inline text-slate-300">•</span>
            <div className="text-xs font-bold text-emerald-600">
              Cross-border Fintech • 40+ Global Contractors • Settle in seconds
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: KNOWLEDGE HUB & GUIDES (3-Card Grid)
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-t border-[#E3E5EB] dark:border-slate-800 bg-[#FAFAFC] dark:bg-[#0B0C0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#5C55FE] dark:text-indigo-400">
                THOUGHT LEADERSHIP & KNOWLEDGE
              </div>
              <h2 className="text-3xl sm:text-4xl font-normal text-[#0D0E11] dark:text-white font-editorial tracking-tight mt-1">
                Latest Insights in Global Payroll & Web3
              </h2>
            </div>
            <button
              onClick={onOpenBookDemo}
              className="text-xs font-bold text-[#5C55FE] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Explore all articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Guide Card 1 */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#121316] border border-[#E3E5EB] dark:border-slate-800 hover:border-[#5C55FE]/60 shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[11px] text-[#4A4D57] dark:text-slate-400 mb-3">
                  <span className="font-bold text-[#5C55FE] bg-[#EAEBFA] px-2.5 py-0.5 rounded-full">Crypto Payroll</span>
                  <span>October 2026</span>
                </div>
                <h3 className="text-lg font-bold text-[#0D0E11] dark:text-white group-hover:text-[#5C55FE] transition-colors leading-snug">
                  Hybrid Payroll: All Questions Answered for Global CFOs
                </h3>
                <p className="text-xs text-[#4A4D57] dark:text-slate-400 mt-2 leading-relaxed">
                  How leading cross-border enterprises blend traditional fiat treasuries with on-chain stablecoins to eliminate banking holidays and wire charges.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-[#0D0E11] dark:text-white group-hover:text-[#5C55FE]">
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Guide Card 2 */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#121316] border border-[#E3E5EB] dark:border-slate-800 hover:border-[#5C55FE]/60 shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[11px] text-[#4A4D57] dark:text-slate-400 mb-3">
                  <span className="font-bold text-[#5C55FE] bg-[#EAEBFA] px-2.5 py-0.5 rounded-full">Global Hiring</span>
                  <span>September 2026</span>
                </div>
                <h3 className="text-lg font-bold text-[#0D0E11] dark:text-white group-hover:text-[#5C55FE] transition-colors leading-snug">
                  The 2026 Guide to Contractor Misclassification & Shield Protection
                </h3>
                <p className="text-xs text-[#4A4D57] dark:text-slate-400 mt-2 leading-relaxed">
                  Key regulatory triggers in the EU, UK, and Americas that differentiate independent contractors from de-facto employees.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-[#0D0E11] dark:text-white group-hover:text-[#5C55FE]">
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Guide Card 3 */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#121316] border border-[#E3E5EB] dark:border-slate-800 hover:border-[#5C55FE]/60 shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[11px] text-[#4A4D57] dark:text-slate-400 mb-3">
                  <span className="font-bold text-[#5C55FE] bg-[#EAEBFA] px-2.5 py-0.5 rounded-full">Treasury Management</span>
                  <span>August 2026</span>
                </div>
                <h3 className="text-lg font-bold text-[#0D0E11] dark:text-white group-hover:text-[#5C55FE] transition-colors leading-snug">
                  Bridging Corporate Treasuries with Stablecoin Rails
                </h3>
                <p className="text-xs text-[#4A4D57] dark:text-slate-400 mt-2 leading-relaxed">
                  Accounting reconciliation, smart contract audit hygiene, and multi-sig security for finance departments entering Web3.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-[#0D0E11] dark:text-white group-hover:text-[#5C55FE]">
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: LEAD MAGNET & EBOOK FORM BANNER (Lavender Periwinkle #D8DBFD)
          ========================================================================= */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-[#D8DBFD] dark:bg-[#1A1D33] text-[#0D0E11] dark:text-slate-100 border border-[#C5CAFC] dark:border-slate-800 p-8 sm:p-12 lg:p-16 shadow-sm overflow-hidden relative">
          
          {/* Subtle Decorative Elements */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full border border-indigo-400/25 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Sub-Column */}
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white dark:bg-slate-900 text-[#0D0E11] dark:text-white shadow-xs">
                NEW EBOOK & COMPLIANCE BLUEPRINT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal tracking-tight text-[#0D0E11] dark:text-white font-editorial leading-tight">
                Revolutionize your payroll & empower your people
              </h2>
              <p className="text-sm sm:text-base text-[#323642] dark:text-slate-300 max-w-lg leading-relaxed">
                Download the definitive guide to compliant global contractor payments, stablecoin taxation, and multi-currency treasury management.
              </p>

              {/* 3 Checklist Bullets */}
              <div className="space-y-2 pt-2 text-xs font-semibold text-[#0D0E11] dark:text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5C55FE] shrink-0" />
                  <span>Hybrid Payroll Solutions Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5C55FE] shrink-0" />
                  <span>Cross-Border Compliance & Misclassification Shield</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#5C55FE] shrink-0" />
                  <span>EOR vs Contractor Cost Comparison & Provider Selection Guide</span>
                </div>
              </div>
            </div>

            {/* Right Sub-Column: Embedded Lead Capture Card */}
            <div className="lg:col-span-5 bg-white dark:bg-[#121316] p-6 sm:p-8 rounded-3xl border border-white/60 dark:border-slate-800 shadow-xl space-y-4">
              {ebookSubmitted ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <h4 className="text-lg font-bold text-[#0D0E11] dark:text-white font-editorial">Guide Sent!</h4>
                  <p className="text-xs text-[#4A4D57] dark:text-slate-400">
                    We have dispatched the 2026 Ebook to <strong>{ebookEmail}</strong>. Check your inbox momentarily.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleEbookSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-[#0D0E11] dark:text-white">Get Instant Access (PDF)</h3>
                    <p className="text-[11px] text-[#4A4D57] dark:text-slate-400">
                      Enter your corporate email to receive the 38-page technical guide immediately.
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#0D0E11] dark:text-slate-300">Corporate Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@enterprise.com"
                      value={ebookEmail}
                      onChange={(e) => setEbookEmail(e.target.value)}
                      className="w-full mt-1.5 px-4 py-3 rounded-2xl bg-[#F8F9FA] dark:bg-slate-900 border border-[#E3E5EB] dark:border-slate-700 text-xs font-bold text-[#0D0E11] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0D0E11]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmittingEbook}
                    className="w-full py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#0D0E11] hover:bg-black/90 dark:bg-white dark:text-[#0D0E11] shadow-md hover:shadow-lg disabled:opacity-50 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
                  >
                    <span>{isSubmittingEbook ? 'Sending...' : 'Download Guide →'}</span>
                  </button>

                  <div className="text-[10px] text-center text-[#717684]">
                    Zero spam. Unsubscribe anytime. Strictly confidential.
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

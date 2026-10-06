import React from 'react';
import { TrustedByMarquee } from '../TrustedByMarquee.tsx';
import { SlidingWord } from '../SlidingWord.tsx';
import {
  Shield,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Check,
  Building,
  Users,
  Coins,
  CreditCard,
  FileCheck,
  Scale,
  Sparkles,
  HelpCircle,
  Clock,
  Layers,
  Globe2,
} from 'lucide-react';

interface AORPageProps {
  onOpenBookDemo: () => void;
  onOpenPricing: () => void;
  onNavigateToTab: (tabId: string) => void;
}

export const AORPage: React.FC<AORPageProps> = ({
  onOpenBookDemo,
  onOpenPricing,
  onNavigateToTab,
}) => {
  return (
    <div className="font-sans-ui bg-[#F8F9FA] dark:bg-[#0D0E12] text-[#0C0D11] dark:text-slate-100 transition-colors">
      
      {/* ================= HERO SECTION (Matching Screenshot 9) ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-14 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading & Core AOR Shield */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CCD1F8] dark:bg-indigo-950/80 text-[11px] font-black uppercase tracking-wider text-[#0C0D11] dark:text-indigo-300">
              <span className="w-2 h-2 rounded-full bg-[#CCE829]" />
              <span>AGENT OF RECORD (AOR)</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-[#0C0D11] dark:text-white font-editorial">
              Simplify Global{' '}
              <SlidingWord
                words={['Contractors', 'Compliance', 'Indemnification', 'Onboarding']}
                highlightClassName="text-[#5450EB] dark:text-indigo-400 font-semibold"
              />
            </h1>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-[#DFE2EA] dark:border-slate-800 flex items-start gap-3 text-xs text-[#4D515D] dark:text-slate-300">
              <Shield className="w-5 h-5 text-[#5450EB] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0C0D11] dark:text-white">Shield Your Business from Compliance Risk:</strong>
                <p className="mt-0.5">Hire and pay independent contractors worldwide with absolute peace of mind and 100% legal indemnification.</p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[#4D515D] dark:text-slate-300 max-w-xl font-normal leading-relaxed">
              Flex's AOR model insulates your company from legal risk while ensuring every contractor is onboarded, paid, and managed compliantly across 190+ countries.
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
                  const el = document.getElementById('why-choose-aor');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-4 rounded-full text-xs sm:text-sm font-bold text-[#0C0D11] dark:text-white bg-white dark:bg-slate-900 border border-[#DFE2EA] dark:border-slate-800 hover:bg-[#F3F4F8] transition-colors cursor-pointer"
              >
                What is Agent of Record?
              </button>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs font-bold text-emerald-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Global Reach with over 190+ Countries Supported</span>
            </div>
          </div>

          {/* Right Column: Visual Contractor Roster with Badges */}
          <div className="lg:col-span-5 relative">
            <div className="p-6 sm:p-7 rounded-[32px] bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#5450EB]" />
                  <span className="text-xs font-bold text-[#0C0D11] dark:text-white">Active AOR Buffer Coverage</span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#CCD1F8] text-[#0C0D11]">
                  100% Indemnified
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-2xl bg-[#F8F9FA] dark:bg-slate-900 border border-[#DFE2EA] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">🇺🇸</span>
                    <div>
                      <div className="font-bold text-[#0C0D11] dark:text-white">Sarah Jenkins</div>
                      <div className="text-[10px] text-slate-500">Full-Stack Lead • USD ($)</div>
                    </div>
                  </div>
                  <span className="font-black text-emerald-600">W-9 Audited</span>
                </div>

                <div className="p-3 rounded-2xl bg-[#F8F9FA] dark:bg-slate-900 border border-[#DFE2EA] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">🇧🇷</span>
                    <div>
                      <div className="font-bold text-[#0C0D11] dark:text-white">Lucas Silva</div>
                      <div className="text-[10px] text-slate-500">Smart Contract Eng • BRL / USDC</div>
                    </div>
                  </div>
                  <span className="font-black text-emerald-600">W-8BEN Verified</span>
                </div>

                <div className="p-3 rounded-2xl bg-[#F8F9FA] dark:bg-slate-900 border border-[#DFE2EA] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">🇮🇳</span>
                    <div>
                      <div className="font-bold text-[#0C0D11] dark:text-white">Aarav Patel</div>
                      <div className="text-[10px] text-slate-500">DevOps Specialist • INR</div>
                    </div>
                  </div>
                  <span className="font-black text-emerald-600">Zero Misclassification</span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-[#CCD1F8]/50 dark:bg-slate-900 border border-[#BFC6F5] text-[11px] text-[#4D515D] dark:text-slate-300">
                Flex signs the master contract with the contractor, shielding your company from de-facto employment reclassification lawsuits.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Trusted By Partner Logos Marquee */}
      <TrustedByMarquee title="TRUSTED BY GLOBAL WORKFORCE LEADERS & INTEGRATED WITH MAJOR NETWORKS" />

      {/* ================= WHY CHOOSE FLEX AOR? (Matching Screenshot 9) ================= */}
      <section id="why-choose-aor" className="py-14 sm:py-20 border-y border-[#DFE2EA] dark:border-slate-800 bg-white dark:bg-[#111218]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-[32px] bg-[#F8F9FA] dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 flex flex-col md:flex-row items-center gap-8 shadow-xs">
            <div className="w-20 h-20 rounded-full bg-[#CCD1F8] flex items-center justify-center shrink-0">
              <Scale className="w-10 h-10 text-[#5450EB]" />
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-normal text-[#0C0D11] dark:text-white font-editorial">
                Why choose Flex AOR?
              </h2>
              <p className="text-xs sm:text-sm text-[#4D515D] dark:text-slate-300 leading-relaxed">
                Contractor misclassification is a legal minefield. Flex acts as the legal agent for your independent contractors so you don't have to. Our Agent of Record (AOR) model puts Flex between you and the contractor, helping you stay compliant, reduce liability, and scale with confidence.
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-12">
            <div>
              <div className="text-4xl sm:text-5xl font-normal text-[#0C0D11] dark:text-white font-editorial">100+</div>
              <div className="text-xs text-[#4D515D] mt-1 font-semibold">Cryptocurrencies</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-normal text-[#0C0D11] dark:text-white font-editorial">90+</div>
              <div className="text-xs text-[#4D515D] mt-1 font-semibold">Local Currencies</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-normal text-[#0C0D11] dark:text-white font-editorial">190+</div>
              <div className="text-xs text-[#4D515D] mt-1 font-semibold">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS (6 STEPS - Screenshot 10) ================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-[11px] font-black uppercase tracking-widest text-[#5450EB] dark:text-indigo-400">
            AOR WORKFLOW
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#0C0D11] dark:text-white font-editorial tracking-tight">
            How It Works
          </h2>
          <p className="text-sm text-[#4D515D] dark:text-slate-400">
            From initial contract creation to multi-currency payout in 6 simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-3xl bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 space-y-2">
            <div className="flex justify-between items-center">
              <Building className="w-5 h-5 text-[#5450EB]" />
              <span className="text-3xl font-black text-[#CCD1F8] dark:text-slate-700">01</span>
            </div>
            <h3 className="text-base font-bold text-[#0C0D11] dark:text-white pt-2">Create a business account</h3>
            <p className="text-xs text-[#4D515D] dark:text-slate-400">Set up your company profile by providing basic information like company name, address, and contact details.</p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 space-y-2">
            <div className="flex justify-between items-center">
              <Users className="w-5 h-5 text-[#5450EB]" />
              <span className="text-3xl font-black text-[#CCD1F8] dark:text-slate-700">02</span>
            </div>
            <h3 className="text-base font-bold text-[#0C0D11] dark:text-white pt-2">Invite Contractors to Flex</h3>
            <p className="text-xs text-[#4D515D] dark:text-slate-400">Send onboarding invitations to contractors you'd like to engage via the automated Flex platform.</p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 space-y-2">
            <div className="flex justify-between items-center">
              <Shield className="w-5 h-5 text-[#5450EB]" />
              <span className="text-3xl font-black text-[#CCD1F8] dark:text-slate-700">03</span>
            </div>
            <h3 className="text-base font-bold text-[#0C0D11] dark:text-white pt-2">Flex Becomes Their Legal Agent</h3>
            <p className="text-xs text-[#4D515D] dark:text-slate-400">Flex signs a direct contract with each contractor and subcontracts their services to you, removing you from the legal line of fire.</p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 space-y-2">
            <div className="flex justify-between items-center">
              <CreditCard className="w-5 h-5 text-[#5450EB]" />
              <span className="text-3xl font-black text-[#CCD1F8] dark:text-slate-700">04</span>
            </div>
            <h3 className="text-base font-bold text-[#0C0D11] dark:text-white pt-2">Fund Payroll in Fiat or Crypto</h3>
            <p className="text-xs text-[#4D515D] dark:text-slate-400">Choose to fund payroll in USD or USDC/USDT stablecoin. Payments are processed securely and quickly.</p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 space-y-2">
            <div className="flex justify-between items-center">
              <FileCheck className="w-5 h-5 text-[#5450EB]" />
              <span className="text-3xl font-black text-[#CCD1F8] dark:text-slate-700">05</span>
            </div>
            <h3 className="text-base font-bold text-[#0C0D11] dark:text-white pt-2">Compliance Monitoring & Tax Reporting</h3>
            <p className="text-xs text-[#4D515D] dark:text-slate-400">Flex performs classification checks, manages contractor agreements, and issues tax forms like 1099s. We handle the red tape.</p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 space-y-2">
            <div className="flex justify-between items-center">
              <Coins className="w-5 h-5 text-[#5450EB]" />
              <span className="text-3xl font-black text-[#CCD1F8] dark:text-slate-700">06</span>
            </div>
            <h3 className="text-base font-bold text-[#0C0D11] dark:text-white pt-2">Contractor Withdraws in Preferred Currency</h3>
            <p className="text-xs text-[#4D515D] dark:text-slate-400">Contractors can withdraw funds in their preferred currency, whether it's local fiat or cryptocurrency.</p>
          </div>

        </div>

        {/* WHO IS AOR IDEAL FOR? (Screenshot 10) */}
        <div className="p-8 sm:p-12 rounded-[32px] bg-[#CCD1F8] dark:bg-[#181B2B] border border-[#BFC6F5] dark:border-slate-800 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 text-center">
            <div className="w-28 h-28 mx-auto rounded-3xl bg-[#0C0D11] text-white flex items-center justify-center text-4xl shadow-xl">
              🏢
            </div>
          </div>

          <div className="md:col-span-7 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-normal text-[#0C0D11] dark:text-white font-editorial">
              Who is <span className="font-bold">AOR Ideal For?</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm font-semibold text-[#0C0D11] dark:text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#5450EB] shrink-0" />
                <span>Companies operating in high-risk jurisdictions (like California under AB5)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#5450EB] shrink-0" />
                <span>Enterprises looking to avoid severe misclassification penalties</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#5450EB] shrink-0" />
                <span>Teams scaling fast and needing a turnkey compliance solution</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#5450EB] shrink-0" />
                <span>Organizations that want to pay contractors in fiat or crypto seamlessly</span>
              </div>
            </div>
          </div>
        </div>

        {/* BENEFITS OF FLEX AOR (Screenshot 10) */}
        <div className="pt-6 space-y-6">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-normal text-[#0C0D11] dark:text-white font-editorial">
              Benefits of Flex AOR
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-[#CCD1F8] flex items-center justify-center text-[#0C0D11]">🛡️</div>
              <h4 className="text-sm font-bold text-[#0C0D11] dark:text-white">Compliance-first Engagement</h4>
              <p className="text-xs text-[#4D515D] dark:text-slate-400">We act as the legal buffer between your company and contractors to eliminate misclassification risk.</p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-[#CCD1F8] flex items-center justify-center text-[#0C0D11]">🪙</div>
              <h4 className="text-sm font-bold text-[#0C0D11] dark:text-white">Crypto & Fiat Payment Options</h4>
              <p className="text-xs text-[#4D515D] dark:text-slate-400">Pay contractors globally using 90+ local currencies, stablecoins, and cryptocurrencies.</p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-[#CCD1F8] flex items-center justify-center text-[#0C0D11]">📝</div>
              <h4 className="text-sm font-bold text-[#0C0D11] dark:text-white">Contractor Onboarding & Admin</h4>
              <p className="text-xs text-[#4D515D] dark:text-slate-400">Flex handles contracts, background checks, NDAs, and more with no HR bottlenecks.</p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-[#CCD1F8] flex items-center justify-center text-[#0C0D11]">📑</div>
              <h4 className="text-sm font-bold text-[#0C0D11] dark:text-white">Tax & Legal Documentation</h4>
              <p className="text-xs text-[#4D515D] dark:text-slate-400">Year-end tax reporting (1099-NEC, 1042-S) and worker classification checks done for you.</p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-[#CCD1F8] flex items-center justify-center text-[#0C0D11]">🌐</div>
              <h4 className="text-sm font-bold text-[#0C0D11] dark:text-white">Global Reach</h4>
              <p className="text-xs text-[#4D515D] dark:text-slate-400">Engage contractors in 190+ countries with instant payout options and automated compliance support.</p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-[#CCD1F8] flex items-center justify-center text-[#0C0D11]">💎</div>
              <h4 className="text-sm font-bold text-[#0C0D11] dark:text-white">Flexible & Scalable Pricing</h4>
              <p className="text-xs text-[#4D515D] dark:text-slate-400">Clear, transparent pricing that scales with your business.</p>
            </div>
          </div>
        </div>

        {/* PRICING CARD ($299/mo - Screenshot 11) */}
        <div className="pt-8">
          <div className="max-w-2xl mx-auto p-8 sm:p-10 rounded-[32px] bg-[#CCD1F8] dark:bg-[#181B2B] border border-[#BFC6F5] dark:border-slate-800 text-center space-y-6">
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-[#5450EB] dark:text-indigo-300">
                AOR SUBSCRIPTION
              </div>
              <h3 className="text-3xl font-normal text-[#0C0D11] dark:text-white font-editorial mt-1">
                Agent of Record (AOR)
              </h3>
              <p className="text-xs text-[#4D515D] dark:text-slate-400 mt-1">
                For companies that need compliance insulation and liability protection
              </p>
            </div>

            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl sm:text-6xl font-black text-[#0C0D11] dark:text-white font-editorial">$299</span>
              <span className="text-xs font-semibold text-[#4D515D]">Per Contractor / Month</span>
            </div>

            <div className="space-y-2 text-xs font-semibold text-left max-w-md mx-auto pt-2">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Includes tax reporting & classification checks</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Supports fiat & crypto payments</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Reduces misclassification risk</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Ideal for high-compliance environments</span>
              </div>
            </div>

            <button
              onClick={onOpenBookDemo}
              className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#0C0D11] text-white hover:bg-black/90 transition-all cursor-pointer inline-flex items-center gap-2 shadow-md"
            >
              <span>Continue with AOR →</span>
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};

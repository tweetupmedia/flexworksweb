import React from 'react';
import {
  CreditCard,
  Users,
  Scale,
  Coins,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Shield,
  Zap,
  Building,
  TrendingDown,
  Layers,
} from 'lucide-react';

interface SolutionPageProps {
  solutionKey: 'cfos' | 'hr' | 'legal' | 'web3';
  onOpenBookDemo: () => void;
  onOpenPricing: () => void;
  onNavigateToTab: (tabId: string) => void;
}

const SOLUTIONS_DATA = {
  cfos: {
    tag: 'FOR CFOS & FINANCE TEAMS',
    title: 'Consolidate Global Payroll & Treasury into One Single Interface',
    description: 'Eliminate wire transfer fees, 3% foreign exchange markups, and unpredictable bank settlement delays. Fund in your primary currency and execute multi-currency contractor payouts in seconds.',
    icon: CreditCard,
    accent: '#5450EB',
    metrics: [
      { label: 'Saved on FX Spread', val: '0.00%' },
      { label: 'Reconciliation Time', val: '-85%' },
      { label: 'Direct Banking Rails', val: '90+ Fiat' },
    ],
    highlights: [
      'Automated sync with QuickBooks, Xero, NetSuite, and Campfire',
      'Dual treasury funding: Corporate Bank Wire (ACH/SEPA) or Crypto Multi-Sig',
      'Granular department-level spend allocation and real-time expense reporting',
      'Single consolidated monthly invoice for hundreds of international workers',
    ],
  },
  hr: {
    tag: 'FOR HR & PEOPLE OPS',
    title: 'Onboard World-Class Talent Anywhere in Under 48 Hours',
    description: 'Stop letting international bureaucracy slow down your hiring pipeline. Provide a localized, white-glove onboarding experience with statutory benefits, localized contracts, and dedicated HR support.',
    icon: Users,
    accent: '#5450EB',
    metrics: [
      { label: 'Average Onboarding', val: '48h' },
      { label: 'Direct Jurisdictions', val: '150+' },
      { label: 'Contractor Satisfaction', val: '99.4%' },
    ],
    highlights: [
      'Localized employment contracts vetted by in-country legal practitioners',
      'Turnkey statutory benefits administration: health, dental, pension, and leave',
      'Contractor self-serve portal for document submission and banking details',
      'Automated equipment delivery and workspace allowance stipends',
    ],
  },
  legal: {
    tag: 'FOR LEGAL & COMPLIANCE',
    title: 'Bulletproof Shield Against Worker Misclassification Penalties',
    description: 'International labor regulations are a minefield. Flex takes full legal accountability as Employer of Record (EOR) or Agent of Record (AOR), protecting your company against de-facto employment lawsuits.',
    icon: Scale,
    accent: '#5450EB',
    metrics: [
      { label: 'Legal Indemnification', val: '100%' },
      { label: 'Tax Forms Generated', val: 'W-8/W-9' },
      { label: 'Audit Security', val: 'SOC 2 Type II' },
    ],
    highlights: [
      'Full legal insulation: Flex signs master agreements as the legal employer or agent',
      'Continuous compliance audit logging with immutable hash generation',
      'Automated end-of-year tax generation (1099-NEC, 1042-S, and local certificates)',
      'Real-time compliance monitoring adapted to local statutory changes',
    ],
  },
  web3: {
    tag: 'FOR WEB3 & GLOBAL TECH',
    title: 'Native On-Chain Payroll & Compliant Stablecoin Disbursal',
    description: 'Pay your distributed contributors in USDC, USDT, or ETH directly from Gnosis Safe, MetaMask Institutional, or Coinbase without triggering banking freezes or tax headaches.',
    icon: Coins,
    accent: '#5450EB',
    metrics: [
      { label: 'Settlement Speed', val: '< 5 Sec' },
      { label: 'Supported Chains', val: '12+ L1/L2s' },
      { label: 'Average Gas Cost', val: '$0.001' },
    ],
    highlights: [
      'Multi-sig integration with Gnosis Safe on Base, Polygon, Arbitrum, and Ethereum',
      'Zero crypto volatility: pegged to USD and EUR for predictable compensation',
      'Automated W-8BEN/W-9 collection paired with decentralized Flex ID credentials',
      'Contractors can split payouts between self-custody wallets and local bank accounts',
    ],
  },
};

export const SolutionPage: React.FC<SolutionPageProps> = ({
  solutionKey,
  onOpenBookDemo,
  onOpenPricing,
  onNavigateToTab,
}) => {
  const data = SOLUTIONS_DATA[solutionKey] || SOLUTIONS_DATA.cfos;
  const Icon = data.icon;

  return (
    <div className="font-sans-ui bg-[#F8F9FA] dark:bg-[#0D0E12] text-[#0C0D11] dark:text-slate-100 transition-colors py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Section */}
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CCD1F8] dark:bg-indigo-950/80 text-[11px] font-black uppercase tracking-wider text-[#0C0D11] dark:text-indigo-300">
            <span className="w-2 h-2 rounded-full bg-[#CCE829]" />
            <span>{data.tag}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-[#0C0D11] dark:text-white font-editorial">
            {data.title}
          </h1>

          <p className="text-base sm:text-lg text-[#4D515D] dark:text-slate-300 font-normal leading-relaxed">
            {data.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenBookDemo}
              className="px-8 py-4 rounded-full text-xs sm:text-sm font-bold text-white bg-[#0C0D11] hover:bg-black/90 dark:bg-white dark:text-[#0C0D11] shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2 active:scale-95"
            >
              <span>Schedule Strategy Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenPricing}
              className="px-7 py-4 rounded-full text-xs sm:text-sm font-bold text-[#0C0D11] dark:text-white bg-white dark:bg-slate-900 border border-[#DFE2EA] dark:border-slate-800 hover:bg-[#F3F4F8] transition-colors cursor-pointer"
            >
              See Pricing & TCOE
            </button>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="p-8 rounded-[32px] bg-[#CCD1F8] dark:bg-[#181B2B] border border-[#BFC6F5] dark:border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {data.metrics.map((m, idx) => (
            <div key={idx}>
              <div className="text-4xl sm:text-5xl font-normal text-[#0C0D11] dark:text-white font-editorial">{m.val}</div>
              <div className="text-xs text-[#4D515D] dark:text-slate-300 font-semibold mt-1">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Key Capabilities */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-normal text-[#0C0D11] dark:text-white font-editorial">
            Enterprise Capabilities Designed for Your Role
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.highlights.map((h, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 shadow-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#5450EB] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-[#0C0D11] dark:text-white leading-relaxed">{h}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

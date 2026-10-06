import React, { useState } from 'react';
import {
  Zap,
  CheckCircle2,
  Plug,
  ExternalLink,
  Shield,
  Layers,
  Database,
  ArrowRight,
  Code,
  Lock,
  Search,
  Sparkles,
} from 'lucide-react';

interface IntegrationItem {
  id: string;
  name: string;
  category: 'accounting' | 'chains' | 'wallets' | 'defi';
  icon: string;
  description: string;
  connected: boolean;
  badge?: string;
}

const INITIAL_INTEGRATIONS: IntegrationItem[] = [
  // Accounting
  { id: 'quickbooks', name: 'QuickBooks Online', category: 'accounting', icon: '🟢', description: 'Real-time chart of accounts, 1099 auto-sync, and automated contractor ledger entries.', connected: true },
  { id: 'xero', name: 'Xero', category: 'accounting', icon: '🔵', description: 'Automated multi-currency bank feeds, FX variance tracking & global tax reconciliation.', connected: true },
  { id: 'campfire', name: 'Campfire', category: 'accounting', icon: '🟠', description: 'Modern startup accounting built specifically for crypto + fiat dual treasuries.', connected: false },
  { id: 'rillet', name: 'Rillet', category: 'accounting', icon: '🟣', description: 'Automated revenue recognition & real-time contractor payroll reconciliation.', connected: false },

  // Chains
  { id: 'ethereum', name: 'Ethereum Mainnet', category: 'chains', icon: '🔷', description: 'Native ERC-20 USDC & USDT batch contract disbursements with sub-second execution.', connected: true, badge: 'L1 Primary' },
  { id: 'solana', name: 'Solana', category: 'chains', icon: '🟣', description: 'Sub-second USDC settlement with $0.0005 network fees for micro-transactions.', connected: true, badge: 'High Speed' },
  { id: 'polygon', name: 'Polygon PoS', category: 'chains', icon: '🟣', description: 'Scalable Ethereum Layer 2 for micro-payments, recurring bonuses, and contractor stipends.', connected: true },
  { id: 'arbitrum', name: 'Arbitrum One', category: 'chains', icon: '🔵', description: 'Optimistic rollup for low-gas enterprise payroll runs with Ethereum L1 security.', connected: true },
  { id: 'tron', name: 'Tron Network', category: 'chains', icon: '⚡', description: 'TRC-20 USDT high-volume corridors for zero-fee transfers in LATAM and APAC.', connected: true },
  { id: 'ton', name: 'TON (The Open Network)', category: 'chains', icon: '💎', description: 'Telegram-native stablecoin contractor transfers and micro-invoicing.', connected: false },

  // Wallets
  { id: 'safe', name: 'Gnosis Safe', category: 'wallets', icon: '🛡️', description: 'Multi-signature treasury management with customizable 3-of-5 CFO approval thresholds.', connected: true, badge: 'Multi-Sig' },
  { id: 'coinbase', name: 'Coinbase Custody', category: 'wallets', icon: '🪙', description: 'Institutional cold storage and instant fiat off-ramp settlement for corporate treasuries.', connected: true },
  { id: 'metamask', name: 'MetaMask Institutional', category: 'wallets', icon: '🦊', description: 'Enterprise Web3 wallet with automated compliance filtering and audit logs.', connected: false },
  { id: 'torus', name: 'Torus / Web3Auth', category: 'wallets', icon: '🔑', description: 'Seedless social login wallets for non-crypto native freelancers and contractors.', connected: true },

  // DeFi & Protocols
  { id: 'uniswap', name: 'Uniswap Protocol', category: 'defi', icon: '🦄', description: 'Automated treasury rebalancing and optimal liquidity routing for cross-currency payroll.', connected: true },
  { id: 'fednow', name: 'SWIFT FedNow / ACH', category: 'defi', icon: '🏦', description: 'Direct clearing domestic banking infrastructure for same-day USD bank deposits.', connected: true },
];

export const IntegrationsHub: React.FC = () => {
  const [integrations, setIntegrations] = useState<IntegrationItem[]>(INITIAL_INTEGRATIONS);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleConnection = (id: string) => {
    setIntegrations(prev =>
      prev.map(item => (item.id === id ? { ...item, connected: !item.connected } : item))
    );
  };

  const filtered = integrations.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="font-sans-ui bg-[#FAFAFC] dark:bg-[#0B0C0E] text-[#0C0D11] dark:text-slate-100 transition-colors">
      
      {/* ================= HERO SPLIT BANNER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="rounded-[32px] bg-[#CCD1F8] dark:bg-[#181B2B] text-[#0C0D11] dark:text-white p-8 sm:p-12 border border-[#BFC6F5] dark:border-slate-800 shadow-xs relative overflow-hidden flex flex-col justify-between">
          
          <div className="absolute top-6 right-6 w-11 h-11 rounded-full bg-[#CCE829] shadow-md flex items-center justify-center text-[#0C0D11] rotate-12 transition-transform hover:rotate-45 cursor-pointer">
            <Sparkles className="w-5 h-5 fill-current" />
          </div>

          <div className="self-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/80 text-[11px] font-bold text-[#0C0D11] dark:text-white shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#5450EB] animate-pulse" />
              <span>ECOSYSTEM & DEVELOPER HUB • 18+ PROTOCOLS</span>
            </div>
          </div>

          <div className="my-6 space-y-3 max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-normal leading-[1.08] tracking-tight font-editorial">
              Connect Your Entire <span className="text-[#5450EB] dark:text-indigo-400">Financial & Web3 Stack</span>
            </h1>
            <p className="text-sm sm:text-base text-[#323642] dark:text-slate-300 font-normal leading-relaxed">
              Plug Flex into your existing ERPs (QuickBooks, Xero), multi-sig corporate vaults (Gnosis Safe, Coinbase), and blockchain settlement networks with zero code required.
            </p>
          </div>

          {/* Quick Search */}
          <div className="pt-2 max-w-md">
            <div className="relative">
              <Search className="w-4 h-4 text-[#4A4D57] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search accounting, chains, wallets, or protocols..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-[#BFC6F5] dark:border-slate-700 text-xs font-semibold text-[#0C0D11] dark:text-white focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORY TABS & GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-8">
        
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {[
            { id: 'all', label: 'All Integrations' },
            { id: 'accounting', label: 'Accounting & ERP' },
            { id: 'chains', label: 'Chains & Rails' },
            { id: 'wallets', label: 'Wallets & Custody' },
            { id: 'defi', label: 'DeFi & Protocols' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
                activeCategory === tab.id
                  ? 'bg-[#0C0D11] text-white dark:bg-white dark:text-[#0C0D11] shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-[#4A4D57] border border-[#DFE2EA] dark:border-slate-800 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-white dark:bg-[#121316] border border-[#DFE2EA] dark:border-slate-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#F8F9FA] dark:bg-slate-800 flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0C0D11] dark:text-white flex items-center gap-1.5">
                        <span>{item.name}</span>
                        {item.badge && (
                          <span className="px-2 py-0.5 rounded-full bg-[#CCD1F8]/60 dark:bg-indigo-950 text-[#5450EB] dark:text-indigo-300 text-[10px] font-bold">
                            {item.badge}
                          </span>
                        )}
                      </h4>
                      <span className="text-[11px] font-medium text-[#4D515D] capitalize">{item.category}</span>
                    </div>
                  </div>

                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      item.connected ? 'bg-emerald-500 shadow-xs shadow-emerald-400' : 'bg-slate-300 dark:bg-slate-700'
                    }`}
                  />
                </div>

                <p className="text-xs text-[#4D515D] dark:text-slate-400 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DFE2EA] dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-medium text-[#4D515D] dark:text-slate-400">
                  Status: {item.connected ? 'Connected' : 'Disconnected'}
                </span>

                <button
                  onClick={() => toggleConnection(item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    item.connected
                      ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                      : 'bg-[#0C0D11] text-white dark:bg-white dark:text-[#0C0D11] hover:opacity-90'
                  }`}
                >
                  {item.connected ? 'Disconnect' : 'Connect'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

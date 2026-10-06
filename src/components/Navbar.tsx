import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronDown,
  Search,
  Sun,
  Moon,
  Shield,
  Briefcase,
  Globe2,
  Coins,
  CreditCard,
  Fingerprint,
  Wallet,
  Users,
  Building,
  Scale,
  Sparkles,
  BookOpen,
  FileText,
  HelpCircle,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  LogIn,
  LogOut,
  UserCheck,
} from 'lucide-react';
import { AuthUser, UserRole } from '../types.ts';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenBookDemo: () => void;
  onOpenPricing: () => void;
  user: AuthUser;
  onChangeRole: (role: UserRole) => void;
  onGoogleSignIn: () => void;
  onSignOut: () => void;
  onNavigateToTab: (tabId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  onOpenBookDemo,
  onOpenPricing,
  user,
  onChangeRole: _onChangeRole,
  onGoogleSignIn,
  onSignOut,
  onNavigateToTab,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownClick = (name: string) => {
    setActiveDropdown(prev => (prev === name ? null : name));
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-surface-card/80 dark:bg-[#0B0C0E]/90 backdrop-blur-md transition-colors duration-200 border-b border-surface-border dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4" ref={dropdownRef}>
          
          {/* Left: Flex Logo */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => onNavigateToTab('platform')}
              className="flex items-center gap-1.5 cursor-pointer focus:outline-none group"
            >
              <span className="text-2xl font-bold tracking-tight text-text-main dark:text-white font-sans-ui">
                flex
              </span>
              <span className="w-2 h-2 rounded-full bg-brand-primary" />
            </button>

            {/* Desktop Navigation Links with Dropdowns */}
            <nav className="hidden lg:flex items-center gap-1 text-[13px] font-semibold text-text-muted dark:text-slate-300">
              
              {/* Products Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownClick('products')}
                  className={`flex items-center gap-1 px-3 py-2 rounded-full transition-colors cursor-pointer ${
                    activeDropdown === 'products'
                      ? 'text-text-main dark:text-white bg-brand-tint dark:bg-slate-800 shadow-xs'
                      : 'hover:text-text-main dark:hover:text-white hover:bg-brand-tint/60 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'products' && (
                  <div className="absolute top-full left-0 mt-2 w-72 p-2 bg-white dark:bg-[#121316] rounded-2xl shadow-xl border border-[#DFE2EA] dark:border-slate-800 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    <div className="space-y-1">
                      <button
                        onClick={() => { onNavigateToTab('eor'); setActiveDropdown(null); }}
                        className="w-full p-2.5 rounded-xl hover:bg-[#F3F4F8] dark:hover:bg-slate-800 text-left transition-colors cursor-pointer group"
                      >
                        <div className="text-xs font-bold text-[#0C0D11] dark:text-white group-hover:text-[#5450EB] dark:group-hover:text-indigo-400 transition-colors">Employer of Record</div>
                        <div className="text-[11px] text-[#4D515D] dark:text-slate-400">Hire in 150+ countries without entities</div>
                      </button>

                      <button
                        onClick={() => { onNavigateToTab('aor'); setActiveDropdown(null); }}
                        className="w-full p-2.5 rounded-xl hover:bg-[#F3F4F8] dark:hover:bg-slate-800 text-left transition-colors cursor-pointer group"
                      >
                        <div className="text-xs font-bold text-[#0C0D11] dark:text-white group-hover:text-[#5450EB] dark:group-hover:text-indigo-400 transition-colors">Agent of Record</div>
                        <div className="text-[11px] text-[#4D515D] dark:text-slate-400">Zero misclassification risk guarantee</div>
                      </button>

                      <button
                        onClick={() => { onNavigateToTab('platform'); setActiveDropdown(null); }}
                        className="w-full p-2.5 rounded-xl hover:bg-[#F3F4F8] dark:hover:bg-slate-800 text-left transition-colors cursor-pointer group"
                      >
                        <div className="text-xs font-bold text-[#0C0D11] dark:text-white group-hover:text-[#5450EB] dark:group-hover:text-indigo-400 transition-colors">Global Hybrid Contractor Pay</div>
                        <div className="text-[11px] text-[#4D515D] dark:text-slate-400">Fiat & stablecoin routing in 190+ countries</div>
                      </button>

                      <button
                        onClick={() => { onNavigateToTab('stablecoin'); setActiveDropdown(null); }}
                        className="w-full p-2.5 rounded-xl hover:bg-[#F3F4F8] dark:hover:bg-slate-800 text-left transition-colors cursor-pointer group"
                      >
                        <div className="text-xs font-bold text-[#0C0D11] dark:text-white group-hover:text-[#5450EB] dark:group-hover:text-indigo-400 transition-colors">Stablecoin Payroll</div>
                        <div className="text-[11px] text-[#4D515D] dark:text-slate-400">USDC & USDT sub-5 second settlement</div>
                      </button>

                      <button
                        onClick={() => { onNavigateToTab('direct_payroll'); setActiveDropdown(null); }}
                        className="w-full p-2.5 rounded-xl hover:bg-[#F3F4F8] dark:hover:bg-slate-800 text-left transition-colors cursor-pointer group"
                      >
                        <div className="text-xs font-bold text-[#0C0D11] dark:text-white group-hover:text-[#5450EB] dark:group-hover:text-indigo-400 transition-colors">Direct Payroll & Fiat Rails</div>
                        <div className="text-[11px] text-[#4D515D] dark:text-slate-400">90+ currencies, SEPA, ACH, FedNow & Pix</div>
                      </button>

                      <button
                        onClick={() => { onNavigateToTab('security'); setActiveDropdown(null); }}
                        className="w-full p-2.5 rounded-xl hover:bg-[#F3F4F8] dark:hover:bg-slate-800 text-left transition-colors cursor-pointer group"
                      >
                        <div className="text-xs font-bold text-[#0C0D11] dark:text-white group-hover:text-[#5450EB] dark:group-hover:text-indigo-400 transition-colors">Shield Compliance & Flex ID</div>
                        <div className="text-[11px] text-[#4D515D] dark:text-slate-400">SOC 2, GDPR, & FinCEN MSB certified</div>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownClick('solutions')}
                  className={`flex items-center gap-1 px-3 py-2 rounded-full transition-colors cursor-pointer ${
                    activeDropdown === 'solutions'
                      ? 'text-[#0D0E11] dark:text-white bg-white dark:bg-slate-800 shadow-xs'
                      : 'hover:text-[#0D0E11] dark:hover:text-white hover:bg-white/80 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'solutions' && (
                  <div className="absolute top-full left-0 mt-2 w-72 p-2 bg-white dark:bg-[#121316] rounded-2xl shadow-xl border border-[#DFE2EA] dark:border-slate-800 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    <div className="space-y-1">
                      <button
                        onClick={() => { onNavigateToTab('solutions_cfos'); setActiveDropdown(null); }}
                        className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F3F4F8] dark:hover:bg-slate-800 text-left transition-colors cursor-pointer"
                      >
                        <CreditCard className="w-4 h-4 text-[#5450EB]" />
                        <span className="text-xs font-bold text-[#0C0D11] dark:text-white">For CFOs & Finance Teams</span>
                      </button>

                      <button
                        onClick={() => { onNavigateToTab('solutions_hr'); setActiveDropdown(null); }}
                        className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F3F4F8] dark:hover:bg-slate-800 text-left transition-colors cursor-pointer"
                      >
                        <Users className="w-4 h-4 text-[#5450EB]" />
                        <span className="text-xs font-bold text-[#0C0D11] dark:text-white">For HR & People Ops</span>
                      </button>

                      <button
                        onClick={() => { onNavigateToTab('solutions_legal'); setActiveDropdown(null); }}
                        className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F3F4F8] dark:hover:bg-slate-800 text-left transition-colors cursor-pointer"
                      >
                        <Scale className="w-4 h-4 text-[#5450EB]" />
                        <span className="text-xs font-bold text-[#0C0D11] dark:text-white">For Legal & Compliance</span>
                      </button>

                      <button
                        onClick={() => { onNavigateToTab('solutions_web3'); setActiveDropdown(null); }}
                        className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F3F4F8] dark:hover:bg-slate-800 text-left transition-colors cursor-pointer"
                      >
                        <Coins className="w-4 h-4 text-[#5450EB]" />
                        <span className="text-xs font-bold text-[#0C0D11] dark:text-white">For Web3 & Global Tech</span>
                      </button>

                      <button
                        onClick={() => { onNavigateToTab('solutions_contractors'); setActiveDropdown(null); }}
                        className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F3F4F8] dark:hover:bg-slate-800 text-left transition-colors cursor-pointer"
                      >
                        <Wallet className="w-4 h-4 text-[#5450EB]" />
                        <span className="text-xs font-bold text-[#0C0D11] dark:text-white">For Contractors & Freelancers</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Integrations Mega Menu (4 Columns) */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownClick('integrations')}
                  className={`flex items-center gap-1 px-3 py-2 rounded-full transition-colors cursor-pointer ${
                    activeDropdown === 'integrations'
                      ? 'text-[#0D0E11] dark:text-white bg-white dark:bg-slate-800 shadow-xs'
                      : 'hover:text-[#0D0E11] dark:hover:text-white hover:bg-white/80 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>Integrations</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'integrations' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'integrations' && (
                  <div className="absolute top-full left-0 mt-2 w-[620px] p-6 bg-white dark:bg-[#121316] rounded-3xl shadow-2xl border border-[#E3E5EB] dark:border-slate-800 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    <div className="grid grid-cols-4 gap-6">
                      
                      {/* Accounting */}
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-wider text-[#4A4D57] dark:text-slate-400 mb-3 font-sans-ui">
                          Accounting
                        </div>
                        <ul className="space-y-2 text-xs font-semibold text-[#0D0E11] dark:text-slate-300">
                          <li onClick={() => { onNavigateToTab('integrations'); setActiveDropdown(null); }} className="flex items-center gap-1.5 hover:text-[#5C55FE] cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> QuickBooks
                          </li>
                          <li onClick={() => { onNavigateToTab('integrations'); setActiveDropdown(null); }} className="flex items-center gap-1.5 hover:text-[#5C55FE] cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-500" /> Xero
                          </li>
                          <li onClick={() => { onNavigateToTab('integrations'); setActiveDropdown(null); }} className="flex items-center gap-1.5 hover:text-[#5C55FE] cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Campfire
                          </li>
                          <li onClick={() => { onNavigateToTab('integrations'); setActiveDropdown(null); }} className="flex items-center gap-1.5 hover:text-[#5C55FE] cursor-pointer">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Rillet
                          </li>
                        </ul>
                      </div>

                      {/* Chains */}
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-wider text-[#4A4D57] dark:text-slate-400 mb-3 font-sans-ui">
                          Chains & Rails
                        </div>
                        <ul className="space-y-2 text-xs font-semibold text-[#0D0E11] dark:text-slate-300">
                          <li onClick={() => { onNavigateToTab('integrations'); setActiveDropdown(null); }} className="hover:text-[#5C55FE] cursor-pointer">🔷 Ethereum</li>
                          <li onClick={() => { onNavigateToTab('integrations'); setActiveDropdown(null); }} className="hover:text-[#5C55FE] cursor-pointer">🟣 Solana</li>
                          <li onClick={() => { onNavigateToTab('integrations'); setActiveDropdown(null); }} className="hover:text-[#5C55FE] cursor-pointer">🟣 Polygon</li>
                          <li onClick={() => { onNavigateToTab('integrations'); setActiveDropdown(null); }} className="hover:text-[#5C55FE] cursor-pointer">🔵 Arbitrum</li>
                          <li onClick={() => { onNavigateToTab('integrations'); setActiveDropdown(null); }} className="hover:text-[#5C55FE] cursor-pointer">⚡ Tron</li>
                          <li onClick={() => { onNavigateToTab('integrations'); setActiveDropdown(null); }} className="hover:text-[#5C55FE] cursor-pointer">💎 TON</li>
                        </ul>
                      </div>

                      {/* Wallets */}
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-wider text-[#4A4D57] dark:text-slate-400 mb-3 font-sans-ui">
                          Wallets & Custody
                        </div>
                        <ul className="space-y-2 text-xs font-semibold text-[#0D0E11] dark:text-slate-300">
                          <li onClick={() => { onNavigateToTab('integrations'); setActiveDropdown(null); }} className="hover:text-[#5C55FE] cursor-pointer">🛡️ Gnosis Safe</li>
                          <li onClick={() => { onNavigateToTab('integrations'); setActiveDropdown(null); }} className="hover:text-[#5C55FE] cursor-pointer">🪙 Coinbase</li>
                          <li onClick={() => { onNavigateToTab('integrations'); setActiveDropdown(null); }} className="hover:text-[#5C55FE] cursor-pointer">🦊 MetaMask</li>
                          <li onClick={() => { onNavigateToTab('integrations'); setActiveDropdown(null); }} className="hover:text-[#5C55FE] cursor-pointer">🔑 Torus</li>
                        </ul>
                      </div>

                      {/* Protocols */}
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-wider text-[#4A4D57] dark:text-slate-400 mb-3 font-sans-ui">
                          Protocols
                        </div>
                        <ul className="space-y-2 text-xs font-semibold text-[#0D0E11] dark:text-slate-300">
                          <li onClick={() => { onNavigateToTab('integrations'); setActiveDropdown(null); }} className="hover:text-[#5C55FE] cursor-pointer">🦄 Uniswap V3</li>
                          <li onClick={() => { onNavigateToTab('integrations'); setActiveDropdown(null); }} className="hover:text-[#5C55FE] cursor-pointer">🏦 SWIFT FedNow</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#E3E5EB] dark:border-slate-800">
                      <button
                        onClick={() => { onNavigateToTab('integrations'); setActiveDropdown(null); }}
                        className="w-full py-2.5 rounded-xl bg-[#F8F9FA] dark:bg-slate-800 text-[#0D0E11] dark:text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-[#EAEBFA] transition-colors cursor-pointer"
                      >
                        <span>View all integrations</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Resources (2-column Content Hub) */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownClick('resources')}
                  className={`flex items-center gap-1 px-3 py-2 rounded-full transition-colors cursor-pointer ${
                    activeDropdown === 'resources'
                      ? 'text-[#0D0E11] dark:text-white bg-white dark:bg-slate-800 shadow-xs'
                      : 'hover:text-[#0D0E11] dark:hover:text-white hover:bg-white/80 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>Resources</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'resources' && (
                  <div className="absolute top-full left-0 mt-2 w-[520px] p-6 bg-white dark:bg-[#121316] rounded-3xl shadow-2xl border border-[#DFE2EA] dark:border-slate-800 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    <div className="grid grid-cols-2 gap-6">
                      
                      <div className="space-y-4">
                        <div>
                          <div className="text-[10px] font-black uppercase tracking-wider text-[#4D515D] dark:text-slate-400 mb-2">
                            Featured Guide
                          </div>
                          <button
                            onClick={() => { onNavigateToTab('ebook'); setActiveDropdown(null); }}
                            className="w-full text-left p-2.5 rounded-2xl bg-[#CCD1F8]/40 hover:bg-[#CCD1F8] border border-[#BFC6F5] transition-colors cursor-pointer group"
                          >
                            <div className="text-xs font-bold text-[#0C0D11]">📘 Payroll Revolution (New Ebook)</div>
                            <div className="text-[11px] text-[#4D515D] mt-0.5">A Web3 Guide to Global Workforce Payments</div>
                          </button>
                        </div>

                        <div>
                          <div className="text-[10px] font-black uppercase tracking-wider text-[#4D515D] dark:text-slate-400 mb-2">
                            Workforce Academy
                          </div>
                          <ul className="space-y-2 text-xs font-semibold text-[#0C0D11] dark:text-slate-300">
                            <li onClick={() => { onNavigateToTab('academy_contractors'); setActiveDropdown(null); }} className="hover:text-[#5450EB] cursor-pointer">⚖️ Global Contractor Laws 101</li>
                            <li onClick={() => { onNavigateToTab('misclassification_guide'); setActiveDropdown(null); }} className="hover:text-[#5450EB] cursor-pointer">🛡️ Misclassification Protection Guide</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <div className="text-[10px] font-black uppercase tracking-wider text-[#4D515D] dark:text-slate-400 mb-2">
                          Reports & Whitepapers
                        </div>
                        <ul className="space-y-2 text-xs font-semibold text-[#0C0D11] dark:text-slate-300">
                          <li onClick={() => { onNavigateToTab('reports_benchmark'); setActiveDropdown(null); }} className="hover:text-[#5450EB] cursor-pointer">📈 Global EOR Benchmark 2026</li>
                          <li onClick={() => { onNavigateToTab('pricing'); setActiveDropdown(null); }} className="hover:text-[#5450EB] cursor-pointer">🌐 Total Cost of Employment Index</li>
                          <li onClick={() => { onNavigateToTab('stablecoin_compliance'); setActiveDropdown(null); }} className="hover:text-[#5450EB] cursor-pointer">📑 Cross-Border Stablecoin Compliance</li>
                        </ul>
                      </div>

                    </div>
                  </div>
                )}
              </div>

              {/* Pricing */}
              <button
                onClick={() => onNavigateToTab('pricing')}
                className="px-3 py-2 rounded-full hover:text-[#0D0E11] dark:hover:text-white hover:bg-white/80 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
              >
                Pricing
              </button>

              {/* Admin Console Direct Link */}
              <button
                onClick={() => onNavigateToTab('dashboard')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-[#0C0D11] dark:text-white bg-white dark:bg-slate-900 border border-[#DFE2EA] dark:border-slate-800 hover:bg-[#F3F4F8] transition-colors cursor-pointer shadow-xs"
                title="Open Cloud SQL Admin Portal"
              >
                <Briefcase className="w-3.5 h-3.5 text-[#5450EB]" />
                <span>Console</span>
              </button>
            </nav>
          </div>

          {/* Right Actions: Theme, Google OAuth, Strategy Call CTA (Role Switcher removed) */}
          <div className="flex items-center gap-3">
            
            {/* Search */}
            <button
              onClick={() => setShowSearchModal(true)}
              className="p-2.5 rounded-full text-[#4A4D57] dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title="Search documentation"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Dark/Light Mode */}
            <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-full text-text-muted dark:text-slate-300 hover:text-text-main dark:hover:text-white bg-surface-card/60 dark:bg-slate-800/80 hover:bg-brand-tint dark:hover:bg-slate-700 border border-surface-border dark:border-slate-700 transition-all cursor-pointer shadow-xs active:scale-95"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-text-main" />}
            </button>

            {/* Google OAuth Login or Profile */}
            {user.email ? (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 pl-2 pr-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-[#E3E5EB] dark:border-slate-800 text-xs font-semibold text-[#0D0E11] dark:text-white shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-[#D8DBFD] text-[#0D0E11] font-bold flex items-center justify-center text-[10px]">
                    {user.displayName?.charAt(0) || user.email.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden md:inline max-w-[100px] truncate">{user.displayName || user.email.split('@')[0]}</span>
                  <button
                    onClick={onSignOut}
                    className="p-1 hover:text-rose-500 transition-colors cursor-pointer"
                    title="Sign Out"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={onGoogleSignIn}
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-[#0D0E11] dark:text-white hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Login</span>
              </button>
            )}

            {/* Primary Action Button: Get Started ↗ */}
            <button
              onClick={onOpenBookDemo}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#556bd9] hover:bg-[#485dc7] shadow-sm hover:shadow-lg hover:shadow-[#556bd9]/30 hover:scale-[1.03] active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-1.5"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Global Search Dialog */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-xl bg-white dark:bg-[#121316] rounded-3xl p-6 shadow-2xl border border-[#E3E5EB] dark:border-slate-800">
            <div className="flex items-center justify-between pb-4 border-b border-[#E3E5EB] dark:border-slate-800">
              <div className="flex items-center gap-3 w-full">
                <Search className="w-5 h-5 text-[#4A4D57]" />
                <input
                  type="text"
                  placeholder="Search countries, labor laws, payroll, compliance..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-[#0D0E11] dark:text-white placeholder:text-[#4A4D57] focus:outline-none text-base font-semibold"
                  autoFocus
                />
              </div>
              <button
                onClick={() => setShowSearchModal(false)}
                className="text-xs font-bold px-2 py-1 rounded bg-[#F8F9FA] dark:bg-slate-800 text-[#4A4D57] cursor-pointer hover:bg-slate-200"
              >
                ESC
              </button>
            </div>

            <div className="py-4 space-y-2">
              <div className="text-[10px] font-black uppercase tracking-wider text-[#4A4D57]">Platform Quick Jump</div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => { onNavigateToTab('dashboard'); setShowSearchModal(false); }}
                  className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-[#F8F9FA] dark:hover:bg-slate-800 text-left text-xs font-bold text-[#0D0E11] dark:text-slate-200"
                >
                  <CreditCard className="w-4 h-4 text-[#5C55FE]" />
                  <span>Administrative Dashboard</span>
                </button>
                <button
                  onClick={() => { onNavigateToTab('contractors'); setShowSearchModal(false); }}
                  className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-[#F8F9FA] dark:hover:bg-slate-800 text-left text-xs font-bold text-[#0D0E11] dark:text-slate-200"
                >
                  <Users className="w-4 h-4 text-emerald-600" />
                  <span>Global Talent Roster (150+ countries)</span>
                </button>
                <button
                  onClick={() => { onNavigateToTab('payroll'); setShowSearchModal(false); }}
                  className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-[#F8F9FA] dark:hover:bg-slate-800 text-left text-xs font-bold text-[#0D0E11] dark:text-slate-200"
                >
                  <Coins className="w-4 h-4 text-purple-600" />
                  <span>Multi-Currency & Stablecoin Payroll</span>
                </button>
                <button
                  onClick={() => { onNavigateToTab('compliance'); setShowSearchModal(false); }}
                  className="flex items-center gap-2 p-2.5 rounded-xl hover:bg-[#F8F9FA] dark:hover:bg-slate-800 text-left text-xs font-bold text-[#0D0E11] dark:text-slate-200"
                >
                  <Shield className="w-4 h-4 text-amber-500" />
                  <span>Labor Shield & Flex ID Credentials</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

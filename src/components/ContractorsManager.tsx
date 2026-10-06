import React, { useState } from 'react';
import {
  Users,
  Plus,
  Search,
  Filter,
  CheckCircle2,
  AlertCircle,
  CreditCard,
  Zap,
  Globe2,
  Shield,
  Building2,
  Wallet,
  X,
  RefreshCw,
} from 'lucide-react';
import { Contractor, AuthUser } from '../types.ts';

interface ContractorsManagerProps {
  contractors: Contractor[];
  user: AuthUser;
  onAddContractor: (newContractor: Partial<Contractor>) => Promise<void>;
  onUpdateContractor: (id: number, updates: Partial<Contractor>) => Promise<void>;
  onRefresh: () => void;
}

const COUNTRY_OPTIONS = [
  { name: 'United States', code: 'US', flag: '🇺🇸', currency: 'USD' },
  { name: 'Brazil', code: 'BR', flag: '🇧🇷', currency: 'BRL' },
  { name: 'United Kingdom', code: 'GB', flag: '🇬🇧', currency: 'GBP' },
  { name: 'Japan', code: 'JP', flag: '🇯🇵', currency: 'JPY' },
  { name: 'Poland', code: 'PL', flag: '🇵🇱', currency: 'EUR' },
  { name: 'Vietnam', code: 'VN', flag: '🇻🇳', currency: 'VND' },
  { name: 'Australia', code: 'AU', flag: '🇦🇺', currency: 'AUD' },
  { name: 'Nigeria', code: 'NG', flag: '🇳🇬', currency: 'NGN' },
  { name: 'Germany', code: 'DE', flag: '🇩🇪', currency: 'EUR' },
  { name: 'Singapore', code: 'SG', flag: '🇸🇬', currency: 'SGD' },
  { name: 'Canada', code: 'CA', flag: '🇨🇦', currency: 'CAD' },
  { name: 'India', code: 'IN', flag: '🇮🇳', currency: 'INR' },
];

export const ContractorsManager: React.FC<ContractorsManagerProps> = ({
  contractors,
  user,
  onAddContractor,
  onUpdateContractor,
  onRefresh,
}) => {
  const [search, setSearch] = useState('');
  const [filterPayout, setFilterPayout] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedContractor, setSelectedContractor] = useState<Contractor | null>(null);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [roleTitle, setRoleTitle] = useState('');
  const [country, setCountry] = useState('United States');
  const [rate, setRate] = useState('6000');
  const [payoutMethod, setPayoutMethod] = useState<'crypto_usdc' | 'fiat_bank' | 'stablecoin_usdt'>('crypto_usdc');
  const [walletAddress, setWalletAddress] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [contractType, setContractType] = useState<'contractor' | 'eor_employee'>('contractor');

  const filtered = contractors.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.roleTitle.toLowerCase().includes(search.toLowerCase()) ||
      c.country.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase());

    const matchesPayout =
      filterPayout === 'all' ||
      (filterPayout === 'crypto' && (c.payoutMethod.startsWith('crypto') || c.payoutMethod.startsWith('stablecoin'))) ||
      (filterPayout === 'fiat' && c.payoutMethod === 'fiat_bank');

    return matchesSearch && matchesPayout;
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !roleTitle) return;

    setIsSubmitting(true);
    const countryObj = COUNTRY_OPTIONS.find((c) => c.name === country) || COUNTRY_OPTIONS[0];

    try {
      await onAddContractor({
        name,
        email,
        roleTitle,
        country: countryObj.name,
        countryCode: countryObj.code,
        flag: countryObj.flag,
        currency: countryObj.currency,
        payoutMethod,
        walletAddress: walletAddress || null,
        bankAccount: bankAccount || null,
        rate,
        rateType: 'monthly',
        contractType,
        status: 'active',
        complianceScore: 100,
        riseIdVerified: true,
      });

      setShowAddModal(false);
      // Reset form
      setName('');
      setEmail('');
      setRoleTitle('');
      setWalletAddress('');
      setBankAccount('');
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTogglePayoutMethod = async (contractor: Contractor) => {
    const newMethod = contractor.payoutMethod === 'crypto_usdc' ? 'fiat_bank' : 'crypto_usdc';
    await onUpdateContractor(contractor.id, { payoutMethod: newMethod });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Global Contractors & EOR Roster
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
              {contractors.length} Verified
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Manage international contractors, W-2 EOR employees, localized work agreements, and payout routing across 230+ countries.
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onRefresh}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
            title="Refresh database"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          {(user.role === 'super_admin' || user.role === 'hr_ops' || user.role === 'finance_manager') && (
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/25 transition-all cursor-pointer active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>Onboard Talent</span>
            </button>
          )}
        </div>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by name, role, country, or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Payout Rail Filter */}
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <span className="text-xs font-semibold text-slate-500">Payout:</span>
          {(['all', 'crypto', 'fiat'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setFilterPayout(mode)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition-colors cursor-pointer ${
                filterPayout === mode
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {mode === 'crypto' ? 'Stablecoins / Crypto' : mode === 'fiat' ? 'Bank Wire / ACH' : 'All Rails'}
            </button>
          ))}
        </div>
      </div>

      {/* Contractors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((c) => {
          const isCrypto = c.payoutMethod.startsWith('crypto') || c.payoutMethod.startsWith('stablecoin');

          return (
            <div
              key={c.id}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{c.flag}</div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">{c.name}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{c.roleTitle}</p>
                    </div>
                  </div>

                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    c.contractType === 'eor_employee'
                      ? 'bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300'
                      : 'bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300'
                  }`}>
                    {c.contractType === 'eor_employee' ? 'W-2 EOR' : '1099 / Global'}
                  </span>
                </div>

                <div className="mt-4 space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-slate-400">Country:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{c.country}</span>
                  </div>

                  <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-slate-400">Monthly Compensation:</span>
                    <span className="font-black text-slate-900 dark:text-white">
                      ${Number(c.rate).toLocaleString()} {c.currency}
                    </span>
                  </div>

                  <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-slate-400">Payout Rail:</span>
                    <span className={`font-bold flex items-center gap-1 ${isCrypto ? 'text-purple-600 dark:text-purple-400' : 'text-blue-600 dark:text-blue-400'}`}>
                      {isCrypto ? <Zap className="w-3 h-3" /> : <CreditCard className="w-3 h-3" />}
                      <span>{c.payoutMethod.toUpperCase().replace('_', ' ')}</span>
                    </span>
                  </div>

                  <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-slate-400">Flex ID & KYC:</span>
                    <span className="font-bold text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified (Score: {c.complianceScore}%)</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-between gap-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => handleTogglePayoutMethod(c)}
                  className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Switch Rail ({isCrypto ? 'to Bank' : 'to USDC'})</span>
                </button>

                <button
                  onClick={() => setSelectedContractor(c)}
                  className="px-3 py-1 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                >
                  Details
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Contractor Details Modal */}
      {selectedContractor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{selectedContractor.flag}</span>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{selectedContractor.name}</h3>
                  <p className="text-xs text-slate-500">{selectedContractor.email}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedContractor(null)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900 flex items-center justify-between">
                <div>
                  <div className="font-bold text-indigo-900 dark:text-indigo-200">On-Chain Flex ID Credential</div>
                  <div className="text-[11px] text-indigo-700 dark:text-indigo-300">DID:flex:eth:0x891a...712c</div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">Verified</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                  <span className="text-slate-400">Agreement Type:</span>
                  <div className="font-bold text-slate-900 dark:text-white mt-1 capitalize">{selectedContractor.contractType.replace('_', ' ')}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                  <span className="text-slate-400">Monthly Compensation:</span>
                  <div className="font-bold text-slate-900 dark:text-white mt-1">${Number(selectedContractor.rate).toLocaleString()}</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 space-y-1">
                <span className="text-slate-400">Wallet / Deposit Destination:</span>
                <div className="font-mono text-[11px] text-slate-800 dark:text-slate-200 break-all font-semibold">
                  {selectedContractor.walletAddress || selectedContractor.bankAccount || 'USDC Vault Account (Direct Custody)'}
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedContractor(null)}
                className="px-5 py-2 rounded-full text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Onboard Talent Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-600" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Onboard Global Talent</h3>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Full Legal Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mateo Rossi"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full mt-1.5 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="mateo@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mt-1.5 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Job Title & Role</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Senior Backend Engineer"
                    value={roleTitle}
                    onChange={(e) => setRoleTitle(e.target.value)}
                    className="w-full mt-1.5 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Residence Country</label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full mt-1.5 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {COUNTRY_OPTIONS.map((c) => (
                      <option key={c.code} value={c.name}>
                        {c.flag} {c.name} ({c.currency})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Monthly Compensation (USD)</label>
                  <input
                    type="number"
                    required
                    min={500}
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className="w-full mt-1.5 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Classification Type</label>
                  <select
                    value={contractType}
                    onChange={(e) => setContractType(e.target.value as any)}
                    className="w-full mt-1.5 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="contractor">Independent Contractor (1099)</option>
                    <option value="eor_employee">Full-Time Employee (Flex EOR)</option>
                  </select>
                </div>
              </div>

              {/* Payout Rail Selection */}
              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300">Default Payout Rail</label>
                <div className="grid grid-cols-3 gap-2 mt-1.5">
                  <button
                    type="button"
                    onClick={() => setPayoutMethod('crypto_usdc')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      payoutMethod === 'crypto_usdc'
                        ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600'
                        : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    USDC (Instant)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPayoutMethod('stablecoin_usdt')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      payoutMethod === 'stablecoin_usdt'
                        ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600'
                        : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    USDT (Ethereum/Tron)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPayoutMethod('fiat_bank')}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      payoutMethod === 'fiat_bank'
                        ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600'
                        : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    Local Bank Wire
                  </button>
                </div>
              </div>

              {payoutMethod !== 'fiat_bank' ? (
                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Wallet Address (Optional)</label>
                  <input
                    type="text"
                    placeholder="0x... or Solana pubkey"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    className="w-full mt-1.5 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-xs"
                  />
                </div>
              ) : (
                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300">Bank Details / IBAN</label>
                  <input
                    type="text"
                    placeholder="IBAN or Routing & Account number"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                    className="w-full mt-1.5 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono text-xs"
                  />
                </div>
              )}

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 rounded-full text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/25 disabled:opacity-50 cursor-pointer active:scale-95"
                >
                  {isSubmitting ? 'Saving to Database...' : 'Save & Issue Agreement'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

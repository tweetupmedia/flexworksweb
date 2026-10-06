import React, { useState } from 'react';
import {
  Scale,
  Globe2,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Sparkles,
  BookOpen,
  FileCheck,
  ShieldAlert,
  ShieldCheck,
  Building,
} from 'lucide-react';

interface ContractorLawsPageProps {
  onOpenBookDemo: () => void;
  onOpenPricing: () => void;
  onNavigateToTab: (tabId: string) => void;
}

const COUNTRY_LAWS = [
  {
    country: 'United States',
    flag: '🇺🇸',
    standard: 'DOL 6-Factor Economic Reality Test (2024 Rule)',
    riskFactor: 'High (Class-action lawsuits & DOL audits)',
    rules: [
      'Opportunity for profit or loss depending on managerial skill',
      'Investments by the worker and the potential employer',
      'Degree of permanence of the work relationship',
      'Nature and degree of control exercised over performance',
      'Extent to which work performed is an integral part of business',
      'Skill and initiative required to perform the services',
    ],
    safeHarbor: 'Engage via Flex AOR master agreement with indemnified classification shield.',
  },
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    standard: 'IR35 (Off-Payroll Working Rules)',
    riskFactor: 'Severe (Client liable for unpaid PAYE tax & NICs)',
    rules: [
      'Right of substitution: Can the contractor send a qualified substitute?',
      'Mutuality of Obligation (MOO): Is client obliged to provide ongoing work?',
      'Control: Does the client dictate how, where, and when work is done?',
      'Financial risk: Does the contractor provide their own tools and insurance?',
    ],
    safeHarbor: 'Flex provides verified Outside-IR35 status determinations or compliant EOR.',
  },
  {
    country: 'Germany',
    flag: '🇩🇪',
    standard: 'Scheinselbstständigkeit (Bogus Self-Employment)',
    riskFactor: 'Criminal & Financial Penalties (Clearing House Statusfeststellungsverfahren)',
    rules: [
      'Contractor earning over 5/6 (83%) of revenue from a single client',
      'Integration into the client’s internal Slack, team meetings, or org chart',
      'Requirement to follow directives regarding working hours or locations',
      'No entrepreneurial market presence (no personal website or commercial tax ID)',
    ],
    safeHarbor: 'Direct hire via Flex EOR Germany entity or multi-client AOR structuring.',
  },
  {
    country: 'Brazil',
    flag: '🇧🇷',
    standard: 'CLT vs. PJ (Pessoa Jurídica)',
    riskFactor: 'High (Labor Courts systematically favor workers in disputes)',
    rules: [
      'Habituality: Regular daily/weekly work schedules trigger CLT status',
      'Subordination: Direct managerial reporting lines are prohibited for PJ',
      'Onerousness: Payment made as regular monthly fixed stipend',
      'Personality: Requirement that the specific individual personally execute tasks',
    ],
    safeHarbor: 'Hire directly via Flex Brazilian EOR entity with full 13th month & FGTS compliance.',
  },
];

export const ContractorLawsPage: React.FC<ContractorLawsPageProps> = ({
  onOpenBookDemo,
  onOpenPricing,
  onNavigateToTab,
}) => {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_LAWS[0]);

  // Quiz state
  const [answers, setAnswers] = useState({
    fixedHours: false,
    companyEquipment: false,
    exclusiveClient: false,
    hourlyPay: false,
    coreBusiness: false,
  });

  const toggleAnswer = (key: keyof typeof answers) => {
    setAnswers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const riskCount = Object.values(answers).filter(Boolean).length;
  const riskStatus =
    riskCount >= 3
      ? { label: 'Severe Risk of Misclassification', color: 'text-rose-600 dark:text-rose-400', bg: 'bg-rose-50 dark:bg-rose-950/50', border: 'border-rose-200 dark:border-rose-800' }
      : riskCount >= 1
      ? { label: 'Moderate Risk (Auditing Required)', color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-950/50', border: 'border-amber-200 dark:border-amber-800' }
      : { label: 'Low Risk (Compliant Contractor Profile)', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-950/50', border: 'border-emerald-200 dark:border-emerald-800' };

  return (
    <div className="font-sans-ui bg-[#FAFAFC] dark:bg-[#0B0C0E] text-[#0C0D11] dark:text-slate-100 transition-colors">
      
      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-12 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-7 relative rounded-[32px] bg-[#CCD1F8] dark:bg-[#181B2B] text-[#0C0D11] dark:text-white p-8 sm:p-12 lg:p-14 flex flex-col justify-between border border-[#BFC6F5] dark:border-slate-800 shadow-xs overflow-hidden">
            
            <div className="absolute top-6 right-6 w-11 h-11 rounded-full bg-[#CCE829] shadow-md flex items-center justify-center text-[#0C0D11] rotate-12 transition-transform hover:rotate-45 cursor-pointer">
              <Scale className="w-5 h-5 fill-current" />
            </div>

            <div className="self-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/80 text-[11px] font-bold text-[#0C0D11] dark:text-white shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#5450EB] animate-pulse" />
                <span>WORKFORCE ACADEMY • 2026 COMPLIANCE GUIDE</span>
              </div>
            </div>

            <div className="my-8 space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-normal leading-[1.08] tracking-tight font-editorial">
                The Executive Guide to <span className="text-[#5450EB] dark:text-indigo-400">Global Contractor Compliance</span>
              </h1>
              <p className="text-base sm:text-lg text-[#323642] dark:text-slate-300 max-w-xl font-normal leading-relaxed">
                Labor courts worldwide are aggressively cracking down on de-facto employment. Understand key statutory tests—from US DOL economic reality to UK IR35 and German Scheinselbstständigkeit—and insulate your business.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenBookDemo}
                className="px-8 py-4 rounded-full text-xs sm:text-sm font-bold text-white bg-[#0C0D11] hover:bg-black dark:bg-white dark:text-[#0C0D11] shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2 active:scale-95"
              >
                <span>Request Free Workforce Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigateToTab('misclassification_guide')}
                className="px-7 py-4 rounded-full text-xs sm:text-sm font-bold text-[#0C0D11] dark:text-white bg-white dark:bg-slate-900 border border-[#DFE2EA] dark:border-slate-800 hover:bg-[#F3F4F8] transition-colors cursor-pointer"
              >
                View Penalty Matrix
              </button>
            </div>
          </div>

          {/* Right Column: Live Misclassification Risk Assessment Quiz */}
          <div className="lg:col-span-5 bg-white dark:bg-[#121316] rounded-[32px] p-6 sm:p-8 border border-[#DFE2EA] dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E3E5EB] dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4A4D57]">Instant Contractor Audit Tool</span>
                <span className="text-[11px] font-mono text-[#5450EB] font-bold">5 Legal Tests</span>
              </div>

              <div className="mt-4 space-y-2.5">
                {[
                  { key: 'fixedHours' as const, label: 'Company mandates fixed working hours or shifts' },
                  { key: 'companyEquipment' as const, label: 'Company provides laptop, monitor, or proprietary tools' },
                  { key: 'exclusiveClient' as const, label: 'Contractor is prohibited from working with other clients' },
                  { key: 'hourlyPay' as const, label: 'Paid regular hourly rate without project milestones' },
                  { key: 'coreBusiness' as const, label: 'Work performed is identical to full-time staff roles' },
                ].map((q) => (
                  <button
                    key={q.key}
                    onClick={() => toggleAnswer(q.key)}
                    className={`w-full text-left p-3 rounded-2xl border transition-colors cursor-pointer flex items-center justify-between text-xs ${
                      answers[q.key]
                        ? 'border-rose-400 bg-rose-50/70 dark:bg-rose-950/40 text-rose-950 dark:text-rose-200 font-bold'
                        : 'border-[#DFE2EA] dark:border-slate-800 bg-[#F8F9FA] dark:bg-slate-900/40 text-[#4A4D57] hover:bg-slate-100'
                    }`}
                  >
                    <span>{q.label}</span>
                    <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] shrink-0 ml-2">
                      {answers[q.key] ? '✕' : ''}
                    </span>
                  </button>
                ))}
              </div>

              {/* Dynamic Status Output */}
              <div className={`mt-5 p-4 rounded-2xl border ${riskStatus.border} ${riskStatus.bg} space-y-1`}>
                <div className="text-[10px] uppercase font-bold tracking-wider text-[#4D515D] dark:text-slate-400">
                  Risk Level ({riskCount}/5 triggers)
                </div>
                <div className={`text-sm font-black ${riskStatus.color}`}>
                  {riskStatus.label}
                </div>
                <div className="text-[11px] text-[#4D515D] dark:text-slate-300 pt-1 leading-relaxed">
                  {riskCount >= 3
                    ? 'Recommended: Transition worker immediately to Flex EOR to avoid retroactive payroll tax liability.'
                    : riskCount >= 1
                    ? 'Recommended: Restructure contract via Flex Agent of Record (AOR) with 100% legal indemnification.'
                    : 'Your contractor arrangement matches safe independent contractor guidelines.'}
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBookDemo}
              className="mt-6 w-full py-3.5 rounded-full text-xs font-bold text-white bg-[#0C0D11] hover:bg-black dark:bg-white dark:text-[#0C0D11] transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Consult with Flex Compliance Counsel</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= JURISDICTION COMPARISON ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-4 mb-10 text-center max-w-2xl mx-auto">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#CCD1F8] dark:bg-indigo-950 text-[#0C0D11] dark:text-indigo-300">
            JURISDICTION DOSSIER
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#0C0D11] dark:text-white font-editorial">
            Country-by-Country Legal Frameworks
          </h2>
          <p className="text-sm text-[#4D515D] dark:text-slate-400">
            Select a key market to view active legal precedents, enforcement triggers, and safe harbor mechanisms.
          </p>
        </div>

        {/* Country Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {COUNTRY_LAWS.map((c) => (
            <button
              key={c.country}
              onClick={() => setSelectedCountry(c)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                selectedCountry.country === c.country
                  ? 'bg-[#0C0D11] text-white dark:bg-white dark:text-[#0C0D11] shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-[#4A4D57] border border-[#DFE2EA] dark:border-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>{c.flag}</span>
              <span>{c.country}</span>
            </button>
          ))}
        </div>

        {/* Selected Country Details Card */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-[#121316] rounded-3xl p-8 border border-[#DFE2EA] dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E3E5EB] dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{selectedCountry.flag}</span>
                <h3 className="text-xl font-black text-[#0C0D11] dark:text-white">{selectedCountry.country}</h3>
              </div>
              <div className="text-xs text-[#5450EB] font-bold mt-1">{selectedCountry.standard}</div>
            </div>
            <div className="text-right">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400 border border-rose-200 dark:border-rose-900">
                {selectedCountry.riskFactor}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4A4D57]">Primary Legal Tests Evaluated:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {selectedCountry.rules.map((rule, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-[#F8F9FA] dark:bg-slate-900/60 border border-[#DFE2EA] dark:border-slate-800 flex items-start gap-2.5 text-xs text-[#0C0D11] dark:text-slate-200">
                  <span className="text-[#5450EB] font-bold">•</span>
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#CCD1F8]/30 dark:bg-indigo-950/40 border border-[#CCD1F8] dark:border-indigo-900/60 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#5450EB] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-[#0C0D11] dark:text-white">Flex Safe Harbor Solution:</div>
              <div className="text-xs text-[#4D515D] dark:text-slate-300 mt-0.5 leading-relaxed">{selectedCountry.safeHarbor}</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

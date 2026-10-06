import React from 'react';

interface PartnerLogo {
  id: string;
  name: string;
  category: string;
  renderLogo: () => React.ReactNode;
}

const PARTNERS: PartnerLogo[] = [
  // 1. ADP
  {
    id: 'adp',
    name: 'ADP',
    category: 'Enterprise Payroll',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg className="h-7 w-auto fill-current text-[#0C0D11] dark:text-white" viewBox="0 0 120 40">
          {/* Bold stylized ADP logo */}
          <path d="M12 34L26 6h10l14 28h-9l-3.2-6.5h-15.6L19 34H12zm15-13.5h10.4L32.2 10.2 27 20.5z" />
          <path d="M54 6h15c9.4 0 16 6.2 16 14s-6.6 14-16 14H54V6zm9 21h6c5 0 8-3 8-7s-3-7-8-7h-6v14z" />
          <path d="M89 6h16c8 0 13.5 5 13.5 12s-5.5 12-13.5 12h-7v4h-9V6zm9 17h7c3.8 0 6.2-2.2 6.2-5s-2.4-5-6.2-5h-7v10z" />
        </svg>
      </div>
    ),
  },

  // 2. Circle
  {
    id: 'circle',
    name: 'Circle',
    category: 'USDC Treasury Rail',
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <svg className="w-7 h-7 text-[#0C0D11] dark:text-white" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3" />
          <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="16" cy="16" r="3" fill="currentColor" />
        </svg>
        <span className="text-xl font-bold tracking-tight text-[#0C0D11] dark:text-white font-sans-ui lowercase">
          circle
        </span>
      </div>
    ),
  },

  // 3. Global EOR Services
  {
    id: 'global-eor-services',
    name: 'Global EOR Services',
    category: 'Global Employment Partner',
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-bold text-xs shadow-xs">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        </div>
        <div className="text-left">
          <div className="text-sm font-black tracking-tight text-[#0C0D11] dark:text-white leading-none font-sans-ui uppercase">
            Global EOR
          </div>
          <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase leading-tight mt-0.5">
            Services
          </div>
        </div>
      </div>
    ),
  },

  // 4. Payoneer
  {
    id: 'payoneer',
    name: 'Payoneer',
    category: 'Cross-Border Payouts',
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        {/* Payoneer Iconic Multi-Circle Ring */}
        <div className="w-7 h-7 rounded-full border-[3px] border-current text-[#0C0D11] dark:text-white relative flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-current" />
        </div>
        <span className="text-xl font-bold tracking-tight text-[#0C0D11] dark:text-white font-sans-ui">
          Payoneer
        </span>
      </div>
    ),
  },

  // 5. Papaya Global
  {
    id: 'papaya-global',
    name: 'Papaya Global',
    category: 'Global Workforce OS',
    renderLogo: () => (
      <div className="flex items-center gap-2.5">
        <svg className="w-7 h-7 text-[#0C0D11] dark:text-white fill-current" viewBox="0 0 32 32">
          {/* Stylized organic papaya leaf / geometric seed icon */}
          <path d="M16 3C9.37 3 4 8.37 4 15c0 7.8 7.5 14 12 14s12-6.2 12-14c0-6.63-5.37-12-12-12zm0 18a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
        </svg>
        <div className="text-left">
          <span className="text-lg font-bold tracking-tight text-[#0C0D11] dark:text-white font-sans-ui lowercase">
            papaya<span className="font-normal opacity-80"> global</span>
          </span>
        </div>
      </div>
    ),
  },

  // 6. Workday
  {
    id: 'workday',
    name: 'Workday',
    category: 'Enterprise HCM',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="relative flex flex-col items-center">
          <svg className="w-6 h-3 text-[#0C0D11] dark:text-white stroke-current" viewBox="0 0 24 12" fill="none">
            <path d="M2 11C2 6 6.5 2 12 2C17.5 2 22 6 22 11" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <span className="text-lg font-black tracking-tight text-[#0C0D11] dark:text-white font-sans-ui leading-none mt-0.5">
            workday
          </span>
        </div>
      </div>
    ),
  },

  // 7. SAP Partner
  {
    id: 'sap',
    name: 'SAP Partner',
    category: 'ERP Ecosystem',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="px-2.5 py-0.5 rounded-md bg-[#0C0D11] dark:bg-white text-white dark:text-[#0C0D11] font-black text-xs tracking-wider">
          SAP
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Partner
        </span>
      </div>
    ),
  },

  // 8. Remote
  {
    id: 'remote',
    name: 'Remote',
    category: 'Global Employment',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-[#0C0D11] dark:bg-white text-white dark:text-[#0C0D11] flex items-center justify-center font-black text-xs">
          R
        </div>
        <span className="text-lg font-bold tracking-tight text-[#0C0D11] dark:text-white font-sans-ui lowercase">
          remote
        </span>
      </div>
    ),
  },

  // 9. ClickUp
  {
    id: 'clickup',
    name: 'ClickUp',
    category: 'Workforce Productivity',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg className="w-6 h-6 text-[#0C0D11] dark:text-white" viewBox="0 0 24 24" fill="none">
          <path
            d="M4.5 11.5L12 4.5L19.5 11.5"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 17C7 19.8 9.2 20.8 12 20.8C14.8 20.8 17 19.8 19 17"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-lg font-extrabold tracking-tight text-[#0C0D11] dark:text-white font-sans-ui">
          Click<span className="text-[#5450EB] dark:text-indigo-400">Up</span>
        </span>
      </div>
    ),
  },

  // 10. Software Advice
  {
    id: 'software-advice',
    name: 'Software Advice',
    category: 'B2B Enterprise Advisory',
    renderLogo: () => (
      <div className="flex items-center gap-1.5">
        <span className="text-base font-extrabold tracking-tight text-[#0C0D11] dark:text-white font-sans-ui">
          Software Advice
        </span>
        <svg className="w-4 h-4 fill-[#F97316]" viewBox="0 0 20 20">
          <path d="M3 4C3 2.89543 3.89543 2 5 2H15C16.1046 2 17 2.89543 17 4V12C17 13.1046 16.1046 14 15 14H7L3 17V4Z" />
        </svg>
      </div>
    ),
  },

  // 11. The Economic Times
  {
    id: 'economic-times',
    name: 'The Economic Times',
    category: 'Global Financial Media',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="px-2 py-0.5 rounded-sm bg-[#E51B24] text-white flex items-center justify-center font-serif font-black text-sm tracking-tighter">
          ET
        </div>
        <span className="text-xs font-serif font-bold tracking-tight text-[#0C0D11] dark:text-white uppercase leading-none">
          The Economic Times
        </span>
      </div>
    ),
  },

  // 12. Flatpay
  {
    id: 'flatpay',
    name: 'Flatpay',
    category: 'Fintech Payments',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg className="w-6 h-6 fill-current text-[#0C0D11] dark:text-white" viewBox="0 0 32 32">
          <rect x="12" y="3" width="8" height="26" rx="1" />
          <rect x="3" y="12" width="7" height="8" rx="1" />
          <rect x="22" y="12" width="7" height="8" rx="1" />
        </svg>
        <span className="text-lg font-bold tracking-tight text-[#0C0D11] dark:text-white lowercase font-sans-ui">
          flatpay
        </span>
      </div>
    ),
  },

  // 13. ecruit
  {
    id: 'ecruit',
    name: 'ecruit',
    category: 'Global Talent Network',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 stroke-current text-[#0C0D11] dark:text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2.8" strokeLinecap="round">
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="3.5" y1="7.1" x2="20.5" y2="16.9" />
          <line x1="3.5" y1="16.9" x2="20.5" y2="7.1" />
        </svg>
        <span className="text-lg font-black tracking-tight text-[#0C0D11] dark:text-white font-sans-ui lowercase">
          ecruit
        </span>
      </div>
    ),
  },

  // 14. UENI
  {
    id: 'ueni',
    name: 'UENI',
    category: 'Global Business Infrastructure',
    renderLogo: () => (
      <div className="flex items-center">
        <span className="text-lg font-black tracking-[0.25em] text-[#0C0D11] dark:text-white font-sans-ui">
          UENI
        </span>
      </div>
    ),
  },

  // 15. Boulevard
  {
    id: 'boulevard',
    name: 'Boulevard',
    category: 'Client Commerce & Payroll',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg className="w-6 h-6 stroke-current text-[#0C0D11] dark:text-white" viewBox="0 0 32 32" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 5h9a6 6 0 0 1 0 10H8z" />
          <path d="M8 15h11a6 6 0 0 1 0 10H8z" />
          <line x1="8" y1="27" x2="21" y2="5" strokeWidth="3.2" />
        </svg>
        <span className="text-base font-bold tracking-wider uppercase text-[#0C0D11] dark:text-white font-sans-ui">
          Boulevard
        </span>
      </div>
    ),
  },

  // 16. Weave
  {
    id: 'weave',
    name: 'Weave',
    category: 'Unified Communications',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg className="w-6 h-6 stroke-current text-[#0C0D11] dark:text-white" viewBox="0 0 32 32" fill="none" strokeWidth="3.2" strokeLinecap="round">
          <rect x="5" y="8" width="10" height="16" rx="5" />
          <rect x="17" y="8" width="10" height="16" rx="5" />
        </svg>
        <span className="text-lg font-black tracking-tight text-[#0C0D11] dark:text-white lowercase font-sans-ui">
          weave
        </span>
      </div>
    ),
  },

  // 17. Copla
  {
    id: 'copla',
    name: 'Copla',
    category: 'Modern Operations',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-lg bg-black text-white dark:bg-white dark:text-black flex items-center justify-center relative overflow-hidden">
          <span className="text-[10px] font-black">CP</span>
        </div>
        <span className="text-base font-black italic tracking-tight text-[#0C0D11] dark:text-white font-sans-ui">
          Copla
        </span>
      </div>
    ),
  },

  // 18. TweetUp / Pulse
  {
    id: 'tweetup',
    name: 'TweetUp',
    category: 'Creator & Media Payouts',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg className="w-6 h-6 stroke-current text-[#5450EB] dark:text-indigo-400" viewBox="0 0 32 32" fill="none" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 16c4 0 4-10 8-10s4 20 8 20 4-10 8-10" />
        </svg>
        <span className="text-base font-bold tracking-tight text-[#0C0D11] dark:text-white font-sans-ui">
          TweetUp
        </span>
      </div>
    ),
  },

  // 19. ShiftTime / Hourglass
  {
    id: 'shifttime',
    name: 'ShiftTime',
    category: 'Time & Attendance Tracking',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-xs">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M6 2h12v4l-4 4 4 4v4H6v-4l4-4-4-4V2zm2 3.5V4h8v1.5l-3.5 3.5H9.5L6 5.5z" />
          </svg>
        </div>
        <span className="text-base font-bold tracking-tight text-[#0C0D11] dark:text-white font-sans-ui">
          ShiftTime
        </span>
      </div>
    ),
  },

  // 20. TWM
  {
    id: 'twm',
    name: 'TWM Global',
    category: 'Workforce Management',
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-[#0284C7] text-white flex items-center justify-center font-mono font-bold text-xs">
          -t.
        </div>
        <span className="text-base font-black tracking-tight text-[#0C0D11] dark:text-white font-sans-ui">
          TWM
        </span>
      </div>
    ),
  },
];

interface TrustedByMarqueeProps {
  title?: string;
  subtitle?: string;
}

export const TrustedByMarquee: React.FC<TrustedByMarqueeProps> = ({
  title = 'TRUSTED BY GLOBAL LEADERS & INTEGRATED WITH THE MODERN HR ECOSYSTEM',
  subtitle,
}) => {
  // Duplicate array for infinite seamless looping
  const marqueeItems = [...PARTNERS, ...PARTNERS];

  return (
    <section className="w-full py-10 sm:py-12 bg-white/70 dark:bg-[#0B0C0E]/70 border-y border-[#DFE2EA] dark:border-slate-800/80 overflow-hidden relative transition-colors duration-200">
      
      {/* Left and Right Smooth Edge Gradient Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-[#FAFAFC] dark:from-[#0B0C0E] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-[#FAFAFC] dark:from-[#0B0C0E] to-transparent z-10" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-7 sm:mb-8">
        <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-[#4A4D57] dark:text-slate-400">
          {title}
        </p>
        {subtitle && (
          <p className="text-xs text-[#717684] dark:text-slate-500 mt-1">
            {subtitle}
          </p>
        )}
      </div>

      {/* Infinite Scrolling Marquee Track */}
      <div className="relative w-full overflow-hidden flex items-center">
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 lg:gap-20 whitespace-nowrap pl-4">
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex items-center gap-3 px-3 py-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 dark:opacity-50 dark:hover:opacity-100 transition-all duration-300 cursor-pointer select-none group shrink-0"
              title={`${partner.name} - ${partner.category}`}
            >
              {partner.renderLogo()}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

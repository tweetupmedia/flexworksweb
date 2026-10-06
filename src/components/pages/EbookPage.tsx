import React, { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  Download,
  BookOpen,
  Shield,
  Sparkles,
  Lock,
} from 'lucide-react';

interface EbookPageProps {
  onOpenBookDemo: () => void;
}

export const EbookPage: React.FC<EbookPageProps> = ({ onOpenBookDemo }) => {
  const [workEmail, setWorkEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!workEmail) return;
    setIsSubmitting(true);
    try {
      await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`.trim() || 'Payroll Reader',
          email: workEmail,
          company: companyName || 'Global Enterprise',
          teamSize: '10-50',
          primaryNeed: 'Payroll Revolution Ebook Download',
        }),
      });
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-sans-ui bg-[#F8F9FA] dark:bg-[#0D0E12] text-[#0C0D11] dark:text-slate-100 transition-colors py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Header (Matching Screenshot 1) */}
        <div className="max-w-3xl space-y-4">
          <div className="text-[11px] font-black uppercase tracking-widest text-[#5450EB] dark:text-indigo-400">
            NEW EBOOK
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-[#0C0D11] dark:text-white font-editorial">
            Revolutionize your Payroll & <span className="text-[#5450EB] dark:text-indigo-400">Empower your People</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#4D515D] dark:text-slate-300 font-normal leading-relaxed">
            Get access to the definitive guide on web3-enabled payroll and compliance solutions.
          </p>

          <div className="space-y-3 pt-3 text-xs sm:text-sm font-semibold text-[#0C0D11] dark:text-slate-200">
            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#CCD1F8] flex items-center justify-center text-[#5450EB] shrink-0 mt-0.5">
                ↗
              </div>
              <p>
                <strong>Explore Hybrid Payroll Solutions:</strong> Understand how to blend crypto and fiat for efficient, compliant global payroll management.
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#CCD1F8] flex items-center justify-center text-[#5450EB] shrink-0 mt-0.5">
                ↗
              </div>
              <p>
                <strong>Global Compliance Made Easy:</strong> Gain insights into navigating diverse international payroll laws, statutory benefits, and local tax regulations.
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#CCD1F8] flex items-center justify-center text-[#5450EB] shrink-0 mt-0.5">
                ↗
              </div>
              <p>
                <strong>Choosing the Right Provider:</strong> Learn what to look for in a hybrid payroll system to suit your global workforce's needs.
              </p>
            </div>
          </div>
        </div>

        {/* 2-Column Ebook Cover & Form (Matching Screenshot 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-4">
          
          {/* Ebook Graphic Card */}
          <div className="lg:col-span-6 p-8 sm:p-12 rounded-[36px] bg-gradient-to-br from-[#CCD1F8] via-[#EAEBFA] to-white dark:from-[#181B2B] dark:via-[#14161F] dark:to-slate-900 border border-[#BFC6F5] dark:border-slate-800 shadow-xl flex flex-col justify-between min-h-[460px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl font-black text-[#0C0D11] dark:text-white font-sans-ui">flex</span>
                <span className="w-2 h-2 rounded-full bg-[#5450EB]" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#0C0D11] text-white flex items-center justify-center font-bold text-base">
                $
              </div>
            </div>

            <div className="my-8 space-y-3">
              <h2 className="text-4xl sm:text-5xl font-black text-[#0C0D11] dark:text-white leading-[1.05] tracking-tight">
                Payroll Revolution
              </h2>
              <p className="text-sm font-semibold text-[#4D515D] dark:text-slate-300 max-w-sm">
                A Web3 Guide to Global Workforce Payments in Fiat & Crypto
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#BFC6F5]/60 dark:border-slate-800">
              <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase bg-[#0C0D11] text-white">
                Ebook
              </span>
              <span className="text-xs font-bold text-[#5450EB] dark:text-indigo-400">
                2026 Edition • 38 Pages PDF
              </span>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-[36px] bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 shadow-xl">
            {isSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center font-black text-xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-[#0C0D11] dark:text-white font-editorial">
                  Your Guide is Ready!
                </h3>
                <p className="text-xs text-[#4D515D] dark:text-slate-400 max-w-sm mx-auto">
                  We've sent a direct download link for <strong>Payroll Revolution</strong> to <strong>{workEmail}</strong>.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#0C0D11] text-white hover:bg-black/90 cursor-pointer"
                >
                  Download Another Copy
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="font-bold text-[#0C0D11] dark:text-white">
                    Work Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#F8F9FA] dark:bg-slate-900 border border-[#DFE2EA] dark:border-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-[#0C0D11]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-[#0C0D11] dark:text-white">
                      First name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#F8F9FA] dark:bg-slate-900 border border-[#DFE2EA] dark:border-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-[#0C0D11]"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-[#0C0D11] dark:text-white">
                      Last name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Doe"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#F8F9FA] dark:bg-slate-900 border border-[#DFE2EA] dark:border-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-[#0C0D11]"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-[#0C0D11] dark:text-white">
                    Company name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Global Inc"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full mt-1.5 px-4 py-3 rounded-xl bg-[#F8F9FA] dark:bg-slate-900 border border-[#DFE2EA] dark:border-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-[#0C0D11]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#5450EB] hover:bg-indigo-600 text-white shadow-md hover:shadow-lg disabled:opacity-50 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
                  >
                    <span>{isSubmitting ? 'Processing...' : 'Submit & Download PDF →'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

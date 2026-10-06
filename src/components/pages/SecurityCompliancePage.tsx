import React, { useState } from 'react';
import {
  Shield,
  Lock,
  CheckCircle2,
  FileCheck,
  Building,
  Key,
  Scale,
  Award,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

interface SecurityCompliancePageProps {
  onOpenBookDemo: () => void;
}

export const SecurityCompliancePage: React.FC<SecurityCompliancePageProps> = ({
  onOpenBookDemo,
}) => {
  const [showLicensesModal, setShowLicensesModal] = useState(false);

  return (
    <div className="font-sans-ui bg-[#F8F9FA] dark:bg-[#0D0E12] text-[#0C0D11] dark:text-slate-100 transition-colors py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header (Matching Screenshot 3) */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CCD1F8] dark:bg-indigo-950/80 text-[11px] font-black uppercase tracking-wider text-[#0C0D11] dark:text-indigo-300">
            <span className="w-2 h-2 rounded-full bg-[#CCE829]" />
            <span>SECURITY, COMPLIANCE & PRIVACY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-[#0C0D11] dark:text-white font-editorial">
            Secure, Compliant, and Private
          </h1>

          <p className="text-base sm:text-lg text-[#4D515D] dark:text-slate-300 leading-relaxed font-normal">
            At Flex, we take security and compliance seriously so you don't have to worry. Whether managing payroll in Web3 or traditional finance, we ensure your business stays protected against regulatory risks with industry-leading safeguards you can trust.
          </p>
        </div>

        {/* 4 Security Pillars (Matching Screenshot 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: SOC 2 Certified & GDPR Compliant */}
          <div className="p-8 rounded-[32px] bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 shadow-sm flex gap-5 items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#F8F9FA] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center font-bold text-xs shrink-0">
              <Shield className="w-7 h-7 text-[#5450EB]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[#0C0D11] dark:text-white font-editorial">
                SOC 2 Certified & GDPR Compliant
              </h3>
              <p className="text-xs text-[#4D515D] dark:text-slate-400 leading-relaxed">
                Flex has been thoroughly audited and successfully gained SOC 2 certification along with being recognized as a GDPR compliant company. This highlights Flex's commitment to the highest standards of security.
              </p>
            </div>
          </div>

          {/* Card 2: Multi-Factor Authentication & Encryption */}
          <div className="p-8 rounded-[32px] bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 shadow-sm flex gap-5 items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#F8F9FA] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center font-bold text-xs shrink-0">
              <Key className="w-7 h-7 text-[#5450EB]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[#0C0D11] dark:text-white font-editorial">
                Multi-Factor Authentication & Encryption
              </h3>
              <p className="text-xs text-[#4D515D] dark:text-slate-400 leading-relaxed">
                All information on the Flex platform is protected by multi-factor authentication and high-level encryption, ensuring that no data can be accessed by unauthorized sources and users.
              </p>
            </div>
          </div>

          {/* Card 3: Built for Both Traditional and Web3 Payroll Needs */}
          <div className="p-8 rounded-[32px] bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 shadow-sm flex gap-5 items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#F8F9FA] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center font-bold text-xs shrink-0">
              <Building className="w-7 h-7 text-[#5450EB]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[#0C0D11] dark:text-white font-editorial">
                Built for Both Traditional and Web3 Payroll Needs
              </h3>
              <p className="text-xs text-[#4D515D] dark:text-slate-400 leading-relaxed">
                Hybrid Payroll from Flex enables companies to pay out their teams in both local currencies and cryptocurrencies, making it ideal for all varieties of companies.
              </p>
            </div>
          </div>

          {/* Card 4: An Official Registered Money Service Business */}
          <div className="p-8 rounded-[32px] bg-white dark:bg-[#14161F] border border-[#DFE2EA] dark:border-slate-800 shadow-sm flex gap-5 items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#F8F9FA] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center font-bold text-xs shrink-0">
              <Award className="w-7 h-7 text-[#5450EB]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[#0C0D11] dark:text-white font-editorial">
                An Official Registered Money Service Business
              </h3>
              <p className="text-xs text-[#4D515D] dark:text-slate-400 leading-relaxed">
                With this registration, Flex is authorized to operate legally as a money transmitter, ensuring compliance with federal and state regulations while providing secure, transparent, and fully compliant crypto payroll services.
              </p>
            </div>
          </div>

        </div>

        {/* View State Licenses CTA (Matching Screenshot 3) */}
        <div className="text-center max-w-xl mx-auto space-y-5">
          <p className="text-sm text-[#4D515D] dark:text-slate-300">
            With Flex, you can focus on what matters most — <strong>growing your business</strong> — while we handle the complexities of compliance.
          </p>

          <button
            onClick={() => setShowLicensesModal(true)}
            className="px-8 py-3.5 rounded-full text-xs font-bold text-white bg-[#0C0D11] hover:bg-black/90 dark:bg-white dark:text-[#0C0D11] shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>View our state licenses & certifications</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Licenses Modal */}
      {showLicensesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-xl bg-white dark:bg-[#14161F] rounded-3xl p-6 sm:p-8 border border-[#DFE2EA] dark:border-slate-800 shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#DFE2EA] dark:border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-[#0C0D11] dark:text-white font-editorial">
                  Regulatory Registrations & Licenses
                </h3>
                <p className="text-xs text-[#4D515D]">Flex Works Inc. & Affiliates</p>
              </div>
              <button
                onClick={() => setShowLicensesModal(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-[#F8F9FA] dark:bg-slate-900 border border-[#DFE2EA] flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#0C0D11] dark:text-white">FinCEN MSB Registration</div>
                  <div className="text-[11px] text-slate-500">Registration #31000261420870</div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  Active
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F8F9FA] dark:bg-slate-900 border border-[#DFE2EA] flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#0C0D11] dark:text-white">NMLS Money Transmitter Licensing</div>
                  <div className="text-[11px] text-slate-500">NMLS ID: 2563938 (US Multi-State)</div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  Licensed
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F8F9FA] dark:bg-slate-900 border border-[#DFE2EA] flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#0C0D11] dark:text-white">AICPA SOC 2 Type II Certification</div>
                  <div className="text-[11px] text-slate-500">Security, Availability & Confidentiality</div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  Audited 2026
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F8F9FA] dark:bg-slate-900 border border-[#DFE2EA] flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#0C0D11] dark:text-white">GDPR & Data Protection Shield</div>
                  <div className="text-[11px] text-slate-500">EU & UK GDPR Article 28 Compliant</div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  Compliant
                </span>
              </div>
            </div>

            <button
              onClick={() => setShowLicensesModal(false)}
              className="w-full py-2.5 rounded-xl bg-[#0C0D11] text-white text-xs font-bold hover:bg-black/90 cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Sparkles } from 'lucide-react';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookDemoModal: React.FC<BookDemoModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [teamSize, setTeamSize] = useState('10-50');
  const [primaryNeed, setPrimaryNeed] = useState('Global Contractor Payroll');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          teamSize,
          primaryNeed,
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-lg bg-surface-card dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-surface-border dark:border-slate-800 space-y-6">
        
        <div className="flex items-center justify-between pb-3 border-b border-surface-border dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold text-text-main bg-brand-tint dark:bg-slate-800 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
              <span>Tailored Global EOR Architecture</span>
            </div>
            <h3 className="text-xl font-bold text-text-main dark:text-white mt-1.5 font-editorial">
              Schedule Strategy Call
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-text-muted hover:text-text-main dark:hover:text-slate-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-brand-tint text-brand-primary mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-text-main dark:text-white font-editorial">Call Requested!</h4>
            <p className="text-xs text-text-muted dark:text-slate-400 max-w-sm mx-auto">
              Your inquiry has been stored in our Cloud SQL database. A Flex global expansion strategist will reach out to <strong>{email}</strong> within 15 minutes.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full text-xs font-bold bg-brand-primary hover:bg-brand-hover text-white transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
            <div>
              <label className="font-bold text-text-main dark:text-slate-300">Your Full Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Sarah Jenkins"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1.5 px-3.5 py-2.5 rounded-xl bg-surface-bg dark:bg-slate-800 border border-surface-border dark:border-slate-700 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
            </div>

            <div>
              <label className="font-bold text-text-main dark:text-slate-300">Work Email</label>
              <input
                type="email"
                required
                placeholder="sarah@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1.5 px-3.5 py-2.5 rounded-xl bg-surface-bg dark:bg-slate-800 border border-surface-border dark:border-slate-700 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
            </div>

            <div>
              <label className="font-bold text-text-main dark:text-slate-300">Company Name</label>
              <input
                type="text"
                required
                placeholder="Acme Global Inc"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full mt-1.5 px-3.5 py-2.5 rounded-xl bg-surface-bg dark:bg-slate-800 border border-surface-border dark:border-slate-700 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-text-main dark:text-slate-300">Global Team Size</label>
                <select
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="w-full mt-1.5 px-3.5 py-2.5 rounded-xl bg-surface-bg dark:bg-slate-800 border border-surface-border dark:border-slate-700 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                >
                  <option value="1-10">1 - 10 people</option>
                  <option value="10-50">10 - 50 people</option>
                  <option value="50-250">50 - 250 people</option>
                  <option value="250+">250+ enterprise</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-text-main dark:text-slate-300">Primary Objective</label>
                <select
                  value={primaryNeed}
                  onChange={(e) => setPrimaryNeed(e.target.value)}
                  className="w-full mt-1.5 px-3.5 py-2.5 rounded-xl bg-surface-bg dark:bg-slate-800 border border-surface-border dark:border-slate-700 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                >
                  <option value="Employer of Record (EOR)">Employer of Record (EOR)</option>
                  <option value="Global Contractor Payroll">Contractor Management</option>
                  <option value="Compliance & Misclassification">Compliance Shield</option>
                  <option value="All Lifecycle Pillars">Full Lifecycle Platform</option>
                </select>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-brand-primary hover:bg-brand-hover shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer active:scale-95 transition-colors"
              >
                {isSubmitting ? 'Scheduling...' : 'Schedule Strategy Call ↗'}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};

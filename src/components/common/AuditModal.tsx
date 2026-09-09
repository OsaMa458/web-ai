import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Clock, Send } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { PlatformOption } from '../../types';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPlatform?: PlatformOption;
}

export const AuditModal: React.FC<AuditModalProps> = ({
  isOpen,
  onClose,
  preselectedPlatform = 'Both'
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [platform, setPlatform] = useState<PlatformOption>(preselectedPlatform);
  const [storeUrl, setStoreUrl] = useState('');
  const [currentBottleneck, setCurrentBottleneck] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('Please provide your name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please provide a valid email address so I can deliver your audit.');
      return;
    }

    setIsSubmitting(true);

    // Simulate clean, reliable submission with local confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setName('');
    setEmail('');
    setStoreUrl('');
    setCurrentBottleneck('');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-modal-title"
    >
      <div 
        className="relative w-full max-w-lg bg-[#20242A] border border-[#2B3036] rounded-3xl shadow-2xl p-6 sm:p-8 text-[#A7ADB4] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-audit-modal-btn"
          className="absolute top-5 right-5 p-2 text-[#A7ADB4] hover:text-[#F5F5F2] rounded-xl hover:bg-[#181B1F] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#181B1F] text-[#6B8AFD] border border-[#2B3036]">
                <Clock className="w-3.5 h-3.5" /> 24-48 Hour Turnaround
              </span>
              <span className="text-xs text-[#A7ADB4]">100% Free • No Obligation</span>
            </div>

            <h2 id="audit-modal-title" className="text-xl sm:text-2xl font-bold text-[#F5F5F2] tracking-tight">
              Request Your Free Store Audit
            </h2>
            <p className="text-sm text-[#A7ADB4] mt-1.5 mb-6">
              Get an actionable, manual review of your Walmart Marketplace or TikTok Shop listings, health score, and conversion bottlenecks.
            </p>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-red-900/30 border border-red-500/40 text-red-200 text-xs">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7ADB4] mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  id="audit-input-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#181B1F] border border-[#2B3036] text-[#F5F5F2] placeholder-[#A7ADB4]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B8AFD] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7ADB4] mb-1.5">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  id="audit-input-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#181B1F] border border-[#2B3036] text-[#F5F5F2] placeholder-[#A7ADB4]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B8AFD] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7ADB4] mb-1.5">
                  Target Platform *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Walmart', 'TikTok Shop', 'Both'] as PlatformOption[]).map((p) => (
                    <button
                      type="button"
                      key={p}
                      id={`audit-platform-${p.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={() => setPlatform(p)}
                      className={`px-3 py-2 text-xs font-semibold rounded-xl border transition-all text-center ${
                        platform === p
                          ? 'bg-[#6B8AFD] border-[#6B8AFD] text-[#111315] font-bold shadow-sm'
                          : 'bg-[#181B1F] border-[#2B3036] text-[#A7ADB4] hover:border-[#383E46] hover:bg-[#252A30]'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7ADB4] mb-1.5">
                  Store or Product Link <span className="text-[#A7ADB4]/60 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="audit-input-storeurl"
                  value={storeUrl}
                  onChange={(e) => setStoreUrl(e.target.value)}
                  placeholder="walmart.com/ip/... or tiktok.com/@..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#181B1F] border border-[#2B3036] text-[#F5F5F2] placeholder-[#A7ADB4]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B8AFD] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7ADB4] mb-1.5">
                  What is your primary bottleneck? <span className="text-[#A7ADB4]/60 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  id="audit-input-bottleneck"
                  value={currentBottleneck}
                  onChange={(e) => setCurrentBottleneck(e.target.value)}
                  placeholder="e.g. Low listing quality score, launch preparation, declining sales, account setup questions..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#181B1F] border border-[#2B3036] text-[#F5F5F2] placeholder-[#A7ADB4]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B8AFD] focus:border-transparent transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="submit-audit-request-btn"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-[#6B8AFD] hover:bg-[#5A78EB] text-[#111315] shadow-sm active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Preparing Audit Request...</span>
                  ) : (
                    <>
                      <span>Get My Free Store Audit</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 pt-2 text-xs text-[#A7ADB4]">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero sales spam. Your store information is kept strictly confidential.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#F5F5F2]">Audit Request Received!</h3>
            <p className="text-[#A7ADB4] text-sm max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="text-[#6B8AFD] font-semibold">{name}</span>. Usama will personally examine your <span className="text-[#F5F5F2] font-medium">{platform}</span> details and email your prioritized action report to <span className="text-[#F5F5F2] font-medium">{email}</span> within 24–48 hours.
            </p>
            <div className="p-3.5 rounded-2xl bg-[#181B1F] border border-[#2B3036] text-xs text-[#A7ADB4] text-left max-w-sm mx-auto space-y-1">
              <div className="font-semibold text-[#F5F5F2]">Need an immediate answer?</div>
              <div>You can also reach Usama directly via WhatsApp or email for urgent questions.</div>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-600/30 text-xs font-semibold transition-colors"
              >
                <Send className="w-3.5 h-3.5" /> Message on WhatsApp
              </a>
              <button
                onClick={handleReset}
                className="px-4 py-2.5 rounded-xl bg-[#181B1F] border border-[#2B3036] text-[#A7ADB4] hover:text-[#F5F5F2] text-xs font-semibold transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

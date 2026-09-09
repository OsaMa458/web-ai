import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  MessageSquare, 
  PhoneCall, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { PlatformOption, ContactFormData } from '../types';
import { SpecialistPhoto } from '../components/common/SpecialistPhoto';

interface ContactPageProps {
  initialMessage?: string;
  onOpenAuditModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialMessage = '',
  onOpenAuditModal,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    platform: 'Both',
    message: initialMessage,
    storeUrl: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showCallScheduler, setShowCallScheduler] = useState(false);

  useEffect(() => {
    if (initialMessage) {
      setFormData(prev => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const validate = (): boolean => {
    const err: Record<string, string> = {};
    if (!formData.name.trim()) {
      err.name = 'Please provide your name.';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      err.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) {
      err.message = 'Please briefly share what you need help with.';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean dispatch with reliable state confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      email: '',
      platform: 'Both',
      message: '',
      storeUrl: '',
    });
    setErrors({});
  };

  return (
    <div id="contact-page-container" className="pt-28 pb-20 bg-[#111315]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-14 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#181B1F] text-[#6B8AFD] border border-[#2B3036]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Specialist Communication</span>
          </div>

          <h1 id="contact-h1-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F2] tracking-tight leading-tight">
            Contact Usama
          </h1>

          <p className="text-base sm:text-lg font-semibold text-[#6B8AFD]">
            {siteConfig.positioning}
          </p>

          <p className="text-[#A7ADB4] text-sm sm:text-base leading-relaxed">
            Reach out directly to discuss store setup, ongoing management, product research, listing optimization, or a free store audit. No layers of account reps—you speak directly with the specialist.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Fast Direct Contact Options */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#181B1F] border border-[#2B3036] p-6 sm:p-8 space-y-6 shadow-sm">
              {/* Specialist Trust Card */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#111315] border border-[#2B3036]">
                <div className="w-14 h-14 rounded-xl overflow-hidden border border-[#2B3036] bg-[#111315] shrink-0">
                  <SpecialistPhoto
                    type="compact"
                    altText="Usama, Walmart and TikTok Shop e-commerce specialist"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-[#F5F5F2] flex items-center gap-1.5">
                    <span>Usama</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" title="Direct contact" />
                  </div>
                  <div className="text-xs text-[#6B8AFD] font-medium">Marketplace Specialist</div>
                  <div className="text-[11px] text-[#A7ADB4]">Direct replies • No agency middleman</div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#F5F5F2] tracking-tight">
                  Direct Contact Channels
                </h2>
                <p className="text-xs text-[#A7ADB4] mt-1">
                  Need a quick response? Contact me through whichever channel is most convenient for you.
                </p>
              </div>

              <div className="space-y-3">
                
                {/* WhatsApp Option */}
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  id="direct-whatsapp-link"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#20242A] border border-[#2B3036] hover:border-emerald-500/50 hover:bg-[#252A30] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#F5F5F2] group-hover:text-emerald-300 transition-colors">
                        WhatsApp Message
                      </div>
                      <div className="text-xs text-[#A7ADB4]">
                        Fastest for short questions & audio notes
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#A7ADB4] group-hover:text-emerald-400 transition-colors" />
                </a>

                {/* Email Option */}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  id="direct-email-link"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#20242A] border border-[#2B3036] hover:border-[#6B8AFD]/50 hover:bg-[#252A30] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#6B8AFD]/10 border border-[#6B8AFD]/20 flex items-center justify-center text-[#6B8AFD] group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-[#F5F5F2] group-hover:text-[#6B8AFD] transition-colors">
                        Direct Email
                      </div>
                      <div className="text-xs text-[#A7ADB4] truncate max-w-[210px]">
                        {siteConfig.contact.email}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#A7ADB4] group-hover:text-[#6B8AFD] transition-colors shrink-0" />
                </a>

                {/* Book a Call Option */}
                <button
                  type="button"
                  id="direct-book-call-btn"
                  onClick={() => setShowCallScheduler(!showCallScheduler)}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-[#20242A] border border-[#2B3036] hover:border-[#6B8AFD]/50 hover:bg-[#252A30] transition-all group text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#6B8AFD]/10 border border-[#6B8AFD]/20 flex items-center justify-center text-[#6B8AFD] group-hover:scale-105 transition-transform">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#F5F5F2] group-hover:text-[#6B8AFD] transition-colors">
                        Book an Intro Call
                      </div>
                      <div className="text-xs text-[#A7ADB4]">
                        15-min discovery call to review your store
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#A7ADB4] group-hover:text-[#6B8AFD] transition-colors" />
                </button>

              </div>

              {/* Call Scheduler Info Box */}
              {showCallScheduler && (
                <div className="p-4 rounded-2xl bg-[#111315] border border-[#2B3036] text-xs text-[#A7ADB4] space-y-3 animate-fadeIn">
                  <div className="font-semibold text-[#F5F5F2] flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#6B8AFD]" />
                    <span>Scheduling An Intro Call</span>
                  </div>
                  <p className="leading-relaxed text-[#A7ADB4]">
                    You can submit your details in the contact form to the right with preferred days/times, or message on WhatsApp to agree on a convenient time slot immediately.
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={siteConfig.contact.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 font-semibold text-xs inline-flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> WhatsApp to pick time
                    </a>
                  </div>
                </div>
              )}

              {/* Quick Trust Details */}
              <div className="pt-4 border-t border-[#2B3036] space-y-2.5 text-xs text-[#A7ADB4]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#6B8AFD] shrink-0" />
                  <span>{siteConfig.contact.responseTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{siteConfig.contact.targetRegions}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6B8AFD] shrink-0" />
                  <span>Confidentiality guaranteed for all store credentials and catalog data</span>
                </div>
              </div>

              {/* Quick Free Audit Prompt */}
              <div className="p-4 rounded-2xl bg-[#20242A] border border-[#2B3036] space-y-2">
                <div className="text-xs font-semibold text-[#6B8AFD] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Prefer a written analysis first?</span>
                </div>
                <p className="text-xs text-[#A7ADB4]">
                  Request a free store audit to receive a prioritized checklist of fixes before committing.
                </p>
                <button
                  type="button"
                  onClick={onOpenAuditModal}
                  className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold bg-[#6B8AFD] hover:bg-[#5A78EB] text-[#111315] transition-all cursor-pointer shadow-sm"
                >
                  Get a Free Store Audit
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Low-Friction Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#181B1F] border border-[#2B3036] p-6 sm:p-8 shadow-sm relative">
              
              {!isSuccess ? (
                <div>
                  <div className="mb-6 space-y-1">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#F5F5F2] tracking-tight">
                      Send a Message
                    </h2>
                    <p className="text-xs sm:text-sm text-[#A7ADB4]">
                      Fill out this quick 4-field form. No unnecessary questions, phone mandates, or complicated surveys.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    
                    {/* 1. Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-[#A7ADB4] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. David Vance"
                        className={`w-full px-4 py-3 rounded-xl bg-[#111315] border text-[#F5F5F2] placeholder-[#A7ADB4]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B8AFD] transition-all ${
                          errors.name ? 'border-red-500/80' : 'border-[#2B3036] focus:border-transparent'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1 font-medium">{errors.name}</p>
                      )}
                    </div>

                    {/* 2. Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-[#A7ADB4] mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#111315] border text-[#F5F5F2] placeholder-[#A7ADB4]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B8AFD] transition-all ${
                          errors.email ? 'border-red-500/80' : 'border-[#2B3036] focus:border-transparent'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1 font-medium">{errors.email}</p>
                      )}
                    </div>

                    {/* 3. Platform (Walmart / TikTok Shop / Both) */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7ADB4] mb-1.5">
                        Target Platform *
                      </label>
                      <div className="grid grid-cols-3 gap-2.5">
                        {(['Walmart', 'TikTok Shop', 'Both'] as PlatformOption[]).map((p) => (
                          <button
                            type="button"
                            key={p}
                            id={`contact-platform-select-${p.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={() => setFormData({ ...formData, platform: p })}
                            className={`px-4 py-3 text-xs sm:text-sm font-semibold rounded-xl border transition-all text-center cursor-pointer ${
                              formData.platform === p
                                ? 'bg-[#6B8AFD] border-[#6B8AFD] text-[#111315] font-semibold shadow-sm'
                                : 'bg-[#111315] border-[#2B3036] text-[#A7ADB4] hover:border-[#2B3036] hover:text-[#F5F5F2] hover:bg-[#20242A]'
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Optional Store or Product URL */}
                    <div>
                      <label htmlFor="contact-storeurl" className="block text-xs font-semibold uppercase tracking-wider text-[#A7ADB4] mb-1.5">
                        Store or Product Link <span className="text-[#A7ADB4]/60 font-normal lowercase">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="contact-storeurl"
                        value={formData.storeUrl}
                        onChange={(e) => setFormData({ ...formData, storeUrl: e.target.value })}
                        placeholder="walmart.com/ip/... or tiktok.com/@..."
                        className="w-full px-4 py-3 rounded-xl bg-[#111315] border border-[#2B3036] text-[#F5F5F2] placeholder-[#A7ADB4]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B8AFD] transition-all"
                      />
                    </div>

                    {/* 4. What do you need help with? */}
                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-[#A7ADB4] mb-1.5">
                        What do you need help with? *
                      </label>
                      <textarea
                        rows={4}
                        id="contact-message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your current store, whether you are launching from scratch, need listing optimization, or require ongoing store management..."
                        className={`w-full px-4 py-3 rounded-xl bg-[#111315] border text-[#F5F5F2] placeholder-[#A7ADB4]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#6B8AFD] transition-all resize-none ${
                          errors.message ? 'border-red-500/80' : 'border-[#2B3036] focus:border-transparent'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-400 mt-1 font-medium">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        id="contact-submit-btn"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm bg-[#6B8AFD] hover:bg-[#5A78EB] text-[#111315] shadow-sm active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>Sending message...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Inquiry Directly to Usama</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="pt-2 text-center text-xs text-[#A7ADB4] flex items-center justify-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Zero spam. Direct reply to your email within 12 hours.</span>
                    </div>

                  </form>
                </div>
              ) : (
                <div className="py-10 text-center space-y-5">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F5F5F2]">Inquiry Received!</h3>
                  <p className="text-[#A7ADB4] text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#6B8AFD] font-semibold">{formData.name}</span>. I have received your note regarding <span className="text-[#F5F5F2] font-medium">{formData.platform}</span> e-commerce services. I will review your information and respond to <span className="text-[#F5F5F2] font-medium">{formData.email}</span> within 12 hours.
                  </p>

                  <div className="p-4 rounded-2xl bg-[#111315] border border-[#2B3036] text-xs text-[#A7ADB4] max-w-md mx-auto space-y-2 text-left">
                    <div className="font-semibold text-[#F5F5F2]">Urgent questions?</div>
                    <p>
                      If your inquiry is time-sensitive (e.g. seller suspension or urgent launch deadline), message me directly on WhatsApp for an expedited reply.
                    </p>
                    <a
                      href={siteConfig.contact.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> Open WhatsApp
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl bg-[#111315] hover:bg-[#20242A] text-[#F5F5F2] text-xs font-semibold border border-[#2B3036] transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

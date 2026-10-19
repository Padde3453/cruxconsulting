import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from 'react-i18next';
import { supabase } from "@/integrations/supabase/client";
import TurnstileWidget, { TurnstileHandle } from "@/components/TurnstileWidget";

interface ContactSectionProps {
  onBooking: () => void;
}

const ContactSection = ({ onBooking }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [honey, setHoney] = useState("");
  const captcha = useRef<TurnstileHandle>(null);
  const { toast } = useToast();
  const { t, i18n } = useTranslation();

  // Get the appropriate calendar URL based on language
  const getCalendarUrl = () => {
    if (i18n.language === 'de') {
      return "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0DO5u5bWU030hd8TJJRa4xnkx6EgXfACgppqwwSyDThEwtHl-8yVPvCtQOeJQFB-jNMslaqKmj?gv=true&hl=de&ctz=Europe/Berlin";
    }
    return "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1CvWlWHmw2s_eiyyKGgTLaQt26VWP1pB2vD5dc3HbUeCGwCDoSqq7n96brdFeh3kRFgKff0cd7?gv=true&hl=en&ctz=Europe/Berlin";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      toast({ title: t('captcha.title'), description: t('captcha.required'), variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    const language = i18n.language.startsWith('de') ? 'de' : 'en';
    const { data, error } = await supabase.functions.invoke('contact-submit', {
      body: { ...formData, language, website: honey, captchaToken },
    });
    captcha.current?.reset();
    setIsSubmitting(false);

    if (error || !data?.ok) {
      let code: string | undefined = data?.error;
      if (!code && error && 'context' in error) {
        try { code = (await (error as { context: Response }).context.json())?.error; } catch { /* ignore */ }
      }
      const description = code === 'captcha_failed' ? t('captcha.failed')
        : code === 'rate_limited' ? t('newsletter.errors.rate_limited')
        : t('captcha.contactError');
      toast({ title: t('captcha.title'), description, variant: "destructive" });
      return;
    }

    toast({ title: t('captcha.sentTitle'), description: t('captcha.sentText') });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Stats Grid - moved to top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
          <div>
            <div className="text-3xl font-bold text-brand-blue mb-2">{t('contact.freeConsultation')}</div>
            <div className="text-gray-400">{t('contact.freeConsultationLabel')}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-green mb-2">{t('contact.responseGuarantee')}</div>
            <div className="text-gray-400">{t('contact.responseGuaranteeLabel')}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">{t('contact.roi')}</div>
            <div className="text-gray-400">{t('contact.roiLabel')}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="border border-gray-700 p-8 backdrop-blur-sm bg-transparent rounded-lg">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">{t('contact.getInTouch')}</h3>
              <p className="text-gray-300 mb-4">
                {t('contact.formDescription')}{" "}
                <a href={`mailto:${t('contact.email')}`} className="text-brand-blue hover:text-brand-green transition-colors">
                  {t('contact.email')}
                </a>
              </p>
              <p className="text-sm text-gray-400">
                {t('contact.responseTime')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-gray-300">{t('contact.form.name')} *</Label>
                <Input 
                  id="name" 
                  name="name" 
                  type="text" 
                  required 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400" 
                  placeholder={t('contact.form.namePlaceholder')} 
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-300">{t('contact.form.email')} *</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400" 
                  placeholder={t('contact.form.emailPlaceholder')} 
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-300">{t('contact.form.phone')} *</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  required 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400" 
                  placeholder={t('contact.form.phonePlaceholder')} 
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <Label htmlFor="company" className="text-gray-300">{t('contact.form.company')}</Label>
                <Input 
                  id="company" 
                  name="company" 
                  type="text" 
                  value={formData.company} 
                  onChange={handleInputChange} 
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400" 
                  placeholder={t('contact.form.companyPlaceholder')} 
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-300">{t('contact.form.message')} *</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  required 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 min-h-[100px]" 
                  placeholder={t('contact.form.messagePlaceholder')} 
                  disabled={isSubmitting}
                />
              </div>

              <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
                value={honey} onChange={(e) => setHoney(e.target.value)}
                className="absolute -left-[9999px] h-0 w-0 opacity-0" />
              <TurnstileWidget ref={captcha} onToken={setCaptchaToken} />

              <Button 
                type="submit" 
                variant="gradient"
                enableMouseGradient
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
              </Button>
            </form>
          </div>

          {/* Google Calendar - now language-aware */}
          <div className="border border-gray-700 p-8 backdrop-blur-sm bg-transparent rounded-lg">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">{t('contact.bookCall')}</h3>
              <p className="text-gray-300">
                {t('contact.bookCallDescription')}
              </p>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden">
              <iframe 
                src={getCalendarUrl()}
                style={{ border: 0 }} 
                width="100%" 
                height="600" 
                frameBorder="0" 
                title="Book a consultation" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      
    </section>
  );
};

export default ContactSection;

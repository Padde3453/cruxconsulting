import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, CheckCircle2 } from 'lucide-react';
import TurnstileWidget, { TurnstileHandle } from '@/components/TurnstileWidget';

const emailSchema = z.string().trim().email().max(255);

interface NewsletterFormProps {
  onSuccess?: () => void;
  className?: string;
  size?: 'default' | 'lg';
}

const NewsletterForm = ({ onSuccess, className = '', size = 'default' }: NewsletterFormProps) => {
  const isLg = size === 'lg';
  const { t, i18n } = useTranslation();
  const language = i18n.language.startsWith('de') ? 'de' : 'en';
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [honey, setHoney] = useState('');
  const captcha = useRef<TurnstileHandle>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      setError(t('newsletter.errors.invalid_email'));
      return;
    }

    if (!token) {
      setError(t('captcha.required'));
      return;
    }

    setStatus('loading');
    const { data, error: fnError } = await supabase.functions.invoke(
      'newsletter-subscribe',
      { body: { email: parsed.data, language, website: honey, captchaToken: token } }
    );
    captcha.current?.reset();

    if (fnError || !data?.ok) {
      let code = (data as { error?: string } | null)?.error;
      if (!code && fnError && 'context' in fnError) {
        try { code = (await (fnError as { context: Response }).context.json())?.error; } catch { /* ignore */ }
      }
      if (code === 'captcha_failed') {
        setError(t('captcha.failed'));
        setStatus('idle');
        return;
      }
      const key = ['invalid_email', 'rate_limited', 'not_configured'].includes(code ?? '')
        ? code
        : 'generic';
      setError(t(`newsletter.errors.${key}`));
      setStatus('idle');
      return;
    }

    setStatus('success');
    setEmail('');
    onSuccess?.();
  };

  if (status === 'success') {
    return (
      <div className={`flex items-start gap-2 ${isLg ? 'text-base' : 'text-sm'} text-brand-green ${className}`}>
        <CheckCircle2 size={isLg ? 22 : 18} className="shrink-0 mt-0.5" />
        <p>{t('newsletter.success')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`} noValidate>
      <div className={`flex flex-col sm:flex-row ${isLg ? 'gap-3' : 'gap-2'}`}>
        <label htmlFor="newsletter-email" className="sr-only">
          {t('newsletter.placeholder')}
        </label>
        <Input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('newsletter.placeholder')}
          maxLength={255}
          className={`bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus-visible:ring-brand-blue ${isLg ? 'h-14 text-base px-5' : ''}`}
        />
        <Button
          type="submit"
          variant="gradient"
          enableMouseGradient
          size={isLg ? 'lg' : 'default'}
          disabled={status === 'loading'}
          className={`shrink-0 ${isLg ? 'h-14 px-8 text-base' : ''}`}
        >
          {status === 'loading' ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            t('newsletter.cta')
          )}
        </Button>
      </div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
        value={honey} onChange={(e) => setHoney(e.target.value)}
        className="absolute -left-[9999px] h-0 w-0 opacity-0" />
      <TurnstileWidget ref={captcha} onToken={setToken} className="mt-3" />
      {error && <p className={`mt-3 ${isLg ? 'text-base' : 'text-sm'} text-red-400`}>{error}</p>}
      <p className={`mt-3 ${isLg ? 'text-sm' : 'text-xs'} text-gray-500`}>
        {t('newsletter.privacyNote')}{' '}
        <Link to="/privacy#newsletter" className="underline hover:text-gray-300 transition-colors">
          {t('newsletter.privacyLink')}
        </Link>
      </p>
    </form>
  );
};

export default NewsletterForm;
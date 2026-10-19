import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { useTranslation } from 'react-i18next';

// Public Cloudflare Turnstile site key (safe to ship in the browser).
export const TURNSTILE_SITE_KEY = '0x4AAAAAAFbbz0Ro1e9IDq8z';

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id?: string) => void;
      remove: (id: string) => void;
    };
  }
}

let scriptPromise: Promise<void> | null = null;
function loadScript() {
  if (window.turnstile) return Promise.resolve();
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      s.async = true;
      s.onload = () => resolve();
      s.onerror = () => { scriptPromise = null; reject(); };
      document.head.appendChild(s);
    });
  }
  return scriptPromise;
}

export interface TurnstileHandle { reset: () => void }

interface Props { onToken: (token: string | null) => void; className?: string }

const TurnstileWidget = forwardRef<TurnstileHandle, Props>(({ onToken, className = '' }, ref) => {
  const el = useRef<HTMLDivElement>(null);
  const id = useRef<string | null>(null);
  const cb = useRef(onToken);
  cb.current = onToken;
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith('de') ? 'de' : 'en';

  useImperativeHandle(ref, () => ({
    reset: () => { if (id.current && window.turnstile) window.turnstile.reset(id.current); cb.current(null); },
  }));

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;
    let cancelled = false;
    loadScript().then(() => {
      if (cancelled || !el.current || !window.turnstile) return;
      id.current = window.turnstile.render(el.current, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: 'dark',
        language: lang,
        callback: (t: string) => cb.current(t),
        'expired-callback': () => cb.current(null),
        'error-callback': () => cb.current(null),
      });
    }).catch(() => cb.current(null));
    return () => {
      cancelled = true;
      if (id.current && window.turnstile) window.turnstile.remove(id.current);
      id.current = null;
    };
  }, [lang]);

  return <div ref={el} className={className} />;
});

TurnstileWidget.displayName = 'TurnstileWidget';
export default TurnstileWidget;

# Bot protection for contact form and newsletter

## Goal
Stop bots and fake signups on the contact form and the newsletter form (footer + popup), without hurting real visitors.

## Recommended check: Cloudflare Turnstile (instead of Google reCAPTCHA)
- Free, mostly invisible (no picture puzzles), and does not use Google tracking cookies. That makes it easier to fit with GDPR for a German site.
- reCAPTCHA also works if you prefer it. The setup is the same, only the provider changes. Using reCAPTCHA means adding a Google note to the privacy page.

## What changes for visitors
- A small "verifying you are human" box appears above the submit button on the contact form and the newsletter forms. Most people pass it automatically.
- A hidden trap field (a "honeypot") catches simple bots before they reach the check at all.
- If the check fails, a friendly message in German or English asks them to try again.

## Important fix to the contact form
Right now the contact form sends messages straight from the browser to your n8n webhook. A bot can call that address directly and skip any captcha. Because of this:
- Contact messages will go to a new secure server step. It checks the captcha, validates the fields and limits repeat sends, then forwards the message to the same n8n webhook. Your n8n workflow keeps working unchanged.
- Each message is also saved in your backend (Cloud → Database → contact_submissions), so nothing is lost if n8n is down.
- The n8n address will no longer appear in the website code. Later you can rotate it in n8n to cut off bots that already know the old one.

## Newsletter
- The existing newsletter server step will check the captcha before sending the email to Beehiiv. Double opt-in stays on.

## What I need from you
- A Turnstile Site Key and Secret Key. You get both for free in the Cloudflare dashboard under Turnstile → Add site, using the domains www.crux-consulting.ai, crux-consulting.ai and the Lovable preview domain. I'll open a secure form where you enter the secret key.

## Technical details
- Frontend: shared `TurnstileWidget` component (loads the script only on pages with a form, managed mode, theme dark, language follows the URL language). Its token is sent with both forms; the widget resets after each submit.
- `newsletter-subscribe`: verifies the token through Cloudflare siteverify (`TURNSTILE_SECRET_KEY`) and rejects an honeypot hit before calling Beehiiv; new error code `captcha_failed`.
- New edge function `contact-submit`: zod validation, honeypot, Turnstile verify, per-IP rate limit, insert into `contact_submissions` (RLS on, no public read), then forward to the n8n URL stored as secret `CONTACT_WEBHOOK_URL`.
- Site key stored as a public value in the code (it is meant to be public).
- Privacy page: short Turnstile paragraph (DE/EN).
- Translations added under `captcha` in `de.json` / `en.json`.
- Test: one real submission per form in preview; confirm the row is saved and n8n/Beehiiv receives it; then delete the test row.

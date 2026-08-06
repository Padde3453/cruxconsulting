# Beehiiv Newsletter Integration

## Goal
Add a German-only beehiiv newsletter signup in two places: a timed popup (15s, once per visitor) and a footer column on the left.

## Two possible approaches

**Option A — Beehiiv embed (iframe)**
Paste beehiiv's embed snippet. Fastest, zero backend, beehiiv handles double opt-in and spam.
Downside: iframe styling can't match the dark Crux design, sizing is awkward inside the footer, and it loads third-party JS on every page (cookie/GDPR consideration).

**Option B — Native form + backend call (recommended)**
Build our own input + button in the existing design system, and send the email to beehiiv's API v2 (`POST /v2/publications/{publicationId}/subscriptions`) from a backend function so the API key is never exposed in the browser.
Benefits: fully on-brand, works identically in popup and footer, own success/error messages in both languages, no third-party script.
Needs: a beehiiv API key (create in beehiiv under Settings > Integrations > API) and the Publication ID. Stored securely as backend secrets.

Recommendation: Option B.

## Language handling
The site stays bilingual; the newsletter is German-only.
- German visitors: normal copy.
- English visitors: same form, with a short note — "Our newsletter is currently published in German only." — shown above the email field and repeated in the confirmation message. No hiding of the form, so English-speaking German readers can still subscribe.
- Optionally tag subscribers coming from the English site with a beehiiv UTM/custom field so you can see the split.

## Popup behaviour
- Appears 15 seconds after the first page load of a visit.
- Shown once only — a flag in localStorage (`newsletterPopupSeen`) prevents it reappearing after dismissal or signup; can be set to re-ask after e.g. 30 days.
- Never shows on `/auth`, the OAuth consent page, or the demo routes, and never while the intro loading screen is on screen.
- Dismissible via X, backdrop click, or Escape; glassmorphism styling consistent with the About cards.

## Footer layout
Footer changes from centered to a two-column layout on desktop:
- Left: newsletter heading, one-line pitch, email field + subscribe button, German-only note when the site is in English.
- Right: existing social icons, Impressum / privacy links, copyright — right-aligned.
On mobile, the columns stack: newsletter first, then the existing links, all centered as today.

## Technical notes
- New `NewsletterForm` component (shared by popup and footer) with size variants; new `NewsletterPopup` mounted once in `App.tsx`.
- Email validated client-side with zod, and again server-side.
- Backend edge function `newsletter-subscribe` holds `BEEHIIV_API_KEY` and `BEEHIIV_PUBLICATION_ID` as secrets, calls beehiiv, maps errors (already subscribed, invalid email, rate limit) to friendly messages.
- Basic rate limiting per IP in the function to stop abuse.
- All copy added to `en.json` / `de.json` under a `newsletter` key.
- Double opt-in stays enabled in beehiiv (GDPR-friendly for a German list).

## What I need from you before building
1. Your beehiiv API key and Publication ID (I'll request them through the secure secret form when we start).
2. Confirmation that double opt-in is on in beehiiv.
3. The German headline/subline you want for the popup and footer, or I can draft them.

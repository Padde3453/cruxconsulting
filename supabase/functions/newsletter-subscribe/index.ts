import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { z } from 'npm:zod@4'

const BodySchema = z.object({
  email: z.string().trim().email().max(255),
  language: z.enum(['en', 'de']).optional(),
})

// Very small in-memory rate limiter (per isolate) to slow down abuse.
const hits = new Map<string, number[]>()
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 5

function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > MAX_PER_WINDOW
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })

  try {
    if (req.method !== 'POST') return json({ error: 'method_not_allowed' }, 405)

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'
    if (rateLimited(ip)) return json({ error: 'rate_limited' }, 429)

    const parsed = BodySchema.safeParse(await req.json().catch(() => null))
    if (!parsed.success) return json({ error: 'invalid_email' }, 400)

    const apiKey = Deno.env.get('BEEHIIV_API_KEY')
    const publicationId = Deno.env.get('BEEHIIV_PUBLICATION_ID')
    if (!apiKey || !publicationId) {
      console.error('Missing beehiiv configuration')
      return json({ error: 'not_configured' }, 500)
    }

    const { email, language } = parsed.data

    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          reactivate_existing: false,
          double_opt_override: 'on',
          send_welcome_email: true,
          utm_source: 'crux-consulting.ai',
          utm_medium: 'website',
          utm_campaign: language === 'de' ? 'site_de' : 'site_en',
        }),
      },
    )

    const text = await res.text()

    if (!res.ok) {
      console.error('beehiiv error', res.status, text)
      if (res.status === 429) return json({ error: 'rate_limited' }, 429)
      if (res.status === 400) return json({ error: 'invalid_email' }, 400)
      return json({ error: 'provider_error' }, 502)
    }

    let status = 'pending'
    try {
      status = JSON.parse(text)?.data?.status ?? 'pending'
    } catch {
      // ignore parse issues, treat as pending
    }

    return json({ ok: true, status })
  } catch (err) {
    console.error('newsletter-subscribe failed', err)
    return json({ error: 'unexpected' }, 500)
  }
})
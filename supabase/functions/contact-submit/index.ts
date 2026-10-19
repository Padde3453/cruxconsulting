import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { createClient } from 'npm:@supabase/supabase-js@2'
import { z } from 'npm:zod@4'
import { verifyTurnstile } from '../_shared/turnstile.ts'

const BodySchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(3).max(40),
  company: z.string().trim().max(150).optional().default(''),
  message: z.string().trim().min(1).max(5000),
  language: z.enum(['en', 'de']).optional(),
  website: z.string().optional(), // honeypot
  captchaToken: z.string().max(4096).optional(),
})

const hits = new Map<string, number[]>()
function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > 5
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })

  try {
    if (req.method !== 'POST') return json({ error: 'method_not_allowed' }, 405)
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'

    const parsed = BodySchema.safeParse(await req.json().catch(() => null))
    if (!parsed.success) return json({ error: 'invalid_input' }, 400)
    const d = parsed.data

    // Honeypot filled: pretend success so bots learn nothing.
    if (d.website) return json({ ok: true })
    if (rateLimited(ip)) return json({ error: 'rate_limited' }, 429)
    if (!(await verifyTurnstile(d.captchaToken, ip))) return json({ error: 'captcha_failed' }, 400)

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    )
    const { data: row, error } = await supabase
      .from('contact_submissions')
      .insert({
        name: d.name, email: d.email, phone: d.phone,
        company: d.company || null, message: d.message, language: d.language ?? null,
      })
      .select('id')
      .single()
    if (error) {
      console.error('insert failed', error)
      return json({ error: 'unexpected' }, 500)
    }

    const webhook = Deno.env.get('CONTACT_WEBHOOK_URL')
    if (webhook) {
      try {
        const res = await fetch(webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: d.name, email: d.email, phone: d.phone, company: d.company,
            message: d.message, timestamp: new Date().toISOString(),
            source: 'Crux Consulting Website',
          }),
        })
        if (res.ok) {
          await supabase.from('contact_submissions').update({ forwarded: true }).eq('id', row.id)
        } else {
          console.error('webhook failed', res.status, await res.text())
        }
      } catch (err) {
        console.error('webhook error', err)
      }
    }

    return json({ ok: true })
  } catch (err) {
    console.error('contact-submit failed', err)
    return json({ error: 'unexpected' }, 500)
  }
})

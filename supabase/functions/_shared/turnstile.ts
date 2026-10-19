// Verifies a Cloudflare Turnstile token server-side.
export async function verifyTurnstile(token: string | undefined, ip: string): Promise<boolean> {
  const secret = Deno.env.get('TURNSTILE_SECRET_KEY')
  if (!secret) {
    console.error('Missing TURNSTILE_SECRET_KEY')
    return false
  }
  if (!token) return false
  const form = new FormData()
  form.append('secret', secret)
  form.append('response', token)
  if (ip && ip !== 'unknown') form.append('remoteip', ip)
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: form,
    })
    const data = await res.json()
    if (!data.success) console.warn('turnstile rejected', data['error-codes'])
    return data.success === true
  } catch (err) {
    console.error('turnstile verify failed', err)
    return false
  }
}

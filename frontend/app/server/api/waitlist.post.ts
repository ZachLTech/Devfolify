import { Resend } from 'resend'
import { H3Event } from 'h3'

const resend = new Resend(process.env.RESEND_API_KEY)

const RATE_LIMIT_WINDOW = 24 * 60 * 60 * 1000 // 24 hours
const MAX_ATTEMPTS = 3

const rateLimitStore = new Map<string, { attempts: number; timestamp: number }>()

export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = await readBody(event)
    const { email } = body

    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return createError({
        statusCode: 400,
        message: 'Invalid email address',
      })
    }

    const clientIp = getRequestHeader(event, 'x-forwarded-for') || 'unknown'
    const now = Date.now()
    const rateLimit = rateLimitStore.get(clientIp)

    if (rateLimit) {
      if (now - rateLimit.timestamp < RATE_LIMIT_WINDOW) {
        if (rateLimit.attempts >= MAX_ATTEMPTS) {
          return createError({
            statusCode: 429,
            message: 'Too many attempts. Please try again later.',
          })
        }
        rateLimitStore.set(clientIp, {
          attempts: rateLimit.attempts + 1,
          timestamp: rateLimit.timestamp,
        })
      } else {
        rateLimitStore.set(clientIp, { attempts: 1, timestamp: now })
      }
    } else {
      rateLimitStore.set(clientIp, { attempts: 1, timestamp: now })
    }

    await resend.emails.send({
      from: 'Devfolify <noreply@zachl.tech>',
      to: email,
      subject: 'Welcome to the Devfolify Waitlist!',
      html: `
        <h1>Thanks for joining our waitlist!</h1>
        <p>We're excited to have you on board. We'll notify you as soon as Devfolify launches.</p>
        <p>In the meantime, stay tuned for updates!</p>
      `,
    })

    await resend.emails.send({
      from: 'Devfolify Waitlist <noreply@zachl.tech>',
      to: 'zlopezzl2021@gmail.com',
      subject: 'New Devfolify Waitlist Signup!',
      html: `
        <h1>New Waitlist Signup</h1>
        <p>Email: ${email}</p>
        <p>Time: ${new Date().toLocaleString()}</p>
      `,
    })

    return {
      success: true,
      message: 'Successfully joined the waitlist',
    }
  } catch (error) {
    console.error('Waitlist error:', error)
    return createError({
      statusCode: 500,
      message: 'Server error',
    })
  }
})
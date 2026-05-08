'use server'

import { Resend } from 'resend'

export type CareersState = { status: 'idle' | 'success' | 'error' }

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitCareers(
  _prev: CareersState,
  formData: FormData
): Promise<CareersState> {
  const name     = formData.get('name')     as string
  const email    = formData.get('email')    as string
  const position = formData.get('position') as string
  const message  = formData.get('message') as string

  if (!name || !email) return { status: 'error' }

  try {
    await resend.emails.send({
      from: 'notifications@lepassagesainthonore.fr', // domain must be verified in Resend
      to:   'lepassage01@gmail.com',
      replyTo: email,
      subject: `Candidature — ${position} — ${name}`,
      text: [
        `Nom    : ${name}`,
        `Email  : ${email}`,
        `Poste  : ${position}`,
        '',
        message,
      ].join('\n'),
    })
    return { status: 'success' }
  } catch {
    return { status: 'error' }
  }
}

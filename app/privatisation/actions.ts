'use server'

import { Resend } from 'resend'

export type PrivHireState = { status: 'idle' | 'success' | 'error' }

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitPrivateHire(
  _prev: PrivHireState,
  formData: FormData
): Promise<PrivHireState> {
  const firstName = formData.get('first_name') as string
  const lastName  = formData.get('last_name')  as string
  const phone     = formData.get('phone')      as string
  const email     = formData.get('email')      as string
  const company   = formData.get('company')    as string
  const budget    = formData.get('budget')     as string
  const date      = formData.get('date')       as string
  const guests    = formData.get('guests')     as string
  const message   = formData.get('message')   as string

  if (!firstName || !lastName || !email) return { status: 'error' }

  try {
    await resend.emails.send({
      from: 'notifications@lepassagesainthonore.fr', // domain must be verified in Resend
      to:   'lepassage01@gmail.com',
      replyTo: email,
      subject: `Événement privé — ${firstName} ${lastName}`,
      text: [
        `Prénom     : ${firstName}`,
        `Nom        : ${lastName}`,
        `Téléphone  : ${phone}`,
        `Email      : ${email}`,
        `Entreprise : ${company}`,
        `Budget     : ${budget}`,
        `Date       : ${date}`,
        `Invités    : ${guests}`,
        '',
        message,
      ].join('\n'),
    })
    return { status: 'success' }
  } catch {
    return { status: 'error' }
  }
}

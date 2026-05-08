'use client'

import { useActionState } from 'react'
import { submitCareers, type CareersState } from '@/app/recrutement/actions'

export default function CareersForm() {
  const [state, action, pending] = useActionState<CareersState, FormData>(
    submitCareers,
    { status: 'idle' }
  )

  if (state.status === 'success') {
    return (
      <div className="contact-form" style={{ textAlign: 'center', padding: 'clamp(40px,5vw,64px)' }}>
        <span className="eyebrow">candidature reçue…</span>
        <h3 className="display" style={{ marginTop: 20 }}>
          Merci&nbsp;<span className="ital">beaucoup.</span>
        </h3>
        <p className="body-lg" style={{ marginTop: 20, opacity: 0.75 }}>
          Nous reviendrons vers vous très prochainement.
        </p>
      </div>
    )
  }

  return (
    <form className="contact-form" action={action}>
      <h3 className="display" style={{ marginBottom: 32 }}>
        Votre&nbsp;<span className="ital">candidature</span>
      </h3>

      <div className="field-row">
        <div className="field">
          <label htmlFor="ca-name">nom</label>
          <input id="ca-name" name="name" type="text" placeholder="Votre nom" required />
        </div>
        <div className="field">
          <label htmlFor="ca-email">courriel</label>
          <input id="ca-email" name="email" type="email" placeholder="vous@exemple.fr" required />
        </div>
      </div>

      <div className="field-row">
        <div className="field full">
          <label htmlFor="ca-pos">poste souhaité</label>
          <select id="ca-pos" name="position">
            <option>Chef de partie · Garde-manger</option>
            <option>Sommelier · Adjoint</option>
            <option>Chef de rang</option>
            <option>Pâtissier·ère</option>
            <option>Candidature spontanée</option>
          </select>
        </div>
      </div>

      <div className="field full" style={{ marginBottom: 0 }}>
        <label htmlFor="ca-msg">pourquoi nous rejoindre ?</label>
        <textarea id="ca-msg" name="message" placeholder="Parlez-nous de vous, de votre expérience…" style={{ minHeight: 120 }} />
      </div>

      {state.status === 'error' && (
        <p style={{ color: 'var(--red)', marginTop: 16, fontFamily: 'var(--font-script)', fontSize: 18 }}>
          Une erreur est survenue. Veuillez réessayer.
        </p>
      )}

      <div className="submit-row">
        <span className="mono">réponse sous 48h…</span>
        <button className="btn red" type="submit" disabled={pending}>
          {pending ? 'Envoi…' : 'Envoyer ma candidature'} <span className="arrow">↗</span>
        </button>
      </div>
    </form>
  )
}

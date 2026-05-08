'use client'

import { useActionState } from 'react'
import { submitPrivateHire, type PrivHireState } from '@/app/privatisation/actions'

export default function PrivateHireForm() {
  const [state, action, pending] = useActionState<PrivHireState, FormData>(
    submitPrivateHire,
    { status: 'idle' }
  )

  if (state.status === 'success') {
    return (
      <div style={{ paddingTop: 40 }}>
        <p className="priv-section-label" style={{ marginTop: 0 }}>demande reçue</p>
        <h2 className="priv-headline">
          À très&nbsp;<span className="ital">bientôt.</span>
        </h2>
        <p className="priv-desc">
          Votre demande a bien été transmise. Notre équipe revient vers vous sous 48h.
        </p>
      </div>
    )
  }

  return (
    <form action={action}>

      <p className="priv-section-label" style={{ marginTop: 0 }}>Informations personnelles</p>

      <div className="field-row">
        <div className="field">
          <label htmlFor="ph-first">prénom</label>
          <input id="ph-first" name="first_name" type="text" placeholder="Alexandre" required />
        </div>
        <div className="field">
          <label htmlFor="ph-last">nom de famille</label>
          <input id="ph-last" name="last_name" type="text" placeholder="Bourgeois" required />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="ph-phone">téléphone</label>
          <input id="ph-phone" name="phone" type="tel" placeholder="+33 6 …" required />
        </div>
        <div className="field">
          <label htmlFor="ph-email">email</label>
          <input id="ph-email" name="email" type="email" placeholder="nom@email.com" required />
        </div>
      </div>

      <div className="field-row">
        <div className="field full">
          <label htmlFor="ph-company">nom de l&apos;entreprise</label>
          <input id="ph-company" name="company" type="text" placeholder="Le nom de votre entreprise" />
        </div>
      </div>

      <p className="priv-section-label">Votre demande</p>
      <p className="priv-section-note">
        Les événements privés au Passage Saint-Honoré nécessitent un minimum de <strong style={{ opacity: 0.9 }}>10 invités</strong>. Pour un groupe plus petit, merci d&apos;effectuer une réservation de table standard.
      </p>

      <div className="field-row">
        <div className="field full">
          <label htmlFor="ph-budget">budget (par personne, HT)</label>
          <input id="ph-budget" name="budget" type="text" placeholder="Ex : 60 €, 80 €, 120 €…" />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="ph-date">date de l&apos;événement</label>
          <input id="ph-date" name="date" type="text" placeholder="JJ / MM / AAAA" required />
        </div>
        <div className="field">
          <label htmlFor="ph-guests">nombre d&apos;invités</label>
          <input id="ph-guests" name="guests" type="text" placeholder="ex : 10 – 15, 25 – 35…" required />
        </div>
      </div>

      <div className="field-row">
        <div className="field full">
          <label htmlFor="ph-msg">autres informations</label>
          <textarea id="ph-msg" name="message" placeholder="Besoin d'un DJ, dîner-cocktail, installation audio, éclairage, photographe…" style={{ minHeight: 100 }} />
        </div>
      </div>

      {state.status === 'error' && (
        <p className="priv-error">Une erreur est survenue. Veuillez réessayer.</p>
      )}

      <div className="priv-submit">
        <button className="btn red" type="submit" disabled={pending}>
          {pending ? 'Envoi en cours…' : 'Organiser mon événement'} <span className="arrow">↗</span>
        </button>
      </div>

    </form>
  )
}

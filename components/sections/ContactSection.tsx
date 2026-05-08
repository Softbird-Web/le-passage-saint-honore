import { brand } from '@/lib/brand'

export default function ContactSection() {
  return (
    <section className="section contact" id="contact">
      <div className="max">
        <div className="section-head">
          <div>
            <div className="section-num">— 13 / Contact</div>
            <span className="eyebrow" style={{ marginTop: 18 }}>à ce soir…</span>
            <h2 className="display" data-words-pullup style={{ marginTop: 24 }}>
              Réserver&nbsp;<span className="ital">une table.</span>
            </h2>
          </div>
        </div>

        <div className="contact-grid">
          <div className="contact-info" data-reveal>
            <div className="block">
              <div className="label">l'adresse</div>
              <div className="value">{brand.contact.address.split(',')[0]}<br />{brand.contact.city} · M° Tuileries</div>
            </div>
            <div className="block">
              <div className="label">téléphone</div>
              <div className="value">{brand.contact.phone}</div>
            </div>
            <div className="block">
              <div className="label">courriel</div>
              <div className="value normal">{brand.contact.email}</div>
            </div>
            <div className="block">
              <div className="label">horaires</div>
              <div className="value normal">
                Lun — Ven · 07h30 — minuit<br />
                Sam — Dim · 09h — minuit<br />
                Brunch dominical · 11h — 16h
              </div>
            </div>
          </div>

          <form className="contact-form" data-reveal action="/api/contact" method="POST">
            <h3 className="display">Une&nbsp;<span className="ital">demande</span>&nbsp;?</h3>
            <div className="field-row">
              <div className="field">
                <label htmlFor="f-name">nom</label>
                <input id="f-name" name="name" type="text" placeholder="Votre nom" />
              </div>
              <div className="field">
                <label htmlFor="f-email">courriel</label>
                <input id="f-email" name="email" type="email" placeholder="vous@exemple.fr" />
              </div>
            </div>
            <div className="field-row">
              <div className="field">
                <label htmlFor="f-date">date</label>
                <input id="f-date" name="date" type="text" placeholder="JJ / MM / AAAA" />
              </div>
              <div className="field">
                <label htmlFor="f-cov">couverts</label>
                <select id="f-cov" name="guests">
                  <option>2 personnes</option>
                  <option>4 personnes</option>
                  <option>6 personnes</option>
                  <option>8 personnes ou +</option>
                </select>
              </div>
            </div>
            <div className="field full">
              <label htmlFor="f-msg">message (facultatif)</label>
              <textarea id="f-msg" name="message" placeholder="Allergies, occasion, demandes particulières…"></textarea>
            </div>
            <div className="submit-row">
              <span className="mono">réponse sous 24h…</span>
              <button className="btn red" type="submit">
                Envoyer la demande <span className="arrow">↗</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

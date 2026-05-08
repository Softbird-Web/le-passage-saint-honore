import Image from 'next/image'

export default function PrivatisationTeaser() {
  return (
    <section className="section warm" id="privatisation">
      <svg className="noise noise-strong" preserveAspectRatio="none">
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      <div className="max">
        <div className="section-head">
          <div>
            <div className="section-num">— 08 / Privatisation</div>
            <span className="eyebrow" style={{ marginTop: 18 }}>une adresse à vous seul…</span>
            <h2 className="display" data-words-pullup style={{ marginTop: 24 }}>
              Recevoir,&nbsp;<span className="ital">chez nous.</span>
            </h2>
          </div>
          <div className="body-lg" data-anim-para>
            Pour un dîner d'entreprise, une présentation presse, un mariage civil ou un anniversaire — la salle entière, la mezzanine, ou simplement notre table d'hôtes.
          </div>
        </div>

        <div className="private-grid" data-card-stagger>
          <article className="private-card" data-card>
            <div>
              <span className="eyebrow">la salle entière…</span>
              <h3 className="display" style={{ marginTop: 20 }}>
                Jusqu'à 80&nbsp;<span className="ital">convives</span>, debout.
              </h3>
              <p className="body-lg" style={{ marginTop: 20, opacity: 0.85 }}>
                Apéritif dînatoire, vernissage, lancement produit. Cuisine ouverte, équipe dédiée, sound system Klipsch.
              </p>
            </div>
            <div className="actions">
              <a className="btn red" href="/privatisation#devis">Demander un devis <span className="arrow">↗</span></a>
            </div>
          </article>

          <article className="private-card image" data-card>
            <Image src="/images/hero/exterior-wide.jpg" alt="Vue de la rue sur l'ensemble du Passage Saint-Honoré, terrasse et enseigne rouge" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
          </article>
        </div>
      </div>
    </section>
  )
}

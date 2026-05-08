import Image from 'next/image'

export default function HistoireSection() {
  return (
    <section className="section cream" id="histoire">
      <svg className="noise noise-strong" preserveAspectRatio="none">
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      <div className="max">
        <div className="section-head">
          <div>
            <div className="section-num">— 02 / Histoire</div>
            <span className="eyebrow" style={{ marginTop: 18 }}>brasserie parisienne…</span>
            <h2 className="display" data-words-pullup style={{ marginTop: 24 }}>
              Un&nbsp;<span className="ital">passage,</span>&nbsp;un&nbsp;refuge.
            </h2>
          </div>
        </div>

        <div className="histoire-grid">
          <div className="histoire-text">
            <p data-anim-para>
              Niché entre deux portes cochères du premier arrondissement, Le Passage est né d'une envie simple… retrouver le geste juste, le bois ciré, la nappe blanche et la lumière du soir qui s'attarde sur les verres.
            </p>
            <p data-anim-para>
              Ici, la cuisine n'a pas de manifeste. Elle a une mémoire — celle des bistrots de quartier, des plats que l'on partage, des conversations qui débordent jusqu'à minuit.
            </p>

            <div className="histoire-meta">
              <div>
                <div className="label">Ouverture</div>
                <div className="value">Avril 2024</div>
              </div>
              <div>
                <div className="label">Le chef</div>
                <div className="value">Antoine Vasseur</div>
              </div>
              <div>
                <div className="label">Sommelier</div>
                <div className="value">Camille Roux</div>
              </div>
              <div>
                <div className="label">Architecte</div>
                <div className="value">Studio Lamballe</div>
              </div>
            </div>
          </div>

          <div className="histoire-image" data-parallax-trigger>
            <div data-parallax="0.15" style={{ position: 'absolute', inset: 0 }}>
              <Image src="/images/terrace/terrace-perspective.jpg" alt="Longue perspective de la terrasse du Passage Saint-Honoré, mur Bistrot Parisien et rue de Paris" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

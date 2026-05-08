import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-image" data-parallax-trigger>
          <div data-parallax="0.18" style={{ position: 'absolute', inset: 0 }}>
            <Image src="/images/hero/street-view-trees.jpg" alt="Le Passage Saint-Honoré — rue avec arbres, terrasse et façade du bistrot" fill className="object-cover" priority sizes="100vw" />
          </div>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,9,7,0.45)', zIndex: 1 }} />
        </div>
        <svg className="noise" preserveAspectRatio="none">
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
        <div className="hero-content">
          <div className="hero-top">
            <div className="stack">
              <span>EST. MMXXIV</span>
              <span>48° 51′ 56″ N</span>
              <span>02° 19′ 51″ E</span>
            </div>
            <div className="stack right">
              <span>33 PLACE DU MARCHÉ SAINT-HONORÉ</span>
              <span>PARIS · 1ᵉʳ</span>
            </div>
          </div>

          <div className="hero-headline">
            <div className="above">une table à Paris…</div>
            <h1 className="display">
              Le&nbsp;<span className="ital">Passage</span><br />
              Saint&nbsp;Honore
            </h1>
          </div>

          <div className="hero-bottom">
            <div className="stack">
              <span>OUVERT 7J/7</span>
              <span>07H30 — MINUIT</span>
            </div>
            <div className="scroll-prompt">
              <span>Faites défiler</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

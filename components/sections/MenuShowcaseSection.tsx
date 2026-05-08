import Image from 'next/image'

export default function MenuShowcaseSection() {
  return (
    <section className="horizontal__wrap" data-horizontal-scroll-wrap>

      <article data-horizontal-scroll-panel className="horizontal__panel">
        <div className="horizontal__panel-inner">
          <div className="horizontal__panel-bg">
            <Image src="/images/food/beef-aligot.jpg" alt="Tataki de côte de bœuf accompagné d'aligot crémeux sur assiette de bistrot" fill className="object-cover" sizes="100vw" />
          </div>
          <svg className="noise" preserveAspectRatio="none"><rect width="100%" height="100%" filter="url(#noise)" /></svg>
          <div className="horizontal__panel-meta tl">
            <div>I&nbsp;/&nbsp;III · CARTE</div>
          </div>
          <div className="horizontal__panel-meta br">
            <div>SERVICE · 12H — 14H30</div>
            <div>19H30 — 23H</div>
          </div>
          <div className="horizontal__panel-content">
            <span className="eyebrow">la cuisine du jour…</span>
            <h2 className="display">Menu</h2>
            <p className="desc">Une carte courte, l'ardoise change selon les arrivages du marché.</p>
          </div>
        </div>
      </article>

      <article data-horizontal-scroll-panel className="horizontal__panel">
        <div className="horizontal__panel-inner">
          <div className="horizontal__panel-bg">
            <Image src="/images/food/eggs-fries-brunch.jpg" alt="Œuf au plat sur galette avec frites maison et cocktails de saison" fill className="object-cover" sizes="100vw" />
          </div>
          <svg className="noise" preserveAspectRatio="none"><rect width="100%" height="100%" filter="url(#noise)" /></svg>
          <div className="horizontal__panel-meta tl">
            <div>II&nbsp;/&nbsp;III · BRUNCH</div>
          </div>
          <div className="horizontal__panel-meta br">
            <div>DIMANCHE · 11H — 16H</div>
            <div>RÉSERVATION CONSEILLÉE</div>
          </div>
          <div className="horizontal__panel-content">
            <span className="eyebrow">le rituel dominical…</span>
            <h2 className="display"><span className="ital">Brunch</span></h2>
            <p className="desc">Œufs parfaits, brioche maison, charcuteries d'Auvergne. Café à volonté.</p>
          </div>
        </div>
      </article>

      <article data-horizontal-scroll-panel className="horizontal__panel">
        <div className="horizontal__panel-inner">
          <div className="horizontal__panel-bg">
            <Image src="/images/food/rose-wine.jpg" alt="Trois bouteilles de rosé Léos Côtes de Provence sur glace" fill className="object-cover" sizes="100vw" />
          </div>
          <svg className="noise" preserveAspectRatio="none"><rect width="100%" height="100%" filter="url(#noise)" /></svg>
          <div className="horizontal__panel-meta tl">
            <div>III&nbsp;/&nbsp;III · COCKTAILS</div>
          </div>
          <div className="horizontal__panel-meta br">
            <div>BAR · 18H — MINUIT</div>
            <div>HAPPY HOUR · 18H — 19H30</div>
          </div>
          <div className="horizontal__panel-content">
            <span className="eyebrow">à l'heure bleue…</span>
            <h2 className="display">Cocktails</h2>
            <p className="desc">Spiritueux français, herbes du jardin. Onze références, pas une de plus.</p>
          </div>
        </div>
      </article>

    </section>
  )
}

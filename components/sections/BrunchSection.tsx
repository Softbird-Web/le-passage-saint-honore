import Image from 'next/image'

export default function BrunchSection() {
  return (
    <section className="section cream" id="carte">
      <div className="max">
        <div className="section-head">
          <div>
            <div className="section-num">— 07 / La carte</div>
            <span className="eyebrow" style={{ marginTop: 18 }}>au jour le jour…</span>
            <h2 className="display" data-words-pullup style={{ marginTop: 24 }}>
              Classiques&nbsp;<span className="ital">de saison.</span>
            </h2>
          </div>
          <div className="body-lg" data-anim-para>
            Une carte courte, une ardoise qui change selon les arrivages du marché Saint-Honoré. Quelques classiques que l'on ne touche pas, et la liberté du chef pour le reste.
          </div>
        </div>

        <div className="cards-row" data-card-stagger>
          <article className="menu-card" data-card>
            <Image src="/images/food/tartare-drinks-bokeh.jpg" alt="Tartare de saumon à la pomme pink lady avec salade en bocal et jus d'orange" fill className="object-cover" sizes="(max-width:768px) 100vw, 25vw" />
            <div className="meta">
              <div className="label">l'entrée</div>
              <div className="name">Œuf parfait, jus de cresson</div>
              <div className="price">14 €</div>
            </div>
          </article>
          <article className="menu-card" data-card>
            <Image src="/images/food/salmon-salad-menu.jpg" alt="Salade de saumon fumé, blinis, fromage frais et œuf dur sur plateau Le Passage" fill className="object-cover" sizes="(max-width:768px) 100vw, 25vw" />
            <div className="meta">
              <div className="label">la signature</div>
              <div className="name">Canette rôtie, cerises noires</div>
              <div className="price">32 €</div>
            </div>
          </article>
          <article className="menu-card" data-card>
            <Image src="/images/food/pizza-hand.jpg" alt="Pizza napolitaine aux champignons, jambon et basilic frais servie sur terrasse" fill className="object-cover" sizes="(max-width:768px) 100vw, 25vw" />
            <div className="meta">
              <div className="label">du marché</div>
              <div className="name">Turbot, beurre noisette</div>
              <div className="price">38 €</div>
            </div>
          </article>
          <article className="menu-card" data-card>
            <Image src="/images/food/raspberry-tartlets-stand.jpg" alt="Tartelettes aux framboises et menthe fraîche sur présentoir en bois" fill className="object-cover" sizes="(max-width:768px) 100vw, 25vw" />
            <div className="meta">
              <div className="label">le dessert</div>
              <div className="name">Paris-Brest, praliné maison</div>
              <div className="price">12 €</div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

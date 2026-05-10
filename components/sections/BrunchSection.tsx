import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import type { BrunchData, MenuCardData } from '@/lib/sanity.types'

const FALLBACK_CARDS: Array<MenuCardData & { fallbackSrc: string; alt: string }> = [
  { label: "l'entrée", name: 'Œuf parfait, jus de cresson', price: '14 €', fallbackSrc: '/images/food/tartare-drinks-bokeh.jpg', alt: 'Tartare de saumon à la pomme pink lady avec salade en bocal' },
  { label: 'la signature', name: 'Canette rôtie, cerises noires', price: '32 €', fallbackSrc: '/images/food/salmon-salad-menu.jpg', alt: 'Salade de saumon fumé, blinis, fromage frais et œuf dur' },
  { label: 'du marché', name: 'Turbot, beurre noisette', price: '38 €', fallbackSrc: '/images/food/pizza-hand.jpg', alt: 'Pizza napolitaine aux champignons et basilic frais' },
  { label: 'le dessert', name: 'Paris-Brest, praliné maison', price: '12 €', fallbackSrc: '/images/food/raspberry-tartlets-stand.jpg', alt: 'Tartelettes aux framboises et menthe fraîche' },
]

export default function BrunchSection({ data }: { data?: BrunchData | null }) {
  const eyebrow = data?.eyebrow ?? 'au jour le jour…'
  const heading = data?.heading
  const body = data?.body ?? "Une carte courte, une ardoise qui change selon les arrivages du marché Saint-Honoré. Quelques classiques que l'on ne touche pas, et la liberté du chef pour le reste."
  const cards = (data?.menuCards && data.menuCards.length > 0)
    ? data.menuCards.map((c) => ({ ...c, fallbackSrc: '', alt: c.name }))
    : FALLBACK_CARDS
  return (
    <section className="section cream" id="carte">
      <div className="max">
        <div className="section-head">
          <div>
            <div className="section-num">— 07 / La carte</div>
            <span className="eyebrow" style={{ marginTop: 18 }}>{eyebrow}</span>
            <h2 className="display" data-words-pullup style={{ marginTop: 24 }}>
              {heading ?? <>Classiques&nbsp;<span className="ital">de saison.</span></>}
            </h2>
          </div>
          <div className="body-lg" data-anim-para>
            {body}
          </div>
        </div>

        <div className="cards-row" data-card-stagger>
          {cards.map((c, i) => {
            const src = c.image?.asset
              ? urlFor(c.image).width(800).quality(75).url()
              : (c as { fallbackSrc?: string }).fallbackSrc || '/images/food/tartare-drinks-bokeh.jpg'
            return (
              <article key={i} className="menu-card" data-card>
                <Image src={src} alt={c.alt || c.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 25vw" />
                <div className="meta">
                  {c.label ? <div className="label">{c.label}</div> : null}
                  <div className="name">{c.name}</div>
                  {c.price ? <div className="price">{c.price}</div> : null}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

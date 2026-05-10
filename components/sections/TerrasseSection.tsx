import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import type { TerrasseData } from '@/lib/sanity.types'

export default function TerrasseSection({ data }: { data?: TerrasseData | null }) {
  const eyebrow = data?.eyebrow ?? 'en plein air…'
  const heading = data?.heading
  const body = data?.body ?? 'Réservation conseillée le week-end. Service continu de 12h à 23h dès les premiers beaux jours.'
  const imgSrc = data?.image?.asset
    ? urlFor(data.image).width(1600).quality(80).url()
    : '/images/terrace/terrace-empty.jpg'
  return (
    <section className="section" id="terrasse">
      <div className="max">
        <div className="section-head">
          <div>
            <div className="section-num">— 05 / Terrasse</div>
            <span className="eyebrow" style={{ marginTop: 18 }}>{eyebrow}</span>
            <h2 className="display" data-words-pullup style={{ marginTop: 24 }}>
              {heading ?? <>Vingt-deux&nbsp;<span className="ital">couverts.</span></>}
            </h2>
          </div>
          <div className="body-lg" data-anim-para>
            {body}
          </div>
        </div>

        <div className="terrasse-2col" data-card-stagger>
          <div className="terrasse-2col-meta" data-card>
            <div className="t2-label">COUVERTS</div>
            <div className="t2-value">22</div>
            <div className="t2-label" style={{ marginTop: 32 }}>SAISON</div>
            <div className="t2-value">Avr — Oct</div>
            <div className="t2-label" style={{ marginTop: 32 }}>SERVICE</div>
            <div className="t2-value" style={{ fontSize: 'clamp(22px,2.5vw,40px)' }}>12h — 23h</div>
          </div>
          <div className="terrasse-2col-image" data-card data-parallax-trigger>
            <div data-parallax="0.1" style={{ position: 'absolute', inset: 0 }}>
              <Image src={imgSrc} alt="Terrasse du Passage Saint-Honoré" fill className="object-cover" sizes="(max-width:768px) 100vw, 55vw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

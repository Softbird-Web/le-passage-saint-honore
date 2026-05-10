import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { brand } from '@/lib/brand'
import type { HeroData, SiteSettingsData } from '@/lib/sanity.types'

export default function HeroSection({ data, settings }: { data?: HeroData | null; settings?: SiteSettingsData | null }) {
  const eyebrow = data?.eyebrow ?? 'une table à Paris…'
  const heading = data?.heading
  const discoverLabel = data?.discoverLabel ?? 'Faites défiler'
  const address = settings?.contact?.address ?? brand.contact.address
  const hoursFull = settings?.hours?.full ?? brand.hours.full
  const imgSrc = data?.image?.asset
    ? urlFor(data.image).width(2400).quality(80).url()
    : '/images/hero/street-view-trees.jpg'
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-image" data-parallax-trigger>
          <div data-parallax="0.18" style={{ position: 'absolute', inset: 0 }}>
            <Image src={imgSrc} alt="Le Passage Saint-Honoré — rue avec arbres, terrasse et façade du bistrot" fill className="object-cover" priority sizes="100vw" />
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
              <span>{address.split(',')[0].toUpperCase()}</span>
              <span>PARIS · 1ᵉʳ</span>
            </div>
          </div>

          <div className="hero-headline">
            <div className="above">{eyebrow}</div>
            <h1 className="display">
              {heading ?? <>Le&nbsp;<span className="ital">Passage</span><br />Saint&nbsp;Honore</>}
            </h1>
          </div>

          <div className="hero-bottom">
            <div className="stack">
              <span>{hoursFull.toUpperCase()}</span>
            </div>
            <div className="scroll-prompt">
              <span>{discoverLabel}</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

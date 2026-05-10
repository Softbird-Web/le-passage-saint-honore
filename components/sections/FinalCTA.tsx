import Image from 'next/image'
import { brand } from '@/lib/brand'
import { urlFor } from '@/lib/sanity'
import type { FinalCTAData, SiteSettingsData } from '@/lib/sanity.types'

export default function FinalCTA({ data, settings }: { data?: FinalCTAData | null; settings?: SiteSettingsData | null }) {
  const eyebrow = data?.eyebrow ?? 'à ce soir, peut-être ?'
  const heading = data?.heading
  const ctaLabel = data?.ctaLabel ?? 'Réserver une table'
  const phone = settings?.contact?.phone ?? brand.contact.phone
  const imgSrc = data?.image?.asset
    ? urlFor(data.image).width(2400).quality(80).url()
    : '/images/terrace/terrace-waiter.jpg'
  return (
    <section className="final-cta">
      <div className="final-cta-bg">
        <Image src={imgSrc} alt="" fill className="object-cover" sizes="100vw" />
      </div>
      <svg className="noise" preserveAspectRatio="none">
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      <div className="final-cta-headline">
        <div className="above">{eyebrow}</div>
        <h2 className="display">
          {heading ?? <>Le&nbsp;<span className="ital">Passage</span>&nbsp;vous&nbsp;attend.</>}
        </h2>
      </div>
      <div className="final-cta-content">
        <div className="hero-top" style={{ color: 'var(--cream)' }}>
          <div className="stack">
            <span className="mono">— LE PASSAGE</span>
            <span className="mono">SAINT HONORE</span>
          </div>
          <div className="stack right">
            <span className="mono">RÉSERVATION</span>
            <span className="mono">{phone}</span>
          </div>
        </div>
        <div className="actions">
          <a className="btn" href="#contact">{ctaLabel} <span className="arrow">↗</span></a>
          <a className="btn ghost" href={`tel:${phone.replace(/\s/g, '')}`}>Appeler la maison</a>
        </div>
      </div>
    </section>
  )
}

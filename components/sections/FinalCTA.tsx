import Image from 'next/image'
import { brand } from '@/lib/brand'

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta-bg">
        <Image src="/images/terrace/terrace-waiter.jpg" alt="" fill className="object-cover" sizes="100vw" />
      </div>
      <svg className="noise" preserveAspectRatio="none">
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      <div className="final-cta-headline">
        <div className="above">à ce soir, peut-être&nbsp;?</div>
        <h2 className="display">Le&nbsp;<span className="ital">Passage</span>&nbsp;vous&nbsp;attend.</h2>
      </div>
      <div className="final-cta-content">
        <div className="hero-top" style={{ color: 'var(--cream)' }}>
          <div className="stack">
            <span className="mono">— LE PASSAGE</span>
            <span className="mono">SAINT HONORE</span>
          </div>
          <div className="stack right">
            <span className="mono">RÉSERVATION</span>
            <span className="mono">{brand.contact.phone}</span>
          </div>
        </div>
        <div className="actions">
          <a className="btn" href="#contact">Réserver une table <span className="arrow">↗</span></a>
          <a className="btn ghost" href={`tel:${brand.contact.phone.replace(/\s/g, '')}`}>Appeler la maison</a>
        </div>
      </div>
    </section>
  )
}

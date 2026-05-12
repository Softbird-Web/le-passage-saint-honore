import Image from 'next/image'
import { brand } from '@/lib/brand'
import type { CareersData } from '@/lib/sanity.types'

const FALLBACK_POSITIONS = [
  { title: 'Chef de partie · Garde-manger', type: 'CDI', description: '39h · service du soir' },
  { title: 'Sommelier · Adjoint', type: 'CDI', description: '39h · coupures' },
  { title: 'Chef de rang', type: 'CDI', description: '35h · soir et week-end' },
  { title: 'Pâtissier·ère', type: 'CDI', description: '39h · 6h — 14h' },
  { title: 'Candidature spontanée', type: '', description: "toutes brigades · toute l'année" },
]

export default function CareersSection({ data }: { data?: CareersData | null }) {
  const eyebrow = data?.eyebrow ?? 'la maison recrute…'
  const heading = data?.heading
  const intro = data?.intro ?? brand.careers.intro
  const ctaLabel = data?.ctaLabel ?? 'Postuler maintenant'
  const positions = (data?.positions && data.positions.length > 0) ? data.positions : FALLBACK_POSITIONS
  return (
    <section className="section warm" id="recrutement">
      <svg className="noise noise-strong" preserveAspectRatio="none">
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      <div className="max">
        <div className="section-head">
          <div>
            <div className="section-num">— 12 / Nous rejoindre</div>
            <span className="eyebrow" style={{ marginTop: 18 }}>{eyebrow}</span>
            <h2 className="display" data-words-pullup style={{ marginTop: 24 }}>
              {heading ?? <>Une&nbsp;<span className="ital">famille,</span>&nbsp;en cuisine.</>}
            </h2>
          </div>
          <div className="body-lg" data-anim-para>
            {intro}
          </div>
        </div>

        <div className="careers">
          <div className="careers-image" data-parallax-trigger>
            <div data-parallax="0.12" style={{ position: 'absolute', inset: 0 }}>
              <Image src="/images/team/staff-cap.jpg" alt="Membre de l'équipe du Passage Saint-Honoré portant la casquette de la brasserie" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
            </div>
          </div>

          <div className="careers-list" data-card-stagger>
            {positions.map((p, i) => (
              <a key={i} className="role" data-card href={`mailto:${brand.careers.contactEmail}?subject=Candidature : ${encodeURIComponent(p.title)}`}>
                <div>
                  <div className="position">{p.title}</div>
                  <div className="schedule">{[p.type, p.description].filter(Boolean).join(' · ')}</div>
                </div>
                <div className="arrow-wrap">↗</div>
              </a>
            ))}
            <div style={{ marginTop: 32 }}>
              <a className="btn red" href={`mailto:${brand.careers.contactEmail}`}>
                {ctaLabel} <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

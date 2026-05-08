import Image from 'next/image'
import { brand } from '@/lib/brand'

export default function CareersSection() {
  return (
    <section className="section warm" id="recrutement">
      <svg className="noise noise-strong" preserveAspectRatio="none">
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      <div className="max">
        <div className="section-head">
          <div>
            <div className="section-num">— 12 / Nous rejoindre</div>
            <span className="eyebrow" style={{ marginTop: 18 }}>la maison recrute…</span>
            <h2 className="display" data-words-pullup style={{ marginTop: 24 }}>
              Une&nbsp;<span className="ital">famille,</span>&nbsp;en cuisine.
            </h2>
          </div>
          <div className="body-lg" data-anim-para>
            {brand.careers.intro}
          </div>
        </div>

        <div className="careers">
          <div className="careers-image" data-parallax-trigger>
            <div data-parallax="0.12" style={{ position: 'absolute', inset: 0 }}>
              <Image src="/images/team/staff-cap.jpg" alt="Membre de l'équipe du Passage Saint-Honoré portant la casquette de la brasserie" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
            </div>
          </div>

          <div className="careers-list" data-card-stagger>
            <a className="role" data-card href={`mailto:${brand.careers.contactEmail}`}>
              <div>
                <div className="position">Chef de partie · Garde-manger</div>
                <div className="schedule">CDI · 39h · service du soir</div>
              </div>
              <div className="arrow-wrap">↗</div>
            </a>
            <a className="role" data-card href={`mailto:${brand.careers.contactEmail}`}>
              <div>
                <div className="position">Sommelier · Adjoint</div>
                <div className="schedule">CDI · 39h · coupures</div>
              </div>
              <div className="arrow-wrap">↗</div>
            </a>
            <a className="role" data-card href={`mailto:${brand.careers.contactEmail}`}>
              <div>
                <div className="position">Chef de rang</div>
                <div className="schedule">CDI · 35h · soir et week-end</div>
              </div>
              <div className="arrow-wrap">↗</div>
            </a>
            <a className="role" data-card href={`mailto:${brand.careers.contactEmail}`}>
              <div>
                <div className="position">Pâtissier·ère</div>
                <div className="schedule">CDI · 39h · 6h — 14h</div>
              </div>
              <div className="arrow-wrap">↗</div>
            </a>
            <a className="role" data-card href={`mailto:${brand.careers.contactEmail}`}>
              <div>
                <div className="position">Candidature spontanée</div>
                <div className="schedule">toutes brigades · toute l'année</div>
              </div>
              <div className="arrow-wrap">↗</div>
            </a>
            <div style={{ marginTop: 32 }}>
              <a className="btn red" href={`mailto:${brand.careers.contactEmail}`}>
                Postuler maintenant <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

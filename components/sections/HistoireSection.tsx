import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'
import type { HistoireData } from '@/lib/sanity.types'

const FALLBACK_PARAGRAPHS = [
  "Niché entre deux portes cochères du premier arrondissement, Le Passage est né d'une envie simple… retrouver le geste juste, le bois ciré, la nappe blanche et la lumière du soir qui s'attarde sur les verres.",
  "Ici, la cuisine n'a pas de manifeste. Elle a une mémoire — celle des bistrots de quartier, des plats que l'on partage, des conversations qui débordent jusqu'à minuit.",
]

export default function HistoireSection({ data }: { data?: HistoireData | null }) {
  const eyebrow = data?.eyebrow ?? 'brasserie parisienne…'
  const heading = data?.heading
  const body = data?.body
  const imgSrc = data?.image?.asset
    ? urlFor(data.image).width(1600).quality(80).url()
    : '/images/terrace/terrace-perspective.jpg'
  return (
    <section className="section cream" id="histoire">
      <svg className="noise noise-strong" preserveAspectRatio="none">
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      <div className="max">
        <div className="section-head">
          <div>
            <div className="section-num">— 02 / Histoire</div>
            <span className="eyebrow" style={{ marginTop: 18 }}>{eyebrow}</span>
            <h2 className="display" data-words-pullup style={{ marginTop: 24 }}>
              {heading ?? <>Un&nbsp;<span className="ital">passage,</span>&nbsp;un&nbsp;refuge.</>}
            </h2>
          </div>
        </div>

        <div className="histoire-grid">
          <div className="histoire-text">
            {body && body.length > 0 ? (
              <div data-anim-para>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <PortableText value={body as any} />
              </div>
            ) : (
              FALLBACK_PARAGRAPHS.map((p, i) => (
                <p key={i} data-anim-para>{p}</p>
              ))
            )}

            <div className="histoire-meta">
              <div>
                <div className="label">Ouverture</div>
                <div className="value">Avril 2024</div>
              </div>
              <div>
                <div className="label">Le chef</div>
                <div className="value">Antoine Vasseur</div>
              </div>
              <div>
                <div className="label">Sommelier</div>
                <div className="value">Camille Roux</div>
              </div>
              <div>
                <div className="label">Architecte</div>
                <div className="value">Studio Lamballe</div>
              </div>
            </div>
          </div>

          <div className="histoire-image" data-parallax-trigger>
            <div data-parallax="0.15" style={{ position: 'absolute', inset: 0 }}>
              <Image src={imgSrc} alt="Longue perspective de la terrasse du Passage Saint-Honoré" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

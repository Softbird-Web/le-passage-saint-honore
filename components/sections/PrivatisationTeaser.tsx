import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import type { PrivatisationData, PrivateRoomData } from '@/lib/sanity.types'

export default function PrivatisationTeaser({ data, rooms }: { data?: PrivatisationData | null; rooms?: PrivateRoomData[] }) {
  const eyebrow = data?.eyebrow ?? 'une adresse à vous seul…'
  const heading = data?.heading
  const body = data?.body ?? "Pour un dîner d'entreprise, une présentation presse, un mariage civil ou un anniversaire — la salle entière, la mezzanine, ou simplement notre table d'hôtes."
  const ctaLabel = data?.ctaLabel ?? 'Demander un devis'
  const heroRoom = rooms && rooms.length > 0 ? rooms[0] : null
  const heroSrc = heroRoom?.image?.asset
    ? urlFor(heroRoom.image).width(1600).quality(80).url()
    : '/images/hero/exterior-wide.jpg'
  return (
    <section className="section warm" id="privatisation">
      <svg className="noise noise-strong" preserveAspectRatio="none">
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      <div className="max">
        <div className="section-head">
          <div>
            <div className="section-num">— 08 / Privatisation</div>
            <span className="eyebrow" style={{ marginTop: 18 }}>{eyebrow}</span>
            <h2 className="display" data-words-pullup style={{ marginTop: 24 }}>
              {heading ?? <>Recevoir,&nbsp;<span className="ital">chez nous.</span></>}
            </h2>
          </div>
          <div className="body-lg" data-anim-para>
            {body}
          </div>
        </div>

        <div className="private-grid" data-card-stagger>
          <article className="private-card" data-card>
            <div>
              <span className="eyebrow">{heroRoom ? heroRoom.name : 'la salle entière…'}</span>
              <h3 className="display" style={{ marginTop: 20 }}>
                {heroRoom?.capacityStanding
                  ? <>Jusqu&apos;à {heroRoom.capacityStanding}&nbsp;<span className="ital">convives</span>, debout.</>
                  : <>Jusqu&apos;à 80&nbsp;<span className="ital">convives</span>, debout.</>}
              </h3>
              <p className="body-lg" style={{ marginTop: 20, opacity: 0.85 }}>
                {heroRoom?.description ?? "Apéritif dînatoire, vernissage, lancement produit. Cuisine ouverte, équipe dédiée, sound system Klipsch."}
              </p>
            </div>
            <div className="actions">
              <a className="btn red" href="/privatisation#devis">{ctaLabel} <span className="arrow">↗</span></a>
            </div>
          </article>

          <article className="private-card image" data-card>
            <Image src={heroSrc} alt={heroRoom?.name ?? "Vue de la rue sur l'ensemble du Passage Saint-Honoré"} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
          </article>
        </div>
      </div>
    </section>
  )
}

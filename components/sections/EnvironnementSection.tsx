'use client'

import Image from 'next/image'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import type { EnvironnementData } from '@/lib/sanity.types'

const GALLERY = [
  { src: '/images/hero/terrace-lanterns.jpg', alt: "Vue d'ensemble de la terrasse couverte avec plafond en chaume et lanternes en macramé" },
  { src: '/images/ambiance/bamboo-chairs.jpg', alt: 'Salle intérieure avec mur en bambou, chaises en rotin et banquette terracotta' },
  { src: '/images/ambiance/set-tables-row.jpg', alt: 'Rangée de tables dressées le long du mur en bambou, menus posés sur les sets' },
  { src: '/images/ambiance/bistrot-wall.jpg', alt: "Mur bleu marine avec inscription Bistrot Parisien Paris 1er, de la ferme à l'assiette" },
  { src: '/images/ambiance/bar-interior.jpg', alt: 'Comptoir du bar avec lanterne dorée, bouteilles de spiritueux et verres suspendus' },
  { src: '/images/ambiance/macrame-lamp.jpg', alt: "Détail d'une suspension en macramé artisanale" },
  { src: '/images/ambiance/macrame-textile.jpg', alt: "Décoration textile en macramé suspendue sur mur en briques — détail artisanal du Passage Saint-Honoré" },
  { src: '/images/ambiance/terrace-colonnade.jpg', alt: "Colonnade extérieure de la terrasse avec suspensions en osier et lumière tamisée" },
  { src: '/images/ambiance/staff-branded-cap.jpg', alt: "Membre de l'équipe portant la casquette Le Passage Saint-Honoré" },
]

export default function EnvironnementSection({ data }: { data?: EnvironnementData | null }) {
  const [index, setIndex] = useState(-1)
  const eyebrow = data?.eyebrow ?? "l'art de la table…"
  const heading = data?.heading
  const body = data?.body1 ?? "Banquettes de velours, miroirs piqués, comptoir de zinc. Les éléments sont familiers, l'arrangement précis. On y vient pour un café au comptoir, pour un déjeuner de travail, pour le dernier verre — et l'on revient parce qu'on s'y sent attendu."

  return (
    <section className="section" id="environnement" data-parallax-trigger>
      <div className="max">
        <div className="section-head">
          <div>
            <div className="section-num">— 03 / La salle</div>
            <span className="eyebrow" style={{ marginTop: 18 }}>{eyebrow}</span>
            <h2 className="display" data-words-pullup style={{ marginTop: 24 }}>
              {heading ?? <>Au&nbsp;<span className="ital">quotidien.</span></>}
            </h2>
          </div>
          <div className="body-lg" data-anim-para>
            {body}
          </div>
        </div>

        <div className="env-grid" data-card-stagger>
          <div className="cell c1" data-card data-cursor-marquee-text="Voir la galerie" style={{ cursor: 'none' }} onClick={() => setIndex(0)}>
            <div data-parallax="0.08" style={{ position: 'absolute', inset: 0 }}>
              <Image src={GALLERY[0].src} alt={GALLERY[0].alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 60vw" />
            </div>
          </div>
          <div className="cell c2" data-card data-cursor-marquee-text="Voir la galerie" style={{ cursor: 'none' }} onClick={() => setIndex(1)}>
            <div data-parallax="-0.1" style={{ position: 'absolute', inset: 0 }}>
              <Image src={GALLERY[1].src} alt={GALLERY[1].alt} fill className="object-cover" sizes="(max-width:768px) 50vw, 30vw" />
            </div>
          </div>
          <div className="cell c3" data-card data-cursor-marquee-text="Voir la galerie" style={{ cursor: 'none' }} onClick={() => setIndex(2)}>
            <div data-parallax="0.12" style={{ position: 'absolute', inset: 0 }}>
              <Image src={GALLERY[2].src} alt={GALLERY[2].alt} fill className="object-cover" sizes="(max-width:768px) 50vw, 30vw" />
            </div>
          </div>
          <div className="cell c4" data-card data-cursor-marquee-text="Voir la galerie" style={{ cursor: 'none' }} onClick={() => setIndex(3)}>
            <div data-parallax="-0.08" style={{ position: 'absolute', inset: 0 }}>
              <Image src={GALLERY[3].src} alt={GALLERY[3].alt} fill className="object-cover" sizes="(max-width:768px) 50vw, 30vw" />
            </div>
          </div>
          <div className="cell c5" data-card data-cursor-marquee-text="Voir la galerie" style={{ cursor: 'none' }} onClick={() => setIndex(4)}>
            <div data-parallax="0.1" style={{ position: 'absolute', inset: 0 }}>
              <Image src={GALLERY[4].src} alt={GALLERY[4].alt} fill className="object-cover" sizes="(max-width:768px) 50vw, 30vw" />
            </div>
          </div>
          <div className="cell c6" data-card data-cursor-marquee-text="Voir la galerie" style={{ cursor: 'none' }} onClick={() => setIndex(5)}>
            <div data-parallax="-0.12" style={{ position: 'absolute', inset: 0 }}>
              <Image src={GALLERY[5].src} alt={GALLERY[5].alt} fill className="object-cover" sizes="(max-width:768px) 50vw, 30vw" />
            </div>
          </div>
          <div className="cell c7" data-card data-cursor-marquee-text="Voir la galerie" style={{ cursor: 'none' }} onClick={() => setIndex(6)}>
            <div data-parallax="-0.06" style={{ position: 'absolute', inset: 0 }}>
              <Image src={GALLERY[6].src} alt={GALLERY[6].alt} fill className="object-cover" sizes="(max-width:768px) 50vw, 30vw" />
            </div>
          </div>
          <div className="cell c8" data-card data-cursor-marquee-text="Voir la galerie" style={{ cursor: 'none' }} onClick={() => setIndex(7)}>
            <div data-parallax="0.09" style={{ position: 'absolute', inset: 0 }}>
              <Image src={GALLERY[7].src} alt={GALLERY[7].alt} fill className="object-cover" sizes="(max-width:768px) 50vw, 30vw" />
            </div>
          </div>
          <div className="cell c9" data-card data-cursor-marquee-text="Voir la galerie" style={{ cursor: 'none' }} onClick={() => setIndex(8)}>
            <div data-parallax="-0.1" style={{ position: 'absolute', inset: 0 }}>
              <Image src={GALLERY[8].src} alt={GALLERY[8].alt} fill className="object-cover" sizes="(max-width:768px) 50vw, 30vw" />
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={GALLERY.map(g => ({ src: g.src, alt: g.alt }))}
      />
    </section>
  )
}

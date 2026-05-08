import type { Metadata } from 'next'
import Image from 'next/image'
import PrivateHireForm from '@/components/forms/PrivateHireForm'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Privatisation — Le Passage Saint-Honoré',
  description: "Réservez l'un de nos espaces privatisables pour votre événement privé ou professionnel au cœur de Paris 1er.",
}

export default function PrivatisationPage() {
  return (
    <>
      <main className="priv-split-page">

        {/* Left — sticky full-height photo */}
        <div className="priv-photo">
          <Image
            src="/images/ambiance/set-tables-row.jpg"
            alt="Salle du Passage Saint-Honoré dressée pour un événement privé"
            fill
            priority
            className="object-cover"
            sizes="60vw"
          />
          <svg className="noise" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
          <div className="priv-testimonial">
            <p className="quote">« Une maison où chaque événement devient un souvenir. L&apos;équipe est aux petits soins — service impeccable, atmosphère unique. »</p>
            <div className="stars">★★★★★</div>
            <p className="author">— Marie L., événement d&apos;entreprise</p>
          </div>
        </div>

        {/* Right — scrollable form column */}
        <div className="priv-form-col" id="devis">
          <h1 className="priv-headline">
            Célébrez votre moment au&nbsp;<span className="ital">Passage Saint-Honoré</span>
          </h1>
          <p className="priv-desc">
            À deux pas des Tuileries, Le Passage Saint-Honoré offre un cadre parisien unique pour vos événements privés. Qu&apos;il s&apos;agisse d&apos;un dîner intimiste, d&apos;un anniversaire ou d&apos;une soirée d&apos;entreprise — notre équipe veille à ce que chaque détail reflète le charme et l&apos;esprit de Paris.
          </p>
          <PrivateHireForm />
        </div>

      </main>
      <Footer />
    </>
  )
}

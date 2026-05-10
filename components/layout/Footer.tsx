import type { SiteSettingsData } from '@/lib/sanity.types'

export default function Footer({ settings }: { settings?: SiteSettingsData | null }) {
  const name = settings?.restaurantName ?? 'Le Passage Saint Honore'
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-mark">
          <span className="script-mark">Le</span>
          <span className="name-mark">{name.replace(/^Le\s+/, '')}</span>
        </div>
        <div style={{ display: 'flex', gap: 32, fontFamily: 'var(--font-sans)', fontSize: 14, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.85, flexWrap: 'wrap' }}>
          <a href="#histoire">Histoire</a>
          <a href="#carte">Carte</a>
          <a href="/privatisation">Privatisation</a>
          <a href="#instagram">Instagram</a>
          <a href="#contact">Réserver</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© MMXXVI · {name}</span>
        <span>Mentions légales · Confidentialité</span>
        <span>Site par Softbird</span>
      </div>
    </footer>
  )
}

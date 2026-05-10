import Image from 'next/image'
import { brand } from '@/lib/brand'
import type { InstagramData, SiteSettingsData } from '@/lib/sanity.types'

export default function InstagramSection({ data, settings }: { data?: InstagramData | null; settings?: SiteSettingsData | null }) {
  const handle = settings?.social?.instagram ?? brand.social.instagram
  const instagramUrl = settings?.social?.instagramUrl ?? brand.social.instagramUrl
  const eyebrow = data?.eyebrow ?? `@${handle}…`
  const heading = data?.heading
  const ctaLabel = data?.ctaLabel ?? 'Nous suivre'
  return (
    <section className="section cream" id="instagram">
      <div className="max">
        <div className="section-num">— 11 / Nous suivre</div>
        <span className="eyebrow" style={{ marginTop: 18 }}>{eyebrow}</span>

        <div className="insta-lead" style={{ marginTop: 32 }}>
          <h2 className="display" data-words-pullup style={{ maxWidth: '14ch' }}>
            {heading ?? <>La&nbsp;vie&nbsp;<span className="ital">au&nbsp;Passage.</span></>}
          </h2>
          <div className="cta-wrap">
            <a className="btn deep-red" href={instagramUrl} target="_blank" rel="noopener noreferrer">
              {ctaLabel} <span className="arrow">↗</span>
            </a>
          </div>
        </div>

        <p className="body-lg" data-anim-para style={{ maxWidth: '62ch', opacity: 0.85, marginBottom: 36 }}>
          Suivez-nous sur <strong>Instagram</strong> pour découvrir les coulisses de la maison, le marché du matin, les nouvelles bouteilles ouvertes le soir et les instants partagés depuis notre coin du premier arrondissement.
        </p>

        <div className="insta-cb" data-card-stagger>
          <a className="insta-cb-card" data-card href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <div className="cover"><Image src="/images/food/burrata-prosciutto-hand.jpg" alt="Salade burrata, jambon de Parme, tomates cœur de bœuf présentée par le serveur" fill className="object-cover" sizes="(max-width:768px) 100vw, 25vw" /></div>
            <div className="meta">
              <div className="recommend">recommandé…</div>
              <div className="caption">La canette aux cerises noires est de retour à la carte ce soir.</div>
              <div className="tags">#lepassage #brasserieparisienne #saisondescerises #paris1</div>
              <div className="chip"><span className="dot">L</span><span className="handle">{handle}</span><span className="check">✓</span></div>
            </div>
          </a>

          <a className="insta-cb-card" data-card href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <div className="cover"><Image src="/images/food/cobb-salad.jpg" alt="Salade Cobb avec poulet pané, avocat, bacon, roquefort et œuf poché" fill className="object-cover" sizes="(max-width:768px) 100vw, 25vw" /></div>
            <div className="meta">
              <div className="recommend">recommandé…</div>
              <div className="caption">07h32 — la maison s'ouvre. Premier café, premier pain.</div>
              <div className="tags">#lepassage #cafedumatin #boulangerie #ruesthonore</div>
              <div className="chip"><span className="dot">L</span><span className="handle">{handle}</span><span className="check">✓</span></div>
            </div>
          </a>

          <a className="insta-cb-card" data-card href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <div className="cover"><Image src="/images/food/table-spread.jpg" alt="Table dressée avec plusieurs assiettes partagées — burrata, salades et frites" fill className="object-cover" sizes="(max-width:768px) 100vw, 25vw" /></div>
            <div className="meta">
              <div className="recommend">recommandé…</div>
              <div className="caption">Quand l'apéro sonne, on descend au Passage. À l'heure bleue.</div>
              <div className="tags">#lepassage #cocktail #aperitif #paris</div>
              <div className="chip"><span className="dot">L</span><span className="handle">{handle}</span><span className="check">✓</span></div>
            </div>
          </a>

          <a className="insta-cb-card" data-card href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <div className="cover"><Image src="/images/food/eggs-benedict-bacon.jpg" alt="Œufs Bénédicte avec bacon fumé, frites maison et cocktails de terrasse" fill className="object-cover" sizes="(max-width:768px) 100vw, 25vw" /></div>
            <div className="meta">
              <div className="recommend">recommandé…</div>
              <div className="caption">Le meilleur plan du dimanche ? Un brunch chez nous, évidemment.</div>
              <div className="tags">#brunch #dimanchegourmand #brasserieparisienne #paris1</div>
              <div className="chip"><span className="dot">L</span><span className="handle">{handle}</span><span className="check">✓</span></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

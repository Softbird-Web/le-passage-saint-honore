import type { TestimonialData } from '@/lib/sanity.types'

const FALLBACK: Array<Pick<TestimonialData, 'quote' | 'name' | 'source' | 'rating'>> = [
  { quote: "Une table qui ne triche pas. Le rapport qualité-prix est honnête, le service attentionné, le calme — précieux.", name: 'Marie-Claire L.', source: 'Le Fooding', rating: 5 },
  { quote: "Le canard cerises noires, à se damner. Et la carte des vins, courte mais d'une intelligence rare.", name: 'Julien M.', source: 'Critique · Paris', rating: 5 },
  { quote: "On y vient pour la salle, on y reste pour la cuisine. Antoine Vasseur a trouvé son écriture.", name: 'Sandrine D.', source: 'Le Figaro', rating: 5 },
  { quote: "Le brunch dominical mérite à lui seul le détour. Réservez la veille — la salle se remplit en un soupir.", name: 'Pierre H.', source: 'Time Out', rating: 5 },
  { quote: "Une lumière qui change avec l'heure, un personnel qui se souvient de votre prénom. Rare.", name: 'Anaïs R.', source: 'Vogue Paris', rating: 5 },
  { quote: "Le passage que tout Paris s'arrache, sans le faire savoir. C'est tout ce qu'on aime.", name: 'Théo B.', source: "L'Express", rating: 5 },
]

export default function TestimonialsSection({ data }: { data?: TestimonialData[] }) {
  const items = (data && data.length > 0) ? data : FALLBACK
  return (
    <section className="section cream testi-wrap">
      <div className="max">
        <div className="section-head">
          <div>
            <div className="section-num">— 09 / On en dit</div>
            <span className="eyebrow" style={{ marginTop: 18 }}>on en dit, on y revient…</span>
            <h2 className="display" data-words-pullup style={{ marginTop: 24 }}>
              La&nbsp;<span className="ital">presse,</span>&nbsp;la&nbsp;salle.
            </h2>
          </div>
        </div>
      </div>

      <div className="testi-row">
        <div className="testi-track">
          {items.map((t, i) => (
            <article key={(('_id' in t && typeof t._id === 'string') ? t._id : null) ?? i} className="testi-card">
              <div className="stars">{'★'.repeat(t.rating ?? 5)}</div>
              <p className="quote">« {t.quote} »</p>
              <div className="author"><span>{t.name}</span><span className="src">{t.source}</span></div>
              <div className="testi-pin">&quot;</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

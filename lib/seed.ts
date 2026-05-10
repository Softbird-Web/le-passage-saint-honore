/**
 * One-time seed script — pushes the current hardcoded homepage content into Sanity.
 *
 * Run with:  npm run seed:sanity
 *
 * Requires SANITY_API_TOKEN in .env.local with Editor (write) permissions.
 * Get a token: https://www.sanity.io/manage/personal/project/4hz3qx1b/api/tokens
 *
 * Idempotent — uses createOrReplace with stable IDs. Re-running overwrites
 * documents back to seed values. Once seeded, the client edits everything
 * via /studio. Delete the token from .env.local after first run.
 */

import { createClient } from '@sanity/client'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { config } from 'dotenv'

config({ path: '.env.local' })

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'
const token = process.env.SANITY_API_TOKEN

if (!projectId) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local')
  process.exit(1)
}
if (!token) {
  console.error(`
Missing SANITY_API_TOKEN in .env.local.

Create one at:
  https://www.sanity.io/manage/personal/project/${projectId}/api/tokens

Choose role: Editor.  Paste it into .env.local as:
  SANITY_API_TOKEN=sk...
`)
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

const PUBLIC_DIR = join(process.cwd(), 'public')

async function uploadImage(relativePath: string): Promise<{ _type: 'image'; asset: { _type: 'reference'; _ref: string } } | null> {
  const fullPath = join(PUBLIC_DIR, relativePath.replace(/^\//, ''))
  try {
    const buf = readFileSync(fullPath)
    const filename = relativePath.split('/').pop() ?? 'image.jpg'
    const asset = await client.assets.upload('image', buf, { filename })
    return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
  } catch (err) {
    console.warn(`  ! could not upload ${relativePath}:`, (err as Error).message)
    return null
  }
}

async function seed() {
  console.log(`\nSeeding Sanity dataset "${dataset}" on project ${projectId}...\n`)

  // ---- Upload images first ----
  console.log('Uploading images...')
  const heroImage = await uploadImage('/images/hero/street-view-trees.jpg')
  const histoireImage = await uploadImage('/images/terrace/terrace-perspective.jpg')
  const environnementImage = await uploadImage('/images/ambiance/bamboo-chairs.jpg')
  const terrasseImage = await uploadImage('/images/terrace/terrace-empty.jpg')
  const brunchImage = await uploadImage('/images/food/eggs-benedict-bacon.jpg')
  const finalCTAImage = await uploadImage('/images/terrace/terrace-waiter.jpg')
  const card1Image = await uploadImage('/images/food/tartare-drinks-bokeh.jpg')
  const card2Image = await uploadImage('/images/food/salmon-salad-menu.jpg')
  const card3Image = await uploadImage('/images/food/pizza-hand.jpg')
  const card4Image = await uploadImage('/images/food/raspberry-tartlets-stand.jpg')
  console.log('  ✓ image uploads complete\n')

  // ---- Singletons ----
  const docs = [
    {
      _id: 'siteSettings',
      _type: 'siteSettings',
      restaurantName: 'Le Passage Saint-Honoré',
      tagline: 'Bistrot parisien · Brunch · Terrasse · Privatisation',
      description: 'Bistrot parisien au cœur de la Place du Marché Saint-Honoré. Cuisine généreuse, brunch le week-end, terrasse emblématique et espaces privatisables.',
      contact: {
        phone: '+33 1 42 96 31 34',
        email: 'lepassage01@gmail.com',
        address: '33 Pl. du Marché Saint-Honoré, 75001 Paris, France',
        googleMapsUrl: 'https://maps.google.com/?q=33+Place+du+Marché+Saint-Honoré+75001+Paris',
        googleMapsEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9982988359!2d2.330167!3d48.865472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2e4e3e3e3e%3A0x0!2s33+Place+du+March%C3%A9+Saint-Honor%C3%A9!5e0!3m2!1sfr!2sfr!4v1000000000000',
      },
      hours: {
        full: 'Tous les jours 6h30 – 2h00',
        brunch: 'Week-end 10h – 15h',
        closedOn: '',
      },
      booking: {
        url: 'https://lepassagesainthonore.fr/fr/booking',
        ctaLabel: 'Réserver une table',
      },
      social: {
        instagram: 'lepassagesthonore',
        instagramUrl: 'https://www.instagram.com/lepassagesthonore',
        facebook: '',
        tripadvisor: '',
      },
    },
    {
      _id: 'heroSection',
      _type: 'heroSection',
      eyebrow: 'une table à Paris…',
      heading: 'Le Passage Saint Honore',
      subheading: '',
      ctaLabel: 'Réserver une table',
      discoverLabel: 'Faites défiler',
      ...(heroImage ? { image: heroImage } : {}),
    },
    {
      _id: 'histoireSection',
      _type: 'histoireSection',
      eyebrow: 'brasserie parisienne…',
      heading: 'Un passage, un refuge.',
      body: [
        { _type: 'block', _key: 'p1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: "Niché entre deux portes cochères du premier arrondissement, Le Passage est né d'une envie simple… retrouver le geste juste, le bois ciré, la nappe blanche et la lumière du soir qui s'attarde sur les verres." }] },
        { _type: 'block', _key: 'p2', style: 'normal', children: [{ _type: 'span', _key: 's2', text: "Ici, la cuisine n'a pas de manifeste. Elle a une mémoire — celle des bistrots de quartier, des plats que l'on partage, des conversations qui débordent jusqu'à minuit." }] },
      ],
      ...(histoireImage ? { image: histoireImage } : {}),
    },
    {
      _id: 'environnementSection',
      _type: 'environnementSection',
      eyebrow: "l'art de la table…",
      heading: 'Au quotidien.',
      body1: "Banquettes de velours, miroirs piqués, comptoir de zinc. Les éléments sont familiers, l'arrangement précis. On y vient pour un café au comptoir, pour un déjeuner de travail, pour le dernier verre — et l'on revient parce qu'on s'y sent attendu.",
      body2: '',
      callouts: [],
      ...(environnementImage ? { image: environnementImage } : {}),
    },
    {
      _id: 'brunchSection',
      _type: 'brunchSection',
      eyebrow: 'au jour le jour…',
      heading: 'Classiques de saison.',
      body: "Une carte courte, une ardoise qui change selon les arrivages du marché Saint-Honoré. Quelques classiques que l'on ne touche pas, et la liberté du chef pour le reste.",
      hoursCallout: 'Samedi & Dimanche · 10h – 15h',
      signatureItems: ['Œufs Bénédicte', 'Pain perdu brioché', 'Salade Cobb', 'Burrata & prosciutto'],
      ctaLabel: 'Réserver',
      menuCtaLabel: 'Voir la carte',
      ...(brunchImage ? { image: brunchImage } : {}),
      menuCards: [
        { _key: 'c1', _type: 'menuCard', label: "l'entrée", name: 'Œuf parfait, jus de cresson', price: '14 €', ...(card1Image ? { image: card1Image } : {}) },
        { _key: 'c2', _type: 'menuCard', label: 'la signature', name: 'Canette rôtie, cerises noires', price: '32 €', ...(card2Image ? { image: card2Image } : {}) },
        { _key: 'c3', _type: 'menuCard', label: 'du marché', name: 'Turbot, beurre noisette', price: '38 €', ...(card3Image ? { image: card3Image } : {}) },
        { _key: 'c4', _type: 'menuCard', label: 'le dessert', name: 'Paris-Brest, praliné maison', price: '12 €', ...(card4Image ? { image: card4Image } : {}) },
      ],
    },
    {
      _id: 'terrasseSection',
      _type: 'terrasseSection',
      eyebrow: 'en plein air…',
      heading: 'Vingt-deux couverts.',
      body: 'Réservation conseillée le week-end. Service continu de 12h à 23h dès les premiers beaux jours.',
      ctaLabel: 'Réserver une table',
      ...(terrasseImage ? { image: terrasseImage } : {}),
    },
    {
      _id: 'privatisationSection',
      _type: 'privatisationSection',
      eyebrow: 'une adresse à vous seul…',
      heading: 'Recevoir, chez nous.',
      body: "Pour un dîner d'entreprise, une présentation presse, un mariage civil ou un anniversaire — la salle entière, la mezzanine, ou simplement notre table d'hôtes.",
      ctaLabel: 'Demander un devis',
    },
    {
      _id: 'playlistSection',
      _type: 'playlistSection',
      eyebrow: 'le son de la maison…',
      heading: 'Une heure douze.',
      body: "Quelques surprises. Idéal entre l'apéritif et le dessert.",
      spotifyUrl: 'https://open.spotify.com/',
    },
    {
      _id: 'instagramSection',
      _type: 'instagramSection',
      eyebrow: '@lepassagesthonore…',
      heading: 'La vie au Passage.',
      curatorId: '',
      ctaLabel: 'Nous suivre',
    },
    {
      _id: 'careersSection',
      _type: 'careersSection',
      eyebrow: 'la maison recrute…',
      heading: 'Une famille, en cuisine.',
      intro: "Rejoignez une équipe passionnée au cœur de Paris. Le Passage Saint-Honoré est un lieu de vie où l'ambiance compte autant que l'assiette.",
      ctaLabel: 'Postuler maintenant',
      perksHeading: 'Avantages',
      perks: ['Repas pris au restaurant', 'Mutuelle prise en charge', '50% transports', 'Ambiance familiale'],
      positions: [
        { _key: 'p1', _type: 'position', title: 'Chef de partie · Garde-manger', type: 'CDI', description: '39h · service du soir' },
        { _key: 'p2', _type: 'position', title: 'Sommelier · Adjoint', type: 'CDI', description: '39h · coupures' },
        { _key: 'p3', _type: 'position', title: 'Chef de rang', type: 'CDI', description: '35h · soir et week-end' },
        { _key: 'p4', _type: 'position', title: 'Pâtissier·ère', type: 'CDI', description: '39h · 6h — 14h' },
        { _key: 'p5', _type: 'position', title: 'Candidature spontanée', type: '', description: "toutes brigades · toute l'année" },
      ],
    },
    {
      _id: 'finalCTASection',
      _type: 'finalCTASection',
      eyebrow: 'à ce soir, peut-être ?',
      heading: 'Le Passage vous attend.',
      body: '',
      ctaLabel: 'Réserver une table',
      ...(finalCTAImage ? { image: finalCTAImage } : {}),
    },
  ]

  // ---- Testimonials (collection) ----
  const testimonials = [
    { _id: 'testimonial.marie-claire-l', quote: "Une table qui ne triche pas. Le rapport qualité-prix est honnête, le service attentionné, le calme — précieux.", name: 'Marie-Claire L.', source: 'Le Fooding', rating: 5, order: 1 },
    { _id: 'testimonial.julien-m', quote: "Le canard cerises noires, à se damner. Et la carte des vins, courte mais d'une intelligence rare.", name: 'Julien M.', source: 'Critique · Paris', rating: 5, order: 2 },
    { _id: 'testimonial.sandrine-d', quote: "On y vient pour la salle, on y reste pour la cuisine. Antoine Vasseur a trouvé son écriture.", name: 'Sandrine D.', source: 'Le Figaro', rating: 5, order: 3 },
    { _id: 'testimonial.pierre-h', quote: "Le brunch dominical mérite à lui seul le détour. Réservez la veille — la salle se remplit en un soupir.", name: 'Pierre H.', source: 'Time Out', rating: 5, order: 4 },
    { _id: 'testimonial.anais-r', quote: "Une lumière qui change avec l'heure, un personnel qui se souvient de votre prénom. Rare.", name: 'Anaïs R.', source: 'Vogue Paris', rating: 5, order: 5 },
    { _id: 'testimonial.theo-b', quote: "Le passage que tout Paris s'arrache, sans le faire savoir. C'est tout ce qu'on aime.", name: 'Théo B.', source: "L'Express", rating: 5, order: 6 },
  ].map((t) => ({ ...t, _type: 'testimonial' }))

  // ---- Write all ----
  console.log('Creating documents...')
  for (const doc of [...docs, ...testimonials]) {
    await client.createOrReplace(doc)
    console.log(`  ✓ ${doc._id}`)
  }

  console.log(`\nDone. Open Studio: http://localhost:3000/studio`)
}

seed().catch((err) => {
  console.error('\nSeed failed:', err)
  process.exit(1)
})

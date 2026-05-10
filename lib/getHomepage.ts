import { client } from './sanity'
import type {
  SiteSettingsData, HeroData, BrunchData, TerrasseData, HistoireData,
  EnvironnementData, PrivatisationData, PlaylistData, InstagramData,
  CareersData, FinalCTAData, TestimonialData, GalleryImageData, PrivateRoomData,
} from './sanity.types'

export interface HomepageData {
  siteSettings: SiteSettingsData | null
  hero: HeroData | null
  brunch: BrunchData | null
  terrasse: TerrasseData | null
  histoire: HistoireData | null
  environnement: EnvironnementData | null
  privatisation: PrivatisationData | null
  playlist: PlaylistData | null
  instagram: InstagramData | null
  careers: CareersData | null
  finalCTA: FinalCTAData | null
  testimonials: TestimonialData[]
  galleryImages: GalleryImageData[]
  privateRooms: PrivateRoomData[]
}

const HOMEPAGE_QUERY = `{
  "siteSettings": *[_type == "siteSettings"][0]{
    restaurantName, tagline, description,
    contact{phone, email, address, googleMapsUrl, googleMapsEmbedSrc},
    hours{full, brunch, closedOn},
    booking{url, ctaLabel},
    social{instagram, instagramUrl, facebook, tripadvisor}
  },
  "hero": *[_type == "heroSection"][0]{
    eyebrow, heading, subheading, ctaLabel, discoverLabel,
    image{asset, hotspot, crop}
  },
  "brunch": *[_type == "brunchSection"][0]{
    eyebrow, heading, body, hoursCallout, signatureItems, ctaLabel, menuCtaLabel,
    image{asset, hotspot, crop},
    menuCards[]{label, name, price, image{asset, hotspot, crop}}
  },
  "terrasse": *[_type == "terrasseSection"][0]{
    eyebrow, heading, body, ctaLabel,
    image{asset, hotspot, crop}
  },
  "histoire": *[_type == "histoireSection"][0]{
    eyebrow, heading, body,
    image{asset, hotspot, crop}
  },
  "environnement": *[_type == "environnementSection"][0]{
    eyebrow, heading, body1, body2, callouts,
    image{asset, hotspot, crop}
  },
  "privatisation": *[_type == "privatisationSection"][0]{
    eyebrow, heading, body, ctaLabel
  },
  "playlist": *[_type == "playlistSection"][0]{
    eyebrow, heading, body, spotifyUrl
  },
  "instagram": *[_type == "instagramSection"][0]{
    eyebrow, heading, curatorId, ctaLabel
  },
  "careers": *[_type == "careersSection"][0]{
    eyebrow, heading, intro, ctaLabel, perksHeading, perks, positions
  },
  "finalCTA": *[_type == "finalCTASection"][0]{
    eyebrow, heading, body, ctaLabel,
    image{asset, hotspot, crop}
  },
  "testimonials": *[_type == "testimonial"] | order(order asc){
    _id, quote, name, source, rating
  },
  "galleryImages": *[_type == "galleryImage"] | order(order asc){
    _id, alt, category,
    image{asset, hotspot, crop}
  },
  "privateRooms": *[_type == "privateRoom"] | order(order asc){
    _id, name, description, capacitySeated, capacityStanding,
    image{asset, hotspot, crop}
  }
}`

const EMPTY: HomepageData = {
  siteSettings: null, hero: null, brunch: null, terrasse: null, histoire: null,
  environnement: null, privatisation: null, playlist: null, instagram: null,
  careers: null, finalCTA: null,
  testimonials: [], galleryImages: [], privateRooms: [],
}

export async function getHomepage(): Promise<HomepageData> {
  if (!client) return EMPTY
  try {
    const data = await client.fetch<HomepageData>(HOMEPAGE_QUERY, {}, {
      next: { revalidate: 60, tags: ['homepage'] },
    })
    return {
      ...EMPTY,
      ...data,
      testimonials: data?.testimonials ?? [],
      galleryImages: data?.galleryImages ?? [],
      privateRooms: data?.privateRooms ?? [],
    }
  } catch (err) {
    console.error('[sanity] getHomepage failed, falling back to hardcoded content:', err)
    return EMPTY
  }
}

export async function getSiteSettings(): Promise<SiteSettingsData | null> {
  if (!client) return null
  try {
    return await client.fetch<SiteSettingsData | null>(
      `*[_type == "siteSettings"][0]{
        restaurantName, tagline, description,
        contact{phone, email, address, googleMapsUrl, googleMapsEmbedSrc},
        hours{full, brunch, closedOn},
        booking{url, ctaLabel},
        social{instagram, instagramUrl, facebook, tripadvisor}
      }`,
      {},
      { next: { revalidate: 60, tags: ['siteSettings'] } },
    )
  } catch (err) {
    console.error('[sanity] getSiteSettings failed:', err)
    return null
  }
}

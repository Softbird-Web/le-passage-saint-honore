import type { SanityImageSource } from '@sanity/image-url'

export type { SanityImageSource }

export interface SanityImage {
  asset: { _ref: string; _type: string }
  hotspot?: { x: number; y: number; width: number; height: number }
  crop?: { top: number; bottom: number; left: number; right: number }
}

export interface SiteSettingsData {
  restaurantName: string
  tagline: string
  description: string
  contact: {
    phone: string
    email: string
    address: string
    googleMapsUrl: string
    googleMapsEmbedSrc: string
  }
  hours: { full: string; brunch: string; closedOn: string }
  booking: { url: string; ctaLabel: string }
  social: { instagram: string; instagramUrl: string; facebook: string; tripadvisor: string }
}

export interface HeroData {
  eyebrow: string
  heading: string
  subheading: string
  ctaLabel: string
  discoverLabel: string
  image: SanityImage
}

export interface MenuCardData {
  label?: string
  name: string
  price?: string
  image?: SanityImage
}

export interface BrunchData {
  eyebrow: string
  heading: string
  body: string
  hoursCallout: string
  signatureItems: string[]
  ctaLabel: string
  menuCtaLabel: string
  image: SanityImage
  menuCards?: MenuCardData[]
}

export interface TerrasseData {
  eyebrow: string
  heading: string
  body: string
  ctaLabel: string
  image: SanityImage
}

export interface HistoireData {
  eyebrow: string
  heading: string
  body: Array<{ _type: string; children: Array<{ text: string }> }>
  image: SanityImage
}

export interface EnvironnementData {
  eyebrow: string
  heading: string
  body1: string
  body2: string
  callouts: Array<{ value: string; label: string }>
  image: SanityImage
}

export interface PrivatisationData {
  eyebrow: string
  heading: string
  body: string
  ctaLabel: string
}

export interface PlaylistData {
  eyebrow: string
  heading: string
  body: string
  spotifyUrl: string
}

export interface InstagramData {
  eyebrow: string
  heading: string
  curatorId: string
  ctaLabel: string
}

export interface PositionData {
  title: string
  type?: string
  description?: string
}

export interface CareersData {
  eyebrow: string
  heading: string
  intro: string
  ctaLabel: string
  perksHeading: string
  perks: string[]
  positions?: PositionData[]
}

export interface FinalCTAData {
  eyebrow: string
  heading: string
  body: string
  ctaLabel: string
  image: SanityImage
}

export interface TestimonialData {
  _id: string
  quote: string
  name: string
  source: string
  rating: number
}

export interface GalleryImageData {
  _id: string
  alt: string
  category: string
  image: SanityImage
}

export interface PrivateRoomData {
  _id: string
  name: string
  description: string
  capacitySeated: number
  capacityStanding: number
  image: SanityImage
}

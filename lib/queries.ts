// GROQ queries — one per Sanity document type
// All image fields return { asset: { _ref } } — use urlFor() from lib/sanity.ts

export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    restaurantName, tagline, description,
    contact { phone, email, address, googleMapsUrl, googleMapsEmbedSrc },
    hours { full, brunch, closedOn },
    booking { url, ctaLabel },
    social { instagram, instagramUrl, facebook, tripadvisor }
  }
`

export const HERO_QUERY = `
  *[_type == "heroSection"][0] {
    eyebrow, heading, subheading, ctaLabel, discoverLabel,
    image { asset, hotspot, crop }
  }
`

export const BRUNCH_QUERY = `
  *[_type == "brunchSection"][0] {
    eyebrow, heading, body, hoursCallout, signatureItems, ctaLabel, menuCtaLabel,
    image { asset, hotspot, crop }
  }
`

export const TERRASSE_QUERY = `
  *[_type == "terrasseSection"][0] {
    eyebrow, heading, body, ctaLabel,
    image { asset, hotspot, crop }
  }
`

export const HISTOIRE_QUERY = `
  *[_type == "histoireSection"][0] {
    eyebrow, heading, body,
    image { asset, hotspot, crop }
  }
`

export const ENVIRONNEMENT_QUERY = `
  *[_type == "environnementSection"][0] {
    eyebrow, heading, body1, body2, callouts,
    image { asset, hotspot, crop }
  }
`

export const PRIVATISATION_QUERY = `
  *[_type == "privatisationSection"][0] {
    eyebrow, heading, body, ctaLabel
  }
`

export const PLAYLIST_QUERY = `
  *[_type == "playlistSection"][0] {
    eyebrow, heading, body, spotifyUrl
  }
`

export const INSTAGRAM_QUERY = `
  *[_type == "instagramSection"][0] {
    eyebrow, heading, curatorId, ctaLabel
  }
`

export const CAREERS_QUERY = `
  *[_type == "careersSection"][0] {
    eyebrow, heading, intro, ctaLabel, perksHeading, perks
  }
`

export const FINAL_CTA_QUERY = `
  *[_type == "finalCTASection"][0] {
    eyebrow, heading, body, ctaLabel,
    image { asset, hotspot, crop }
  }
`

export const TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] | order(order asc) {
    _id, quote, name, source, rating
  }
`

export const GALLERY_QUERY = `
  *[_type == "galleryImage"] | order(order asc) {
    _id, alt, category,
    image { asset, hotspot, crop }
  }
`

export const ROOMS_QUERY = `
  *[_type == "privateRoom"] | order(order asc) {
    _id, name, description, capacitySeated, capacityStanding,
    image { asset, hotspot, crop }
  }
`

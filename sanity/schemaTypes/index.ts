import { siteSettings } from './siteSettings'
import { heroSection } from './heroSection'
import { brunchSection } from './brunchSection'
import { terrasseSection } from './terrasseSection'
import { histoireSection } from './histoireSection'
import { environnementSection } from './environnementSection'
import { privatisationSection } from './privatisationSection'
import { playlistSection } from './playlistSection'
import { instagramSection } from './instagramSection'
import { careersSection } from './careersSection'
import { finalCTASection } from './finalCTASection'
import { testimonial } from './testimonial'
import { galleryImage } from './galleryImage'
import { privateRoom } from './privateRoom'

export const schemaTypes = [
  // Singletons (one document per site)
  siteSettings,
  heroSection,
  brunchSection,
  terrasseSection,
  histoireSection,
  environnementSection,
  privatisationSection,
  playlistSection,
  instagramSection,
  careersSection,
  finalCTASection,
  // Arrays (multiple documents)
  testimonial,
  galleryImage,
  privateRoom,
]

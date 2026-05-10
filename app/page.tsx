import HeroSection from '@/components/sections/HeroSection'
import HistoireSection from '@/components/sections/HistoireSection'
import EnvironnementSection from '@/components/sections/EnvironnementSection'
import MenuShowcaseSection from '@/components/sections/MenuShowcaseSection'
import TerrasseSection from '@/components/sections/TerrasseSection'
import InfiniteScrollBanner from '@/components/sections/InfiniteScrollBanner'
import BrunchSection from '@/components/sections/BrunchSection'
import PrivatisationTeaser from '@/components/sections/PrivatisationTeaser'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import PlaylistSection from '@/components/sections/PlaylistSection'
import InstagramSection from '@/components/sections/InstagramSection'
import CareersSection from '@/components/sections/CareersSection'
import ContactSection from '@/components/sections/ContactSection'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/layout/Footer'
import { getHomepage } from '@/lib/getHomepage'

export const revalidate = 60

export default async function HomePage() {
  const data = await getHomepage()
  return (
    <main className="page">
      <HeroSection data={data.hero} settings={data.siteSettings} />
      <HistoireSection data={data.histoire} />
      <EnvironnementSection data={data.environnement} />
      <MenuShowcaseSection />
      <TerrasseSection data={data.terrasse} />
      <InfiniteScrollBanner />
      <BrunchSection data={data.brunch} />
      <PrivatisationTeaser data={data.privatisation} rooms={data.privateRooms} />
      <TestimonialsSection data={data.testimonials} />
      <PlaylistSection data={data.playlist} />
      <InstagramSection data={data.instagram} settings={data.siteSettings} />
      <CareersSection data={data.careers} />
      <ContactSection settings={data.siteSettings} />
      <FinalCTA data={data.finalCTA} settings={data.siteSettings} />
      <Footer settings={data.siteSettings} />
    </main>
  )
}

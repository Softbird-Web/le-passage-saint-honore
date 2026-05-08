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

export default function HomePage() {
  return (
    <main className="page">
      <HeroSection />
      <HistoireSection />
      <EnvironnementSection />
      <MenuShowcaseSection />
      <TerrasseSection />
      <InfiniteScrollBanner />
      <BrunchSection />
      <PrivatisationTeaser />
      <TestimonialsSection />
      <PlaylistSection />
      <InstagramSection />
      <CareersSection />
      <ContactSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}

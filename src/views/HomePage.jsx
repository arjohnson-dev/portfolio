import ContactSection from '../components/ContactSection.jsx'
import FaqSection from '../components/FaqSection.jsx'
import HeroSection from '../components/HeroSection.jsx'
import Navigation from '../components/Navigation.jsx'
import PricingSection from '../components/PricingSection.jsx'
import ProcessSection from '../components/ProcessSection.jsx'
import ServicesSection from '../components/ServicesSection.jsx'
import SiteFooter from '../components/SiteFooter.jsx'

function HomePage() {
  return (
    <div className="page-shell">
      <Navigation page="home" />
      <main>
        <HeroSection />
        <ProcessSection />
        <ServicesSection />
        <PricingSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter page="home" />
    </div>
  )
}

export default HomePage

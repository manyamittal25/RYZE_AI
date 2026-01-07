import Header from '../components/Header'
import Hero from '../components/Hero'
import PartnerLogos from '../components/PartnerLogos'
import ProductShowcase from '../components/ProductShowcase'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'
import WallOfLove from '../components/WallOfLove'
import Pricing from '../components/Pricing'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PartnerLogos />
        <ProductShowcase />
        <HowItWorks />
        <Features />
        <WallOfLove />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage


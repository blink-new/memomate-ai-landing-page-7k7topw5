import SimpleParticleField from '../components/SimpleParticleField'
import FloatingNavigation from '../components/FloatingNavigation'
import HeroSection from '../components/HeroSection'
import OrbitingFeatures from '../components/OrbitingFeatures'
import AITechSection from '../components/AITechSection'
import CTASection from '../components/CTASection'
import FuturisticFooter from '../components/FuturisticFooter'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Particle Field Background - Lowest layer */}
      <div className="fixed inset-0 z-0">
        <SimpleParticleField />
      </div>
      
      {/* Floating Navigation - Top layer */}
      <div className="relative z-50">
        <FloatingNavigation />
      </div>
      
      {/* Main Content - Middle layer with proper spacing */}
      <main className="relative z-10">
        {/* Hero Section with AI Brain Pulse */}
        <div className="pt-20 sm:pt-24 pb-8 sm:pb-12">
          <HeroSection />
        </div>
        
        {/* Orbiting Features Section */}
        <div className="py-12 sm:py-16 lg:py-20">
          <OrbitingFeatures />
        </div>
        
        {/* AI Tech Section */}
        <div className="py-10 sm:py-12 lg:py-16">
          <AITechSection />
        </div>
        
        {/* Call to Action Section */}
        <div className="py-12 sm:py-16 lg:py-20">
          <CTASection />
        </div>
      </main>

      {/* Futuristic Footer */}
      <div className="relative z-20">
        <FuturisticFooter />
      </div>
    </div>
  )
}
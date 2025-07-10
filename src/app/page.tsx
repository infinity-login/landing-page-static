import Header from '@/components/Header'
import Hero from '@/components/Hero'
import VideoSection from '@/components/VideoSection'
import Features from '@/components/Features'
import Benefits from '@/components/Benefits'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero showVideoButton={true} />
      <VideoSection />
      <Features />
      <Benefits />
      <FAQ />
      <Footer />
    </div>
  )
} 
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
const VideoSection = dynamic(() => import('@/components/VideoSection'), { ssr: false })
const Features = dynamic(() => import('@/components/Features'))
const Benefits = dynamic(() => import('@/components/Benefits'))
const FAQ = dynamic(() => import('@/components/FAQ'))
const Footer = dynamic(() => import('@/components/Footer'))

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
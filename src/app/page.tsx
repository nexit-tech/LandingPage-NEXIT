import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Methodology from '@/components/Methodology/Methodology'
import Portfolio from '@/components/Portfolio/Portfolio'
import CTASection from '@/components/CTASection/CTASection'
import Footer from '@/components/Footer/Footer'
import CustomCursor from '@/components/CustomCursor/CustomCursor'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main>
        {/* Navegação */}
        <Navbar />

        {/* Seção Hero */}
        <Hero />

        {/* Seção Metodologia */}
        <Methodology />

        {/* Seção Portfólio */}
        <Portfolio />

        {/* Seção CTA Final */}
        <CTASection />

        {/* Rodapé */}
        <Footer />
      </main>
    </>
  )
}
'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function BackgroundMorph() {
  const [currentBg, setCurrentBg] = useState('#FFFFFF')
  const pathname = usePathname()

  useEffect(() => {
    // NÃO EXECUTA NO LEAD-CAPTURE
    if (pathname === '/lead-capture') {
      // Garante que o background seja branco/padrão
      document.body.style.backgroundColor = '#FAFAFA'
      document.body.classList.remove('dark-theme')
      return
    }

    const sections = [
      { id: 'hero', color: '#FFFFFF', theme: 'light' },
      { id: 'metodologia', color: '#F5F5F5', theme: 'light' },
      { id: 'portfolio', color: '#FFFFFF', theme: 'light' },
      { id: 'cta-section', color: '#1A1A1A', theme: 'dark' },
      { id: 'contato', color: '#FFFFFF', theme: 'light' },
    ]

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      const portfolioSection = document.getElementById('portfolio')
      const footerContent = document.querySelector('.footer-content') as HTMLElement | null

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            if (currentBg !== section.color) {
              setCurrentBg(section.color)
              document.body.style.backgroundColor = section.color
              
              if (section.theme === 'dark') {
                document.body.classList.add('dark-theme')
                
                if (portfolioSection) {
                  portfolioSection.style.opacity = '0'
                  portfolioSection.style.pointerEvents = 'none'
                }
                
                if (footerContent) {
                  footerContent.style.opacity = '0'
                  footerContent.style.pointerEvents = 'none'
                }
              } else {
                document.body.classList.remove('dark-theme')
                
                if (portfolioSection) {
                  portfolioSection.style.opacity = '1'
                  portfolioSection.style.pointerEvents = 'auto'
                }
                
                if (footerContent) {
                  footerContent.style.opacity = '1'
                  footerContent.style.pointerEvents = 'auto'
                }
              }
            }
            break
          }
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [currentBg, pathname])

  return null
}
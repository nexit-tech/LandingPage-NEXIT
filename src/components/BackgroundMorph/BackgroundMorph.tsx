'use client'

import { useEffect, useState } from 'react'

export default function BackgroundMorph() {
  const [currentBg, setCurrentBg] = useState('#FFFFFF')

  useEffect(() => {
    // Mapeamento de seções e suas cores
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
              
              // Adiciona classe de tema ao body
              if (section.theme === 'dark') {
                document.body.classList.add('dark-theme')
                
                // Esconde o portfolio quando na seção dark
                if (portfolioSection) {
                  portfolioSection.style.opacity = '0'
                  portfolioSection.style.pointerEvents = 'none'
                }
                
                // Esconde APENAS o conteúdo do footer (não a borda)
                if (footerContent) {
                  footerContent.style.opacity = '0'
                  footerContent.style.pointerEvents = 'none'
                }
              } else {
                document.body.classList.remove('dark-theme')
                
                // Mostra o portfolio quando NÃO está na seção dark
                if (portfolioSection) {
                  portfolioSection.style.opacity = '1'
                  portfolioSection.style.pointerEvents = 'auto'
                }
                
                // Mostra o conteúdo do footer quando NÃO está na seção dark
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

    // Define cor inicial
    handleScroll()

    // Adiciona listener de scroll
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [currentBg])

  return null
}
'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero')
      const ctaSection = document.getElementById('cta-section')
      
      // Detecta se saiu do Hero
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect()
        const heroBottom = heroRect.bottom
        
        // Navbar aparece quando sair do Hero
        if (heroBottom <= 100) {
          if (!isVisible) {
            setIsVisible(true)
            // Animação de entrada com GSAP
            gsap.fromTo(
              navRef.current,
              {
                y: -100,
                opacity: 0
              },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power3.out'
              }
            )
          }
        } else {
          if (isVisible) {
            setIsVisible(false)
            // Animação de saída com GSAP
            gsap.to(navRef.current, {
              y: -100,
              opacity: 0,
              duration: 0.4,
              ease: 'power2.in'
            })
          }
        }
      }
      
      // Detecta tema dark
      if (ctaSection) {
        const rect = ctaSection.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          setIsDark(true)
        } else {
          setIsDark(false)
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isVisible])

  return (
    <>
      <nav 
        ref={navRef}
        className={`${styles.navbar} ${isDark ? styles.dark : ''} ${!isVisible ? styles.hidden : ''}`}
      >
        <div className={styles.container}>
          <ul className={styles.menu}>
            <li>
              <a href="#metodologia" className={styles.menuLink}>
                Metodologia
              </a>
            </li>
            <li>
              <a href="#portfolio" className={styles.menuLink}>
                Portfólio
              </a>
            </li>
            <li>
              <a href="#contato" className={styles.menuLink}>
                Contato
              </a>
            </li>
          </ul>

          <button 
            className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className={`${styles.mobileMenu} ${isDark ? styles.dark : ''}`}>
          <ul className={styles.mobileMenuList}>
            <li>
              <a href="#metodologia" className={styles.mobileMenuLink} onClick={closeMenu}>
                Metodologia
              </a>
            </li>
            <li>
              <a href="#portfolio" className={styles.mobileMenuLink} onClick={closeMenu}>
                Portfólio
              </a>
            </li>
            <li>
              <a href="#contato" className={styles.mobileMenuLink} onClick={closeMenu}>
                Contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
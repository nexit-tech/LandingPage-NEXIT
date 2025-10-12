'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { HiArrowRight, HiChevronDown } from 'react-icons/hi2'
import gsap from 'gsap'
import SoftwareTag from '@/components/SoftwareTag/SoftwareTag'
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal'
import styles from './Hero.module.css'

export default function Hero() {
  const primaryBtnRef = useRef<HTMLAnchorElement>(null)
  const secondaryBtnRef = useRef<HTMLAnchorElement>(null)

  // ========================================
  // ANIMAÇÃO BOTÃO PRIMÁRIO - Tech Scan
  // ========================================
  const handlePrimaryHover = (entering: boolean) => {
    const btn = primaryBtnRef.current
    if (!btn) return

    const icon = btn.querySelector(`.${styles.ctaIcon}`)

    if (entering) {
      gsap.to(btn, {
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.1)',
        duration: 0.3,
        ease: 'power2.out'
      })

      gsap.to(icon, {
        x: 4,
        scale: 1.1,
        duration: 0.3,
        ease: 'back.out(2)',
        onComplete: () => {
          gsap.to(icon, {
            x: 8,
            duration: 0.4,
            ease: 'power1.inOut',
            repeat: -1,
            yoyo: true
          })
        }
      })

      const text = btn.querySelector('span')
      if (text) {
        gsap.to(text, {
          letterSpacing: '0.8px',
          duration: 0.3,
          ease: 'power2.out'
        })
      }
    } else {
      gsap.killTweensOf([btn, icon])
      
      gsap.to(btn, {
        boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
        duration: 0.3,
        ease: 'power2.out'
      })

      gsap.to(icon, {
        x: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      })

      const text = btn.querySelector('span')
      if (text) {
        gsap.to(text, {
          letterSpacing: '0.5px',
          duration: 0.3,
          ease: 'power2.out'
        })
      }
    }
  }

  // ========================================
  // ANIMAÇÃO BOTÃO SECUNDÁRIO - SEM AJUSTE DE TEXTO
  // ========================================
  const handleSecondaryHover = (entering: boolean) => {
    const btn = secondaryBtnRef.current
    if (!btn) return

    const icon = btn.querySelector(`.${styles.ctaIcon}`)

    if (entering) {
      // APENAS ícone - rotação e bounce
      gsap.to(icon, {
        rotation: 180,
        y: 3,
        scale: 1.1,
        duration: 0.5,
        ease: 'back.out(2)'
      })

      // Borda - pulsa suavemente
      gsap.to(btn, {
        borderColor: '#000000',
        borderWidth: '2.5px',
        duration: 0.3,
        ease: 'power2.out'
      })

      // Shadow pulsa
      gsap.to(btn, {
        boxShadow: '0 0 0 4px rgba(26, 26, 26, 0.1)',
        duration: 0.4,
        ease: 'power2.out'
      })

    } else {
      gsap.killTweensOf([icon, btn])
      
      gsap.to(icon, {
        rotation: 0,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      })

      gsap.to(btn, {
        borderColor: '#1A1A1A',
        borderWidth: '2px',
        boxShadow: '0 0 0 0 rgba(26, 26, 26, 0)',
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }

  // ========================================
  // ANIMAÇÃO NO CLICK - Feedback Visual
  // ========================================
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, isPrimary: boolean) => {
    const btn = e.currentTarget

    // Ripple effect
    const ripple = document.createElement('span')
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: ${isPrimary ? 'rgba(255, 255, 255, 0.4)' : 'rgba(26, 26, 26, 0.4)'};
      width: 0;
      height: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
    `
    btn.appendChild(ripple)

    gsap.to(ripple, {
      width: 300,
      height: 300,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      onComplete: () => ripple.remove()
    })

    // Shake micro
    gsap.to(btn, {
      scale: 0.95,
      duration: 0.1,
      ease: 'power2.out',
      onComplete: () => {
        gsap.to(btn, {
          scale: 1,
          duration: 0.2,
          ease: 'back.out(3)'
        })
      }
    })
  }

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <ScrollReveal direction="fade" delay={100}>
            <SoftwareTag />
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={200}>
            <h1 className={styles.headline}>
              Sua Próxima Saída Para Automação Inteligente
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={300}>
            <p className={styles.subheadline}>
              Transformamos processos complexos em fluxos automatizados que escalam seu negócio. 
              Soluções personalizadas que entregam resultados mensuráveis desde o primeiro dia.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400}>
            <div className={styles.ctaGroup}>
              <Link 
                ref={primaryBtnRef}
                href="/lead-capture" 
                className={styles.primaryCta}
                onMouseEnter={() => handlePrimaryHover(true)}
                onMouseLeave={() => handlePrimaryHover(false)}
                onClick={(e) => handleClick(e, true)}
              >
                <span>Comece Sua Transformação</span>
                <HiArrowRight className={styles.ctaIcon} />
              </Link>
              
              <a 
                ref={secondaryBtnRef}
                href="#metodologia" 
                className={styles.secondaryCta}
                onMouseEnter={() => handleSecondaryHover(true)}
                onMouseLeave={() => handleSecondaryHover(false)}
                onClick={(e) => handleClick(e, false)}
              >
                <span>Conheça Nossa Metodologia</span>
                <HiChevronDown className={styles.ctaIcon} />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="fade" delay={600}>
            <div className={styles.scrollIndicator}>
              <span className={styles.scrollText}>Role para descobrir</span>
              <div className={styles.scrollLine}></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
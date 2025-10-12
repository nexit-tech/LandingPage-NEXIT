'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi2'
import gsap from 'gsap'
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal'
import styles from './CTASection.module.css'

export default function CTASection() {
  const ctaBtnRef = useRef<HTMLAnchorElement>(null)

  // ========================================
  // ANIMAÇÃO DO BOTÃO - Tech Hover
  // ========================================
  const handleButtonHover = (entering: boolean) => {
    const btn = ctaBtnRef.current
    if (!btn) return

    const icon = btn.querySelector(`.${styles.ctaIcon}`)
    const text = btn.querySelector('span')

    if (entering) {
      // Botão - pulsa levemente
      gsap.to(btn, {
        scale: 1.02,
        boxShadow: '0 12px 32px rgba(255, 255, 255, 0.25)',
        duration: 0.3,
        ease: 'power2.out'
      })

      // Ícone - movimento contínuo
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

      // Texto - expande
      if (text) {
        gsap.to(text, {
          letterSpacing: '0.8px',
          duration: 0.3,
          ease: 'power2.out'
        })
      }

      // Borda - pulsa
      gsap.to(btn, {
        borderWidth: '3px',
        duration: 0.3,
        ease: 'power2.out'
      })

    } else {
      // Reset
      gsap.killTweensOf([btn, icon, text])
      
      gsap.to(btn, {
        scale: 1,
        boxShadow: '0 0 0 rgba(255, 255, 255, 0)',
        borderWidth: '2px',
        duration: 0.3,
        ease: 'power2.out'
      })

      gsap.to(icon, {
        x: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      })

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
  // ANIMAÇÃO NO CLICK - Ripple Effect
  // ========================================
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = e.currentTarget

    // Ripple effect
    const ripple = document.createElement('span')
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(26, 26, 26, 0.4);
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

    // Shake
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
    <section id="cta-section" className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <ScrollReveal direction="up" delay={100}>
            <h2 className={styles.title}>
              PRONTO PARA SUA PRÓXIMA SAÍDA?
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p className={styles.description}>
              Agende uma conversa estratégica sem compromisso. Vamos analisar seu cenário 
              e apresentar um roadmap personalizado de automação.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <Link 
              ref={ctaBtnRef}
              href="/lead-capture" 
              className={styles.ctaButton}
              onMouseEnter={() => handleButtonHover(true)}
              onMouseLeave={() => handleButtonHover(false)}
              onClick={handleClick}
            >
              <span>Iniciar o processo</span>
              <HiArrowRight className={styles.ctaIcon} />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
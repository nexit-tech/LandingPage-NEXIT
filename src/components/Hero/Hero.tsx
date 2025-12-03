'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { HiArrowRight, HiChatBubbleLeftRight } from 'react-icons/hi2' // Novo ícone
import gsap from 'gsap'
import SoftwareTag from '@/components/SoftwareTag/SoftwareTag'
import styles from './Hero.module.css'

export default function Hero() {
  const primaryBtnRef = useRef<HTMLAnchorElement>(null)
  const secondaryBtnRef = useRef<HTMLAnchorElement>(null) // Mudou para Link, mas a ref funciona igual
  const tagRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subheadlineRef = useRef<HTMLParagraphElement>(null)
  const ctaGroupRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const yOffset = isMobile ? 30 : 50

    gsap.set([tagRef.current, headlineRef.current, subheadlineRef.current, ctaGroupRef.current, scrollIndicatorRef.current], {
      opacity: 0,
      y: yOffset
    })

    const tl = gsap.timeline({ delay: 0.2 })

    tl.to(tagRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
    .to(headlineRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.6')
    .to(subheadlineRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.6')
    .to(ctaGroupRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.6')
    .to(scrollIndicatorRef.current, {
      opacity: 0.6,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.4')
  }, [])

  // ... (Mantenha a função handlePrimaryHover igual)

  const handleSecondaryHover = (entering: boolean) => {
    const btn = secondaryBtnRef.current
    if (!btn) return

    const icon = btn.querySelector(`.${styles.ctaIcon}`)

    if (entering) {
      // Pequena rotação no ícone de chat
      gsap.to(icon, {
        scale: 1.1,
        rotation: 15, 
        duration: 0.4,
        ease: 'back.out(2)'
      })

      gsap.to(btn, {
        borderColor: '#000000',
        borderWidth: '2.5px',
        duration: 0.3,
        ease: 'power2.out'
      })

      gsap.to(btn, {
        boxShadow: '0 0 0 4px rgba(26, 26, 26, 0.1)',
        duration: 0.4,
        ease: 'power2.out'
      })

    } else {
      gsap.killTweensOf([icon, btn])
      
      gsap.to(icon, {
        scale: 1,
        rotation: 0,
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

  // ... (Mantenha a função handleClick igual)

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div ref={tagRef}>
            <SoftwareTag />
          </div>
          
          <h1 ref={headlineRef} className={styles.headline}>
            Sua Próxima Saída Para Automação Inteligente
          </h1>
          
          <p ref={subheadlineRef} className={styles.subheadline}>
            Transformamos processos complexos em fluxos automatizados que escalam seu negócio. 
            Soluções personalizadas que entregam resultados mensuráveis desde o primeiro dia.
          </p>

          <div ref={ctaGroupRef} className={styles.ctaGroup}>
            <Link 
              ref={primaryBtnRef}
              href="/lead-capture" 
              className={styles.primaryCta}
              // ... handlers mantidos
            >
              <span>Comece Sua Transformação</span>
              <HiArrowRight className={styles.ctaIcon} />
            </Link>
            
            {/* ALTERAÇÃO AQUI: Botão para o NEX */}
            <Link 
              ref={secondaryBtnRef}
              href="/nex-chat" 
              className={styles.secondaryCta}
              onMouseEnter={() => handleSecondaryHover(true)}
              onMouseLeave={() => handleSecondaryHover(false)}
              // ... onClick mantido se necessário ou removido se usar Link direto
            >
              <span>Fale com NEX</span>
              <HiChatBubbleLeftRight className={styles.ctaIcon} />
            </Link>
          </div>

          <div ref={scrollIndicatorRef} className={styles.scrollIndicator}>
            <span className={styles.scrollText}>Role para descobrir</span>
            <div className={styles.scrollLine}></div>
          </div>
        </div>
      </div>
    </section>
  )
}
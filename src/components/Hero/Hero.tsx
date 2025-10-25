'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { HiArrowRight, HiChevronDown } from 'react-icons/hi2'
import gsap from 'gsap'
import SoftwareTag from '@/components/SoftwareTag/SoftwareTag'
import styles from './Hero.module.css'

export default function Hero() {
  const primaryBtnRef = useRef<HTMLAnchorElement>(null)
  const secondaryBtnRef = useRef<HTMLAnchorElement>(null)
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

  const handleSecondaryHover = (entering: boolean) => {
    const btn = secondaryBtnRef.current
    if (!btn) return

    const icon = btn.querySelector(`.${styles.ctaIcon}`)

    if (entering) {
      gsap.to(icon, {
        rotation: 180,
        y: 3,
        scale: 1.1,
        duration: 0.5,
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, isPrimary: boolean) => {
    const btn = e.currentTarget

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

          <div ref={scrollIndicatorRef} className={styles.scrollIndicator}>
            <span className={styles.scrollText}>Role para descobrir</span>
            <div className={styles.scrollLine}></div>
          </div>
        </div>
      </div>
    </section>
  )
}
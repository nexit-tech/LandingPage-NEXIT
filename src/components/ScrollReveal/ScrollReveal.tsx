'use client'

import { useEffect, useRef, ReactNode } from 'react'
import gsap from 'gsap'
import styles from './ScrollReveal.module.css'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
}

export default function ScrollReveal({ 
  children, 
  delay = 0,
  direction = 'up' 
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const isMobile = window.matchMedia('(max-width: 768px)').matches

    const getInitialTransform = () => {
      if (direction === 'up') return { y: isMobile ? 20 : 40, x: 0 }
      if (direction === 'down') return { y: isMobile ? -20 : -40, x: 0 }
      if (direction === 'left') return { x: isMobile ? 20 : 40, y: 0 }
      if (direction === 'right') return { x: isMobile ? -20 : -40, y: 0 }
      return { x: 0, y: 0 }
    }

    const initial = getInitialTransform()

    gsap.set(element, {
      opacity: 0,
      ...initial
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.8,
              delay: delay / 1000,
              ease: 'power3.out',
              onComplete: () => {
                entry.target.classList.add(styles.visible)
              }
            })
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [delay, direction])

  return (
    <div
      ref={elementRef}
      className={`${styles.reveal} ${styles[direction]}`}
    >
      {children}
    </div>
  )
}
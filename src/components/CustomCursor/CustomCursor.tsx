'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import styles from './CustomCursor.module.css'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isInDarkSection, setIsInDarkSection] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Desabilita cursor customizado na página lead-capture
    if (pathname === '/lead-capture') {
      return
    }

    // Verifica se é mobile
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) return

    const cursor = cursorRef.current
    if (!cursor) return

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0

    // Atualiza posição do mouse
    const updateCursor = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Detecta se está na seção CTA (dark)
      const ctaSection = document.getElementById('cta-section')
      if (ctaSection) {
        const rect = ctaSection.getBoundingClientRect()
        const inDarkSection = 
          mouseY >= rect.top && 
          mouseY <= rect.bottom &&
          mouseX >= rect.left && 
          mouseX <= rect.right

        setIsInDarkSection(inDarkSection)
      }
    }

    // Anima o cursor
    const animateCursor = () => {
      const speed = 0.15
      cursorX += (mouseX - cursorX) * speed
      cursorY += (mouseY - cursorY) * speed

      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`
      
      requestAnimationFrame(animateCursor)
    }

    window.addEventListener('mousemove', updateCursor)
    animateCursor()

    return () => {
      window.removeEventListener('mousemove', updateCursor)
    }
  }, [pathname])

  // Não renderiza o cursor se estiver no lead-capture
  if (pathname === '/lead-capture') {
    return null
  }

  return (
    <div 
      ref={cursorRef} 
      className={`${styles.cursor} ${isInDarkSection ? styles.white : ''}`}
    />
  )
}
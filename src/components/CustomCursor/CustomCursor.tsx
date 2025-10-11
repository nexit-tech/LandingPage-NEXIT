'use client'

import { useEffect, useRef } from 'react'
import styles from './CustomCursor.module.css'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Verifica se é mobile
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) return

    const cursor = cursorRef.current
    if (!cursor) return

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0

    const updateCursor = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animateCursor = () => {
      // Suavização com interpolação
      const speed = 1.5
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
  }, [])

  return <div ref={cursorRef} className={styles.cursor} />
}

'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { HiChatBubbleLeftRight } from 'react-icons/hi2'
import styles from './NexBubble.module.css'

export default function NexBubble() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero')
      
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect()
        // Aparece quando a parte de baixo do hero sobe e sai da tela
        if (heroRect.bottom <= 100) { 
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`${styles.bubbleContainer} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.tooltip}>Fale com NEX</div>
      <Link href="/nex-chat" className={styles.bubble}>
        <HiChatBubbleLeftRight className={styles.icon} />
      </Link>
    </div>
  )
}
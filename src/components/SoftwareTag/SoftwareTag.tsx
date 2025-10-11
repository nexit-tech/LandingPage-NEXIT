'use client'

import { useEffect, useState } from 'react'
import { HiCodeBracket } from 'react-icons/hi2'
import styles from './SoftwareTag.module.css'

export default function SoftwareTag() {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const fullText = 'SOFTWARE ENTHUSIAST'

  useEffect(() => {
    let currentIndex = 0
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex))
        currentIndex++
      } else {
        setIsComplete(true)
        clearInterval(typingInterval)
      }
    }, 80) // Velocidade de digitação (80ms por letra)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <div className={styles.tag}>
      <HiCodeBracket className={styles.icon} />
      <span className={styles.text}>
        {displayText}
        <span className={`${styles.cursor} ${isComplete ? styles.complete : ''}`}>_</span>
      </span>
    </div>
  )
}
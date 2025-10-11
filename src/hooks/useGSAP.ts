import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function useGSAPHover<T extends HTMLElement>(
  animationConfig: {
    scale?: number
    rotate?: number
    duration?: number
    ease?: string
    yoyo?: boolean
  }
) {
  const elementRef = useRef<T>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseEnter = () => {
      gsap.to(element, {
        scale: animationConfig.scale || 1.1,
        rotate: animationConfig.rotate || 0,
        duration: animationConfig.duration || 0.4,
        ease: animationConfig.ease || 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        rotate: 0,
        duration: animationConfig.duration || 0.4,
        ease: animationConfig.ease || 'power2.out',
      })
    }

    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [animationConfig])

  return elementRef
}
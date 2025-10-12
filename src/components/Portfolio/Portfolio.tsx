'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { HiArrowUpRight } from 'react-icons/hi2'
import { SiReact, SiJavascript, SiVite, SiPython, SiTypescript, SiDocker } from 'react-icons/si'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Portfolio.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  const projects = [
    {
      id: 1,
      category: 'SISTEMA DE GESTÃO',
      name: 'Menthal',
      description: 'Sistema integrado contemplando prontuários digitais, gestão financeira e agendamentos automatizados.',
      result: 'Gestão Completa Automatizada',
      logo: '/portfolio/menthal.png',
      technologies: [
        { name: 'React', icon: SiReact },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'Vite', icon: SiVite }
      ]
    },
    {
      id: 2,
      category: 'INTELIGÊNCIA ARTIFICIAL',
      name: 'Oddwise',
      description: 'Arquitetura robusta para análise estatística em tempo real com machine learning avançado.',
      result: 'Sistema Multi-Linguagem de Alta Performance',
      logo: '/portfolio/oddwise.png',
      technologies: [
        { name: 'Python', icon: SiPython },
        { name: 'React', icon: SiReact },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Docker', icon: SiDocker }
      ]
    },
    {
      id: 3,
      category: 'E-COMMERCE & FIDELIZAÇÃO',
      name: 'Riftpass',
      description: 'Plataforma completa de fidelização com cashback, cupons digitais e integração com PDV físico.',
      result: 'Engajamento Local Triplicado',
      logo: '/portfolio/riftpass.png',
      technologies: [
        { name: 'React', icon: SiReact },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'Vite', icon: SiVite }
      ]
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do Header
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        })
      }

      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          y: 30,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out'
        })
      }

      // Animações dos Cards
      cardsRef.current.forEach((card, index) => {
        if (!card) return

        const logo = card.querySelector(`.${styles.projectLogo}`)
        const logoContainer = card.querySelector(`.${styles.logoContainer}`)
        const category = card.querySelector(`.${styles.category}`)
        const name = card.querySelector(`.${styles.projectName}`)
        const description = card.querySelector(`.${styles.projectDescription}`)
        const result = card.querySelector(`.${styles.result}`)
        const resultLabel = card.querySelector(`.${styles.resultLabel}`)
        const resultText = card.querySelector(`.${styles.resultText}`)
        const tags = card.querySelectorAll(`.${styles.tag}`)
        const arrow = card.querySelector(`.${styles.arrowIcon}`)

        // Animação de entrada
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        })

        tl.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: index * 0.15
        })

        // Timeline de Hover - ANIMAÇÕES INDIVIDUAIS
        const hoverTl = gsap.timeline({ paused: true })
        
        // Card lift
        hoverTl.to(card, {
          y: -10,
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.12), 0 12px 30px rgba(0, 0, 0, 0.08)',
          duration: 0.4,
          ease: 'power2.out'
        }, 0)

        // Logo
        hoverTl.to(logo, {
          scale: 1.15,
          rotation: -5,
          duration: 0.5,
          ease: 'back.out(1.5)'
        }, 0)

        // Categoria
        hoverTl.to(category, {
          letterSpacing: '3px',
          color: '#6B6B6B',
          duration: 0.3,
          ease: 'power2.out'
        }, 0.1)

        // Nome
        hoverTl.to(name, {
          x: 5,
          color: '#000000',
          duration: 0.3,
          ease: 'power2.out'
        }, 0.1)

        // Descrição
        hoverTl.to(description, {
          color: '#1A1A1A',
          duration: 0.3,
          ease: 'power2.out'
        }, 0.15)

        // Result container
        hoverTl.to(result, {
          borderTopColor: 'rgba(229, 229, 229, 0.8)',
          duration: 0.3
        }, 0.15)

        // Result label
        hoverTl.to(resultLabel, {
          color: '#6B6B6B',
          letterSpacing: '2.5px',
          duration: 0.3
        }, 0.2)

        // Result text
        hoverTl.to(resultText, {
          x: 3,
          duration: 0.3,
          ease: 'power2.out'
        }, 0.2)

        // Tags individuais
        tags.forEach((tag, tagIndex) => {
          hoverTl.to(tag, {
            backgroundColor: 'rgba(26, 26, 26, 0.08)',
            borderColor: 'rgba(26, 26, 26, 0.15)',
            color: '#1A1A1A',
            y: -3,
            duration: 0.3,
            ease: 'power2.out'
          }, 0.2 + (tagIndex * 0.05))

          const icon = tag.querySelector(`.${styles.techIcon}`)
          if (icon) {
            hoverTl.to(icon, {
              scale: 1.15,
              rotation: 8,
              duration: 0.3,
              ease: 'back.out(1.5)'
            }, 0.2 + (tagIndex * 0.05))
          }
        })

        // Arrow
        hoverTl.to(arrow, {
          x: 8,
          y: -8,
          rotation: 45,
          scale: 1.15,
          backgroundColor: '#1A1A1A',
          borderColor: '#1A1A1A',
          color: '#FFFFFF',
          opacity: 1,
          duration: 0.4,
          ease: 'back.out(1.7)'
        }, 0.25)

        // Event Listeners
        const handleMouseEnter = () => hoverTl.play()
        const handleMouseLeave = () => hoverTl.reverse()

        card.addEventListener('mouseenter', handleMouseEnter)
        card.addEventListener('mouseleave', handleMouseLeave)
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="portfolio" ref={sectionRef} className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 ref={titleRef} className={styles.title}>
            IMPACTO COMPROVADO EM RESULTADOS MENSURÁVEIS
          </h2>
          
          <p ref={subtitleRef} className={styles.subtitle}>
            Casos reais de empresas que transformaram operações através da automação estratégica.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => { cardsRef.current[index] = el }}
              className={styles.projectCard}
            >
              {/* Logo integrada com info */}
              <div className={styles.logoContainer}>
                <Image
                  src={project.logo}
                  alt={`${project.name} Logo`}
                  width={64}
                  height={64}
                  className={styles.projectLogo}
                />
                <div className={styles.logoInfo}>
                  <p className={styles.category}>{project.category}</p>
                  <h3 className={styles.projectName}>{project.name}</h3>
                </div>
              </div>

              {/* Descrição */}
              <p className={styles.projectDescription}>
                {project.description}
              </p>

              {/* Resultado */}
              <div className={styles.result}>
                <p className={styles.resultLabel}>RESULTADO</p>
                <p className={styles.resultText}>{project.result}</p>
              </div>

              {/* Tags */}
              <div className={styles.tags}>
                {project.technologies.map((tech) => {
                  const IconComponent = tech.icon
                  return (
                    <span key={tech.name} className={styles.tag}>
                      <IconComponent className={styles.techIcon} />
                      {tech.name}
                    </span>
                  )
                })}
              </div>

              {/* Ícone de seta */}
              <div className={styles.arrowIcon}>
                <HiArrowUpRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
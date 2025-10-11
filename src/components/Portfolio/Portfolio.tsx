'use client'

import { useRef } from 'react'
import { HiArrowRight } from 'react-icons/hi2'
import Image from 'next/image'
import gsap from 'gsap'
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal'
import styles from './Portfolio.module.css'

export default function Portfolio() {
  // Dados dos Projetos
  const projects = [
    {
      id: 1,
      image: '/portfolio/menthal.png',
      client: 'Plataforma de Gestão para Psicólogos',
      projectName: 'Menthal',
      category: 'Sistema de Gestão',
      result: 'Gestão Completa Automatizada',
      context: 'Sistema integrado desenvolvido com React, Vite e JavaScript, contemplando prontuários digitais, gestão financeira e sistema de agendamentos.',
      techs: ['React', 'JavaScript', 'Vite']
    },
    {
      id: 2,
      image: '/portfolio/oddwise.png',
      client: 'Plataforma Educativa com IA para Análise Estatística',
      projectName: 'Oddwise',
      category: 'Inteligência Artificial',
      result: 'Sistema Multi-Linguagem de Alta Performance',
      context: 'Plataforma educativa que utiliza IA para análise estatística em apostas esportivas. Arquitetura robusta com Python, React, TypeScript, Docker e Next.js.',
      techs: ['Python', 'React', 'TypeScript', 'Next.js', 'Docker']
    },
    {
      id: 3,
      image: '/portfolio/riftpass.png',
      client: 'Plataforma de Fidelização Regional',
      projectName: 'Riftpass',
      category: 'E-commerce & Fidelização',
      result: 'Engajamento Local Digitalizado',
      context: 'Sistema de fidelização desenvolvido para empresas da Região dos Lagos. Solução completa criada com React, JavaScript e Vite.',
      techs: ['React', 'JavaScript', 'Vite']
    }
  ]

  // Animação do Card
  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>, entering: boolean) => {
    const card = e.currentTarget
    const logo = card.querySelector(`.${styles.logoContainer}`)
    const arrow = card.querySelector(`.${styles.arrowIcon}`)
    const category = card.querySelector(`.${styles.category}`)
    const techTags = card.querySelectorAll(`.${styles.techTag}`)

    if (entering) {
      // Animação da logo - rotação 3D
      gsap.to(logo, {
        rotateY: 360,
        duration: 0.8,
        ease: 'power2.out'
      })

      // Animação da seta - pulso
      gsap.to(arrow, {
        scale: 1.2,
        x: 8,
        duration: 0.3,
        ease: 'back.out(2)',
        yoyo: true,
        repeat: -1
      })

      // Animação da categoria - glitch
      gsap.to(category, {
        x: -2,
        duration: 0.1,
        repeat: 3,
        yoyo: true,
        ease: 'none'
      })

      // Animação das tech tags - cascade
      techTags.forEach((tag, index) => {
        gsap.to(tag, {
          y: -4,
          duration: 0.3,
          delay: index * 0.05,
          ease: 'power2.out'
        })
      })
    } else {
      // Reset todas as animações
      gsap.to(logo, {
        rotateY: 0,
        duration: 0.4,
        ease: 'power2.out'
      })

      gsap.killTweensOf(arrow)
      gsap.to(arrow, {
        scale: 1,
        x: 0,
        duration: 0.3,
        ease: 'power2.out'
      })

      gsap.to(category, {
        x: 0,
        duration: 0.2
      })

      techTags.forEach((tag) => {
        gsap.to(tag, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        })
      })
    }
  }

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        {/* Header da Seção */}
        <div className={styles.header}>
          <ScrollReveal direction="up" delay={100}>
            <h2 className={styles.title}>
              IMPACTO COMPROVADO EM RESULTADOS MENSURÁVEIS
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={200}>
            <p className={styles.subtitle}>
              Casos reais de empresas que transformaram operações através da automação estratégica.
            </p>
          </ScrollReveal>
        </div>

        {/* Grid de Projetos */}
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} direction="left" delay={100 * index}>
              <div 
                className={styles.projectCard}
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                {/* Lado Esquerdo: Logo */}
                <div className={styles.logoSection}>
                  <div className={styles.logoContainer}>
                    <Image
                      src={project.image}
                      alt={project.client}
                      fill
                      className={styles.logo}
                      sizes="(max-width: 768px) 100vw, 200px"
                    />
                  </div>
                </div>

                {/* Lado Direito: Conteúdo */}
                <div className={styles.contentSection}>
                  <div className={styles.cardHeader}>
                    <span className={styles.category}>{project.category}</span>
                    <div className={styles.arrowIcon}>
                      <HiArrowRight />
                    </div>
                  </div>

                  <h3 className={styles.projectName}>{project.projectName}</h3>
                  <p className={styles.client}>{project.client}</p>

                  <div className={styles.resultContainer}>
                    <span className={styles.resultLabel}>RESULTADO</span>
                    <p className={styles.result}>{project.result}</p>
                  </div>

                  <p className={styles.context}>{project.context}</p>

                  <div className={styles.techStack}>
                    {project.techs.map((tech, index) => (
                      <span key={index} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
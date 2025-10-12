'use client'

import Image from 'next/image'
import { HiArrowUpRight } from 'react-icons/hi2'
import { SiReact, SiJavascript, SiVite, SiPython, SiTypescript, SiDocker, SiNextdotjs } from 'react-icons/si'
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal'
import styles from './Portfolio.module.css'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      category: 'SISTEMA DE GESTÃO',
      name: 'Menthal',
      description: 'Plataforma de Gestão para Psicólogos',
      result: 'Gestão Completa Automatizada',
      fullDescription: 'Sistema integrado desenvolvido com React, Vite e JavaScript, contemplando prontuários digitais, gestão financeira e sistema de agendamentos.',
      logo: '/portfolio/menthal.png',
      technologies: [
        { name: 'React', icon: SiReact },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'Vite', icon: SiVite }
      ],
      link: '/portfolio/menthal'
    },
    {
      id: 2,
      category: 'INTELIGÊNCIA ARTIFICIAL',
      name: 'Oddwise',
      description: 'Plataforma Educativa com IA para Análise Estatística',
      result: 'Sistema Multi-Linguagem de Alta Performance',
      fullDescription: 'Plataforma educativa que utiliza IA para análise estatística em apostas esportivas. Arquitetura robusta com Python, React, TypeScript, Docker e Next.js.',
      logo: '/portfolio/oddwise.png',
      technologies: [
        { name: 'Python', icon: SiPython },
        { name: 'React', icon: SiReact },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Docker', icon: SiDocker }
      ],
      link: '/portfolio/oddwise'
    },
    {
      id: 3,
      category: 'E-COMMERCE & FIDELIZAÇÃO',
      name: 'Riftpass',
      description: 'Plataforma de Fidelização Regional',
      result: 'Engajamento Local Triplicado',
      fullDescription: 'Sistema de fidelização desenvolvido para empresas da Região dos Lagos. Solução completa criada com React, JavaScript e Vite.',
      logo: '/portfolio/riftpass.png',
      technologies: [
        { name: 'React', icon: SiReact },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'Vite', icon: SiVite }
      ],
      link: '/portfolio/riftpass'
    }
  ]

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
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

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} direction="up" delay={300 + (index * 100)}>
              <div className={styles.projectCard}>
                <div className={styles.imageSection}>
                  <Image
                    src={project.logo}
                    alt={`${project.name} Logo`}
                    width={100}
                    height={100}
                    className={styles.projectLogo}
                  />
                </div>

                <div className={styles.contentSection}>
                  <p className={styles.category}>{project.category}</p>
                  
                  <h3 className={styles.projectName}>{project.name}</h3>
                  
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>

                  <div className={styles.result}>
                    <p className={styles.resultLabel}>RESULTADO</p>
                    <p className={styles.resultText}>{project.result}</p>
                  </div>

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
                </div>

                <div className={styles.arrowIcon}>
                  <HiArrowUpRight />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
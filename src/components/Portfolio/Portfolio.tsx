import { HiArrowRight } from 'react-icons/hi2'
import Image from 'next/image'
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

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        {/* Header da Seção */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            IMPACTO COMPROVADO EM RESULTADOS MENSURÁVEIS
          </h2>
          <p className={styles.subtitle}>
            Casos reais de empresas que transformaram operações através da automação estratégica.
          </p>
        </div>

        {/* Grid de Projetos */}
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
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
          ))}
        </div>
      </div>
    </section>
  )
}
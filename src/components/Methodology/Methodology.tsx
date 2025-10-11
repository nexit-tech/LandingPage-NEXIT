'use client'

import { HiRocketLaunch } from 'react-icons/hi2'
import { TbTargetArrow, TbLayoutGrid } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import gsap from 'gsap'
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal'
import styles from './Methodology.module.css'

export default function Methodology() {
  // Dados dos Pilares
  const pillars = [
    {
      id: 1,
      icon: TbTargetArrow,
      title: 'Imersão e Estratégia',
      description: 'Mergulhamos no seu negócio para definir objetivos, entender seu público e traçar o plano mestre do projeto.'
    },
    {
      id: 2,
      icon: TbLayoutGrid,
      title: 'Design de Experiência (UI/UX)',
      description: 'Desenhamos uma interface intuitiva e visualmente atraente, focada em transformar visitantes em clientes.'
    },
    {
      id: 3,
      icon: FaCode,
      title: 'Implementação e Tecnologia',
      description: 'Codificamos o design com as melhores tecnologias para garantir um site ou aplicativo rápido, responsivo e seguro em qualquer tela.'
    },
    {
      id: 4,
      icon: HiRocketLaunch,
      title: 'Otimização Contínua',
      description: 'Após o lançamento, monitoramos os dados de uso para aprimorar o projeto constantemente, assegurando um crescimento sustentável.'
    }
  ]

  // Animação do ícone
  const handleIconHover = (e: React.MouseEvent<HTMLDivElement>, entering: boolean) => {
    const icon = e.currentTarget

    if (entering) {
      gsap.to(icon, {
        rotation: 360,
        scale: 1.15,
        duration: 0.6,
        ease: 'back.out(2)'
      })
    } else {
      gsap.to(icon, {
        rotation: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      })
    }
  }

  return (
    <section id="metodologia" className={styles.methodology}>
      <div className={styles.container}>
        {/* Header da Seção */}
        <div className={styles.header}>
          <ScrollReveal direction="up" delay={100}>
            <h2 className={styles.title}>
              A METODOLOGIA QUE TE ACOMPANHA ATÉ DEPOIS DO FIM!
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={200}>
            <p className={styles.subtitle}>
              Abordagem estratégica focada em resultados tangíveis e implementação ágil.
            </p>
          </ScrollReveal>
        </div>

        {/* Grid de Pilares */}
        <div className={styles.pillarsGrid}>
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon
            return (
              <ScrollReveal key={pillar.id} direction="up" delay={100 * index}>
                <div className={styles.pillarCard}>
                  <div 
                    className={styles.pillarIcon}
                    onMouseEnter={(e) => handleIconHover(e, true)}
                    onMouseLeave={(e) => handleIconHover(e, false)}
                  >
                    <IconComponent />
                  </div>
                  <h3 className={styles.pillarTitle}>
                    {pillar.title}
                  </h3>
                  <p className={styles.pillarDescription}>
                    {pillar.description}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
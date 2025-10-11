'use client'

import { HiSparkles, HiArrowTrendingUp, HiEye, HiRocketLaunch } from 'react-icons/hi2'
import gsap from 'gsap'
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal'
import styles from './Methodology.module.css'

export default function Methodology() {
  // Dados dos Pilares
  const pillars = [
    {
      id: 1,
      icon: HiSparkles,
      title: 'Simplificação Estratégica',
      description: 'Reduzimos processos ao essencial, eliminando etapas desnecessárias e criando fluxos enxutos. Cada automação é projetada para integrar-se naturalmente ao seu negócio sem fricção.'
    },
    {
      id: 2,
      icon: HiArrowTrendingUp,
      title: 'Escalabilidade Planejada',
      description: 'Construímos sistemas que crescem com sua operação, sem necessidade de reconstrução. Sua solução permanece eficiente independentemente do volume de demanda.'
    },
    {
      id: 3,
      icon: HiEye,
      title: 'Transparência Total',
      description: 'Você acompanha cada etapa do desenvolvimento com métricas claras e comunicação direta. Sem caixas-pretas, apenas resultados documentados e rastreáveis.'
    },
    {
      id: 4,
      icon: HiRocketLaunch,
      title: 'Implementação Ágil',
      description: 'Entregas iterativas que geram valor desde a primeira semana. Você vê impacto real rapidamente, sem longos períodos de espera.'
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
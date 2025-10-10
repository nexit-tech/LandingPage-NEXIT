import { HiSparkles, HiArrowTrendingUp, HiEye, HiRocketLaunch } from 'react-icons/hi2'
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

  return (
    <section id="metodologia" className={styles.methodology}>
      <div className={styles.container}>
        {/* Header da Seção */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            A METODOLOGIA QUE TE ACOMPANHA ATÉ DEPOIS DO FIM!
          </h2>
          <p className={styles.subtitle}>
            Abordagem estratégica focada em resultados tangíveis e implementação ágil.
          </p>
        </div>

        {/* Grid de Pilares */}
        <div className={styles.pillarsGrid}>
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon
            return (
              <div key={pillar.id} className={styles.pillarCard}>
                <div className={styles.pillarIcon}>
                  <IconComponent />
                </div>
                <h3 className={styles.pillarTitle}>
                  {pillar.title}
                </h3>
                <p className={styles.pillarDescription}>
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
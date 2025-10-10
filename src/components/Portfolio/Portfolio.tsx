import { HiCog, HiChartBar, HiServerStack } from 'react-icons/hi2'
import styles from './Portfolio.module.css'

export default function Portfolio() {
  // Dados dos Projetos
  const projects = [
    {
      id: 1,
      icon: HiCog,
      client: 'TechVision',
      projectName: 'Sistema Integrado de Gestão',
      category: 'Automação de Processos',
      result: 'Redução de 62% no Tempo de Processamento',
      context: 'Empresa de tecnologia enfrentava gargalos operacionais com processos manuais que limitavam crescimento e geravam retrabalho constante.'
    },
    {
      id: 2,
      icon: HiChartBar,
      client: 'DataFlow Solutions',
      projectName: 'Plataforma de Análise Preditiva',
      category: 'Inteligência de Dados',
      result: 'Aumento de 45% na Eficiência Operacional',
      context: 'Necessidade de consolidar dados fragmentados e criar insights acionáveis em tempo real para tomada de decisão estratégica.'
    },
    {
      id: 3,
      icon: HiServerStack,
      client: 'ConnectHub',
      projectName: 'Hub de Integração Multicanal',
      category: 'Integração de Sistemas',
      result: 'Economia de 120 Horas Mensais',
      context: 'Processos de comunicação descentralizados geravam perda de informação e duplicidade de esforços entre departamentos.'
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
          {projects.map((project) => {
            const IconComponent = project.icon
            return (
              <div key={project.id} className={styles.projectCard}>
                {/* Ícone */}
                <div className={styles.iconContainer}>
                  <IconComponent className={styles.projectIcon} />
                </div>

                {/* Tag de Categoria */}
                <span className={styles.category}>
                  {project.category}
                </span>

                {/* Nome do Cliente/Projeto */}
                <h3 className={styles.projectName}>
                  {project.projectName}
                </h3>

                <p className={styles.client}>
                  {project.client}
                </p>

                {/* Divisor */}
                <div className={styles.divider}></div>

                {/* Resultado Principal */}
                <div className={styles.resultContainer}>
                  <span className={styles.resultLabel}>Resultado</span>
                  <p className={styles.result}>
                    {project.result}
                  </p>
                </div>

                {/* Contexto */}
                <p className={styles.context}>
                  {project.context}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
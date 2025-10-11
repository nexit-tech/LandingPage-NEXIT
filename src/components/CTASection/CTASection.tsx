import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi2'
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal'
import styles from './CTASection.module.css'

export default function CTASection() {
  return (
    <section id="cta-section" className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <ScrollReveal direction="up" delay={100}>
            <h2 className={styles.title}>
              PRONTO PARA SUA PRÓXIMA SAÍDA?
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p className={styles.description}>
              Agende uma conversa estratégica sem compromisso. Vamos analisar seu cenário 
              e apresentar um roadmap personalizado de automação.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <Link href="/lead-capture" className={styles.ctaButton}>
              <span>Iniciar o processo</span>
              <HiArrowRight className={styles.ctaIcon} />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
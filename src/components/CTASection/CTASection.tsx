import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi2'
import styles from './CTASection.module.css'

export default function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Título */}
          <h2 className={styles.title}>
            PRONTO PARA SUA PROXIMA SAÍDA?
          </h2>

          {/* Descrição */}
          <p className={styles.description}>
            Agende uma conversa estratégica sem compromisso. Vamos analisar seu cenário 
            e apresentar um roadmap personalizado de automação.
          </p>

          {/* CTA */}
          <Link href="/lead-capture" className={styles.ctaButton}>
            <span>Iniciar o processo</span>
            <HiArrowRight className={styles.ctaIcon} />
          </Link>
        </div>
      </div>
    </section>
  )
}
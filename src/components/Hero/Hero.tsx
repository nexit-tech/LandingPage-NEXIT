import Link from 'next/link'
import { HiArrowRight, HiChevronDown } from 'react-icons/hi2'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Conteúdo Principal */}
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Sua Próxima Saída Para Automação Inteligente
          </h1>
          
          <p className={styles.subheadline}>
            Transformamos processos complexos em fluxos automatizados que escalam seu negócio. 
            Soluções personalizadas que entregam resultados mensuráveis desde o primeiro dia.
          </p>

          {/* CTAs */}
          <div className={styles.ctaGroup}>
            <Link href="/lead-capture" className={styles.primaryCta}>
              <span>Comece Sua Transformação</span>
              <HiArrowRight className={styles.ctaIcon} />
            </Link>
            
            <a href="#metodologia" className={styles.secondaryCta}>
              <span>Conheça Nossa Metodologia</span>
              <HiChevronDown className={styles.ctaIcon} />
            </a>
          </div>
        </div>

        {/* Indicador de Scroll */}
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollText}>Role para descobrir</span>
          <div className={styles.scrollLine}></div>
        </div>
      </div>
    </section>
  )
}
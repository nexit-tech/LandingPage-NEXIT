import Link from 'next/link'
import { HiArrowRight, HiChevronDown } from 'react-icons/hi2'
import SoftwareTag from '@/components/SoftwareTag/SoftwareTag'
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        {/* Conteúdo Principal */}
        <div className={styles.content}>
          <ScrollReveal direction="fade" delay={100}>
            <SoftwareTag />
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={200}>
            <h1 className={styles.headline}>
              Sua Próxima Saída Para Automação Inteligente
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={300}>
            <p className={styles.subheadline}>
              Transformamos processos complexos em fluxos automatizados que escalam seu negócio. 
              Soluções personalizadas que entregam resultados mensuráveis desde o primeiro dia.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal direction="up" delay={400}>
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
          </ScrollReveal>

          {/* Indicador de Scroll - AGORA DENTRO DO CONTENT */}
          <ScrollReveal direction="fade" delay={600}>
            <div className={styles.scrollIndicator}>
              <span className={styles.scrollText}>Role para descobrir</span>
              <div className={styles.scrollLine}></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
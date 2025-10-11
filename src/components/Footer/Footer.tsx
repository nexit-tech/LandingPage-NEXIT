'use client'

import Link from 'next/link'
import Image from 'next/image'
import { HiEnvelope, HiPhone, HiMapPin } from 'react-icons/hi2'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import { useRef } from 'react'
import gsap from 'gsap'
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal'
import styles from './Footer.module.css'

export default function Footer() {
  // Ano atual
  const currentYear = new Date().getFullYear()

  // Links
  const quickLinks = [
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Política de Privacidade', href: '/privacidade' },
    { label: 'Termos de Uso', href: '/termos' }
  ]

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: FaLinkedinIn, external: true },
    { label: 'GitHub', href: 'https://github.com/nexit-tech', icon: FaGithub, external: true },
    { label: 'Instagram', href: 'https://instagram.com/nexit.tech', icon: FaInstagram, external: true }
  ]

  const contactInfo = [
    { icon: HiEnvelope, label: 'contato@nexit.tech', href: 'mailto:contato@nexit.tech' },
    { icon: HiPhone, label: '+55 (22) 9 9223-8470', href: 'tel:+5522992238470' },
    { icon: HiMapPin, label: 'Cabo Frio - Rio de Janeiro, RJ', href: null }
  ]

  // Animação da logo
  const handleLogoHover = (e: React.MouseEvent<HTMLAnchorElement>, entering: boolean) => {
    const logo = e.currentTarget.querySelector('img')
    
    if (entering) {
      gsap.to(logo, {
        scale: 1.05,
        rotateZ: 5,
        duration: 0.4,
        ease: 'back.out(2)'
      })
    } else {
      gsap.to(logo, {
        scale: 1,
        rotateZ: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }

  // Animação dos ícones de contato
  const handleContactIconHover = (e: React.MouseEvent<HTMLDivElement>, entering: boolean) => {
    const icon = e.currentTarget

    if (entering) {
      gsap.to(icon, {
        scale: 1.15,
        rotation: 360,
        duration: 0.5,
        ease: 'back.out(2)'
      })
    } else {
      gsap.to(icon, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }

  // Animação dos links rápidos
  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>, entering: boolean) => {
    const link = e.currentTarget

    if (entering) {
      gsap.to(link, {
        x: 10,
        color: '#1A1A1A',
        duration: 0.3,
        ease: 'power2.out'
      })
    } else {
      gsap.to(link, {
        x: 0,
        color: '#6B6B6B',
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }

  // Animação das redes sociais - efeito magnético
  const handleSocialHover = (e: React.MouseEvent<HTMLAnchorElement>, entering: boolean) => {
    const link = e.currentTarget
    const iconWrapper = link.querySelector(`.${styles.socialIconWrapper}`)
    const text = link.querySelector('span')

    if (entering) {
      gsap.to(iconWrapper, {
        scale: 1.2,
        rotation: -10,
        duration: 0.4,
        ease: 'elastic.out(1, 0.5)'
      })
      gsap.to(text, {
        x: 5,
        duration: 0.3,
        ease: 'power2.out'
      })
    } else {
      gsap.to(iconWrapper, {
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: 'elastic.out(1, 0.5)'
      })
      gsap.to(text, {
        x: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }

  // Animação do tagline
  const handleTaglineHover = (e: React.MouseEvent<HTMLParagraphElement>, entering: boolean) => {
    const tagline = e.currentTarget

    if (entering) {
      gsap.to(tagline, {
        scale: 1.02,
        letterSpacing: '0.5px',
        duration: 0.4,
        ease: 'power2.out'
      })
    } else {
      gsap.to(tagline, {
        scale: 1,
        letterSpacing: '0.3px',
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }

  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.container}>
        {/* Wrapper para o conteúdo que vai desaparecer */}
        <div className="footer-content">
          {/* Main Grid - Logo e Tagline lado a lado */}
          <div className={styles.mainGrid}>
            {/* Lado Esquerdo: Tagline */}
            <ScrollReveal direction="up" delay={100}>
              <div className={styles.brandColumn}>
                <p 
                  className={styles.tagline}
                  onMouseEnter={(e) => handleTaglineHover(e, true)}
                  onMouseLeave={(e) => handleTaglineHover(e, false)}
                >
                  Sua saída estratégica para automação inteligente e escalável.
                </p>
              </div>
            </ScrollReveal>

            {/* Lado Direito: Logo */}
            <ScrollReveal direction="up" delay={150}>
              <div className={styles.logoColumn}>
                <Link 
                  href="/" 
                  className={styles.logoLink}
                  onMouseEnter={(e) => handleLogoHover(e, true)}
                  onMouseLeave={(e) => handleLogoHover(e, false)}
                >
                  <Image
                    src="/logo/nexitlogo.png"
                    alt="NEXIT Logo"
                    width={200}
                    height={67}
                    className={styles.logo}
                    priority
                  />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Divisor com gradiente */}
          <ScrollReveal direction="fade" delay={200}>
            <div className={styles.divider}></div>
          </ScrollReveal>

          {/* Grid de Colunas */}
          <div className={styles.columnsGrid}>
            {/* Coluna 1: Contato */}
            <ScrollReveal direction="up" delay={250}>
              <div className={styles.column}>
                <h4 className={styles.columnTitle}>Contato</h4>
                <ul className={styles.contactList}>
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <li key={index} className={styles.contactItem}>
                        <div 
                          className={styles.iconWrapper}
                          onMouseEnter={(e) => handleContactIconHover(e, true)}
                          onMouseLeave={(e) => handleContactIconHover(e, false)}
                        >
                          <IconComponent className={styles.contactIcon} />
                        </div>
                        {item.href ? (
                          <a href={item.href} className={styles.contactLink}>
                            {item.label}
                          </a>
                        ) : (
                          <span className={styles.contactText}>{item.label}</span>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </ScrollReveal>

            {/* Coluna 2: Links Rápidos */}
            <ScrollReveal direction="up" delay={300}>
              <div className={styles.column}>
                <h4 className={styles.columnTitle}>Links Rápidos</h4>
                <ul className={styles.linkList}>
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className={styles.link}
                        onMouseEnter={(e) => handleLinkHover(e, true)}
                        onMouseLeave={(e) => handleLinkHover(e, false)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Coluna 3: Redes Sociais */}
            <ScrollReveal direction="up" delay={350}>
              <div className={styles.column}>
                <h4 className={styles.columnTitle}>Redes Sociais</h4>
                <ul className={styles.socialList}>
                  {socialLinks.map((link, index) => {
                    const IconComponent = link.icon
                    return (
                      <li key={index}>
                        <a 
                          href={link.href} 
                          className={styles.socialLink}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noopener noreferrer" : undefined}
                          aria-label={link.label}
                          onMouseEnter={(e) => handleSocialHover(e, true)}
                          onMouseLeave={(e) => handleSocialHover(e, false)}
                        >
                          <div className={styles.socialIconWrapper}>
                            <IconComponent className={styles.socialIcon} />
                          </div>
                          <span>{link.label}</span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Divisor */}
          <ScrollReveal direction="fade" delay={400}>
            <div className={styles.divider}></div>
          </ScrollReveal>

          {/* Bottom Bar */}
          <ScrollReveal direction="fade" delay={450}>
            <div className={styles.bottomBar}>
              <p className={styles.copyright}>
                © {currentYear} NEXIT. Todos os direitos reservados.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  )
}
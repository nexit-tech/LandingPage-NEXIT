'use client'

import Link from 'next/link'
import Image from 'next/image'
import { HiEnvelope, HiPhone, HiMapPin, HiSparkles } from 'react-icons/hi2'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import gsap from 'gsap'
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal'
import styles from './Footer.module.css'

export default function Footer() {
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

  // ========================================
  // ANIMAÇÕES GSAP
  // ========================================

  // Logo Hover - Rotação 3D
  const handleLogoHover = (e: React.MouseEvent<HTMLAnchorElement>, entering: boolean) => {
    const logo = e.currentTarget.querySelector('img')
    
    if (entering) {
      gsap.to(logo, {
        rotateY: 360,
        scale: 1.03,
        duration: 0.8,
        ease: 'power2.out'
      })
    } else {
      gsap.to(logo, {
        rotateY: 0,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out'
      })
    }
  }

  // Ícone de Contato - Pulso
  const handleContactIconHover = (e: React.MouseEvent<HTMLDivElement>, entering: boolean) => {
    const icon = e.currentTarget

    if (entering) {
      gsap.to(icon, {
        scale: 1.15,
        rotation: 5,
        duration: 0.3,
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

  // Link Rápido - Slide
  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>, entering: boolean) => {
    const link = e.currentTarget

    if (entering) {
      gsap.to(link, {
        paddingLeft: 16,
        duration: 0.3,
        ease: 'power2.out'
      })
    } else {
      gsap.to(link, {
        paddingLeft: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }

  // Social Link - Bounce + Rotação
  const handleSocialHover = (e: React.MouseEvent<HTMLAnchorElement>, entering: boolean) => {
    const link = e.currentTarget
    const icon = link.querySelector(`.${styles.socialIcon}`)

    if (entering) {
      gsap.to(icon, {
        scale: 1.2,
        rotation: -5,
        duration: 0.4,
        ease: 'elastic.out(1, 0.5)'
      })

      gsap.to(link, {
        x: 4,
        duration: 0.3,
        ease: 'power2.out'
      })
    } else {
      gsap.to(icon, {
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: 'elastic.out(1, 0.5)'
      })

      gsap.to(link, {
        x: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }

  // Tech Badge - Pulse
  const handleBadgeHover = (e: React.MouseEvent<HTMLDivElement>, entering: boolean) => {
    const badge = e.currentTarget
    const icon = badge.querySelector(`.${styles.badgeIcon}`)

    if (entering) {
      gsap.to(badge, {
        y: -2,
        duration: 0.3,
        ease: 'power2.out'
      })

      gsap.to(icon, {
        rotation: 360,
        duration: 0.6,
        ease: 'power2.out'
      })
    } else {
      gsap.to(badge, {
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      })

      gsap.to(icon, {
        rotation: 0,
        duration: 0.4,
        ease: 'power2.out'
      })
    }
  }

  // Tagline Hover - Glow
  const handleTaglineHover = (e: React.MouseEvent<HTMLParagraphElement>, entering: boolean) => {
    const tagline = e.currentTarget

    if (entering) {
      gsap.to(tagline, {
        scale: 1.01,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
    } else {
      gsap.to(tagline, {
        scale: 1,
        opacity: 0.9,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }

  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.container}>
        <div className="footer-content">
          {/* Grid Principal - 3 Colunas */}
          <div className={styles.mainGrid}>
            
            {/* COLUNA 1 - BRANDING */}
            <ScrollReveal direction="up" delay={100}>
              <div className={styles.brandColumn}>
                <div className={styles.logoWrapper}>
                  <Link 
                    href="/" 
                    className={styles.logoLink}
                    onMouseEnter={(e) => handleLogoHover(e, true)}
                    onMouseLeave={(e) => handleLogoHover(e, false)}
                  >
                    <Image
                      src="/logo/nexitlogo.png"
                      alt="NEXIT Logo"
                      width={100}
                      height={100}
                      className={styles.logo}
                      priority
                    />
                  </Link>
                </div>
                
                <p 
                  className={styles.tagline}
                  onMouseEnter={(e) => handleTaglineHover(e, true)}
                  onMouseLeave={(e) => handleTaglineHover(e, false)}
                >
                  Sua saída estratégica para automação inteligente e escalável.
                </p>
              </div>
            </ScrollReveal>

            {/* COLUNA 2 - CONTATO + LINKS */}
            <ScrollReveal direction="up" delay={200}>
              <div className={styles.contactColumn}>
                {/* Contato */}
                <div>
                  <h4 className={styles.sectionTitle}>Contato</h4>
                  <ul className={styles.contactList}>
                    {contactInfo.map((item, index) => {
                      const IconComponent = item.icon
                      return (
                        <li key={index} className={styles.contactItem}>
                          <div 
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

                {/* Links Rápidos */}
                <div>
                  <h4 className={styles.sectionTitle}>Links Rápidos</h4>
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
              </div>
            </ScrollReveal>

            {/* COLUNA 3 - REDES SOCIAIS */}
            <ScrollReveal direction="up" delay={300}>
              <div className={styles.socialColumn}>
                <h4 className={styles.sectionTitle}>Redes Sociais</h4>
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
                          <IconComponent className={styles.socialIcon} />
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

              <div 
                className={styles.techBadge}
                onMouseEnter={(e) => handleBadgeHover(e, true)}
                onMouseLeave={(e) => handleBadgeHover(e, false)}
              >
                <HiSparkles className={styles.badgeIcon} />
                <span>Built with Tech</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  )
}
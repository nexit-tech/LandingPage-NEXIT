import Link from 'next/link'
import Image from 'next/image'
import { HiEnvelope, HiPhone, HiMapPin } from 'react-icons/hi2'
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
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

  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.container}>
        {/* Grid Principal */}
        <div className={styles.mainGrid}>
          {/* Coluna 1: Logo e Descrição */}
          <div className={styles.column}>
            <div className={styles.logoContainer}>
              <Image
                src="/logo/nexitlogo.png"
                alt="NEXIT Logo"
                width={120}
                height={40}
                className={styles.logo}
              />
            </div>
            <p className={styles.description}>
              Sua saída estratégica para automação inteligente e escalável.
            </p>
          </div>

          {/* Coluna 2: Contato */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contato</h4>
            <ul className={styles.contactList}>
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <li key={index} className={styles.contactItem}>
                    <IconComponent className={styles.contactIcon} />
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

          {/* Coluna 3: Links Rápidos */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Links Rápidos</h4>
            <ul className={styles.linkList}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Redes Sociais */}
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
                    >
                      <IconComponent className={styles.socialIcon} />
                      <span>{link.label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Divisor */}
        <div className={styles.divider}></div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} NEXIT. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
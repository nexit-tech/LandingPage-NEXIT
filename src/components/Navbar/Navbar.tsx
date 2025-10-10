'use client'

import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  // Estados
  const [menuOpen, setMenuOpen] = useState(false)

  // Funções
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Menu Desktop */}
        <ul className={styles.menu}>
          <li>
            <a href="#metodologia" className={styles.menuLink}>
              Metodologia
            </a>
          </li>
          <li>
            <a href="#portfolio" className={styles.menuLink}>
              Portfólio
            </a>
          </li>
          <li>
            <a href="#contato" className={styles.menuLink}>
              Contato
            </a>
          </li>
        </ul>

        {/* Botão Hamburguer Mobile */}
        <button 
          className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Menu Mobile */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        <ul className={styles.mobileMenuList}>
          <li>
            <a href="#metodologia" className={styles.mobileMenuLink} onClick={closeMenu}>
              Metodologia
            </a>
          </li>
          <li>
            <a href="#portfolio" className={styles.mobileMenuLink} onClick={closeMenu}>
              Portfólio
            </a>
          </li>
          <li>
            <a href="#contato" className={styles.mobileMenuLink} onClick={closeMenu}>
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
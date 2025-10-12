'use client'

import { useState } from 'react'
import { HiDevicePhoneMobile, HiComputerDesktop, HiGlobeAlt, HiArrowRight, HiArrowLeft } from 'react-icons/hi2'
import styles from './Steps.module.css'

interface Step5Props {
  onNext: (data: { platforms: string[] }) => void
  onBack: () => void
}

export default function Step5({ onNext, onBack }: Step5Props) {
  const [selected, setSelected] = useState<string[]>([])

  const platforms = [
    {
      id: 'web',
      icon: HiGlobeAlt,
      title: 'Web Responsivo',
      subtitle: 'Aplicação web que funciona em qualquer dispositivo'
    },
    {
      id: 'desktop',
      icon: HiComputerDesktop,
      title: 'Desktop',
      subtitle: 'Software para Windows, Mac ou Linux'
    },
    {
      id: 'mobile',
      icon: HiDevicePhoneMobile,
      title: 'Mobile Nativo',
      subtitle: 'App para iOS e Android'
    }
  ]

  const toggleSelection = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(item => item !== id))
    } else {
      setSelected([...selected, id])
    }
  }

  const handleNext = () => {
    if (selected.length > 0) {
      onNext({ platforms: selected })
    }
  }

  return (
    <div className={styles.stepContainer}>
      <h2 className={styles.title}>
        Qual plataforma deve ser criada?
      </h2>
      <p className={styles.description}>
        Escolha onde sua solução precisa estar disponível. Você pode selecionar múltiplas plataformas.
      </p>

      <div className={styles.optionsGrid}>
        {platforms.map((option) => {
          const IconComponent = option.icon
          const isSelected = selected.includes(option.id)
          
          return (
            <div
              key={option.id}
              className={`${styles.optionCard} ${isSelected ? styles.selected : ''}`}
              onClick={() => toggleSelection(option.id)}
            >
              <div className={styles.optionIcon}>
                <IconComponent />
              </div>
              <div className={styles.optionText}>
                <h3 className={styles.optionTitle}>{option.title}</h3>
                <p className={styles.optionSubtitle}>{option.subtitle}</p>
              </div>
              {isSelected && (
                <div className={styles.checkmark}>✓</div>
              )}
            </div>
          )
        })}
      </div>

      <div className={styles.buttonGroup}>
        <button
          className={styles.backButton}
          onClick={onBack}
          type="button"
        >
          <HiArrowLeft className={styles.backIcon} />
          <span>Voltar</span>
        </button>

        <button
          className={styles.nextButton}
          onClick={handleNext}
          disabled={selected.length === 0}
          type="button"
        >
          <span>Continuar ({selected.length})</span>
          <HiArrowRight className={styles.nextIcon} />
        </button>
      </div>
    </div>
  )
}
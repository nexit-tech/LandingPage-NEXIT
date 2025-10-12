'use client'

import { useState } from 'react'
import { HiUsers, HiUserGroup, HiBuildingOffice, HiArrowRight, HiArrowLeft } from 'react-icons/hi2'
import styles from './Steps.module.css'

interface Step3Props {
  onNext: (data: { companySize: string }) => void
  onBack: () => void
}

export default function Step3({ onNext, onBack }: Step3Props) {
  const [selected, setSelected] = useState<string>('')

  const companySizes = [
    {
      id: 'small',
      icon: HiUsers,
      title: '1-10 colaboradores',
      subtitle: 'Pequena equipe ou startup'
    },
    {
      id: 'medium',
      icon: HiUserGroup,
      title: '11-50 colaboradores',
      subtitle: 'Empresa em crescimento'
    },
    {
      id: 'large',
      icon: HiBuildingOffice,
      title: '51+ colaboradores',
      subtitle: 'Empresa estabelecida'
    }
  ]

  const handleNext = () => {
    if (selected) {
      onNext({ companySize: selected })
    }
  }

  return (
    <div className={styles.stepContainer}>
      <h2 className={styles.title}>
        Qual o tamanho da sua equipe?
      </h2>
      <p className={styles.description}>
        Entender o tamanho da sua operação nos ajuda a dimensionar a solução ideal.
      </p>

      <div className={styles.optionsGrid}>
        {companySizes.map((option) => {
          const IconComponent = option.icon
          const isSelected = selected === option.id
          
          return (
            <div
              key={option.id}
              className={`${styles.optionCard} ${isSelected ? styles.selected : ''}`}
              onClick={() => setSelected(option.id)}
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
          disabled={!selected}
          type="button"
        >
          <span>Continuar</span>
          <HiArrowRight className={styles.nextIcon} />
        </button>
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { HiBolt, HiCalendar, HiClock, HiArrowRight, HiArrowLeft } from 'react-icons/hi2'
import styles from './Steps.module.css'

interface Step7Props {
  onNext: (data: { timeline: string }) => void
  onBack: () => void
}

export default function Step7({ onNext, onBack }: Step7Props) {
  const [selected, setSelected] = useState<string>('')

  const timelines = [
    {
      id: 'urgent',
      icon: HiBolt,
      title: 'Urgente',
      subtitle: 'Preciso começar o quanto antes'
    },
    {
      id: 'short',
      icon: HiClock,
      title: '1 a 2 meses',
      subtitle: 'Tenho prazo apertado'
    },
    {
      id: 'medium',
      icon: HiCalendar,
      title: '3 a 6 meses',
      subtitle: 'Prazo confortável para desenvolvimento'
    },
    {
      id: 'flexible',
      icon: HiCalendar,
      title: 'Flexível',
      subtitle: 'Não tenho pressa, qualidade é prioridade'
    }
  ]

  const handleNext = () => {
    if (selected) {
      onNext({ timeline: selected })
    }
  }

  return (
    <div className={styles.stepContainer}>
      <h2 className={styles.title}>
        Qual a urgência do projeto?
      </h2>
      <p className={styles.description}>
        Entender seu prazo nos ajuda a alocar a equipe e recursos adequados.
      </p>

      <div className={styles.optionsGrid} style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
        {timelines.map((option) => {
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
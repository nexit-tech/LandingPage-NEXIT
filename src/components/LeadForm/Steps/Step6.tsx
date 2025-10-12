'use client'

import { useState } from 'react'
import { HiCurrencyDollar, HiArrowRight, HiArrowLeft } from 'react-icons/hi2'
import styles from './Steps.module.css'

interface Step6Props {
  onNext: (data: { budget: string }) => void
  onBack: () => void
}

export default function Step6({ onNext, onBack }: Step6Props) {
  const [selected, setSelected] = useState<string>('')

  const budgets = [
    {
      id: 'small',
      title: 'R$ 5 mil - R$ 15 mil',
      subtitle: 'Projeto inicial ou MVP'
    },
    {
      id: 'medium',
      title: 'R$ 15 mil - R$ 40 mil',
      subtitle: 'Solução completa com funcionalidades essenciais'
    },
    {
      id: 'large',
      title: 'R$ 40 mil - R$ 80 mil',
      subtitle: 'Sistema robusto com múltiplas integrações'
    },
    {
      id: 'enterprise',
      title: 'R$ 80 mil - R$ 150 mil',
      subtitle: 'Plataforma complexa e escalável'
    },
    {
      id: 'custom',
      title: 'Acima de R$ 150 mil',
      subtitle: 'Projeto enterprise de grande porte'
    },
    {
      id: 'flexible',
      title: 'Flexível / A definir',
      subtitle: 'Prefiro discutir opções com a equipe'
    }
  ]

  const handleNext = () => {
    if (selected) {
      onNext({ budget: selected })
    }
  }

  return (
    <div className={styles.stepContainer}>
      <h2 className={styles.title}>
        Qual o orçamento disponível?
      </h2>
      <p className={styles.description}>
        Uma estimativa do investimento nos ajuda a propor a melhor solução para seu contexto.
      </p>

      <div className={styles.optionsGrid} style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
        {budgets.map((option) => {
          const isSelected = selected === option.id
          
          return (
            <div
              key={option.id}
              className={`${styles.optionCard} ${isSelected ? styles.selected : ''}`}
              onClick={() => setSelected(option.id)}
            >
              <div className={styles.optionIcon}>
                <HiCurrencyDollar />
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
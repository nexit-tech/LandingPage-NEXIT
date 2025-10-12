'use client'

import { HiArrowRight } from 'react-icons/hi2'
import styles from './Steps.module.css'

interface Step1Props {
  onNext: () => void
}

export default function Step1({ onNext }: Step1Props) {
  return (
    <div className={styles.stepContainer}>
      <h2 className={styles.title}>
        Vamos conhecer seus objetivos
      </h2>
      <p className={styles.description}>
        Este formulário nos ajudará a entender suas necessidades e criar uma proposta 
        personalizada para transformar sua visão em realidade. Leva apenas alguns minutos!
      </p>

      <button
        className={styles.nextButton}
        onClick={onNext}
        type="button"
        style={{ marginTop: '36px' }}
      >
        <span>Iniciar Formulário</span>
        <HiArrowRight className={styles.nextIcon} />
      </button>
    </div>
  )
}
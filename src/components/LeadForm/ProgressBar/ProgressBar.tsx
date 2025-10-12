'use client'

import styles from './ProgressBar.module.css'

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
  stepLabel: string
}

export default function ProgressBar({ currentStep, totalSteps, stepLabel }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100

  return (
    <div className={styles.progressBar}>
      <div className={styles.progressInfo}>
        <span className={styles.stepLabel}>{stepLabel}</span>
        <span className={styles.stepCount}>
          {currentStep} de {totalSteps} etapas
        </span>
      </div>
      <div className={styles.barContainer}>
        <div 
          className={styles.barFill} 
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
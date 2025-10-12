'use client'

import { useState, ChangeEvent } from 'react'
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi2'
import styles from './Steps.module.css'

interface Step2Props {
  onNext: (data: { company: string }) => void
  onBack: () => void
}

export default function Step2({ onNext, onBack }: Step2Props) {
  const [company, setCompany] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCompany(e.target.value)
    if (error) setError('')
  }

  const handleNext = () => {
    if (!company.trim()) {
      setError('Por favor, informe o nome da empresa')
      return
    }
    onNext({ company: company.trim() })
  }

  return (
    <div className={styles.stepContainer}>
      <h2 className={styles.title}>
        Qual empresa você representa?
      </h2>
      <p className={styles.description}>
        Informe o nome da sua empresa para personalizarmos nossa proposta.
      </p>

      <div className={styles.formGroup}>
        <label htmlFor="company" className={styles.label}>
          Nome da Empresa *
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={company}
          onChange={handleChange}
          className={`${styles.input} ${error ? styles.inputError : ''}`}
          placeholder="Digite o nome da empresa"
        />
        {error && (
          <span className={styles.errorText}>{error}</span>
        )}
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
          type="button"
        >
          <span>Continuar</span>
          <HiArrowRight className={styles.nextIcon} />
        </button>
      </div>
    </div>
  )
}
'use client'

import { useState, ChangeEvent } from 'react'
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi2'
import styles from './Steps.module.css'

interface Step8Props {
  onNext: (data: { description: string }) => void
  onBack: () => void
}

export default function Step8({ onNext, onBack }: Step8Props) {
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
    if (error) setError('')
  }

  const handleNext = () => {
    if (!description.trim()) {
      setError('Por favor, descreva brevemente seu projeto')
      return
    }
    if (description.trim().length < 20) {
      setError('A descrição deve ter pelo menos 20 caracteres')
      return
    }
    onNext({ description: description.trim() })
  }

  return (
    <div className={styles.stepContainer}>
      <h2 className={styles.title}>
        Conte-nos sobre seu projeto
      </h2>
      <p className={styles.description}>
        Descreva brevemente o desafio que você quer resolver e seus principais objetivos.
      </p>

      <div className={styles.formGroup}>
        <label htmlFor="description" className={styles.label}>
          Descrição do Projeto *
        </label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={handleChange}
          className={`${styles.textarea} ${error ? styles.inputError : ''}`}
          placeholder="Exemplo: Preciso automatizar o processo de vendas da minha empresa, integrando o CRM com WhatsApp e gerando relatórios automáticos..."
          rows={6}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
          {error ? (
            <span className={styles.errorText}>{error}</span>
          ) : (
            <span className={styles.helperText}>Mínimo 20 caracteres</span>
          )}
          <span className={styles.charCount}>{description.length} / 500</span>
        </div>
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
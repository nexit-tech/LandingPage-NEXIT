'use client'

import { useState, useEffect } from 'react'
import { HiArrowLeft, HiCheckCircle } from 'react-icons/hi2'
import LeadForm from '@/components/LeadForm/LeadForm'
import styles from './page.module.css'

interface FormData {
  company?: string
  companySize?: string
  needs?: string[]
  platforms?: string[]
  budget?: string
  timeline?: string
  description?: string
  name?: string
  email?: string
  phone?: string
  preferredContact?: string[]
}

export default function LeadCapture() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  // FORÇA CURSOR NORMAL E BACKGROUND CORRETO NO LEAD-CAPTURE
  useEffect(() => {
    // Cursor
    document.body.style.cursor = 'auto'
    const allElements = document.querySelectorAll('*')
    allElements.forEach(el => {
      (el as HTMLElement).style.cursor = 'auto'
    })

    // Background e tema
    document.body.style.backgroundColor = '#FAFAFA'
    document.body.classList.remove('dark-theme')

    return () => {
      document.body.style.cursor = 'none'
      // Não reseta o background aqui para evitar flash
    }
  }, [])

  const handleFormComplete = async (data: FormData) => {
    console.log('Form Data Submitted:', data)
    
    // Simula envio
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitted(true)
  }

  const handleBackToHome = () => {
    window.location.href = '/'
  }

  return (
    <div className={styles.page} style={{ cursor: 'auto' }}>
      {/* Botão Voltar */}
      <button 
        className={styles.backButton}
        onClick={handleBackToHome}
        aria-label="Voltar"
      >
        <HiArrowLeft className={styles.backIcon} />
      </button>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.container}>
          {!isSubmitted ? (
            <LeadForm onComplete={handleFormComplete} />
          ) : (
            <div className={styles.successContainer}>
              <div className={styles.successIcon}>
                <HiCheckCircle />
              </div>
              <h2 className={styles.successTitle}>
                Formulário Enviado com Sucesso!
              </h2>
              <p className={styles.successText}>
                Obrigado pelo seu interesse. Nossa equipe analisará suas informações 
                e entrará em contato em até 24 horas com uma proposta personalizada.
              </p>
              <button 
                onClick={handleBackToHome}
                className={styles.homeButton}
              >
                Voltar para Home
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
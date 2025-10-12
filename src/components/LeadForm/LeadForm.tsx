'use client'

import { useState } from 'react'
import ProgressBar from './ProgressBar/ProgressBar'
import Step1 from './Steps/Step1'
import Step2 from './Steps/Step2'
import Step3 from './Steps/Step3'
import Step4 from './Steps/Step4'
import Step5 from './Steps/Step5'
import Step6 from './Steps/Step6'
import Step7 from './Steps/Step7'
import Step8 from './Steps/Step8'
import Step9 from './Steps/Step9'
import styles from './LeadForm.module.css'

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

interface LeadFormProps {
  onComplete: (data: FormData) => void
}

export default function LeadForm({ onComplete }: LeadFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({})

  const totalSteps = 9

  const stepLabels = [
    'Introdução',
    'Identificação',
    'Equipe',
    'Necessidades',
    'Plataforma',
    'Orçamento',
    'Prazo',
    'Descrição',
    'Contato'
  ]

  // Step 1 - Introdução
  const handleStep1Next = () => {
    setCurrentStep(2)
  }

  // Step 2 - Empresa
  const handleStep2Next = (data: { company: string }) => {
    setFormData(prev => ({ ...prev, ...data }))
    setCurrentStep(3)
  }

  const handleStep2Back = () => {
    setCurrentStep(1)
  }

  // Step 3 - Colaboradores
  const handleStep3Next = (data: { companySize: string }) => {
    setFormData(prev => ({ ...prev, ...data }))
    setCurrentStep(4)
  }

  const handleStep3Back = () => {
    setCurrentStep(2)
  }

  // Step 4 - Necessidades
  const handleStep4Next = (data: { needs: string[] }) => {
    setFormData(prev => ({ ...prev, ...data }))
    setCurrentStep(5)
  }

  const handleStep4Back = () => {
    setCurrentStep(3)
  }

  // Step 5 - Plataformas
  const handleStep5Next = (data: { platforms: string[] }) => {
    setFormData(prev => ({ ...prev, ...data }))
    setCurrentStep(6)
  }

  const handleStep5Back = () => {
    setCurrentStep(4)
  }

  // Step 6 - Orçamento
  const handleStep6Next = (data: { budget: string }) => {
    setFormData(prev => ({ ...prev, ...data }))
    setCurrentStep(7)
  }

  const handleStep6Back = () => {
    setCurrentStep(5)
  }

  // Step 7 - Prazo
  const handleStep7Next = (data: { timeline: string }) => {
    setFormData(prev => ({ ...prev, ...data }))
    setCurrentStep(8)
  }

  const handleStep7Back = () => {
    setCurrentStep(6)
  }

  // Step 8 - Descrição
  const handleStep8Next = (data: { description: string }) => {
    setFormData(prev => ({ ...prev, ...data }))
    setCurrentStep(9)
  }

  const handleStep8Back = () => {
    setCurrentStep(7)
  }

  // Step 9 - Contato (Final)
  const handleStep9Submit = (data: { name: string; email: string; phone: string; preferredContact: string[] }) => {
    const finalData = { ...formData, ...data }
    setFormData(finalData)
    onComplete(finalData)
  }

  const handleStep9Back = () => {
    setCurrentStep(8)
  }

  return (
    <div className={styles.formContainer}>
      <ProgressBar 
        currentStep={currentStep} 
        totalSteps={totalSteps}
        stepLabel={`Etapa ${currentStep}: ${stepLabels[currentStep - 1]}`}
      />

      {currentStep === 1 && (
        <Step1 onNext={handleStep1Next} />
      )}

      {currentStep === 2 && (
        <Step2 onNext={handleStep2Next} onBack={handleStep2Back} />
      )}

      {currentStep === 3 && (
        <Step3 onNext={handleStep3Next} onBack={handleStep3Back} />
      )}

      {currentStep === 4 && (
        <Step4 onNext={handleStep4Next} onBack={handleStep4Back} />
      )}

      {currentStep === 5 && (
        <Step5 onNext={handleStep5Next} onBack={handleStep5Back} />
      )}

      {currentStep === 6 && (
        <Step6 onNext={handleStep6Next} onBack={handleStep6Back} />
      )}

      {currentStep === 7 && (
        <Step7 onNext={handleStep7Next} onBack={handleStep7Back} />
      )}

      {currentStep === 8 && (
        <Step8 onNext={handleStep8Next} onBack={handleStep8Back} />
      )}

      {currentStep === 9 && (
        <Step9 onSubmit={handleStep9Submit} onBack={handleStep9Back} />
      )}
    </div>
  )
}
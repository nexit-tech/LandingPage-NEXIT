'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import { HiCheckCircle, HiArrowLeft, HiExclamationCircle } from 'react-icons/hi2'
import { FaWhatsapp, FaDiscord, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { HiEnvelope } from 'react-icons/hi2'
import styles from './Steps.module.css'

interface Step9Props {
  onSubmit: (data: ContactData) => void
  onBack: () => void
  isSubmitting?: boolean
  submitError?: string | null
}

interface ContactData {
  name: string
  email: string
  phone: string
  preferredContact: string[]
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  preferredContact?: string
}

export default function Step9({ onSubmit, onBack, isSubmitting = false, submitError = null }: Step9Props) {
  const [formData, setFormData] = useState<ContactData>({
    name: '',
    email: '',
    phone: '',
    preferredContact: []
  })

  const [errors, setErrors] = useState<FormErrors>({})

  const contactMethods = [
    { id: 'whatsapp', icon: FaWhatsapp, label: 'WhatsApp' },
    { id: 'email', icon: HiEnvelope, label: 'E-mail' },
    { id: 'discord', icon: FaDiscord, label: 'Discord' },
    { id: 'instagram', icon: FaInstagram, label: 'Instagram' },
    { id: 'linkedin', icon: FaLinkedin, label: 'LinkedIn' }
  ]

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    const cleanPhone = phone.replace(/\D/g, '')
    return cleanPhone.length >= 10
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'E-mail inválido'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório'
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Telefone inválido (mínimo 10 dígitos)'
    }

    if (formData.preferredContact.length === 0) {
      newErrors.preferredContact = 'Selecione pelo menos uma forma de contato'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const toggleContactMethod = (id: string) => {
    setFormData(prev => ({
      ...prev,
      preferredContact: prev.preferredContact.includes(id)
        ? prev.preferredContact.filter(item => item !== id)
        : [...prev.preferredContact, id]
    }))
    if (errors.preferredContact) {
      setErrors(prev => ({ ...prev, preferredContact: undefined }))
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  return (
    <div className={styles.stepContainer}>
      <h2 className={styles.title}>
        Como prefere ser contatado?
      </h2>
      <p className={styles.description}>
        Preencha seus dados e escolha as plataformas onde prefere receber nossa proposta.
      </p>

      {/* Mensagem de erro global */}
      {submitError && (
        <div style={{
          padding: '16px',
          backgroundColor: '#FFF5F5',
          border: '1px solid #FFE5E5',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '24px'
        }}>
          <HiExclamationCircle style={{ fontSize: '24px', color: '#1A1A1A', flexShrink: 0 }} />
          <div>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: '#1A1A1A' }}>
              Erro ao enviar formulário
            </p>
            <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#6B6B6B' }}>
              {submitError}
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Nome Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            placeholder="Seu nome completo"
            disabled={isSubmitting}
          />
          {errors.name && (
            <span className={styles.errorText}>{errors.name}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            E-mail Corporativo *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            placeholder="seu@email.com"
            disabled={isSubmitting}
          />
          {errors.email && (
            <span className={styles.errorText}>{errors.email}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>
            Telefone / WhatsApp *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
            placeholder="(00) 0 0000-0000"
            disabled={isSubmitting}
          />
          {errors.phone && (
            <span className={styles.errorText}>{errors.phone}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>
            Plataformas de Contato Preferidas *
          </label>
          <div className={styles.contactMethodsGrid}>
            {contactMethods.map((method) => {
              const IconComponent = method.icon
              return (
                <div
                  key={method.id}
                  className={`${styles.contactMethod} ${formData.preferredContact.includes(method.id) ? styles.selected : ''} ${isSubmitting ? styles.disabled : ''}`}
                  onClick={() => !isSubmitting && toggleContactMethod(method.id)}
                >
                  <IconComponent className={styles.contactMethodIcon} />
                  <span>{method.label}</span>
                </div>
              )
            })}
          </div>
          {errors.preferredContact && (
            <span className={styles.errorText}>{errors.preferredContact}</span>
          )}
        </div>

        <div className={styles.buttonGroup}>
          <button
            className={styles.backButton}
            onClick={onBack}
            type="button"
            disabled={isSubmitting}
          >
            <HiArrowLeft className={styles.backIcon} />
            <span>Voltar</span>
          </button>

          <button
            type="submit"
            className={styles.nextButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span>Enviando...</span>
                <div className={styles.spinner}></div>
              </>
            ) : (
              <>
                <span>Finalizar Formulário</span>
                <HiCheckCircle className={styles.nextIcon} />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
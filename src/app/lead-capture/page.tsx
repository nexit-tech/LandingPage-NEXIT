'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import Link from 'next/link'
import { HiArrowLeft, HiCheckCircle, HiSparkles, HiRocketLaunch, HiDocumentText } from 'react-icons/hi2'
import styles from './page.module.css'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  company?: string
  message?: string
}

export default function LeadCapture() {
  // Estados
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // Funções de Validação
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
      newErrors.phone = 'Telefone inválido'
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Empresa é obrigatória'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handlers
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Form Data:', formData)
      
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      })
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href="/" className={styles.backLink}>
            <HiArrowLeft className={styles.backIcon} />
            <span>Voltar</span>
          </Link>
          <Link href="/" className={styles.logo}>
            NEXIT
          </Link>
          <div className={styles.spacer}></div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            {/* Lado Esquerdo: Informações */}
            <div className={styles.infoSection}>
              <h1 className={styles.title}>
                Vamos Transformar Seu Negócio
              </h1>
              <p className={styles.description}>
                Preencha o formulário e nossa equipe entrará em contato em até 24 horas 
                para uma conversa estratégica sem compromisso.
              </p>

              <div className={styles.benefits}>
                <div className={styles.benefit}>
                  <div className={styles.benefitIcon}>
                    <HiSparkles />
                  </div>
                  <div className={styles.benefitContent}>
                    <h3 className={styles.benefitTitle}>Análise Personalizada</h3>
                    <p className={styles.benefitText}>
                      Avaliamos seu cenário atual e identificamos oportunidades de automação
                    </p>
                  </div>
                </div>

                <div className={styles.benefit}>
                  <div className={styles.benefitIcon}>
                    <HiRocketLaunch />
                  </div>
                  <div className={styles.benefitContent}>
                    <h3 className={styles.benefitTitle}>Roadmap Estratégico</h3>
                    <p className={styles.benefitText}>
                      Apresentamos um plano detalhado com prazos e resultados esperados
                    </p>
                  </div>
                </div>

                <div className={styles.benefit}>
                  <div className={styles.benefitIcon}>
                    <HiDocumentText />
                  </div>
                  <div className={styles.benefitContent}>
                    <h3 className={styles.benefitTitle}>Proposta Transparente</h3>
                    <p className={styles.benefitText}>
                      Investimento claro e alinhado com os objetivos do seu negócio
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado Direito: Formulário */}
            <div className={styles.formSection}>
              {submitSuccess ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>
                    <HiCheckCircle />
                  </div>
                  <h2 className={styles.successTitle}>Mensagem Enviada!</h2>
                  <p className={styles.successText}>
                    Obrigado pelo seu interesse. Nossa equipe entrará em contato em breve.
                  </p>
                  <button 
                    onClick={() => setSubmitSuccess(false)}
                    className={styles.newMessageButton}
                  >
                    Enviar Nova Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <h2 className={styles.formTitle}>Fale Conosco</h2>

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
                    />
                    {errors.email && (
                      <span className={styles.errorText}>{errors.email}</span>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                      placeholder="(00) 0 0000-0000"
                    />
                    {errors.phone && (
                      <span className={styles.errorText}>{errors.phone}</span>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="company" className={styles.label}>
                      Empresa *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`${styles.input} ${errors.company ? styles.inputError : ''}`}
                      placeholder="Nome da sua empresa"
                    />
                    {errors.company && (
                      <span className={styles.errorText}>{errors.company}</span>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                      placeholder="Conte-nos sobre seu desafio e objetivos"
                      rows={5}
                    />
                    {errors.message && (
                      <span className={styles.errorText}>{errors.message}</span>
                    )}
                  </div>

                  <button 
                    type="submit" 
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
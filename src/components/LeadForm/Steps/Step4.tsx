'use client'

import { useState } from 'react'
import { HiCog, HiRocketLaunch, HiChartBar, HiCurrencyDollar, HiUsers, HiDocumentText, HiSparkles, HiChatBubbleLeftRight, HiArrowRight, HiArrowLeft } from 'react-icons/hi2'
import styles from './Steps.module.css'

interface Step4Props {
  onNext: (data: { needs: string[] }) => void
  onBack: () => void
}

export default function Step4({ onNext, onBack }: Step4Props) {
  const [selected, setSelected] = useState<string[]>([])

  const needs = [
    {
      id: 'automation',
      icon: HiCog,
      title: 'Automação de Processos',
      subtitle: 'Reduzir tarefas manuais repetitivas'
    },
    {
      id: 'integration',
      icon: HiSparkles,
      title: 'Integração de Sistemas',
      subtitle: 'Conectar ferramentas e plataformas'
    },
    {
      id: 'crm',
      icon: HiUsers,
      title: 'CRM Personalizado',
      subtitle: 'Gestão de clientes e vendas'
    },
    {
      id: 'dashboard',
      icon: HiChartBar,
      title: 'Dashboards e BI',
      subtitle: 'Visualização de dados e métricas'
    },
    {
      id: 'ecommerce',
      icon: HiCurrencyDollar,
      title: 'E-commerce',
      subtitle: 'Loja virtual completa'
    },
    {
      id: 'documentation',
      icon: HiDocumentText,
      title: 'Sistema de Gestão',
      subtitle: 'ERP, controle de estoque, etc'
    },
    {
      id: 'chatbot',
      icon: HiChatBubbleLeftRight,
      title: 'Chatbot/Atendimento',
      subtitle: 'Automatizar suporte ao cliente'
    },
    {
      id: 'scale',
      icon: HiRocketLaunch,
      title: 'Escalar Operações',
      subtitle: 'Crescer sem aumentar custos'
    }
  ]

  const toggleSelection = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(item => item !== id))
    } else {
      setSelected([...selected, id])
    }
  }

  const handleNext = () => {
    if (selected.length > 0) {
      onNext({ needs: selected })
    }
  }

  return (
    <div className={styles.stepContainer}>
      <h2 className={styles.title}>
        O que você precisa automatizar?
      </h2>
      <p className={styles.description}>
        Selecione todas as opções que se aplicam ao seu projeto. Você pode escolher múltiplas.
      </p>

      <div className={styles.optionsGrid} style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
        {needs.map((option) => {
          const IconComponent = option.icon
          const isSelected = selected.includes(option.id)
          
          return (
            <div
              key={option.id}
              className={`${styles.optionCard} ${isSelected ? styles.selected : ''}`}
              onClick={() => toggleSelection(option.id)}
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
          disabled={selected.length === 0}
          type="button"
        >
          <span>Continuar ({selected.length})</span>
          <HiArrowRight className={styles.nextIcon} />
        </button>
      </div>
    </div>
  )
}
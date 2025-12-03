'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { HiArrowLeft } from 'react-icons/hi2'
import NexChat from '@/components/NexChat/NexChat'
// Importa os estilos do LeadCapture para manter o botão "padrãozinho" (blur, hover, borda)
import styles from '../lead-capture/page.module.css' 

export default function NexChatPage() {
  const router = useRouter()

  useEffect(() => {
    // Configurações da página:
    // 1. Trava o scroll do body (quem rola é o chat)
    // 2. Garante o fundo claro
    // 3. Remove tema dark se estiver ativo
    document.body.style.overflow = 'hidden'
    document.body.style.height = '100vh' // Fallback
    document.body.style.height = '100dvh' // Moderno
    document.body.style.backgroundColor = '#F9F9F9' 
    document.body.classList.remove('dark-theme')

    return () => {
      // Limpeza ao sair da página
      document.body.style.overflow = ''
      document.body.style.height = ''
      document.body.style.backgroundColor = ''
    }
  }, [])

  const handleBackToHome = () => {
    router.push('/')
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      // Usa 100dvh (Dynamic Viewport Height) para ignorar barra de navegador mobile
      height: '100dvh', 
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#F9F9F9',
      zIndex: 9000
    }}>
      
      {/* BOTÃO VOLTAR
          - className: Traz o visual (blur, sombra, border)
          - style inline: Ajusta a posição para não colar no notch do iPhone
      */}
      <button 
        className={styles.backButton}
        onClick={handleBackToHome}
        aria-label="Voltar"
        style={{ 
          position: 'absolute', 
          top: '24px',  // Mais espaço do topo (respiro)
          left: '20px', // Mais espaço da borda
          zIndex: 50 
        }}
      >
        <HiArrowLeft className={styles.backIcon} />
      </button>

      {/* Container que segura o Chat no centro */}
      <div style={{ 
        flex: 1,
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        justifyContent: 'center',
        position: 'relative'
      }}>
        <NexChat />
      </div>
    </div>
  )
}
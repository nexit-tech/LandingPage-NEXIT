'use client'

import { useState, useRef, useEffect } from 'react'
import { HiArrowUp, HiSparkles } from 'react-icons/hi2'
import ReactMarkdown from 'react-markdown'
import styles from './NexChat.module.css'

interface Message {
  id: string
  role: 'user' | 'ai'
  content: string
}

export default function NexChat() {
  const N8N_URL = 'https://n8n-nexit-n8n.7rdajt.easypanel.host/webhook/nex-ia';
  const sessionId = useRef(Date.now()).current; 

  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  useEffect(() => {
    if (!isTyping && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isTyping])

  const simulateTyping = async (fullText: string, messageId: string) => {
    const typingSpeed = 15; 
    for (let i = 0; i <= fullText.length; i++) {
      setMessages(prev => prev.map(msg => 
        msg.id === messageId ? { ...msg, content: fullText.slice(0, i) } : msg
      ))
      await new Promise(resolve => setTimeout(resolve, typingSpeed))
      if (i % 5 === 0) scrollToBottom() 
    }
    setIsTyping(false)
  }

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!inputValue.trim() || isTyping) return

    const currentMsg = inputValue;
    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: currentMsg }
    
    setMessages(prev => [...prev, userMsg])
    setInputValue('')
    setIsTyping(true)

    const aiMsgId = (Date.now() + 1).toString()
    setMessages(prev => [...prev, { id: aiMsgId, role: 'ai', content: '' }])

    try {
      const response = await fetch(N8N_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: sessionId.toString(),      
          mensagem: currentMsg 
        })
      });

      if (!response.ok) throw new Error('Erro no servidor');

      const data = await response.json();
      const aiResponse = data.output || "Sem resposta.";

      await simulateTyping(aiResponse, aiMsgId);

    } catch (error) {
      console.error(error);
      setMessages(prev => prev.map(msg => 
        msg.id === aiMsgId ? { ...msg, content: "**Erro.** Não consegui conectar ao servidor." } : msg
      ));
      setIsTyping(false);
    }
  }

  return (
    <div className={styles.chatWrapper}>
      {/* Área de Mensagens */}
      <div className={styles.messagesArea}>
        
        {/* Placeholder Central (Estado Vazio) */}
        {messages.length === 0 && (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>
              <HiSparkles />
            </div>
            <h2 className={styles.emptyTitle}>FALE COM A NEXIT</h2>
            <p className={styles.emptyText}>
              Estou aqui para ajudar a escalar seu negócio com automação inteligente.
            </p>
          </div>
        )}

        {/* Espaçador para o topo */}
        <div style={{ height: '60px', flexShrink: 0 }}></div> 
        
        {/* Lista de Mensagens (Sem Header, Sem Avatares) */}
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`${styles.messageRow} ${msg.role === 'user' ? styles.userRow : styles.aiRow}`}
          >
            <div className={styles.messageTextBlock}>
              {msg.role === 'ai' ? (
                <div className={styles.markdownContent}>
                  {msg.content ? <ReactMarkdown>{msg.content}</ReactMarkdown> : null}
                </div>
              ) : (
                msg.content
              )}
            </div>
          </div>
        ))}
        
        {/* Indicador de Digitação (Sem avatar) */}
        {isTyping && messages[messages.length - 1].content === '' && (
          <div className={`${styles.messageRow} ${styles.aiRow}`}>
            <div className={styles.typingIndicator}>
              <span></span><span></span><span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area (Cápsula) */}
      <div className={styles.inputArea}>
        <form onSubmit={handleSendMessage} className={`${styles.inputContainer} ${isTyping ? styles.disabled : ''}`}>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={isTyping ? "NEX está pensando..." : "Pergunte algo ao NEX..."}
            className={styles.input}
            disabled={isTyping}
          />
          <button type="submit" className={styles.sendButton} disabled={!inputValue.trim() || isTyping}>
            <HiArrowUp />
          </button>
        </form>
        <p className={styles.disclaimer}>
          NEX AI pode cometer erros. Considere verificar informações importantes.
        </p>
      </div>
    </div>
  )
}
import { NextRequest, NextResponse } from 'next/server'
import { insertLead, Lead } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    console.log('🔵 API chamada - iniciando...')
    
    // Parse do body
    const body = await request.json()
    console.log('🔵 Body recebido:', JSON.stringify(body, null, 2))

    // Validação básica
    if (!body.company || !body.name || !body.email) {
      console.log('❌ Validação falhou - campos faltando')
      return NextResponse.json(
        { error: 'Campos obrigatórios faltando' },
        { status: 400 }
      )
    }

    // Preparar dados para inserção
    const leadData: Omit<Lead, 'id' | 'created_at' | 'status' | 'notes'> = {
      company: body.company,
      company_size: body.companySize,
      needs: body.needs || [],
      platforms: body.platforms || [],
      budget: body.budget,
      timeline: body.timeline,
      description: body.description,
      name: body.name,
      email: body.email,
      phone: body.phone,
      preferred_contact: body.preferredContact || []
    }

    console.log('🔵 Dados preparados:', JSON.stringify(leadData, null, 2))

    // Verificar se as variáveis de ambiente existem
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.error('❌ ERRO: Variáveis de ambiente do Supabase não configuradas!')
      return NextResponse.json(
        { 
          error: 'Configuração do servidor incorreta',
          details: 'Variáveis de ambiente do Supabase não encontradas'
        },
        { status: 500 }
      )
    }

    console.log('🔵 Tentando inserir no Supabase...')
    
    // Inserir no Supabase
    const insertedLead = await insertLead(leadData)

    console.log('✅ Lead inserido com sucesso:', insertedLead.id)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead cadastrado com sucesso',
        leadId: insertedLead.id 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('❌ ERRO COMPLETO:', error)
    
    // Log detalhado do erro
    if (error instanceof Error) {
      console.error('❌ Mensagem:', error.message)
      console.error('❌ Stack:', error.stack)
    }
    
    return NextResponse.json(
      { 
        error: 'Erro ao processar seu pedido. Tente novamente.',
        details: error instanceof Error ? error.message : 'Erro desconhecido',
        stack: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    )
  }
}

// Endpoint para testar a API
export async function GET() {
  console.log('🔵 GET /api/submit-lead chamado')
  
  // Verificar variáveis de ambiente
  const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL
  const hasKey = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  return NextResponse.json({ 
    status: 'ok', 
    message: 'API de leads funcionando',
    config: {
      supabaseUrl: hasUrl ? 'configurado ✅' : 'NÃO CONFIGURADO ❌',
      supabaseKey: hasKey ? 'configurado ✅' : 'NÃO CONFIGURADO ❌'
    }
  })
}
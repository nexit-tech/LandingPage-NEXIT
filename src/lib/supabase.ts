import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Faltam as variáveis de ambiente do Supabase. Configure NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY no arquivo .env.local')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos TypeScript para o banco
export interface Lead {
  id?: string
  created_at?: string
  company: string
  company_size: string
  needs: string[]
  platforms: string[]
  budget: string
  timeline: string
  description: string
  name: string
  email: string
  phone: string
  preferred_contact: string[]
  status?: string
  notes?: string
}

// Função helper para inserir um lead
export async function insertLead(leadData: Omit<Lead, 'id' | 'created_at' | 'status' | 'notes'>) {
  const { data, error } = await supabase
    .from('leads')
    .insert([leadData])
    .select()
    .single()

  if (error) {
    console.error('Erro ao inserir lead:', error)
    throw error
  }

  return data
}

// Função helper para buscar todos os leads (para o admin)
export async function fetchLeads() {
  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Erro ao buscar leads:', error)
    throw error
  }

  return data
}

// Função helper para atualizar o status de um lead
export async function updateLeadStatus(id: string, status: string, notes?: string) {
  const { data, error } = await supabase
    .from('leads')
    .update({ status, notes })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Erro ao atualizar lead:', error)
    throw error
  }

  return data
}
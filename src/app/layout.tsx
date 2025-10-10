import type { Metadata } from 'next'
import { Roboto_Mono, Rubik_Mono_One } from 'next/font/google'
import './globals.css'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-roboto-mono',
})

const rubikMonoOne = Rubik_Mono_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-rubik-mono-one',
})

export const metadata: Metadata = {
  title: 'NEXIT - Sua Próxima Saída Para Automação Inteligente',
  description: 'Transformamos processos complexos em fluxos automatizados que escalam seu negócio. Soluções personalizadas que entregam resultados mensuráveis.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${robotoMono.variable} ${rubikMonoOne.variable}`}>
        {children}
      </body>
    </html>
  )
}
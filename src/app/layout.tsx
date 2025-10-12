import type { Metadata } from "next";
import { Roboto_Mono, Rubik_Mono_One } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import BackgroundMorph from "@/components/BackgroundMorph/BackgroundMorph";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

const rubikMonoOne = Rubik_Mono_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rubik-mono-one",
});

export const metadata: Metadata = {
  title: "NEXIT - Automação Inteligente",
  description: "Transformamos processos complexos em fluxos automatizados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${robotoMono.variable} ${rubikMonoOne.variable}`}>
        <CustomCursor />
        <BackgroundMorph />
        {children}
      </body>
    </html>
  );
}
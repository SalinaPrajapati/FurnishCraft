import './globals.css'
import type { Metadata } from 'next'
import { Dosis } from 'next/font/google'

const dosis = Dosis({ weight:'600', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecommerce Site',
  description: 'Visted our store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={dosis.className}>{children}</body>
    </html>
  )
}

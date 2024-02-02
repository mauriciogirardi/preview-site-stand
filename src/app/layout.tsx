import './globals.css'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: {
    template: '%s | FBI',
    default: 'FBI'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={montserrat.variable}>
      <body className="bg-gray-700 text-white antialiased">{children}</body>
    </html>
  )
}

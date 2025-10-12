import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/shared/styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '경기도서관',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

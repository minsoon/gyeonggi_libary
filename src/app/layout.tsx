import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/shared/styles/globals.scss'
import Header from '@/shared/ui/header'

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
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

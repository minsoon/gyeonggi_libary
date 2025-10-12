import type { Metadata } from 'next'
import '@/shared/styles/globals.scss'

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
      <body>{children}</body>
    </html>
  )
}

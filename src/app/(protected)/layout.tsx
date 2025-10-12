import Header from '@/shared/ui/header'

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

import Header from '@/shared/ui/header'

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div style={{ padding: '10px' }}> {children}</div>
    </>
  )
}

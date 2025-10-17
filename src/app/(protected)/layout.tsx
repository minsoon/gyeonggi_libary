import Header from '@/shared/ui/header'

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='container'>
      <Header />
      <div> {children}</div>
    </div>
  )
}

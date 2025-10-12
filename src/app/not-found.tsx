import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontSize: '4rem', margin: '0', color: '#333' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', margin: '1rem 0', color: '#666' }}>페이지를 찾을 수 없습니다</h2>
      <p style={{ fontSize: '1rem', margin: '1rem 0', color: '#888' }}>
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <Link
          href='/login'
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#0070f3',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '0.5rem',
            marginRight: '1rem',
          }}
        >
          로그인으로 이동
        </Link>
      </div>
    </div>
  )
}

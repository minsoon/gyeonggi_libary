const Header = () => {
  return (
    <header>
      <h1>경기도 도서관</h1>
      <nav>
        <a href='/summary' style={{ marginRight: '1rem' }}>
          종합현황
        </a>
        <a href='/details' style={{ marginRight: '1rem' }}>
          상세현황
        </a>
        <a href='/statistics' style={{ marginRight: '1rem' }}>
          통계
        </a>
        <a href='/login'>로그아웃</a>
      </nav>
    </header>
  )
}

export default Header

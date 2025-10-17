import Link from 'next/link'
import { BellIcon, DetailsIcon, LogoutIcon, SettingIcon, StatisticsIcon, SummaryIcon } from '../icons'

const Header = () => {
  return (
    <header>
      <Link href='/summary' className='logo-section'>
        <img src='/logo.png' width={86} height={34} alt='로고 이미지' />
        <h1>경기도서관</h1>
      </Link>

      <nav>
        <div className='nav-group main-nav'>
          <Link href='/summary' className='nav-link'>
            <SummaryIcon />
            <span>종합현황</span>
          </Link>
          <Link href='/details' className='nav-link'>
            <DetailsIcon />
            <span>상세현황</span>
          </Link>
          <Link href='/statistics' className='nav-link'>
            <StatisticsIcon />
            <span>통계</span>
          </Link>
        </div>

        <div className='nav-group user-nav'>
          <Link href='/login' className='nav-link'>
            <SettingIcon />
          </Link>
          <Link href='/login' className='nav-link'>
            <BellIcon />
          </Link>
          <Link href='/login' className='nav-link'>
            <LogoutIcon />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header

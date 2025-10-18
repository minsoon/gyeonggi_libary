'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { deleteCookie } from '@/shared/utils/cookies'
import { BellIcon, DetailsIcon, LogoutIcon, SettingIcon, StatisticsIcon, SummaryIcon } from '../icons'

interface NavLinkProps {
  href: string
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode
  label?: string
}

const Header = () => {
  const router = useRouter()

  const handleLogout = () => {
    deleteCookie('auth_token')
    router.push('/login')
  }

  return (
    <header>
      <Link href='/summary' className='logo-section'>
        <img src='/logo.png' width={86} height={34} alt='로고 이미지' />
        <h1>경기도서관</h1>
      </Link>

      <nav>
        <div className='nav-group main-nav'>
          {navigationConfig.main.map(({ href, icon, label }) => (
            <NavLink key={href} href={href} icon={icon} label={label} />
          ))}
        </div>

        <div className='nav-group user-nav'>
          <Link href='/login' className='nav-link'>
            <SettingIcon />
          </Link>
          <Link href='/login' className='nav-link'>
            <BellIcon />
          </Link>
          <Link href='/login' onClick={handleLogout} className='nav-link'>
            <LogoutIcon />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header

const NavLink = ({ href, icon: Icon, label }: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href} className={`nav-link ${isActive ? 'active' : ''}`}>
      <Icon />
      {label && <span>{label}</span>}
    </Link>
  )
}
const navigationConfig = {
  main: [
    { href: '/summary', icon: SummaryIcon, label: '종합현황' },
    { href: '/details', icon: DetailsIcon, label: '상세현황' },
    { href: '/statistics', icon: StatisticsIcon, label: '통계' },
  ],
  user: [
    { href: '/settings', icon: SettingIcon },
    { href: '/alerts', icon: BellIcon },
    { href: '/login', icon: LogoutIcon },
  ],
}

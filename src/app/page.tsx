'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { isAuthenticated } from '@/shared/utils/cookies'

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated()) {
      router.push('/summary')
    } else {
      router.push('/login')
    }
  }, [router])

  // 로딩 중일 때 표시할 내용
  return <div className='loading-container'>로딩 중...</div>
}

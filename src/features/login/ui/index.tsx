'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { setCookie } from '@/shared/utils/cookies'
import styles from './login.module.scss'

const Login = () => {
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // TODO: 로그인 API 호출
      setCookie('auth_token', 'authenticated_user_token', 1)

      router.push('/summary')
    } catch (error) {
      console.error('로그인 실패:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={`${styles.loginContainer}`}>
      <div className={styles.card}>
        <h1 className={styles.title}>방문자 현황 분석 대시보드</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor='password' className={styles.label}>
              비밀번호
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder='비밀번호를 입력하세요'
              required
              className={styles.input}
            />
          </div>

          <button type='submit' disabled={isLoading || !password} className={styles.button}>
            {isLoading ? '로그인 중...' : '로그인'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login

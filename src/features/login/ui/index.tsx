'use client'

import { useState } from 'react'
import styles from './login.module.scss'

const Login = () => {
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // TODO: 실제 로그인 로직 구현
    console.log('Password:', password)

    // 임시 로딩 시뮬레이션
    setTimeout(() => {
      setIsLoading(false)
      // 로그인 성공 시 리다이렉트
      window.location.href = '/summary'
    }, 1000)
  }

  return (
    <div className={styles.loginContainer}>
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

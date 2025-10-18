import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

let globalErrorHandlerCallback: ((errorMessage: string, type: '401' | '500' | 'other') => void) | null = null

export const setGlobalErrorHandler = (callback: (errorMessage: string, type: '401' | '500' | 'other') => void) => {
  globalErrorHandlerCallback = callback
}

export const apiInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

apiInstance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    const response = error.response

    if (response) {
      globalErrorHandlerCallback?.(response.data.message, response.status.toString())
      if (response.status === 401) {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('accessToken')
          window.location.href = '/login'
        }
      }
    }
    return Promise.reject(error)
  }
)

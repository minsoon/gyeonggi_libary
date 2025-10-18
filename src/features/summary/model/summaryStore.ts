import { create } from 'zustand'
import { SummaryApiResult } from '@/entities/types/summary'

interface SummaryState {
  // API에서 리턴하는 데이터 그대로 저장
  realtimeData: SummaryApiResult['realtimeData'] | null
  cumulativeData: SummaryApiResult['cumulativeData'] | null
  revisitData: SummaryApiResult['revisitData'] | null
  residenceData: SummaryApiResult['residenceData'] | null

  // 로딩 상태
  isLoading: boolean
  error: string | null

  // 액션들
  setData: (data: SummaryApiResult) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
}

export const useSummaryStore = create<SummaryState>(set => ({
  // 초기 상태
  realtimeData: null,
  cumulativeData: null,
  revisitData: null,
  residenceData: null,
  isLoading: false,
  error: null,

  // 데이터 설정 (API에서 호출)
  setData: (data: SummaryApiResult) => {
    set({
      realtimeData: data.realtimeData,
      cumulativeData: data.cumulativeData,
      revisitData: data.revisitData,
      residenceData: data.residenceData,
    })
  },

  // 로딩 상태 설정
  setLoading: (loading: boolean) => set({ isLoading: loading }),

  // 에러 설정
  setError: (error: string | null) => set({ error }),
}))

// 선택적 셀렉터들 (성능 최적화를 위해)
export const useRealtimeData = () => useSummaryStore(state => state.realtimeData)
export const useRevisitData = () => useSummaryStore(state => state.revisitData)
export const useResidenceData = () => useSummaryStore(state => state.residenceData)
export const useCumulativeData = () => useSummaryStore(state => state.cumulativeData)
export const useSummaryLoading = () => useSummaryStore(state => state.isLoading)
export const useSummaryError = () => useSummaryStore(state => state.error)
export const useSummaryActions = () =>
  useSummaryStore(state => ({
    setData: state.setData,
    setLoading: state.setLoading,
    setError: state.setError,
  }))

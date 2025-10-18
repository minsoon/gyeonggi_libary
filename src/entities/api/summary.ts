import {
  processRealtimeData,
  processRealtimeGraphData,
  processResidenceData,
  processRevisitData,
} from '@/entities/model/summary'
import { SummaryApiParams, SummaryApiResult } from '@/entities/types/summary'
import { useSummaryStore } from '@/features/summary/model/summaryStore'
import { dateUtils } from '@/shared/utils/date'
import {
  fetchCumulativeHeadcount,
  fetchDeviceCountRevisit,
  fetchDeviceResidenceTime,
  fetchRealtimeHeadcount,
} from './index'

export const fetchSummaryData = async (params?: SummaryApiParams): Promise<SummaryApiResult> => {
  try {
    // 날짜 유틸리티 사용
    const todayDateTimeStr = dateUtils.getRealtimeDateTime()
    const yesterdayDateTimeStr = dateUtils.getYesterdayRealtimeDateTime()
    const lastWeekDateTimeStr = dateUtils.getLastWeekRealtimeDateTime()

    const yesterdayStr = dateUtils.getYesterdayDate()
    const dayBeforeYesterdayStr = dateUtils.getDayBeforeYesterdayDate()

    // 실시간 인원 및 혼잡도 조회(현재, 전일, 지난주)
    // 현재 시간부터 6시간 전까지의 데이터를 받아오기 위한 to 시간 설정
    const todayToStr = dateUtils.formatDateTime(dateUtils.roundTo10Minutes(dateUtils.now().subtract(6, 'hour')))

    const [realtimeCurrent, realtimeYesterday, realtimeLastWeek, realtimeCurrent6h] = await Promise.all([
      fetchRealtimeHeadcount({ ...params?.realtimeParams, from: todayDateTimeStr, to: todayDateTimeStr }),
      fetchRealtimeHeadcount({ ...params?.realtimeParams, from: yesterdayDateTimeStr, to: yesterdayDateTimeStr }),
      fetchRealtimeHeadcount({ ...params?.realtimeParams, from: lastWeekDateTimeStr, to: lastWeekDateTimeStr }),
      fetchRealtimeHeadcount({ ...params?.realtimeParams, from: todayToStr, to: todayDateTimeStr }),
    ])

    // 전체 누적인원 조회
    const cumulativeData = await fetchCumulativeHeadcount()

    // 1일 단위 재방문자 수 데이터 조회(전일, 전전일)
    const [revisitYesterday, revisitDayBeforeYesterday] = await Promise.all([
      fetchDeviceCountRevisit({ ...params?.revisitParams, from: yesterdayStr, to: yesterdayStr }),
      fetchDeviceCountRevisit({ ...params?.revisitParams, from: dayBeforeYesterdayStr, to: dayBeforeYesterdayStr }),
    ])

    // 1일 단위 평균 체류 시간 데이터 조회(전일, 전전일)
    const [residenceYesterday, residenceDayBeforeYesterday] = await Promise.all([
      fetchDeviceResidenceTime({ ...params?.residenceParams, from: yesterdayStr, to: yesterdayStr }),
      fetchDeviceResidenceTime({ ...params?.residenceParams, from: dayBeforeYesterdayStr, to: dayBeforeYesterdayStr }),
    ])

    return {
      realtimeData: {
        current: processRealtimeData(realtimeCurrent),
        yesterday: processRealtimeData(realtimeYesterday),
        lastWeek: processRealtimeData(realtimeLastWeek),
        currentGraph: processRealtimeGraphData(realtimeCurrent6h),
      },
      cumulativeData: cumulativeData,
      revisitData: {
        yesterday: processRevisitData(revisitYesterday),
        dayBeforeYesterday: processRevisitData(revisitDayBeforeYesterday),
      },
      residenceData: {
        yesterday: processResidenceData(residenceYesterday),
        dayBeforeYesterday: processResidenceData(residenceDayBeforeYesterday),
      },
    }
  } catch (error) {
    console.error('Summary API 호출 오류:', error)
    throw error
  }
}

/**
 * 기본 파라미터로 API를 호출하는 함수
 * @returns Promise<SummaryApiResult>
 */
export const fetchSummaryDataWithDefaults = async (): Promise<SummaryApiResult> => {
  const { setData, setLoading, setError } = useSummaryStore.getState()

  try {
    setLoading(true)
    setError(null)

    const data = await fetchSummaryData()

    // Zustand store에 데이터 저장
    setData(data)

    return data
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : '데이터를 가져오는 중 오류가 발생했습니다.'
    setError(errorMessage)
    throw error
  } finally {
    setLoading(false)
  }
}

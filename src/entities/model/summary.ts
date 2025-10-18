import {
  DeviceCountRevisitResponse,
  DeviceResidenceTimeResponse,
  RealtimeHeadcountResponse,
} from '@/entities/types/apis'

// 총 인원수 계산 유틸리티 함수
export const calculateTotal = <T extends { data: number }>(data: T[]): number => {
  return data.reduce((sum, item) => sum + item.data, 0)
}

// 실시간 데이터 처리 헬퍼 함수
export const processRealtimeData = (data: RealtimeHeadcountResponse) => ({
  data,
  totalData: calculateTotal(data),
  totalCongestion: data.length > 0 ? Math.round(data.reduce((sum, item) => sum + item.congestion, 0) / data.length) : 0,
})

// 재방문자 데이터 처리 헬퍼 함수
export const processRevisitData = (data: DeviceCountRevisitResponse) => ({
  data,
  totalData: calculateTotal(data),
})

// 체류시간 데이터 처리 헬퍼 함수 (초 → 분 변환)
export const processResidenceData = (data: DeviceResidenceTimeResponse) => ({
  data,
  totalData: data.length > 0 ? Math.round(calculateTotal(data) / data.length / 60) : 0,
})

// 그래프용 실시간 데이터 처리 헬퍼 함수 (시간별 그룹화)
export const processRealtimeGraphData = (data: RealtimeHeadcountResponse) => {
  // 시간 단위로 그룹화 (YYYY-MM-DDTHH:00:00.000Z 형식으로 변환)
  const groupedByHour = data.reduce(
    (acc, item) => {
      const timeKey = item.time.replace(/:\d{2}:\d{2}\.\d{3}Z$/, ':00:00.000Z') // 분, 초를 00으로 변경
      if (!acc[timeKey]) {
        acc[timeKey] = []
      }
      acc[timeKey].push(item)
      return acc
    },
    {} as Record<string, RealtimeHeadcountResponse>
  )

  // 각 시간별로 data와 congestion의 평균값 계산
  const processedData = Object.entries(groupedByHour).map(([time, items]) => ({
    time,
    data: calculateTotal(items),
    congestion: items.length > 0 ? Math.round(items.reduce((sum, item) => sum + item.congestion, 0) / items.length) : 0,
    status: items[0]?.status || '원활', // 첫 번째 아이템의 상태 사용
  }))

  return {
    data: processedData,
    totalData: calculateTotal(data),
    totalCongestion:
      data.length > 0 ? Math.round(data.reduce((sum, item) => sum + item.congestion, 0) / data.length) : 0,
  }
}

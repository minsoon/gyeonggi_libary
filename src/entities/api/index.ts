import {
  CumulativeHeadcountResponse,
  DeviceCountMonthlyParams,
  DeviceCountMonthlyResponse,
  DeviceCountRevisitParams,
  DeviceCountRevisitResponse,
  DeviceResidenceTimeParams,
  DeviceResidenceTimeResponse,
  DeviceStatusResponse,
  RealtimeHeadcountParams,
  RealtimeHeadcountResponse,
} from '@/entities/types/apis'
import { apiInstance } from '@/shared/api/axios-instance'

// 실시간 인원 및 혼잡도 조회
export const fetchRealtimeHeadcount = async (params?: RealtimeHeadcountParams): Promise<RealtimeHeadcountResponse> => {
  const { data } = await apiInstance.get(`/v1/GG_LIB/RealtimeHeadcount`, {
    params: {
      ...params,
    },
  })
  return data
}
// 실시간 전체 누적인원 조회
export const fetchCumulativeHeadcount = async (): Promise<CumulativeHeadcountResponse> => {
  const { data } = await apiInstance.get(`/v1/GG_LIB/CumulativeHeadcount`)
  return data
}

// 1일 단위 재방문자 수 데이터 조회
export const fetchDeviceCountRevisit = async (
  params?: DeviceCountRevisitParams
): Promise<DeviceCountRevisitResponse> => {
  const { data } = await apiInstance.get(`/v1/GG_LIB/DeviceCountRevisit`, {
    params,
  })
  return data
}
// 1일 단위 평균 체류 시간 데이터 조회
export const fetchDeviceResidenceTime = async (
  params?: DeviceResidenceTimeParams
): Promise<DeviceResidenceTimeResponse> => {
  const { data } = await apiInstance.get(`/v1/GG_LIB/DeviceResidenceTime`, {
    params,
  })
  return data
}

// 월 누적 방문자 조회
export const fetchDeviceCountMonthly = async (
  params?: DeviceCountMonthlyParams
): Promise<DeviceCountMonthlyResponse> => {
  const { data } = await apiInstance.get(`/v1/GG_LIB/DeviceCountMonthly`, {
    params,
  })
  return data
}

// 디바이스 상태 (on / off) 조회
export const fetchDeviceStatus = async (): Promise<DeviceStatusResponse> => {
  const { data } = await apiInstance.get(`/v1/GG_LIB/DeviceStatus`)
  return data
}

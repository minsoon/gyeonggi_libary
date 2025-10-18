// RealtimeHeadcount API 타입 정의
export interface RealtimeHeadcountItem {
  zone: string // 해당 지역명
  data: number // 측정된 방문자 수
  status: '원활' | '보통' | '혼잡' | '매우혼잡' // 혼잡도 상태
  congestion: number // 혼잡도 수치(%)
  time: string // 분석시간 (ISO 8601 형식)
}

export type RealtimeHeadcountResponse = RealtimeHeadcountItem[] & {
  totalData?: number
}

// API 요청 파라미터 타입
export interface RealtimeHeadcountParams {
  from?: string // 시작 날짜 (YYYYMMDDHHMM 형식)
  to?: string // 종료 날짜 (YYYYMMDDHHMM 형식, 해당일 포함하지 않음)
  unit?: string // 단위 (기본값: 10m)
}

// CumulativeHeadcount API 타입 정의
export interface CumulativeHeadcountItem {
  data: number // 전체 누적 인원 수
}

export type CumulativeHeadcountResponse = CumulativeHeadcountItem[]

// DeviceCountRevisit API 타입 정의
export interface DeviceCountRevisitItem {
  zone: string // 해당 지역명
  data: number // 측정된 방문자 수
  time: string // 분석시간 (ISO 8601 형식)
}

export type DeviceCountRevisitResponse = DeviceCountRevisitItem[]

// DeviceCountRevisit API 요청 파라미터 타입
export interface DeviceCountRevisitParams {
  from?: string // 시작 날짜 (YYYYMMDD 형식)
  to?: string // 종료 날짜 (YYYYMMDD 형식, 해당일 포함하지 않음)
}

// DeviceResidenceTime API 타입 정의
export interface DeviceResidenceTimeItem {
  zone: string // 해당 지역명
  data: number // 체류시간 (초)
  time: string // 분석시간 (ISO 8601 형식)
}

export type DeviceResidenceTimeResponse = DeviceResidenceTimeItem[]

// DeviceResidenceTime API 요청 파라미터 타입
export interface DeviceResidenceTimeParams {
  from?: string // 시작 날짜 (YYYYMMDD 형식)
  to?: string // 종료 날짜 (YYYYMMDD 형식, 해당일 포함하지 않음)
}

// DeviceCountMonthly API 타입 정의
export interface DeviceCountMonthlyItem {
  zone: string // 해당 지역명
  data: number // 월방문자 합산 수
  time: string // 신호가 수집된 날짜와 시각 (ISO 8601 형식)
}

export type DeviceCountMonthlyResponse = DeviceCountMonthlyItem[]

// DeviceCountMonthly API 요청 파라미터 타입
export interface DeviceCountMonthlyParams {
  date?: string // 년도와 월 (YYYYMM 형식)
}

// DeviceStatus API 타입 정의
export interface DeviceStatusItem {
  MAC: string // 장비의 MAC 주소
  ALIVE: 0 | 1 // 디바이스 상태 (0: off, 1: on)
}

export type DeviceStatusResponse = DeviceStatusItem[]

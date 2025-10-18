import {
  CumulativeHeadcountResponse,
  DeviceCountMonthlyResponse,
  DeviceCountRevisitResponse,
  DeviceResidenceTimeResponse,
  RealtimeHeadcountResponse,
} from './apis'

export interface SummaryApiResult {
  realtimeData: {
    current: {
      data: RealtimeHeadcountResponse
      totalData: number
      totalCongestion: number
    }
    yesterday: {
      data: RealtimeHeadcountResponse
      totalData: number
      totalCongestion: number
    }
    lastWeek: {
      data: RealtimeHeadcountResponse
      totalData: number
      totalCongestion: number
    }
    currentGraph: {
      data: Array<{
        time: string
        data: number
        congestion: number
        status: string
      }>
      totalData: number
      totalCongestion: number
    }
  }
  cumulativeData: CumulativeHeadcountResponse
  revisitData: {
    yesterday: {
      data: DeviceCountRevisitResponse
      totalData: number
    }
    dayBeforeYesterday: {
      data: DeviceCountRevisitResponse
      totalData: number
    }
  }
  residenceData: {
    yesterday: {
      data: DeviceResidenceTimeResponse
      totalData: number
    }
    dayBeforeYesterday: {
      data: DeviceResidenceTimeResponse
      totalData: number
    }
  }
  monthlyData?: DeviceCountMonthlyResponse
}

export interface SummaryApiParams {
  realtimeParams?: import('./apis').RealtimeHeadcountParams
  revisitParams?: import('./apis').DeviceCountRevisitParams
  residenceParams?: import('./apis').DeviceResidenceTimeParams
  monthlyParams?: import('./apis').DeviceCountMonthlyParams
}

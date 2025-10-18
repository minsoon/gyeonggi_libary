import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

// dayjs 플러그인 설정
dayjs.extend(utc)
dayjs.extend(timezone)

/**
 * 한국 시간대(KST) 기준으로 현재 시간을 반환
 */
export const getNowKST = () => dayjs().tz('Asia/Seoul')

/**
 * 10분 단위로 반내림한 날짜시간을 반환
 * @param date dayjs 객체
 * @returns 10분 단위로 반내림된 dayjs 객체
 */
export const roundTo10Minutes = (date: dayjs.Dayjs) => {
  const minutes = date.minute()
  const roundedMinutes = Math.floor(minutes / 10) * 10
  return date.minute(roundedMinutes).second(0).millisecond(0)
}

/**
 * YYYYMMDD 형식으로 날짜를 포맷
 * @param date dayjs 객체
 * @returns YYYYMMDD 형식 문자열
 */
export const formatDate = (date: dayjs.Dayjs) => date.format('YYYYMMDD')

/**
 * YYYYMMDDHHMM 형식으로 날짜시간을 포맷
 * @param date dayjs 객체
 * @returns YYYYMMDDHHMM 형식 문자열
 */
export const formatDateTime = (date: dayjs.Dayjs) => date.format('YYYYMMDDHHmm')

/**
 * 시간 문자열에서 시간만 추출
 */
export const formatHourFromKST = (timeString: string) => {
  const time = dayjs(timeString)
  const utcTime = time.utc()

  return `${utcTime.format('HH')}시`
}

/**
 * 날짜 관련 유틸리티 함수들
 */
export const dateUtils = {
  // 현재 시간 (한국 시간대)
  now: getNowKST,

  // 어제
  yesterday: () => getNowKST().subtract(1, 'day'),

  // 그저께
  dayBeforeYesterday: () => getNowKST().subtract(2, 'day'),

  // 지난주
  lastWeek: () => getNowKST().subtract(7, 'day'),

  // 10분 단위 반내림
  roundTo10Minutes,

  // 포맷팅
  formatDate,
  formatDateTime,

  // 실시간 인원용 날짜시간 (10분 단위 반내림 적용)
  getRealtimeDateTime: () => formatDateTime(roundTo10Minutes(getNowKST())),
  getYesterdayRealtimeDateTime: () => formatDateTime(roundTo10Minutes(getNowKST().subtract(1, 'day'))),
  getLastWeekRealtimeDateTime: () => formatDateTime(roundTo10Minutes(getNowKST().subtract(7, 'day'))),

  // 재방문자/체류시간용 날짜
  getYesterdayDate: () => formatDate(getNowKST().subtract(1, 'day')),
  getDayBeforeYesterdayDate: () => formatDate(getNowKST().subtract(2, 'day')),
}

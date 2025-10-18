'use client'

import React, { useEffect } from 'react'
import { Divider } from 'antd'
import { fetchSummaryDataWithDefaults } from '@/entities/api/summary'
import { useSummaryStore } from '@/features/summary/model/summaryStore'
import Calendar from '@/features/summary/ui/calendar'
import RealtimeFloorDistribution from '@/features/summary/ui/realtimeFloorDistribution'
import RealtimeVisitorInfo from '@/features/summary/ui/realtimeVisitorInfo'
import StatisticsCard from '@/features/summary/ui/statisticsCard'
import styles from '@/features/summary/ui/summary.module.scss'
import VisitorBarChart from '@/features/summary/ui/visitorBarChart'
import Weather from '@/features/summary/ui/weather'

const SummaryWidget: React.FC = () => {
  const { realtimeData, cumulativeData, revisitData, residenceData } = useSummaryStore()

  const loadSummaryData = async () => {
    try {
      await fetchSummaryDataWithDefaults()
    } catch (err) {
      console.error('API 호출 오류:', err)
    }
  }

  useEffect(() => {
    loadSummaryData()
  }, [])

  // 실시간 데이터 값들을 미리 계산
  const currentTotalData = realtimeData?.current?.totalData || 0
  const yesterdayTotalData = realtimeData?.yesterday?.totalData || 0
  const compareValue = currentTotalData - yesterdayTotalData

  // 재방문 인원 데이터 계산
  const revisitCount = revisitData?.yesterday?.totalData || 0
  const revisitCompareValue =
    (revisitData?.yesterday?.totalData || 0) - (revisitData?.dayBeforeYesterday?.totalData || 0)

  // 평균 체류 시간 데이터 계산 (이미 분 단위로 변환됨)
  const avgStayTime = residenceData?.yesterday?.totalData || 0
  const avgStayTimeCompareValue =
    residenceData?.yesterday?.totalData !== undefined && residenceData?.dayBeforeYesterday?.totalData !== undefined
      ? residenceData.yesterday.totalData - residenceData.dayBeforeYesterday.totalData
      : 0

  return (
    <section className={styles.dashboard}>
      <div className={styles.header}>
        <h2>방문 인원 & 혼잡도 종합현황</h2>
        <div className={styles.headerContent}>
          <Divider type='vertical' />
          <p>도서관 방문자 현황을 10분 주기로 실시간 분석하여 업데이트 합니다.</p>
        </div>
      </div>

      <div className={styles.dashboardGrid}>
        <StatisticsCard
          title='실시간 체류 인원'
          titleValue={currentTotalData}
          compareValue={compareValue}
          type='realtimeVisitors'
        />
        <StatisticsCard
          title='오늘 누적 방문 인원'
          titleValue={cumulativeData?.[0]?.data || 0}
          compareValue={30}
          type='todayVisitors'
        />
        <StatisticsCard
          title='재방문 인원'
          titleValue={revisitCount}
          compareValue={revisitCompareValue}
          type='returnVisitors'
        />
        <StatisticsCard
          title='평균 체류 시간'
          titleValue={avgStayTime}
          compareValue={avgStayTimeCompareValue}
          type='avgStayTime'
        />
        <VisitorBarChart />
        <RealtimeFloorDistribution />
        <Weather />
        <RealtimeVisitorInfo />
        <Calendar />
      </div>
    </section>
  )
}

export default SummaryWidget

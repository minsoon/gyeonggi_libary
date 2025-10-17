import { Divider } from 'antd'
import Calendar from '@/features/summary/ui/calendar'
import FloorDistribution from '@/features/summary/ui/realtimeFloorDistribution'
import RealtimeFloorDistribution from '@/features/summary/ui/realtimeFloorDistribution'
import RealtimeVisitorInfo from '@/features/summary/ui/realtimeVisitorInfo'
import StatisticsCard from '@/features/summary/ui/statisticsCard'
import styles from '@/features/summary/ui/summary.module.scss'
import VisitorBarChart from '@/features/summary/ui/visitorBarChart'
import Weather from '@/features/summary/ui/weather'

const SummaryWidget = () => {
  return (
    <section className={styles.dashboard}>
      <div className={styles.header}>
        <h2>방문 인원 & 혼잡도 종합현황</h2>
        <Divider type='vertical' />
        <p>도서관 방문자 현황을 10분 주기로 실시간 분석하여 업데이트 합니다.</p>
      </div>

      <div className={styles.dashboardGrid}>
        <StatisticsCard
          title='실시간 체류 인원'
          value='187명'
          change='121명 전일 대비'
          className={styles.realtimeVisitors}
        />
        <StatisticsCard
          title='오늘 누적 방문 인원'
          value='234명'
          change='30명 전일 대비'
          className={styles.todayVisitors}
        />
        <StatisticsCard title='재방문 인원' value='76명' change='▲ 12명 전일 대비' className={styles.returnVisitors} />
        <StatisticsCard title='평균 체류 시간' value='112분' change='▲ 12분 전일 대비' className={styles.avgStayTime} />
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

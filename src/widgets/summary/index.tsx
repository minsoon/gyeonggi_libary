import { Divider } from 'antd'
import Calendar from '@/features/summary/ui/calendar'
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
        <div className={styles.headerContent}>
          <Divider type='vertical' />
          <p>도서관 방문자 현황을 10분 주기로 실시간 분석하여 업데이트 합니다.</p>
        </div>
      </div>

      <div className={styles.dashboardGrid}>
        <StatisticsCard title='실시간 체류 인원' titleValue={181} compareValue={-10} type='realtimeVisitors' />
        <StatisticsCard title='오늘 누적 방문 인원' titleValue={234} compareValue={30} type='todayVisitors' />
        <StatisticsCard title='재방문 인원' titleValue={76} compareValue={0} type='returnVisitors' />
        <StatisticsCard title='평균 체류 시간' titleValue={112} compareValue={-12} type='avgStayTime' />
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

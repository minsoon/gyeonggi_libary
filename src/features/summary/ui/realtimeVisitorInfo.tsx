import Card from '@/shared/ui/card'
import cardStyles from '@/shared/ui/card/card.module.scss'
import VisitorLineChart from '@/shared/ui/visitorLineChart.tsx'
import styles from './summary.module.scss'

const RealtimeVisitorInfo = () => {
  return (
    <Card className={styles.lineChartContainer}>
      <div className={styles.titleContainer}>
        <span className={cardStyles.title}>실시간 방문인원 및 혼잡도</span>
        <div className={styles.realtimeBadge}>
          <img src='/icon/sync.svg' alt='sync icon' width={20} height={20} />
          <span>실시간 업데이트 중</span>
        </div>
      </div>
      <VisitorLineChart />
    </Card>
  )
}

export default RealtimeVisitorInfo

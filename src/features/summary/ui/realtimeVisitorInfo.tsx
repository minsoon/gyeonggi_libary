import Card from '@/shared/ui/card'
import cardStyles from '@/shared/ui/card/card.module.scss'
import VisitorLineChart from '@/shared/ui/visitorLineChart.tsx'
import styles from './summary.module.scss'

const RealtimeVisitorInfo = () => {
  return (
    <Card className={styles.lineChartContainer}>
      <div>
        <strong className={cardStyles.title}>실시간 방문인원 및 혼잡도</strong>
        <span className={styles.updateStatus}>실시간 업데이트 중</span>
      </div>
      <VisitorLineChart />
    </Card>
  )
}

export default RealtimeVisitorInfo

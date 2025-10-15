import Card from '@/shared/ui/card'
import styles from './summary.module.scss'

interface StatisticsCardProps {
  title: string
  value: string
  change: string
  className: string
}

const StatisticsCard = ({ title, value, change, className }: StatisticsCardProps) => {
  return (
    <Card className={className}>
      <div>
        <strong className={styles.statValue}>{value}</strong>
        <div className={styles.statHeader}>{title}</div>
      </div>
      <div className={styles.statChange}>{change}</div>
    </Card>
  )
}

export default StatisticsCard

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
      <div className={`${styles.statChange}`}>
        {/* <img src='/icon/arrow-increase.svg' width={16} height={16} alt='상세보기' /> */}
        <span>{change}</span>
      </div>
    </Card>
  )
}

export default StatisticsCard

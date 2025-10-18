import Card from '@/shared/ui/card'
import styles from './summary.module.scss'

interface StatisticsCardProps {
  title: string
  titleValue: number
  compareValue: number
  type: 'realtimeVisitors' | 'todayVisitors' | 'returnVisitors' | 'avgStayTime'
}

const StatisticsCard = ({ title, titleValue, compareValue, type }: StatisticsCardProps) => {
  const isIncrease = compareValue > 0
  const isBeforeYesterday = ['returnVisitors', 'avgStayTime'].includes(type) // 전전일 기준
  const suffix = type === 'avgStayTime' ? '분' : '명'
  const compareIcon = isIncrease ? 'increase' : 'decrease'
  const compareTargetText = isBeforeYesterday ? '전전일' : '전일'
  const compareStyle = compareValue === 0 ? styles.default : isIncrease ? styles.increase : styles.decrease

  return (
    <Card className={`${styles.statContainer} ${styles[type]}`}>
      <div>
        <div>
          <strong className={styles.statValue}>
            {titleValue}
            {suffix}
          </strong>
          <div className={styles.statHeader}>
            {title}
            {isBeforeYesterday && <span className={styles.badge}>전일기준</span>}
          </div>
        </div>
        <div className={styles.statChangeContainer}>
          <div className={`${styles.changeContent} ${compareStyle}`}>
            <div className={styles.changeInfo}>
              {compareValue !== 0 && <img src={`/icon/arrow-${compareIcon}.svg`} alt={compareIcon} />}
              <strong>
                {Math.abs(compareValue)}
                {suffix}
              </strong>
            </div>
            <span className={styles.changeLabel}>{compareTargetText} 대비</span>
          </div>
        </div>
      </div>
      <img className={styles.widgetIcon} src={`/icon/${type}.svg`} alt={title} width={30} height={30} />
    </Card>
  )
}

export default StatisticsCard

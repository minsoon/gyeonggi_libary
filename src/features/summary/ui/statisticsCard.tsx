import Card from '@/shared/ui/card'
import styles from './summary.module.scss'

interface StatisticsCardProps {
  title: string
  titleValue: number
  compareValue: number
  type: 'realtimeVisitors' | 'todayVisitors' | 'returnVisitors' | 'avgStayTime'
}

const StatisticsCard = ({ title, titleValue, compareValue, type }: StatisticsCardProps) => {
  const suffix = type === 'avgStayTime' ? '분' : '명'
  const isIncrease = compareValue > 0

  return (
    <Card className={`${styles.statContainer} ${styles[type]}`}>
      <div>
        <div>
          <strong className={styles.statValue}>
            {titleValue}
            {suffix}
          </strong>
          <div className={styles.statHeader}>{title}</div>
        </div>
        <div className={styles.statChangeContainer}>
          <div
            className={`${styles.changeContent} ${compareValue === 0 ? styles.default : compareValue > 0 ? styles.increase : styles.decrease}`}
          >
            <div className={styles.changeInfo}>
              {compareValue !== 0 && (
                <img src={`/icon/arrow-${isIncrease ? 'increase' : 'decrease'}.svg`} alt='increase' />
              )}
              <span>
                <strong>
                  {Math.abs(compareValue)}
                  {suffix}
                </strong>
              </span>
            </div>
            <span className={styles.changeLabel}>전일 대비</span>
          </div>
        </div>
      </div>
      <img className={styles.widgetIcon} src={`/icon/${type}.svg`} alt={title} width={30} height={30} />
    </Card>
  )
}

export default StatisticsCard

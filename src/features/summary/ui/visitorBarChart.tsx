'use client'

import { useRouter } from 'next/navigation'
import Card from '@/shared/ui/card'
import cardStyles from '@/shared/ui/card/card.module.scss'
import DualAxisBarChart from './dualAxisBarChart'
import styles from './summary.module.scss'

export default function VisitorBarChart() {
  const router = useRouter()
  const handleClick = () => {
    router.push('/statistics')
  }

  return (
    <Card className={`${styles.barChartContainer} ${styles.detail}`}>
      <div>
        <span className={cardStyles.title}>지난주 같은 날 대비</span>
        <button className={styles.detailButton} onClick={handleClick}>
          <img src='/icon/arrow-right.svg' width={24} height={24} alt='상세보기' />
        </button>
      </div>

      <LegendContent />
      <DualAxisBarChart />
    </Card>
  )
}

const LegendContent = () => {
  return (
    <div className={styles.legendContent}>
      <div className={styles.legendItem}>
        <span className={`${styles.legendIndicator} ${styles.blue}`} />
        <span className={styles.legendText}>방문인원 이번주</span>
      </div>
      <div className={styles.legendItem}>
        <span className={`${styles.legendIndicator} ${styles.lightBlue}`} />
        <span>지난주 방문 인원</span>
      </div>
      <div className={styles.legendItem}>
        <span className={`${styles.legendIndicator} ${styles.green}`} />
        <span>이번주 혼잡도</span>
      </div>
      <div className={styles.legendItem}>
        <span className={`${styles.legendIndicator} ${styles.lightGreen}`} />
        <span>지난주 혼잡도</span>
      </div>

      <div className={styles.suffixLabel}>(단위: 명)</div>
      <div className={styles.suffixLabel}>(단위: %)</div>
    </div>
  )
}

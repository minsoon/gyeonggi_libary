'use client'

import Card from '@/shared/ui/card'
import cardStyles from '@/shared/ui/card/card.module.scss'
import styles from './summary.module.scss'

const Calendar = () => {
  const handleClick = () => {
    alert('준비중 입니다.')
  }

  return (
    <Card className={styles.calendarContainer}>
      <div className={styles.titleContainer}>
        <span className={cardStyles.title}>이벤트 캘린더</span>
        <button onClick={handleClick}>
          <img src='/icon/arrow-double-up.svg' alt='arrow icon' width={20} height={20} />
        </button>
      </div>
    </Card>
  )
}

export default Calendar

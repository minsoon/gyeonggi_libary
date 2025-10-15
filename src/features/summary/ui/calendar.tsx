import Card from '@/shared/ui/card'
import Empty from '@/shared/ui/empty'
import styles from './summary.module.scss'

const Calendar = () => {
  return (
    <Card className={styles.calendarContainer}>
      <strong>이벤트 캘린더</strong>
      <Empty />
    </Card>
  )
}

export default Calendar

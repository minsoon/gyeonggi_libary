import styles from './details.module.scss'

const RealTimeBadge = ({ value }: { value: number }) => {
  return (
    <div className={`${styles.badge}`}>
      <img src='/icon/badge-realtime.svg' alt='실시간 체류 인원' width={22.5} height={18} />
      <span className={styles.badgeTitle}>실시간 체류 인원</span>
      <span className={styles.badgeValue}>{value}명</span>
    </div>
  )
}

const AvgStaytimeBadge = ({ value }: { value: number }) => {
  return (
    <div className={`${styles.badge}`}>
      <img src='/icon/badge-avgStayTime.svg' alt='평균 체류 시간' width={22.5} height={18} />
      <span className={styles.badgeTitle}>평균 체류 시간</span>
      <span className={styles.badgeValue}>{value}분</span>
    </div>
  )
}

const RevisitBadge = ({ value }: { value: number }) => {
  return (
    <div className={`${styles.badge}`}>
      <img src='/icon/badge-revisit.svg' alt='재방문 인원' width={22.5} height={18} />
      <span className={styles.badgeTitle}>재방문 인원</span>
      <span className={styles.badgeValue}>{value}명</span>
    </div>
  )
}

export { RealTimeBadge, AvgStaytimeBadge, RevisitBadge }

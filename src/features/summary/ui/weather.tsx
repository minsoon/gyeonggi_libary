import Card from '@/shared/ui/card'
import styles from './summary.module.scss'

const Weather = () => {
  return (
    <Card className={styles.weatherContainer}>
      <div className={styles.infoBox}>
        <span className={styles.title}>☀️ 오전</span>
        <span>6:20</span>
        <span className={styles.title}>☀️ 오후</span>
        <span>17:20</span>
      </div>

      <div className={styles.weatherContent}>
        <div className={styles.degreeBox}>
          <div className={styles.degreeIcon}>☀️</div>
          <div className={styles.degreeInfo}>
            <div>
              <span>최고 24°</span>
              <span>최저 17°</span>
            </div>
            <div>27°</div>
          </div>
        </div>

        <div className={styles.weatherTime}>
          <dl>
            <dt>☀️</dt>
            <dd>
              <span>오후2시</span>
              <span>24도</span>
            </dd>
          </dl>
          <dl>
            <dt>☀️</dt>
            <dd>
              <span>오후2시</span>
              <span>24도</span>
            </dd>
          </dl>
          <dl>
            <dt>☀️</dt>
            <dd>
              <span>오후2시</span>
              <span>24도</span>
            </dd>
          </dl>
          <dl>
            <dt>☀️</dt>
            <dd>
              <span>오후2시</span>
              <span>24도</span>
            </dd>
          </dl>
        </div>
      </div>

      <div className={styles.infoBox}>
        <span className={styles.title}>☀️ 습도</span> <span className={styles.value}>75%</span>
        <span className={styles.title}>☀️ 풍속</span> <span className={styles.value}>1m/s</span>
      </div>

      <span>☀️ 경기도 수원시</span>
    </Card>
  )
}

export default Weather

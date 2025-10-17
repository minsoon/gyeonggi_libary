'use client'

import { useRouter } from 'next/navigation'
import { Cell, Pie, PieChart } from 'recharts'
import Card from '@/shared/ui/card'
import cardStyles from '@/shared/ui/card/card.module.scss'
import styles from './summary.module.scss'

const FloorDistribution = () => {
  const router = useRouter()
  const data = [
    { name: 'B4~B2', value: 32, rate: 43, fill: '#6fd896' },
    { name: 'B1', value: 28, rate: 13, fill: '#2f29a1' },
    { name: '1F', value: 22, rate: -3, fill: '#ae368e' },
    { name: '2F', value: 18, rate: 24, fill: '#b7a325' },
    { name: '3F', value: 12, rate: -12, fill: '#d853fa' },
    { name: '4F', value: 8, rate: 8, fill: '#2da8cd' },
    { name: '5F', value: 4, rate: 14, fill: '#8884d8' },
  ]

  const handleClick = () => {
    router.push('/statistics')
  }

  return (
    <Card className={`${styles.donutChartContainer} ${styles.detail}`}>
      <div>
        <span className={cardStyles.title}>실시간 층별 체류 인원 분포</span>
        <button className={styles.detailButton} onClick={handleClick}>
          <img src='/icon/arrow-right.svg' width={24} height={24} alt='상세보기' />
        </button>
      </div>
      <div className={styles.donutTable}>
        <div className={styles.donutChart}>
          <PieChart data={data} width={300} height={250}>
            <Pie dataKey='value' data={data} innerRadius={60} outerRadius={100} />
            <Cell fill='#8884d8' />
            <Cell fill='#82ca9d' />
          </PieChart>
        </div>
        <div className={styles.floorTable}>
          <table>
            <thead>
              <tr>
                <th>층</th>
                <th>현재 인원</th>
                <th>변화 비율</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>B4~B2</td>
                <td>100명</td>
                <td>+10%</td>
              </tr>
              <tr>
                <td>B1</td>
                <td>100명</td>
                <td>+10%</td>
              </tr>
              <tr>
                <td>1F</td>
                <td>100명</td>
                <td>+10%</td>
              </tr>
              <tr>
                <td>2F</td>
                <td>100명</td>
                <td>+10%</td>
              </tr>
              <tr>
                <td>3F</td>
                <td>100명</td>
                <td>-8%</td>
              </tr>
              <tr>
                <td>4F</td>
                <td>100명</td>
                <td>+10%</td>
              </tr>
              <tr>
                <td>5F</td>
                <td>100명</td>
                <td>+10%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  )
}

export default FloorDistribution

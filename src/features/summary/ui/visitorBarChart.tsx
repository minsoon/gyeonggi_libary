'use client'

import { Bar, BarChart, XAxis, YAxis } from 'recharts'
import Card from '@/shared/ui/card'
import cardStyles from '@/shared/ui/card/card.module.scss'
import styles from './summary.module.scss'

const VisitorBarChart = () => {
  const data = [
    { name: '방문 인원', thisWeek: 500, lastWeek: 400 },
    { name: '혼잡도', thisWeek: 300, lastWeek: 200 },
  ]
  return (
    <Card className={styles.barChartContainer}>
      <strong className={cardStyles.title}>지난주 같은 날 대비</strong>
      <BarChart data={data} width={400} height={300}>
        <XAxis dataKey='name' />
        <YAxis />
        <Bar dataKey='thisWeek' fill='#3b82f6' />
        <Bar dataKey='lastWeek' fill='#10b981' />
      </BarChart>
    </Card>
  )
}

export default VisitorBarChart

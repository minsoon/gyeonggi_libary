'use client'

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import styles from './summary.module.scss'

type Row = {
  name: '방문인원' | '혼잡도'
  visitorThisWeek?: number
  visitorLastWeek?: number
  congestionThisWeek?: number
  congestionLastWeek?: number
}

const DATA: Row[] = [
  { name: '방문인원', visitorThisWeek: 330, visitorLastWeek: 270 },
  { name: '혼잡도', congestionThisWeek: 50, congestionLastWeek: 40 },
]

const COLORS = {
  lightBlue: '#CEE5FF',
  lightGreen: '#D7F4E2',
  lightBlueEnd: '#227ED7',
  lightGreenEnd: '#25D08E',
  blue: '#065BAC',
  green: '#00AE6B',
  gray: '#D6DCE4',
  axis: '#9EAED0',
  text: '#525F77',
  textLight: '#8392A8',
  textDark: '#3C444A',
}

const DualAxisBarChart = () => {
  return (
    <div className={styles.responsiveContainer}>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart data={DATA} barGap={12} barCategoryGap='0%' margin={{ top: 10, right: 0, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id='gradBlue' x1='0%' y1='0%' x2='0%' y2='100%'>
              <stop offset='-0.18%' stopColor={COLORS.blue} />
              <stop offset='99.82%' stopColor={COLORS.lightBlueEnd} />
            </linearGradient>
            <linearGradient id='gradGreen' x1='0%' y1='0%' x2='0%' y2='100%'>
              <stop offset='-0.4%' stopColor={COLORS.green} />
              <stop offset='99.6%' stopColor={COLORS.lightGreenEnd} />
            </linearGradient>
          </defs>

          <CartesianGrid yAxisId='left' stroke={COLORS.gray} vertical={false} />

          <XAxis
            dataKey='name'
            tickLine={false}
            height={36}
            tickMargin={16}
            tick={{ fontSize: 14, fill: COLORS.text, fontWeight: 800 }}
            axisLine={{
              stroke: '#9EAED0',
              strokeWidth: 1,
            }}
          />

          <YAxis
            yAxisId='left'
            width={45}
            tickMargin={10}
            axisLine={false}
            tickLine={false}
            tickCount={5}
            tick={{ fontSize: 14, fill: COLORS.blue, fontWeight: 800 }}
          />
          <YAxis
            yAxisId='right'
            orientation='right'
            width={45}
            tickMargin={35}
            domain={[0, 100]}
            tickCount={5}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 14, fill: COLORS.green, fontWeight: 800, textAnchor: 'end' }}
          />

          <Bar
            xAxisId='visitor'
            yAxisId='left'
            dataKey='visitorThisWeek'
            name='이번주 방문인원'
            fill='url(#gradBlue)'
            radius={[6, 6, 0, 0]}
            barSize={32}
          />
          <Bar
            xAxisId='visitor'
            yAxisId='left'
            dataKey='visitorLastWeek'
            name='지난주 방문인원'
            fill={COLORS.lightBlue}
            radius={[6, 6, 0, 0]}
            barSize={32}
          />

          <Bar
            xAxisId='congestion'
            yAxisId='right'
            dataKey='congestionThisWeek'
            name='이번주 혼잡도'
            fill='url(#gradGreen)'
            radius={[6, 6, 0, 0]}
            barSize={32}
          />
          <Bar
            xAxisId='congestion'
            yAxisId='right'
            dataKey='congestionLastWeek'
            name='지난주 혼잡도'
            fill={COLORS.lightGreen}
            radius={[6, 6, 0, 0]}
            barSize={32}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DualAxisBarChart

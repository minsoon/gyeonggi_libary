'use client'

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { useSummaryStore } from '@/features/summary/model/summaryStore'
import { formatHourFromKST } from '@/shared/utils/date'

const VisitorLineChart = () => {
  const { realtimeData } = useSummaryStore()

  const data = realtimeData?.currentGraph.data
    ?.map(item => {
      return {
        hour: formatHourFromKST(item.time),
        visitors: item.data,
        occupancy: item.congestion,
        originalTime: item.time,
      }
    })
    ?.sort((a, b) => new Date(a.originalTime).getTime() - new Date(b.originalTime).getTime())

  return (
    <ResponsiveContainer width='100%' height={300}>
      <LineChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }} style={{ pointerEvents: 'none' }}>
        <CartesianGrid yAxisId='left' stroke='#D6DCE4' vertical={false} />
        <Legend
          align='right'
          verticalAlign='top'
          iconType='line'
          iconSize={25}
          wrapperStyle={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '14px',
            fontFamily: 'Noto Sans KR',
            fontWeight: '700',
            lineHeight: '100%',
            width: '100%',
            justifyContent: 'flex-end',
            right: -8,
            top: -50,
          }}
          formatter={(value, entry) => {
            const unit = entry.dataKey === 'visitors' ? '명' : '%'
            return (
              <>
                {' '}
                <span style={{ color: '#525F77', fontWeight: 'bold' }}>{value}</span>
                <span style={{ color: '#8392A8', fontWeight: 'bold' }}> (단위:{unit})</span>
              </>
            )
          }}
        />

        <XAxis
          dataKey='hour'
          tickLine={false}
          height={35}
          tickMargin={13}
          tick={{ fontSize: 14, fill: '#28395D', fontWeight: 800 }}
          axisLine={{
            stroke: '#9EAED0',
            strokeWidth: 1,
          }}
          padding={{ left: 70, right: 70 }} // 데이터와 좌우 끝 간격 조절
        />
        <YAxis
          yAxisId='left'
          width={45}
          tickMargin={10}
          axisLine={false}
          tickLine={false}
          tickCount={5}
          tick={{ fontSize: 14, fill: '#065BAC', fontWeight: 800 }}
        />
        <YAxis
          yAxisId='right'
          orientation='right'
          width={45}
          tickMargin={35}
          tickCount={5}
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 14, fill: '#00AE6B', fontWeight: 800, textAnchor: 'end' }}
          domain={[0, 100]}
        />
        <Line
          yAxisId='left'
          dataKey='visitors'
          stroke='#065BAC'
          strokeWidth={3}
          name='방문인원'
          dot={{
            r: 6,
            fill: 'white',
            stroke: '#065BAC',
            strokeWidth: 4,
            style: {
              filter: 'drop-shadow(0 0 5px rgba(6, 91, 172, 0.5))',
            },
          }}
          activeDot={false}
        />
        <Line
          yAxisId='right'
          dataKey='occupancy'
          stroke='#25D08E'
          strokeWidth={3}
          name='혼잡도'
          dot={{
            r: 6,
            fill: 'white',
            stroke: '#25D08E',
            strokeWidth: 4,
            style: {
              filter: 'drop-shadow(0 0 5px rgba(37, 208, 142, 0.5))',
            },
          }}
          activeDot={{
            r: 6,
            fill: 'white',
            stroke: '#25D08E',
            strokeWidth: 4,
            style: {
              filter: 'drop-shadow(0 0 5px rgba(37, 208, 142, 0.5))',
            },
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default VisitorLineChart

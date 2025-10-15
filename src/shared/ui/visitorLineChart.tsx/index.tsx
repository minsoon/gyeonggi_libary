'use client'

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const VisitorLineChart = () => {
  const data = [
    {
      hour: '10시',
      visitors: 320,
      occupancy: 280,
    },
    { hour: '11시', visitors: 300, occupancy: 280 },
    { hour: '12시', visitors: 350, occupancy: 260 },
    { hour: '13시', visitors: 270, occupancy: 250 },
    { hour: '14시', visitors: 210, occupancy: 240 },
    { hour: '15시', visitors: 300, occupancy: 230 },
    { hour: '16시', visitors: 280, occupancy: 220 },
    { hour: '17시', visitors: 270, occupancy: 210 },
    { hour: '18시', visitors: 260, occupancy: 200 },
  ]
  return (
    <ResponsiveContainer width='100%' height={300}>
      <LineChart data={data}>
        <CartesianGrid stroke='#e5e7eb' vertical={false} />
        <XAxis dataKey='hour' padding={{ left: 30, right: 30 }} />
        <YAxis domain={[0, 400]} ticks={[0, 100, 200, 300, 400]} allowDecimals={false} />
        <Line
          dataKey='visitors'
          stroke='#3b82f6'
          name='방문인원'
          activeDot={{
            r: 8,
          }}
        />
        <Line
          dataKey='occupancy'
          stroke='#10b981'
          name='혼잡도'
          activeDot={{
            r: 8,
          }}
        />
        <Legend align='right' verticalAlign='top' />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default VisitorLineChart

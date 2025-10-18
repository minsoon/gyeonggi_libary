'use client'

import { useRouter } from 'next/navigation'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import Card from '@/shared/ui/card'
import cardStyles from '@/shared/ui/card/card.module.scss'
import styles from './summary.module.scss'

const FloorDistribution = () => {
  const router = useRouter()
  const data = [
    { floorName: 'B4~B2', value: 32, rate: 43, fill: 'url(#grad1)' },
    { floorName: 'B1', value: 28, rate: 13, fill: 'url(#grad2)' },
    { floorName: '1F', value: 22, rate: -3, fill: 'url(#grad3)' },
    { floorName: '2F', value: 18, rate: 24, fill: 'url(#grad4)' },
    { floorName: '3F', value: 12, rate: -12, fill: 'url(#grad5)' },
    { floorName: '4F', value: 8, rate: 8, fill: 'url(#grad6)' },
    { floorName: '5F', value: 4, rate: 14, fill: 'url(#grad7)' },
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

      {/* SVG Gradient 정의 */}
      <svg width='0' height='0' style={{ position: 'absolute' }}>
        <DefsGradient />
      </svg>

      <div className={styles.chartTableContainer}>
        <div className={styles.responsiveContainer}>
          <ResponsiveContainer width='100%' height='100%'>
            <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
              <DefsGradient />

              <Pie
                dataKey='value'
                data={data}
                innerRadius={55}
                outerRadius={90}
                startAngle={90}
                endAngle={-360}
                cornerRadius={2}
                paddingAngle={1}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className={styles.floorTable}>
          <table>
            <thead>
              <tr>
                <th>위치</th>
                <th>현재인원</th>
                <th>변화 비율</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => {
                const isIncrease = item.rate > 0
                const arrowIcon = isIncrease ? 'increase' : 'decrease'

                return (
                  <tr key={item.floorName}>
                    <td>
                      <div className={styles.floorItem}>
                        <svg width='8' height='8'>
                          <rect width='8' height='8' rx='1' fill={item.fill} />
                        </svg>
                        <div className={styles.label}>{item.floorName}</div>
                      </div>
                    </td>
                    <td className={styles.value}>{item.value}명</td>
                    <td className={`${styles.rate} ${item.rate > 0 ? styles.increase : styles.decrease}`}>
                      <img src={`/icon/arrow-${arrowIcon}.svg`} width={16} height={16} alt={arrowIcon} />
                      <span>{Math.abs(item.rate)}%</span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  )
}

export default FloorDistribution

const DefsGradient = () => {
  return (
    <defs>
      <linearGradient id='grad1' x1='8.12498%' y1='8.12503%' x2='186.875%' y2='195%'>
        <stop stopColor='#207DD4' />
        <stop offset='1' stopColor='#6FB9FF' />
      </linearGradient>
      <linearGradient id='grad2' x1='16.25%' y1='-1.19847e-05%' x2='195%' y2='195%'>
        <stop stopColor='#2AD44C' />
        <stop offset='1' stopColor='#89F09D' />
      </linearGradient>
      <linearGradient id='grad3' x1='0%' y1='0%' x2='195%' y2='195%'>
        <stop stopColor='#FFCE00' />
        <stop offset='1' stopColor='#FFE888' />
      </linearGradient>
      <linearGradient id='grad4' x1='0%' y1='0%' x2='195%' y2='195%'>
        <stop stopColor='#EE7C26' />
        <stop offset='1' stopColor='#FFAE71' />
      </linearGradient>
      <linearGradient id='grad5' x1='0%' y1='0%' x2='195%' y2='195%'>
        <stop stopColor='#D42A2A' />
        <stop offset='1' stopColor='#F56767' />
      </linearGradient>
      <linearGradient id='grad6' x1='0%' y1='0%' x2='195%' y2='195%'>
        <stop stopColor='#F42CCD' />
        <stop offset='1' stopColor='#FF71E3' />
      </linearGradient>
      <linearGradient id='grad7' x1='0%' y1='0%' x2='195%' y2='195%'>
        <stop stopColor='#883DD4' />
        <stop offset='1' stopColor='#C082FF' />
      </linearGradient>
    </defs>
  )
}

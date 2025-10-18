'use client'

import { useEffect, useState } from 'react'
import { ArrowDoubleDownIcon, ArrowDoubleUpIcon } from '@/shared/ui/icons'
import VisitorLineChart from '@/shared/ui/visitorLineChart.tsx'
import { AvgStaytimeBadge, RealTimeBadge, RevisitBadge } from './badge'
import styles from './details.module.scss'

interface StatisticsFloorProps {
  isOpen: boolean
  floorNumber: string
  floorName: string
  description: string
  src: string
  realTimeVisitors: number
  avgStayTime: number
  returnVisitors: number
}

const StatisticsFloor = ({
  isOpen,
  floorNumber,
  floorName,
  description,
  src,
  realTimeVisitors,
  avgStayTime,
  returnVisitors,
}: StatisticsFloorProps) => {
  const [isOpenContent, setIsOpenContent] = useState(isOpen)

  const handleClick = () => {
    setIsOpenContent(!isOpenContent)
  }

  useEffect(() => {
    setIsOpenContent(isOpen)
  }, [isOpen])

  return (
    <div className={`${styles.floorContainer} ${isOpenContent ? styles.open : ''}`} onClick={handleClick}>
      <div className={styles.titleBox}>
        <div className={styles.title}>
          <p>{floorName}</p>
          <span>{description}</span>
        </div>

        <div className={styles.badgeBox}>
          <RealTimeBadge value={realTimeVisitors} />
          <AvgStaytimeBadge value={avgStayTime} />
          <RevisitBadge value={returnVisitors} />
        </div>

        <button className={styles.collapseButton} onClick={handleClick}>
          {isOpenContent ? <ArrowDoubleUpIcon /> : <ArrowDoubleDownIcon />}
        </button>
      </div>

      {isOpenContent && (
        <div className={styles.floorInfo}>
          <img className={styles.floorImage} src={src} alt={`${floorName} 이미지`} />
          <div className={styles.lineChartContainer}>
            <div className={styles.floorNumber}>
              <span>{floorNumber}</span>
              <img src='/icon/arrow-single-right.svg' alt='arrow-right' width={14} height={14} />
            </div>
            <VisitorLineChart />
          </div>
        </div>
      )}
    </div>
  )
}

export default StatisticsFloor

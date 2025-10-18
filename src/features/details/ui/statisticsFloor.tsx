'use client'

import { useEffect, useState } from 'react'
import { ArrowDoubleDownIcon, ArrowDoubleUpIcon } from '@/shared/ui/icons'
import VisitorLineChart from '@/shared/ui/visitorLineChart.tsx'
import { AvgStaytimeBadge, RealTimeBadge, RevisitBadge } from './badge'
import styles from './details.module.scss'

interface StatisticsFloorProps {
  isOpen: boolean
  name: string
  description: string
  src: string
  realTimeVisitors: number
  avgStayTime: number
  returnVisitors: number
}

const StatisticsFloor = ({
  isOpen,
  name,
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
    <div className={styles.floorContainer} onClick={handleClick}>
      <div className={styles.titleBox}>
        <div className={styles.title}>
          <p>{name}</p>
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
          <img src={src} alt={`${name} 이미지`} />
          <VisitorLineChart />
        </div>
      )}
    </div>
  )
}

export default StatisticsFloor

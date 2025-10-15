'use client'

import { useEffect, useState } from 'react'
import VisitorLineChart from '@/shared/ui/visitorLineChart.tsx'
import Badge from './badge'
import styles from './details.module.scss'

interface StatisticsFloorProps {
  isOpen: boolean
}

const StatisticsFloor = ({ isOpen }: StatisticsFloorProps) => {
  const [isOpenContent, setIsOpenContent] = useState(isOpen)

  const handleClick = () => {
    setIsOpenContent(!isOpenContent)
  }

  useEffect(() => {
    setIsOpenContent(isOpen)
  }, [isOpen])

  return (
    <div className={styles.detailsContainer}>
      {/** 타이틀 */}
      <div className={styles.titleBox}>
        <div className={styles.title}>
          <p>지하 1층</p>
          <span>창의의 공간</span>
        </div>

        <div className={styles.badgeBox}>
          <Badge type='realtime'>123명</Badge>
          <Badge type='avg'>63분</Badge>
          <Badge type='revisit'>22명</Badge>
        </div>

        <button className={styles.collapseButton} onClick={handleClick}>
          {isOpenContent ? '닫기' : '열기'}
        </button>
      </div>

      {/** 내용 */}
      {isOpenContent && (
        <div className={styles.floorInfo}>
          <img src='/default.png' width={500} height={300} alt='지하 1층' />
          <VisitorLineChart />
        </div>
      )}
    </div>
  )
}

export default StatisticsFloor

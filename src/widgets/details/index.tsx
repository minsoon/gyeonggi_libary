'use client'

import { useState } from 'react'
import styles from '@/features/details/ui/details.module.scss'
import StatisticsFloor from '@/features/details/ui/statisticsFloor'

const DetailsWidget = () => {
  const [isAllOpen, setIsAllOpen] = useState(false)

  const handleClick = () => {
    setIsAllOpen(!isAllOpen)
  }

  return (
    <>
      <div className={styles.detailsNotice}>
        <p> 각 층의 이미지에서 &apos;구역&apos;을 선택하시면 선택한 구역의 상세 인원 분석 정보를 확인할 수 있습니다.</p>
        <button className={styles.collapseButton} onClick={handleClick}>
          {isAllOpen ? '전체 닫기' : '전체 열기'}
        </button>
      </div>

      <StatisticsFloor isOpen={isAllOpen} />
      <StatisticsFloor isOpen={isAllOpen} />
    </>
  )
}

export default DetailsWidget

'use client'

import { useState } from 'react'
import styles from '@/features/details/ui/details.module.scss'
import StatisticsFloor from '@/features/details/ui/statisticsFloor'
import { FLOOR_INFO } from '@/shared/constant'
import { ArrowDoubleDownIcon, ArrowDoubleUpIcon } from '@/shared/ui/icons'

const DetailsWidget = () => {
  const [isAllOpen, setIsAllOpen] = useState(false)

  const handleClick = () => {
    setIsAllOpen(!isAllOpen)
  }

  return (
    <>
      <div className={styles.detailsNotice}>
        <p> 각 층의 이미지에서 &apos;구역&apos;을 선택하시면 선택한 구역의 상세 인원 분석 정보를 확인할 수 있습니다.</p>
        <button className={`${isAllOpen ? styles.allOpenButton : styles.allCloseButton}`} onClick={handleClick}>
          {isAllOpen ? <ArrowDoubleUpIcon color='#0068CC' /> : <ArrowDoubleDownIcon color='#fff' />}
          <span>{isAllOpen ? '전체 닫기' : '전체 열기'}</span>
        </button>
      </div>

      <div className={styles.allFloorContainer}>
        {Object.values(FLOOR_INFO).map(floor => (
          <StatisticsFloor
            key={floor.name}
            isOpen={isAllOpen}
            realTimeVisitors={123}
            avgStayTime={63}
            returnVisitors={22}
            {...floor}
          />
        ))}
      </div>
    </>
  )
}

export default DetailsWidget

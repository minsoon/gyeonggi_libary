import styles from './details.module.scss'

interface BadgeProps {
  children: string
  className?: string
  type: 'realtime' | 'avg' | 'revisit'
}

const Badge = ({ children, type }: BadgeProps) => {
  const badgeTitle = (type: 'realtime' | 'avg' | 'revisit') => {
    switch (type) {
      case 'realtime':
        return '실시간 체류 인원'
      case 'avg':
        return '평균 체류 시간'
      case 'revisit':
        return '재방문 인원'
    }
  }

  return (
    <div className={`${styles.badge} ${styles[type]}`}>
      <span>{badgeTitle(type)}</span>
      <strong>{children}</strong>
    </div>
  )
}

export default Badge

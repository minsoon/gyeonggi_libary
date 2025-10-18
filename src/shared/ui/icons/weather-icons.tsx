import React from 'react'

interface WeatherIconProps {
  className?: string
  size?: number
}

export const ClearIcon: React.FC<WeatherIconProps> = ({ className, size = 64 }) => (
  <svg viewBox='0 0 64 64' width={size} height={size} aria-hidden='true' className={className}>
    <circle cx='32' cy='32' r='14' fill='currentColor' />
    <g stroke='currentColor' strokeWidth='4' strokeLinecap='round' fill='none'>
      <line x1='32' y1='4' x2='32' y2='14' />
      <line x1='32' y1='50' x2='32' y2='60' />
      <line x1='4' y1='32' x2='14' y2='32' />
      <line x1='50' y1='32' x2='60' y2='32' />
      <line x1='11' y1='11' x2='18' y2='18' />
      <line x1='46' y1='46' x2='53' y2='53' />
      <line x1='11' y1='53' x2='18' y2='46' />
      <line x1='46' y1='18' x2='53' y2='11' />
    </g>
  </svg>
)

export const CloudsIcon: React.FC<WeatherIconProps> = ({ className, size = 64 }) => (
  <svg viewBox='0 0 64 64' width={size} height={size} aria-hidden='true' className={className}>
    <g fill='currentColor'>
      <path d='M22 42a10 10 0 1 1 3.3-19.5A14 14 0 0 1 52 34h2a8 8 0 0 1 0 16H20a8 8 0 0 1 2-8z' />
    </g>
  </svg>
)

export const RainIcon: React.FC<WeatherIconProps> = ({ className, size = 64 }) => (
  <svg viewBox='0 0 64 64' width={size} height={size} aria-hidden='true' className={className}>
    <g fill='currentColor'>
      <path d='M22 36a10 10 0 1 1 3.3-19.5A14 14 0 0 1 52 28h2a8 8 0 0 1 0 16H20a8 8 0 0 1 2-8z' />
    </g>
    <g stroke='currentColor' strokeWidth='4' strokeLinecap='round'>
      <line x1='24' y1='48' x2='24' y2='60' />
      <line x1='36' y1='48' x2='36' y2='60' />
      <line x1='48' y1='48' x2='48' y2='60' />
    </g>
  </svg>
)

export const SnowIcon: React.FC<WeatherIconProps> = ({ className, size = 64 }) => (
  <svg viewBox='0 0 64 64' width={size} height={size} aria-hidden='true' className={className}>
    <g fill='currentColor'>
      <path d='M22 36a10 10 0 1 1 3.3-19.5A14 14 0 0 1 52 28h2a8 8 0 0 1 0 16H20a8 8 0 0 1 2-8z' />
    </g>
    <g fill='currentColor'>
      <circle cx='24' cy='52' r='3' />
      <circle cx='36' cy='52' r='3' />
      <circle cx='48' cy='52' r='3' />
    </g>
  </svg>
)

export const MistIcon: React.FC<WeatherIconProps> = ({ className, size = 64 }) => (
  <svg viewBox='0 0 64 64' width={size} height={size} aria-hidden='true' className={className}>
    <g stroke='currentColor' strokeWidth='4' strokeLinecap='round'>
      <line x1='8' y1='24' x2='56' y2='24' />
      <line x1='12' y1='32' x2='52' y2='32' />
      <line x1='16' y1='40' x2='48' y2='40' />
    </g>
  </svg>
)

// 날씨 상태에 따른 아이콘 매핑 함수
export const getWeatherIcon = (condition: string) => {
  const conditionLower = condition.toLowerCase()

  if (/(snow|sleet|blizzard)/.test(conditionLower)) return SnowIcon
  if (/(rain|drizzle|shower|storm|thunder)/.test(conditionLower)) return RainIcon
  if (/(cloud|overcast)/.test(conditionLower)) return CloudsIcon
  if (/(clear|sun)/.test(conditionLower)) return ClearIcon

  return MistIcon
}

import { useEffect, useState } from 'react'
import { getWeddingDateTime } from '../config/wedding'

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calcTimeLeft(target: Date): TimeLeft | null {
  const diff = target.getTime() - Date.now()
  if (diff <= 0) return null

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function Countdown() {
  const target = getWeddingDateTime()
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(() => calcTimeLeft(target))

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(calcTimeLeft(target))
    }, 1000)
    return () => window.clearInterval(timer)
  }, [target])

  if (!timeLeft) {
    return (
      <div className="countdown">
        <p className="countdown-done">오늘은 저희의 결혼식 날입니다 💍</p>
      </div>
    )
  }

  const units = [
    { label: '일', value: timeLeft.days },
    { label: '시간', value: timeLeft.hours },
    { label: '분', value: timeLeft.minutes },
    { label: '초', value: timeLeft.seconds },
  ]

  return (
    <div className="countdown">
      <p className="countdown-label">결혼식까지</p>
      <div className="countdown-grid">
        {units.map(({ label, value }) => (
          <div key={label} className="countdown-item">
            <span className="countdown-value">{String(value).padStart(2, '0')}</span>
            <span className="countdown-unit">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

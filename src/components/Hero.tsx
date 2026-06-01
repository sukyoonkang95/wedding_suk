import { weddingConfig } from '../config/wedding'

export function Hero() {
  const { groom, bride, date } = weddingConfig
  const dateLabel = `${date.year}.${String(date.month).padStart(2, '0')}.${String(date.day).padStart(2, '0')}`

  return (
    <header className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-date">{dateLabel}</p>
        <p className="hero-weekday">{date.weekday}</p>
        <div className="hero-names">
          <span>{groom.name}</span>
          <span className="hero-amp">&</span>
          <span>{bride.name}</span>
        </div>
        <p className="hero-tagline">우리, 결혼합니다</p>
      </div>
    </header>
  )
}

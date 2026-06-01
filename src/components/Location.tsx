import { weddingConfig } from '../config/wedding'
import { Section } from './Section'

export function Location() {
  const { date, venue } = weddingConfig
  const timeLabel = `오후 ${date.hour > 12 ? date.hour - 12 : date.hour}시 ${date.minute > 0 ? `${date.minute}분` : ''}`

  return (
    <Section title="오시는 길" subtitle={venue.name}>
      <div className="location-info">
        <p className="location-datetime">
          {date.year}년 {date.month}월 {date.day}일 ({date.weekday}) {timeLabel}
        </p>
        <p className="location-hall">{venue.hall}</p>
        <p className="location-address">{venue.address}</p>
        {venue.tel && (
          <a className="location-tel" href={`tel:${venue.tel.replace(/-/g, '')}`}>
            {venue.tel}
          </a>
        )}
      </div>
      <div className="map-placeholder">
        <p>지도 이미지를 넣으려면 public/map.jpg 를 추가하세요</p>
      </div>
      <div className="map-buttons">
        <a className="btn btn-outline" href={venue.naverMapUrl} target="_blank" rel="noreferrer">
          네이버 지도
        </a>
        <a className="btn btn-outline" href={venue.kakaoMapUrl} target="_blank" rel="noreferrer">
          카카오맵
        </a>
      </div>
    </Section>
  )
}

import { useCallback, useRef, useState } from 'react'
import { weddingConfig } from '../config/wedding'
import { Section } from './Section'

const SWIPE_THRESHOLD = 50

export function PhotoGallery() {
  const { gallery } = weddingConfig
  const [index, setIndex] = useState(0)
  const touchStartX = useRef(0)

  const goTo = useCallback(
    (next: number) => {
      if (gallery.length === 0) return
      setIndex((next + gallery.length) % gallery.length)
    },
    [gallery.length],
  )

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) < SWIPE_THRESHOLD) return
    goTo(diff > 0 ? index + 1 : index - 1)
  }

  if (gallery.length === 0) return null

  return (
    <Section title="Gallery" subtitle="우리의 순간">
      <div
        className="gallery-slider"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="gallery-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {gallery.map((src, i) => (
            <div key={src} className="gallery-slide">
              <img src={src} alt={`웨딩 사진 ${i + 1}`} loading="lazy" draggable={false} />
            </div>
          ))}
        </div>

        {gallery.length > 1 && (
          <>
            <button
              type="button"
              className="gallery-nav gallery-nav--prev"
              onClick={() => goTo(index - 1)}
              aria-label="이전 사진"
            >
              ‹
            </button>
            <button
              type="button"
              className="gallery-nav gallery-nav--next"
              onClick={() => goTo(index + 1)}
              aria-label="다음 사진"
            >
              ›
            </button>
          </>
        )}
      </div>

      {gallery.length > 1 && (
        <div className="gallery-dots">
          {gallery.map((src, i) => (
            <button
              key={src}
              type="button"
              className={`gallery-dot ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`${i + 1}번째 사진`}
            />
          ))}
        </div>
      )}

      <p className="gallery-counter">
        {index + 1} / {gallery.length}
      </p>
    </Section>
  )
}

import { useEffect, useRef } from 'react'

type KakaoRoughMapProps = {
  timestamp: string
  embedKey: string
  mapHeight: number
  name: string
}

const ROUGHMAP_CDN = '207038f2_1774248312945'
const ROUGHMAP_LANDER_URL = `https://t1.kakaocdn.net/kakaomapweb/roughmap/place/prod/${ROUGHMAP_CDN}/roughmapLander.js`

let landerPromise: Promise<void> | null = null

function initRoughmapConfig() {
  if (window.daum?.roughmap?.cdn) return

  if (!window.daum) {
    window.daum = {}
  }

  window.daum.roughmap = {
    phase: 'prod',
    cdn: ROUGHMAP_CDN,
    URL_KEY_DATA_LOAD_PRE: 'https://t1.kakaocdn.net/roughmap/',
    url_protocal: 'https:',
    url_cdn_domain: '//t1.kakaocdn.net',
  }
}

function waitForLander(maxMs = 10000): Promise<void> {
  return new Promise((resolve, reject) => {
    const started = Date.now()

    const check = () => {
      if (window.daum?.roughmap?.Lander) {
        resolve()
        return
      }
      if (Date.now() - started > maxMs) {
        reject(new Error('Kakao map Lander not available'))
        return
      }
      window.setTimeout(check, 50)
    }

    check()
  })
}

function loadRoughmapLander() {
  if (window.daum?.roughmap?.Lander) {
    return Promise.resolve()
  }

  if (landerPromise) {
    return landerPromise
  }

  landerPromise = new Promise((resolve, reject) => {
    initRoughmapConfig()

    const existing = document.querySelector<HTMLScriptElement>('script[data-kakao-roughmap-lander="true"]')
    if (existing) {
      if (existing.dataset.loaded === 'true') {
        waitForLander().then(resolve).catch(reject)
      } else {
        existing.addEventListener('load', () => {
          existing.dataset.loaded = 'true'
          waitForLander().then(resolve).catch(reject)
        }, { once: true })
        existing.addEventListener('error', () => reject(new Error('lander script load failed')), {
          once: true,
        })
      }
      return
    }

    const script = document.createElement('script')
    script.charset = 'UTF-8'
    script.dataset.kakaoRoughmapLander = 'true'
    script.src = ROUGHMAP_LANDER_URL
    script.onload = () => {
      script.dataset.loaded = 'true'
      waitForLander().then(resolve).catch(reject)
    }
    script.onerror = () => reject(new Error('lander script load failed'))
    document.head.appendChild(script)
  })

  return landerPromise
}

export function KakaoRoughMap({ timestamp, embedKey, mapHeight, name }: KakaoRoughMapProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerId = `daumRoughmapContainer${timestamp}`

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    let cancelled = false

    const renderMap = async () => {
      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => resolve())
      })
      if (cancelled) return

      const container = document.getElementById(containerId)
      if (!container) return

      container.innerHTML = ''
      container.className = 'root_daum_roughmap root_daum_roughmap_landing'

      try {
        await loadRoughmapLander()
        if (cancelled || !window.daum?.roughmap?.Lander) return

        new window.daum.roughmap.Lander({
          timestamp,
          key: embedKey,
          mapWidth: '640',
          mapHeight: String(mapHeight),
        }).render()
      } catch {
        /* 아래 카카오맵 버튼으로 이동 가능 */
      }
    }

    renderMap()

    return () => {
      cancelled = true
    }
  }, [timestamp, embedKey, mapHeight, containerId])

  return (
    <div
      ref={wrapperRef}
      className="map-embed map-embed--kakao"
      style={{ height: mapHeight }}
    >
      <div
        id={containerId}
        className="root_daum_roughmap root_daum_roughmap_landing"
        role="img"
        aria-label={`${name} 위치 지도`}
      />
    </div>
  )
}

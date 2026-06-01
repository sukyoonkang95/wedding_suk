import { weddingConfig } from '../config/wedding'

export function ShareFooter() {
  async function handleShare() {
    const { og } = weddingConfig
    const shareData = {
      title: og.title,
      text: og.description,
      url: window.location.href,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch {
        /* 사용자가 취소한 경우 */
      }
      return
    }

    try {
      await navigator.clipboard.writeText(window.location.href)
      window.alert('청첩장 링크가 복사되었습니다.')
    } catch {
      window.prompt('아래 링크를 복사해 주세요', window.location.href)
    }
  }

  return (
    <footer className="footer">
      <button type="button" className="btn btn-primary" onClick={handleShare}>
        청첩장 공유하기
      </button>
      <p className="footer-note">소중한 분들을 초대합니다</p>
    </footer>
  )
}

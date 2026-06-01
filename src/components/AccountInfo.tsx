import { useState } from 'react'
import { weddingConfig } from '../config/wedding'
import { Section } from './Section'

type Side = 'groom' | 'bride'

export function AccountInfo() {
  const [openSide, setOpenSide] = useState<Side | null>(null)
  const [copied, setCopied] = useState<string | null>(null)

  const groomAccounts = weddingConfig.accounts.filter((a) => a.side === 'groom')
  const brideAccounts = weddingConfig.accounts.filter((a) => a.side === 'bride')

  async function copyAccount(text: string) {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(text)
      window.setTimeout(() => setCopied(null), 2000)
    } catch {
      window.prompt('계좌번호를 복사해 주세요', text)
    }
  }

  return (
    <Section title="마음 전하실 곳" subtitle="축하의 마음을 전해 주세요">
      <div className="account-tabs">
        <button
          type="button"
          className={`account-tab ${openSide === 'groom' ? 'active' : ''}`}
          onClick={() => setOpenSide(openSide === 'groom' ? null : 'groom')}
        >
          신랑측
        </button>
        <button
          type="button"
          className={`account-tab ${openSide === 'bride' ? 'active' : ''}`}
          onClick={() => setOpenSide(openSide === 'bride' ? null : 'bride')}
        >
          신부측
        </button>
      </div>

      {openSide === 'groom' && (
        <AccountList accounts={groomAccounts} copied={copied} onCopy={copyAccount} />
      )}
      {openSide === 'bride' && (
        <AccountList accounts={brideAccounts} copied={copied} onCopy={copyAccount} />
      )}
    </Section>
  )
}

function AccountList({
  accounts,
  copied,
  onCopy,
}: {
  accounts: typeof weddingConfig.accounts
  copied: string | null
  onCopy: (text: string) => void
}) {
  return (
    <ul className="account-list">
      {accounts.map((account) => {
        const full = `${account.bank} ${account.number}`
        return (
          <li key={full} className="account-item">
            <div>
              <p className="account-bank">{account.bank}</p>
              <p className="account-number">{account.number}</p>
              <p className="account-holder">{account.holder}</p>
            </div>
            <button type="button" className="btn btn-sm" onClick={() => onCopy(full)}>
              {copied === full ? '복사됨 ✓' : '복사'}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

import { weddingConfig } from '../config/wedding'
import { Section } from './Section'

export function InvitationMessage() {
  return (
    <Section title="초대합니다!">
      <p className="invitation-message">{weddingConfig.message}</p>
    </Section>
  )
}

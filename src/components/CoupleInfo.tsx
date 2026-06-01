import { weddingConfig } from '../config/wedding'
import { Section } from './Section'

function PersonCard({
  role,
  name,
  father,
  mother,
  phone,
}: {
  role: string
  name: string
  father: string
  mother: string
  phone: string
}) {
  return (
    <div className="person-card">
      <p className="person-role">{role}</p>
      <p className="person-name">{name}</p>
      <p className="person-parents">
        {father} · {mother} 의 {role === '신랑' ? '아들' : '딸'}
      </p>
      <a className="person-phone" href={`tel:${phone.replace(/-/g, '')}`}>
        {phone}
      </a>
    </div>
  )
}

export function CoupleInfo() {
  const { groom, bride } = weddingConfig

  return (
    <Section title="신랑 & 신부">
      <div className="couple-grid">
        <PersonCard
          role="신랑"
          name={groom.name}
          father={groom.parents.father}
          mother={groom.parents.mother}
          phone={groom.phone}
        />
        <PersonCard
          role="신부"
          name={bride.name}
          father={bride.parents.father}
          mother={bride.parents.mother}
          phone={bride.phone}
        />
      </div>
    </Section>
  )
}

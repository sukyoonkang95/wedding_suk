import type { ReactNode } from 'react'

type SectionProps = {
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export function Section({ title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section className={`section ${className}`.trim()}>
      {(title || subtitle) && (
        <header className="section-header">
          {title && <h2 className="section-title">{title}</h2>}
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </header>
      )}
      {children}
    </section>
  )
}

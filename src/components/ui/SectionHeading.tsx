import { Scale, ShieldCheck } from 'lucide-react'

interface SectionHeadingProps { title: string; accent?: string; icon?: 'scale' | 'shield' }

export function SectionHeading({ title, accent, icon = 'scale' }: SectionHeadingProps) {
  const Icon = icon === 'scale' ? Scale : ShieldCheck
  return <div className="section-heading">
    <h2>{title} {accent && <span>{accent}</span>}</h2>
    <div className="heading-ornament" aria-hidden="true"><i /><Icon size={22} strokeWidth={1.7} /><i /></div>
  </div>
}

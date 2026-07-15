import { Scale, ShieldCheck } from 'lucide-react'

interface SectionHeadingProps { title: string; accent?: string; icon?: 'scale' | 'shield' }

export function SectionHeading({ title, accent, icon = 'scale' }: SectionHeadingProps) {
  const Icon = icon === 'scale' ? Scale : ShieldCheck

  return (
    <div className="mb-8 text-center md:mb-12">
      <h2 className="font-display text-[clamp(3.2rem,5.2vw,5.8rem)] leading-[.85] font-semibold tracking-[-.06em] text-ink">
        {title} {accent && <span className="text-gold">{accent}</span>}
      </h2>
      <div className="mt-4 flex items-center justify-center gap-3 text-gold" aria-hidden="true">
        <i className="h-px w-12 bg-gold/55" /><Icon size={22} strokeWidth={1.7} /><i className="h-px w-12 bg-gold/55" />
      </div>
    </div>
  )
}

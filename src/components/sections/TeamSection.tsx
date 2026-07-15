import { motion } from 'motion/react'
import { SectionHeading } from '@/components/ui'
import { useReducedMotion } from '@/hooks'
import type { TeamMember } from '@/types'

const team: TeamMember[] = [
  { name: 'Carlos Ibarra', position: 'Socio director', specialty: 'Especialista en Derecho Corporativo y Litigios Comerciales.', imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=85' },
  { name: 'María Fernanda R.', position: 'Abogada senior', specialty: 'Especialista en Derecho Laboral y Seguridad Social.', imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=85' },
  { name: 'Andrés Morales', position: 'Especialista', specialty: 'Especialista en Derecho Corporativo y Contractual.', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85' },
  { name: 'Valentina Torres', position: 'Especialista', specialty: 'Especialista en Litigios y Resolución de Conflictos.', imageUrl: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=700&q=85' },
]
const mobileSpecialties = ['Derecho Corporativo y Litigios', 'Derecho Laboral', 'Derecho Corporativo', 'Litigios y Resolución']

export function TeamSection() {
  const reduceMotion = useReducedMotion()
  return <section id="equipo" className="overflow-hidden bg-paper py-16 md:grid md:min-h-[100svh] md:items-center md:py-[clamp(3.75rem,7svh,6.5rem)]" aria-labelledby="team-title"><div className="mx-auto w-full md:w-[min(calc(100%-6vw),1430px)]"><SectionHeading title="Nuestro equipo" icon="shield" /><p className="mx-auto mb-6 hidden max-w-md px-6 text-center text-sm leading-relaxed text-ink md:hidden">Profesionales especializados que combinan experiencia, estrategia y atención personalizada.</p>
    <div className="grid grid-flow-col auto-cols-[min(82vw,22rem)] gap-3 overflow-x-auto px-6 pb-5 [scrollbar-width:none] [scroll-snap-type:x_mandatory] [&::-webkit-scrollbar]:hidden md:grid-flow-row md:grid-cols-4 md:overflow-visible md:px-0 md:pb-0" role="region" aria-label="Nuestro equipo">{team.map((member, index) => <motion.article className="overflow-hidden rounded-lg border border-gold/30 bg-paper text-center [scroll-snap-align:start]" key={member.name} initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .4, delay: reduceMotion ? 0 : index * .06 }}><img className="h-[min(38svh,20rem)] w-full object-cover object-top [filter:saturate(.76)] transition duration-300 hover:scale-[1.035] md:h-[clamp(15.5rem,36svh,21rem)]" src={member.imageUrl} alt={'Retrato profesional de ' + member.name} /><div className="min-h-0 p-4 md:min-h-[clamp(9rem,18svh,11.5rem)] md:p-5"><h3 className="font-display text-[1.65rem] leading-none font-semibold text-ink md:text-[clamp(1.35rem,1.65vw,1.75rem)]">{member.name}</h3><p className="my-2 text-[.72rem] font-bold tracking-[.05em] uppercase text-gold">{member.position}</p><p className="text-[.75rem] leading-[1.55] text-ink md:text-[clamp(.72rem,.83vw,.84rem)]"><span className="md:hidden">{mobileSpecialties[index]}</span><span className="hidden md:inline">{member.specialty}</span></p></div></motion.article>)}</div>
  </div></section>
}

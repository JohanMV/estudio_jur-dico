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

export function TeamSection() {
  const reduceMotion = useReducedMotion()
  return <section id="equipo" className="team-section section-space" aria-labelledby="team-title"><div className="page-shell"><SectionHeading title="Nuestro equipo" icon="shield" />
    <div className="team-grid" role="region" aria-label="Nuestro equipo. Desliza horizontalmente para conocer a cada profesional.">{team.map((member, index) => <motion.article className="team-card" key={member.name} initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .4, delay: reduceMotion ? 0 : index * .06 }}><img src={member.imageUrl} alt={`Retrato profesional de ${member.name}`} /><div><h3>{member.name}</h3><p className="position">{member.position}</p><p>{member.specialty}</p></div></motion.article>)}</div>
  </div></section>
}

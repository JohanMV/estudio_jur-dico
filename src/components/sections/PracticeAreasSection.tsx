import { ArrowRight, BriefcaseBusiness, Building2, FileText, Gavel, Handshake, House } from 'lucide-react'
import { motion } from 'motion/react'
import { SectionHeading } from '@/components/ui'
import { useReducedMotion } from '@/hooks'
import type { PracticeArea } from '@/types'

const areas: PracticeArea[] = [
  { title: 'Derecho Corporativo', description: 'Asesoría integral para empresas, fusiones, adquisiciones y gobierno corporativo.', icon: BriefcaseBusiness },
  { title: 'Derecho Laboral', description: 'Representación en relaciones laborales, contratos y resolución de conflictos laborales.', icon: Handshake },
  { title: 'Derecho Civil', description: 'Soluciones legales en contratos, responsabilidad civil, sucesiones y derechos personales.', icon: Building2 },
  { title: 'Litigios y Resolución de Conflictos', description: 'Defensa y representación en procesos judiciales y mecanismos alternativos de solución.', icon: Gavel },
  { title: 'Derecho Inmobiliario', description: 'Asesoría en compraventa, arrendamiento, propiedad horizontal y desarrollo inmobiliario.', icon: House },
  { title: 'Asesoría Contractual', description: 'Redacción, revisión y negociación de contratos para proteger tus intereses.', icon: FileText },
]

export function PracticeAreasSection() {
  const reduceMotion = useReducedMotion()
  return <section id="areas-practica" className="areas-section section-space" aria-labelledby="areas-title"><div className="page-shell"><SectionHeading title="Áreas de" accent="práctica" />
    <div className="areas-grid" role="region" aria-label="Areas de practica. Desliza horizontalmente para explorar los servicios.">{areas.map(({ title, description, icon: Icon }, index) => <motion.article className="area-card" key={title} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .1 }} transition={{ duration: .4, delay: reduceMotion ? 0 : index * .05 }}><Icon className="area-icon" size={53} strokeWidth={1.3} aria-hidden="true" /><div><h3>{title}</h3><p>{description}</p><a href="mailto:contacto@lexiusta.pe?subject=Consulta%20legal" aria-label={`Consultar sobre ${title}`}><ArrowRight size={24} /></a></div></motion.article>)}</div>
  <div className="areas-cta"><p>¿Necesitas orientación para tu caso?</p><a href="mailto:contacto@lexiusta.pe?subject=Solicitud%20de%20asesoría">Solicita una asesoría <span aria-hidden="true">→</span></a></div></div></section>
}

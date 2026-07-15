import { BadgeCheck, Crosshair, UserRoundCheck } from 'lucide-react'
import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks'
import type { ValueProposition } from '@/types'

const values: ValueProposition[] = [
  { title: 'Ética profesional', description: 'Actuamos con integridad y responsabilidad en cada caso.', icon: BadgeCheck },
  { title: 'Atención personalizada', description: 'Escuchamos, entendemos y diseñamos soluciones a medida.', icon: UserRoundCheck },
  { title: 'Enfoque estratégico', description: 'Analizamos cada detalle para obtener los mejores resultados.', icon: Crosshair },
]

export function AboutSection() {
  const reduceMotion = useReducedMotion()

  return <section id="nosotros" className="about-section section-space" aria-labelledby="about-title"><div className="page-shell about-grid">
    <motion.div className="about-image" initial={reduceMotion ? false : { opacity: 0, x: -22 }} whileInView={reduceMotion ? {} : { opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .6 }}><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85" alt="Oficina elegante para atención jurídica" /></motion.div>
    <div className="about-copy"><i className="gold-rule" aria-hidden="true" /><h2 id="about-title">Quiénes <span>somos.</span></h2>
      <p className="about-description about-description--desktop">Somos un estudio jurídico comprometido con la excelencia, la ética y la defensa de los intereses de nuestros clientes. Combinamos experiencia, conocimiento y estrategia para ofrecer soluciones legales efectivas y personalizadas.</p>
      <p className="about-description about-description--mobile">Defendemos tus intereses con criterio, ética y una estrategia legal hecha a tu medida.</p>
      <div className="value-grid">{values.map(({ title, description, icon: Icon }) => <article className="value-card" key={title}><Icon size={46} strokeWidth={1.3} aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>)}</div>
      <div className="about-mobile-cta"><p>La confianza comienza con una conversación.</p><a href="#equipo">Conoce a nuestro equipo <span aria-hidden="true">→</span></a></div>
    </div>
  </div></section>
}
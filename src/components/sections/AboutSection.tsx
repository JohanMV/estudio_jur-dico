import { Crosshair, ShieldCheck, UserRoundCheck } from 'lucide-react'
import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks'
import type { ValueProposition } from '@/types'

const values: ValueProposition[] = [
  { title: 'Ética profesional', description: 'Actuamos con integridad y responsabilidad en cada caso.', icon: ShieldCheck },
  { title: 'Atención personalizada', description: 'Escuchamos, entendemos y diseñamos soluciones a medida.', icon: UserRoundCheck },
  { title: 'Enfoque estratégico', description: 'Analizamos cada detalle para obtener los mejores resultados.', icon: Crosshair },
]

export function AboutSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="nosotros" className="about-section section-space" aria-labelledby="about-title">
      <div className="page-shell about-grid">
        <motion.div
          className="about-image"
          initial={reduceMotion ? false : { opacity: 0, x: -22 }}
          whileInView={reduceMotion ? {} : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: .25 }}
          transition={{ duration: .6 }}
        >
          <img
            src="https://unsplash.com/photos/gFAgC6IdU3s/download?force=true&w=1200"
            alt="Despacho jurídico clásico con escritorio de madera"
          />
        </motion.div>

        <div className="about-copy">
          <i className="gold-rule" aria-hidden="true" />
          <h2 id="about-title">Quiénes <span>somos.</span></h2>
          <p className="about-description">
            Somos un estudio jurídico comprometido con la excelencia, la ética y la defensa de los intereses de nuestros clientes.
            Combinamos experiencia, conocimiento y estrategia para ofrecer soluciones legales efectivas y personalizadas.
          </p>

          <div className="value-grid">
            {values.map(({ title, description, icon: Icon }) => (
              <article className="value-card" key={title}>
                <Icon size={46} strokeWidth={1.3} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

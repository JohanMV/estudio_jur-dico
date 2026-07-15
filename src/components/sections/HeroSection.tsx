import { ArrowRight, Scale, ShieldCheck } from 'lucide-react'
import { motion } from 'motion/react'

export function HeroSection() {
  return (
    <section id="inicio" className="hero-section" aria-labelledby="hero-title">
      <div className="page-shell hero-section__content">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, ease: 'easeOut' }}
        >
          <p className="hero-kicker">DEFENDEMOS TUS DERECHOS</p>
          <i className="hero-rule" aria-hidden="true" />
          <h1 id="hero-title">Justicia<br />que te<br /><span>respalda.</span></h1>
          <p className="hero-description">
            Asesoría legal experta y estrategias efectivas para proteger lo que más te importa.
          </p>
          <a className="primary-cta" href="mailto:contacto@lexiusta.pe?subject=Solicitud%20de%20asesoría">
            <Scale size={26} strokeWidth={1.7} aria-hidden="true" />
            <span>Solicitar asesoría</span>
            <ArrowRight size={24} aria-hidden="true" />
          </a>
          <div className="hero-values" aria-label="Nuestros valores">
            <ShieldCheck size={33} aria-hidden="true" />
            <span>Confidencialidad</span><b>•</b><span>Experiencia</span><b>•</b><span>Compromiso</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

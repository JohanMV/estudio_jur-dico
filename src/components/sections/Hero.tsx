import { ArrowRight, Scale, ShieldCheck } from 'lucide-react'
import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks'

export function Hero() {
  const reduceMotion = useReducedMotion()

  return <section id="inicio" className="hero-section" aria-labelledby="hero-title">
    <div className="page-shell hero-content">
      <motion.div className="hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={reduceMotion ? {} : { opacity: 1, y: 0 }} transition={{ duration: .62, ease: 'easeOut' }}>
        <p className="hero-kicker">DEFENDEMOS TUS DERECHOS</p><i className="gold-rule" aria-hidden="true" />
        <h1 id="hero-title">Justicia<br />que te<br /><span>respalda.</span></h1>
        <p className="hero-description">Asesoría legal experta y estrategias efectivas para proteger lo que más te importa.</p>
        <a className="primary-cta" href="mailto:contacto@lexiusta.pe?subject=Solicitud%20de%20asesoría"><Scale size={24} aria-hidden="true" /><span>Solicitar asesoría</span><ArrowRight size={23} aria-hidden="true" /></a>
      </motion.div>
    </div>
    <div className="hero-values"><ShieldCheck size={31} aria-hidden="true" /><span>Confidencialidad</span><b aria-hidden="true">•</b><span>Experiencia</span><b aria-hidden="true">•</b><span>Compromiso</span></div>
  </section>
}
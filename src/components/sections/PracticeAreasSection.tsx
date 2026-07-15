import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks'
import type { PracticeArea } from '@/types'

type PracticeAreaVisual = Omit<PracticeArea, 'icon'> & { image: string }

const areas: PracticeAreaVisual[] = [
  { title: 'Derecho Corporativo', description: 'Asesoría integral para empresas, fusiones, adquisiciones y gobierno corporativo.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85' },
  { title: 'Derecho Laboral', description: 'Representación en relaciones laborales, contratos y resolución de conflictos laborales.', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85' },
  { title: 'Derecho Civil', description: 'Soluciones legales en contratos, responsabilidad civil, sucesiones y derechos personales.', image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=85' },
  { title: 'Litigios y Resolución de Conflictos', description: 'Defensa y representación en procesos judiciales y mecanismos alternativos de solución.', image: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&w=900&q=85' },
  { title: 'Derecho Inmobiliario', description: 'Asesoría en compraventa, arrendamiento, propiedad horizontal y desarrollo inmobiliario.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85' },
  { title: 'Asesoría Contractual', description: 'Redacción, revisión y negociación de contratos para proteger tus intereses.', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85' },
]

export function PracticeAreasSection() {
  const reduceMotion = useReducedMotion()
  return (
    <section id="areas-practica" className="bg-cream py-16 md:min-h-[100svh] md:py-[clamp(2.5rem,4.5svh,4rem)]" aria-labelledby="areas-title">
      <div className="mx-auto w-[min(calc(100%-3rem),34rem)] md:w-[min(calc(100%-6vw),1430px)]">
        <header className="mb-8 max-w-[52rem] md:mb-[clamp(1.5rem,3svh,2.4rem)]">
          <i className="mb-6 block h-[3px] w-11 bg-gold md:mb-4 md:w-[3.35rem]" aria-hidden="true" />
          <h2 id="areas-title" className="max-w-[47rem] font-display text-[clamp(3rem,13vw,3.85rem)] leading-[.9] font-semibold tracking-[-.065em] text-ink md:text-[clamp(3.7rem,6.2vw,6.4rem)] md:leading-[.84]">Áreas de <span className="text-gold">práctica</span></h2>
          <p className="mt-5 max-w-[41rem] text-base leading-[1.52] text-ink md:mt-4 md:text-[clamp(1rem,1.3vw,1.25rem)] md:leading-[1.55]">Soluciones legales especializadas para empresas y particulares, con un enfoque estratégico y personalizado.</p>
        </header>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-[clamp(.75rem,1.5vw,1.25rem)]" role="region" aria-label="Áreas de práctica">
          {areas.map(({ title, description, image }, index) => (
            <motion.article className="group relative aspect-[.78] overflow-hidden rounded-[.65rem] bg-ink md:aspect-[2.15/1] md:rounded-xl" key={title} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .1 }} transition={{ duration: .4, delay: reduceMotion ? 0 : index * .05 }}>
              <img className="h-full w-full object-cover [filter:saturate(.78)_contrast(1.08)_brightness(.82)] transition duration-500 group-hover:scale-[1.045] group-hover:[filter:saturate(.92)_contrast(1.05)_brightness(.9)]" src={image} alt="" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[72%] bg-gradient-to-t from-[#030d1af0] to-transparent" />
              <a className="absolute inset-x-0 bottom-0 z-20 flex min-h-[58%] flex-col items-start justify-end p-3 text-paper no-underline md:min-h-[72%] md:p-[clamp(.9rem,1.35vw,1.3rem)]" href="mailto:contacto@lexiusta.pe?subject=Consulta%20legal" aria-label={'Consultar sobre ' + title}>
                <i className="mb-3 h-[2px] w-7 bg-gold md:mb-2.5 md:w-8" aria-hidden="true" />
                <h3 className="font-display text-[clamp(1.25rem,6.2vw,1.65rem)] leading-[.94] font-semibold tracking-[-.04em] md:text-[clamp(1.25rem,1.65vw,1.8rem)]">{title}</h3>
                <span className="hidden max-h-0 overflow-hidden pt-0 text-[.78rem] leading-[1.45] text-paper/85 opacity-0 transition-all duration-200 group-hover:max-h-20 group-hover:pt-3 group-hover:opacity-100 md:block">{description}</span>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Quote } from 'lucide-react'
import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks'

const testimonials = [
  { quote: 'El profesionalismo y la dedicación del equipo de Lex Iusta fueron clave para resolver nuestro caso. Totalmente recomendados.', name: 'Juan Pérez', role: 'Gerente general', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=85' },
  { quote: 'Gracias a su asesoría, obtuvimos un resultado favorable en un proceso familiar complejo. Cercanos, claros y efectivos.', name: 'Laura Mendoza', role: 'Cliente de Derecho Familiar', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=85' },
  { quote: 'Su acompañamiento en la estructuración de contratos nos ha dado seguridad y tranquilidad en cada operación comercial.', name: 'Roberto Silva', role: 'Director financiero', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=85' },
]

export function TestimonialsSection() {
  const reduceMotion = useReducedMotion()
  return (
    <section id="testimonios" className="overflow-hidden bg-paper py-17 md:py-[clamp(4.25rem,9svh,7.5rem)]" aria-labelledby="testimonials-title">
      <div className="mx-auto w-full md:w-[min(calc(100%-6vw),1430px)]">
        <header className="px-6 text-center md:px-0"><h2 id="testimonials-title" className="font-display text-[clamp(3rem,4.7vw,5rem)] leading-[.9] font-semibold tracking-[-.055em] text-ink">Testimonios</h2><i className="mx-auto mt-4 mb-8 block h-[2px] w-12 bg-gold md:mb-[clamp(2rem,4svh,3.5rem)]" aria-hidden="true" /></header>
        <div className="grid grid-flow-col auto-cols-[min(82vw,22rem)] gap-3 overflow-x-auto px-6 pb-5 [scrollbar-width:none] [scroll-snap-type:x_mandatory] [&::-webkit-scrollbar]:hidden md:grid-flow-row md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0" role="region" aria-label="Testimonios de clientes">
          {testimonials.map(({ quote, name, role, image }, index) => (
            <motion.figure className="grid min-h-[18.5rem] grid-rows-[auto_1fr_auto] rounded-xl border border-gold/30 bg-paper/75 p-5 [scroll-snap-align:start] md:min-h-76 md:p-[clamp(1.35rem,2.3vw,2rem)]" key={name} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .35, delay: reduceMotion ? 0 : index * .07 }}>
              <Quote className="h-9 w-9 text-gold" aria-hidden="true" fill="currentColor" strokeWidth={0} />
              <blockquote className="my-3 text-[.82rem] leading-[1.65] text-ink md:my-4 md:text-[clamp(.79rem,.94vw,.95rem)] md:leading-[1.7]">{quote}</blockquote>
              <figcaption className="flex items-center gap-4"><img className="h-14 w-14 rounded-full object-cover [filter:saturate(.78)]" src={image} alt={'Retrato de ' + name} /><div className="grid gap-1"><strong className="flex items-center gap-2 font-display text-[clamp(1.2rem,1.5vw,1.55rem)] leading-none font-semibold text-ink before:h-[2px] before:w-5 before:bg-gold">{name}</strong><span className="text-[.72rem] leading-[1.35] text-ink">{role}</span></div></figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

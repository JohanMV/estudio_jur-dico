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
    <section id="nosotros" className="bg-paper py-14 md:grid md:min-h-[100svh] md:items-center md:py-[clamp(3.75rem,7svh,6.5rem)]" aria-labelledby="about-title">
      <div className="mx-auto grid w-[min(calc(100%-3rem),34rem)] grid-cols-1 gap-0 md:w-[min(calc(100%-6vw),1430px)] md:grid-cols-[minmax(0,.95fr)_minmax(0,1fr)] md:items-center md:gap-[clamp(3rem,8vw,9rem)]">
        <motion.div className="order-3 mb-8 aspect-[1/.83] overflow-hidden rounded-xl bg-stone-200 md:order-none md:mb-0 md:h-[clamp(30rem,69svh,42rem)] md:aspect-auto md:rounded-md" initial={reduceMotion ? false : { opacity: 0, x: -22 }} whileInView={reduceMotion ? {} : { opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .6 }}>
          <img className="h-full w-full object-cover [filter:saturate(.82)_sepia(.16)_brightness(.78)_contrast(1.05)] md:[filter:saturate(.78)_sepia(.09)]" src="https://unsplash.com/photos/gFAgC6IdU3s/download?force=true&w=1200" alt="Despacho jurídico clásico con escritorio de madera" />
        </motion.div>
        <div className="contents md:block md:max-w-[42rem]">
          <i className="order-1 mb-8 block h-[3px] w-11 bg-gold md:mb-7 md:h-[2px] md:w-[3.1rem]" aria-hidden="true" />
          <h2 id="about-title" className="order-2 mb-8 font-display text-[clamp(3rem,13vw,3.85rem)] leading-[.9] font-semibold tracking-[-.06em] text-ink md:mb-[clamp(1.35rem,2.7svh,2rem)] md:text-[clamp(3.8rem,5.3vw,5.8rem)] md:leading-[.82]">Quiénes <span className="text-gold">somos.</span></h2>
          <p className="order-4 text-[clamp(1.02rem,4.35vw,1.17rem)] leading-[1.62] text-ink md:text-[clamp(.94rem,1.1vw,1.1rem)] md:leading-[1.72]">Somos un estudio jurídico comprometido con la excelencia, la ética y la defensa de los intereses de nuestros clientes. Combinamos experiencia, conocimiento y estrategia para ofrecer soluciones legales efectivas y personalizadas.</p>
          <div className="order-5 mt-11 grid grid-cols-3 md:mt-[clamp(2rem,4.5svh,3.5rem)]">
            {values.map(({ title, description, icon: Icon }, index) => (
              <article className={(index ? 'border-l border-gold/45 ' : '') + 'flex min-w-0 flex-col items-center px-2 text-center md:min-h-40 md:px-4'} key={title}>
                <Icon className="h-[clamp(2.75rem,12vw,3.35rem)] w-[clamp(2.75rem,12vw,3.35rem)] text-gold md:h-[46px] md:w-[46px]" strokeWidth={1.3} aria-hidden="true" />
                <i className="my-3 h-[3px] w-7 bg-gold md:hidden" aria-hidden="true" />
                <h3 className="font-display text-[clamp(1.02rem,4.5vw,1.28rem)] leading-[1.06] font-semibold text-ink md:mt-3 md:text-[clamp(1.15rem,1.5vw,1.55rem)] md:leading-[.95]">{title}</h3>
                <p className="hidden pt-2 text-[clamp(.68rem,.82vw,.84rem)] leading-[1.55] text-ink md:block">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

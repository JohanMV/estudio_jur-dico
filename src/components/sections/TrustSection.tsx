import { Award, BriefcaseBusiness, Clock3, Landmark, ShieldCheck, UsersRound } from 'lucide-react'
import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks'

const reasons = [
  { title: 'Experiencia comprobada', description: 'Años de trayectoria y casos de éxito nos respaldan.', icon: Award },
  { title: 'Respuesta oportuna', description: 'Atención ágil y comunicación constante en cada etapa.', icon: Clock3 },
  { title: 'Estrategia personalizada', description: 'Soluciones legales adaptadas a tus necesidades.', icon: UsersRound },
  { title: 'Defensa sólida', description: 'Comprometidos con la defensa firme de tus derechos.', icon: ShieldCheck },
]
const metrics = [
  { value: '15+', label: 'Años de experiencia', icon: Award },
  { value: '500+', label: 'Casos atendidos', icon: BriefcaseBusiness },
  { value: '95%', label: 'Clientes satisfechos', icon: UsersRound },
  { value: '4', label: 'Áreas especializadas', icon: Landmark },
]

export function TrustSection() {
  const reduceMotion = useReducedMotion()
  return (
    <section className="bg-paper" aria-labelledby="trust-title">
      <div className="mx-auto w-[min(calc(100%-3rem),34rem)] py-16 md:w-[min(calc(100%-6vw),1430px)] md:py-[clamp(4rem,9svh,7.25rem)]">
        <header className="text-center"><h2 id="trust-title" className="font-display text-[clamp(3rem,4.7vw,5rem)] leading-[.9] font-semibold tracking-[-.055em] text-ink">¿Por qué elegirnos?</h2><i className="mx-auto mt-4 mb-9 block h-[2px] w-12 bg-gold" aria-hidden="true" /></header>
        <div className="grid grid-cols-2 gap-y-7 md:grid-cols-4 md:gap-y-0">
          {reasons.map(({ title, description, icon: Icon }, index) => (
            <motion.article className={(index % 2 ? 'border-l border-gold/40 ' : '') + (index > 1 ? 'border-t border-gold/35 pt-7 md:border-t-0 md:pt-0 ' : '') + (index ? 'md:border-l md:border-gold/45 ' : '') + 'min-h-0 px-3 pb-7 text-center md:min-h-52 md:px-[clamp(1rem,2.3vw,2.8rem)] md:pb-0'} key={title} initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .35, delay: reduceMotion ? 0 : index * .06 }}>
              <Icon className="mx-auto h-11 w-11 text-gold md:h-[clamp(2.8rem,4vw,3.6rem)] md:w-[clamp(2.8rem,4vw,3.6rem)]" strokeWidth={1.35} aria-hidden="true" />
              <h3 className="mx-auto mt-3 max-w-40 font-display text-[1.25rem] leading-[.95] font-semibold text-ink md:mt-4 md:text-[clamp(1.35rem,1.7vw,1.8rem)]">{title}</h3>
              <p className="mx-auto mt-2 max-w-52 text-[.7rem] leading-[1.45] text-ink md:mt-3 md:text-[clamp(.72rem,.85vw,.88rem)] md:leading-[1.55]">{description}</p>
            </motion.article>
          ))}
        </div>
        <p className="mx-auto mt-9 max-w-[52rem] text-center font-display text-[1.32rem] leading-[1.18] font-semibold text-ink md:mt-[clamp(2.5rem,5svh,4.25rem)] md:text-[clamp(1.35rem,1.8vw,2rem)] md:leading-[1.2]">Tu tranquilidad legal es nuestra prioridad. Trabajamos con rigor, confidencialidad y total compromiso.</p>
      </div>
      <div className="bg-[#f0e6da]"><div className="mx-auto grid w-[min(calc(100%-3rem),34rem)] grid-cols-2 gap-y-8 py-10 md:w-[min(calc(100%-6vw),1430px)] md:grid-cols-4 md:gap-y-0 md:py-[clamp(2.25rem,5svh,4rem)]">
        {metrics.map(({ value, label, icon: Icon }, index) => (
          <article className={(index % 2 ? 'border-l border-gold/40 ' : '') + (index > 1 ? 'border-t border-gold/35 pt-8 md:border-t-0 md:pt-0 ' : '') + (index ? 'md:border-l md:border-gold/40 ' : '') + 'grid justify-items-center px-3 text-center'} key={label}>
            <Icon className="mb-3 h-9 w-9 text-gold md:h-10 md:w-10" strokeWidth={1.3} aria-hidden="true" />
            <strong className="font-display text-[3.8rem] leading-[.7] font-semibold tracking-[-.075em] text-ink md:text-[clamp(3.6rem,5.2vw,5.7rem)]">{value}</strong>
            <span className="mt-3 max-w-32 text-[.62rem] leading-[1.3] font-bold tracking-[.06em] uppercase text-ink md:mt-4 md:text-[clamp(.63rem,.78vw,.78rem)]">{label}</span>
          </article>
        ))}
      </div></div>
    </section>
  )
}

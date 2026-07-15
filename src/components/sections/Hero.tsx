import { ArrowRight, Scale, ShieldCheck } from 'lucide-react'
import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks'

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="inicio" className="relative grid min-h-[max(42rem,100svh)] overflow-hidden bg-cream lg:min-h-[max(720px,100svh)]" aria-labelledby="hero-title">
      <div className="absolute inset-0 bg-[url('/img/hero_wallpaper_mobile.webp')] bg-cover bg-[position:22%_bottom] lg:bg-[url('/img/hero_wallpaper_escritorio.webp')] lg:bg-center" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex min-h-full w-[min(calc(100%-3rem),1430px)] items-start md:w-[min(calc(100%-6vw),1430px)] md:min-h-[74svh] md:items-center md:pl-[clamp(3.5rem,8.15vw,9.75rem)]">
        <motion.div className="w-[min(58%,16rem)] pt-[clamp(8.75rem,17svh,10.5rem)] md:w-full md:max-w-[35rem] md:-translate-y-10 md:pt-0" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={reduceMotion ? {} : { opacity: 1, y: 0 }} transition={{ duration: .62, ease: 'easeOut' }}>
          <p className="text-[.66rem] font-bold tracking-[.16em] text-gold md:text-[clamp(.78rem,1vw,.98rem)] md:tracking-[.19em]">DEFENDEMOS TUS DERECHOS</p>
          <i className="my-3 block h-[2px] w-10 bg-gold md:my-[clamp(1.25rem,2.5svh,1.75rem)] md:w-[3.1rem]" aria-hidden="true" />
          <h1 id="hero-title" className="font-display text-[clamp(3.5rem,15.5vw,4.4rem)] leading-[.8] font-semibold tracking-[-.065em] text-ink md:text-[clamp(4.7rem,7.1vw,7.2rem)]">Justicia<br />que te<br /><span className="text-gold">respalda.</span></h1>
          <p className="mt-[1.15rem] max-w-[14rem] text-[.9rem] leading-[1.48] text-ink md:mt-[clamp(1.7rem,3.5svh,2.4rem)] md:max-w-[33rem] md:text-[clamp(1rem,1.25vw,1.16rem)] md:leading-[1.58]">Asesoría legal experta y estrategias efectivas para proteger lo que más te importa.</p>
          <a className="mt-[1.35rem] inline-flex h-14 w-[min(14.75rem,calc(100vw-3rem))] items-center justify-between gap-3 rounded-md border border-ink bg-ink px-4 text-[.66rem] font-bold uppercase tracking-[.015em] text-paper no-underline shadow-[0_12px_22px_rgba(19,40,74,.12)] transition hover:-translate-y-0.5 hover:bg-transparent hover:text-ink md:mt-6 md:w-auto md:min-w-[17.5rem] md:text-[clamp(.76rem,.9vw,.92rem)]" href="mailto:contacto@lexiusta.pe?subject=Solicitud%20de%20asesoría"><Scale className="text-gold" size={22} aria-hidden="true" /><span>Solicitar asesoría</span><ArrowRight className="text-gold" size={22} aria-hidden="true" /></a>
        </motion.div>
      </div>
      <div className="absolute bottom-[max(1.5rem,env(safe-area-inset-bottom))] left-6 z-10 grid grid-cols-[1.45rem_1fr] items-center gap-x-2 gap-y-0.5 text-[.65rem] leading-tight text-ink md:bottom-12 md:left-[clamp(3.5rem,8.15vw,9.75rem)] md:flex md:flex-wrap md:gap-3 md:text-[clamp(.72rem,.86vw,.88rem)]">
        <ShieldCheck className="row-span-2 text-gold md:row-auto" size={25} aria-hidden="true" /><span>Confidencialidad<span className="block md:hidden">Garantizada</span></span><b className="hidden text-gold md:inline" aria-hidden="true">•</b><span className="hidden md:inline">Experiencia</span><b className="hidden text-gold md:inline" aria-hidden="true">•</b><span className="hidden md:inline">Compromiso</span>
      </div>
    </section>
  )
}

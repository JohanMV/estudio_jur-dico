import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Áreas de práctica', href: '/areas-practica' },
  { label: 'Contacto', href: '/contacto' },
]

const sectionByPath: Record<string, string> = {
  '/': 'inicio',
  '/nosotros': 'nosotros',
  '/servicios': 'areas-practica',
  '/areas-practica': 'areas-practica',
  '/contacto': 'contacto',
}

function navigateToSection(href: string) {
  const section = document.getElementById(sectionByPath[href] ?? '')
  if (!section) return
  window.history.pushState({}, '', href)
  section.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function BrandCrest() {
  return <svg className="h-full w-full overflow-visible fill-none stroke-current stroke-[1.6] [stroke-linecap:round] [stroke-linejoin:round]" viewBox="0 0 64 76" aria-hidden="true">
    <path d="M32 3 57 13v23c0 18-10 29-25 37C17 65 7 54 7 36V13L32 3Z" />
    <path d="M32 9 51 17v18c0 14-7 24-19 31-12-7-19-17-19-31V17L32 9Z" />
    <path d="m32 15 2 4 4 .5-3 3 .8 4-3.8-2-3.8 2 .8-4-3-3 4-.5 2-4Z" className="fill-current stroke-none" />
    <path d="M22 31h20M25 29h14M24 34h16M26 37v15m4-15v15m4-15v15m4-15v15M23 54h18M18 40c-3 4-3 11 1 15m27-15c3 4 3 11-1 15" />
  </svg>
}

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-30 mx-auto flex w-[min(calc(100%-2rem),1430px)] items-center justify-between pt-6 md:w-[min(calc(100%-6vw),1430px)] md:pt-7 xl:pt-8">
      <a className="inline-flex items-center gap-3 text-ink no-underline" href="/" onClick={(event) => { event.preventDefault(); navigateToSection('/'); setOpen(false) }} aria-label="Lex Iusta, ir al inicio">
        <span className="grid h-[4.25rem] w-[3.75rem] place-items-center text-gold md:h-20 md:w-[4.45rem]"><BrandCrest /></span>
        <span className="grid gap-1">
          <strong className="font-display text-[clamp(1.8rem,3vw,3rem)] leading-[.78] font-bold tracking-[-.045em]">LEX IUSTA</strong>
          <small className="font-display text-[clamp(.56rem,1vw,.95rem)] leading-none font-bold tracking-[.22em] text-gold">ESTUDIO JURÍDICO</small>
        </span>
      </a>
      <button className="grid rounded-md p-1.5 text-ink md:hidden" type="button" aria-label={open ? 'Cerrar navegación' : 'Abrir navegación'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav id="main-navigation" className={(open ? 'grid ' : 'hidden ') + 'absolute inset-x-0 top-[calc(100%+.75rem)] gap-1 rounded-lg border border-gold/35 bg-paper/98 p-2 shadow-xl md:static md:flex md:items-center md:gap-[clamp(1.25rem,3vw,4rem)] md:border-0 md:bg-transparent md:p-0 md:shadow-none'} aria-label="Navegación principal">
        {links.map((link) => <a className="relative px-3 py-2 text-[.78rem] font-semibold uppercase text-ink no-underline after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-right after:scale-x-0 after:bg-gold after:transition-transform hover:after:origin-left hover:after:scale-x-100 md:px-0 md:py-1 md:text-[clamp(.72rem,.85vw,.92rem)]" key={link.label} href={link.href} onClick={(event) => { event.preventDefault(); navigateToSection(link.href); setOpen(false) }}>{link.label}</a>)}
      </nav>
    </header>
  )
}

import { Menu, Scale, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const links = [
  { label: 'Inicio', href: '/', sectionId: 'inicio' },
  { label: 'Nosotros', href: '/nosotros', sectionId: 'nosotros' },
  { label: 'Áreas de práctica', href: '/areas-practica', sectionId: 'areas-practica' },
  { label: 'Testimonios', href: '/testimonios', sectionId: 'testimonios' },
  { label: 'Equipo', href: '/equipo', sectionId: 'equipo' },
  { label: 'Contacto', href: '/contacto', sectionId: 'contacto' },
]

const sectionByPath: Record<string, string> = {
  '/': 'inicio',
  '/nosotros': 'nosotros',
  '/areas-practica': 'areas-practica',
  '/testimonios': 'testimonios',
  '/equipo': 'equipo',
  '/contacto': 'contacto',
}

function navigateToSection(href: string, moveFocus = false) {
  const section = document.getElementById(sectionByPath[href] ?? '')
  if (!section) return
  window.history.pushState({}, '', href)
  section.scrollIntoView({ behavior: 'smooth', block: 'start' })

  if (!moveFocus) return
  const labelledBy = section.getAttribute('aria-labelledby')
  const focusTarget = (labelledBy ? document.getElementById(labelledBy) : null) ?? section
  if (!focusTarget) return
  const previousTabIndex = focusTarget.getAttribute('tabindex')
  focusTarget.setAttribute('tabindex', '-1')
  focusTarget.focus({ preventScroll: true })
  focusTarget.addEventListener('blur', () => {
    if (previousTabIndex === null) focusTarget.removeAttribute('tabindex')
    else focusTarget.setAttribute('tabindex', previousTabIndex)
  }, { once: true })
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
  const [activeSection, setActiveSection] = useState('inicio')
  const headerRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const sections = links
      .map(({ sectionId }) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => section !== null)
    const observer = new IntersectionObserver((entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
      if (visibleSection) setActiveSection(visibleSection.target.id)
    }, { rootMargin: '-18% 0px -68% 0px', threshold: 0 })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      setOpen(false)
      menuButtonRef.current?.focus()
    }

    function handlePointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [open])

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px)')
    function handleViewportChange(event: MediaQueryListEvent) {
      if (event.matches) setOpen(false)
    }

    desktopQuery.addEventListener('change', handleViewportChange)
    return () => desktopQuery.removeEventListener('change', handleViewportChange)
  }, [])

  return (
    <header ref={headerRef} className="absolute inset-x-0 top-0 z-30 mx-auto flex w-[min(calc(100%-2rem),1430px)] items-center justify-between pt-5 md:w-[min(calc(100%-6vw),1430px)] md:pt-5 xl:pt-5">
      <a className="inline-flex items-center gap-3 text-ink no-underline focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold" href="/" onClick={(event) => { event.preventDefault(); setActiveSection('inicio'); navigateToSection('/', open); setOpen(false) }} aria-label="Lex Iusta, ir al inicio">
        <span className="grid h-[4.25rem] w-[3.75rem] place-items-center text-gold md:h-[4.5rem] md:w-16"><BrandCrest /></span>
        <span className="grid gap-1">
          <strong className="font-display text-[clamp(1.7rem,2.7vw,2.7rem)] leading-[.78] font-bold tracking-[-.045em]">LEX IUSTA</strong>
          <small className="font-display text-[clamp(.54rem,.9vw,.84rem)] leading-none font-bold tracking-[.22em] text-gold">ESTUDIO JURÍDICO</small>
        </span>
      </a>
      <button ref={menuButtonRef} className="grid h-11 w-11 shrink-0 place-items-center rounded-md text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold lg:hidden" type="button" aria-label={open ? 'Cerrar navegación' : 'Abrir navegación'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen((current) => !current)}>{open ? <X /> : <Menu />}</button>
      <nav id="main-navigation" className={(open ? 'grid ' : 'hidden ') + 'absolute inset-x-0 top-[calc(100%+.75rem)] gap-1 rounded-lg border border-gold/35 bg-paper/98 p-2 shadow-xl lg:static lg:flex lg:w-auto lg:items-center lg:gap-1 lg:rounded-full lg:border lg:border-ink/75 lg:bg-paper/80 lg:p-1.5 lg:shadow-[0_4px_18px_rgba(19,40,74,.08)]'} aria-label="Navegación principal">
        {links.map((link) => {
          const active = activeSection === link.sectionId
          return <a aria-current={active ? 'page' : undefined} className={(active ? 'bg-paper text-gold shadow-[inset_0_0_0_1px_rgba(172,123,62,.25)] after:scale-x-100 ' : 'text-ink hover:bg-cream/75 after:scale-x-0 ') + 'relative flex min-h-11 items-center rounded-full px-4 py-2.5 text-[.78rem] font-semibold no-underline after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-right after:bg-gold after:transition-transform hover:after:origin-left hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-gold lg:min-h-11 lg:px-3 lg:text-[clamp(.68rem,.78vw,.86rem)] xl:px-4 2xl:px-5'} key={link.label} href={link.href} onClick={(event) => { event.preventDefault(); setActiveSection(link.sectionId); navigateToSection(link.href, open); setOpen(false) }}>{link.label}</a>
        })}<span className="ml-1 hidden h-11 w-11 place-items-center rounded-full bg-gold text-paper lg:grid"><Scale className="h-5 w-5 stroke-[1.7]" aria-hidden="true" /></span>
      </nav>
    </header>
  )
}

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Áreas de práctica', href: '/areas-practica' },
  { label: 'Contacto', href: 'mailto:contacto@lexiusta.pe' },
]

const sectionByPath: Record<string, string> = {
  '/': 'inicio',
  '/nosotros': 'nosotros',
  '/servicios': 'areas-practica',
  '/areas-practica': 'areas-practica',
}

function navigateToSection(href: string) {
  const sectionId = sectionByPath[href]
  const section = sectionId ? document.getElementById(sectionId) : null

  if (!section) return

  window.history.pushState({}, '', href)
  section.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function BrandCrest() {
  return <svg className="brand-crest" viewBox="0 0 64 76" aria-hidden="true">
    <path d="M32 3 57 13v23c0 18-10 29-25 37C17 65 7 54 7 36V13L32 3Z" />
    <path d="M32 9 51 17v18c0 14-7 24-19 31-12-7-19-17-19-31V17L32 9Z" />
    <path d="m32 15 2 4 4 .5-3 3 .8 4-3.8-2-3.8 2 .8-4-3-3 4-.5 2-4Z" className="brand-crest__fill" />
    <path d="M22 31h20M25 29h14M24 34h16M26 37v15m4-15v15m4-15v15m4-15v15M23 54h18" />
    <path d="M18 40c-3 4-3 11 1 15m27-15c3 4 3 11-1 15" />
  </svg>
}

export function Header() {
  const [open, setOpen] = useState(false)

  return <header className="site-header">
    <a className="brand" href="/" onClick={(event) => { event.preventDefault(); navigateToSection('/'); setOpen(false) }} aria-label="Lex Iusta, ir al inicio">
      <span className="brand-mark"><BrandCrest /></span>
      <span className="brand-copy"><strong>LEX IUSTA</strong><small>ESTUDIO JURÍDICO</small></span>
    </a>
    <button className="menu-toggle" type="button" aria-label={open ? 'Cerrar navegación' : 'Abrir navegación'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav id="main-navigation" className={open ? 'main-nav main-nav--open' : 'main-nav'} aria-label="Navegación principal">
      {links.map((link) => <a key={link.label} href={link.href} onClick={(event) => {
        if (link.href.startsWith('/')) {
          event.preventDefault()
          navigateToSection(link.href)
        }
        setOpen(false)
      }}>{link.label}</a>)}
    </nav>
  </header>
}

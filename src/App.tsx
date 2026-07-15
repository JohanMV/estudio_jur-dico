import { AboutSection, ContactSection, Hero, PracticeAreasSection, TeamSection, TestimonialsSection, TrustSection } from '@/components/sections'
import { MainLayout } from '@/layouts'
import { useEffect } from 'react'
import './lex-iusta.css'

const sectionByPath: Record<string, string> = {
  '/': 'inicio',
  '/inicio': 'inicio',
  '/nosotros': 'nosotros',
  '/servicios': 'areas-practica',
  '/areas-practica': 'areas-practica',
  '/equipo': 'equipo',
  '/contacto': 'contacto',
}

function scrollToRoute() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const sectionId = sectionByPath[path] ?? window.location.hash.slice(1)
  const section = sectionId ? document.getElementById(sectionId) : null
  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function App() {
  useEffect(() => {
    const timeout = window.setTimeout(scrollToRoute, 0)
    window.addEventListener('popstate', scrollToRoute)
    return () => { window.clearTimeout(timeout); window.removeEventListener('popstate', scrollToRoute) }
  }, [])
  return <MainLayout><Hero /><AboutSection /><PracticeAreasSection /><TrustSection /><TestimonialsSection /><TeamSection /><ContactSection /></MainLayout>
}
export default App

import { ArrowRight, Clock3, FileText, LockKeyhole, Mail, MapPin, MessageSquare, Phone, Send, UserRound } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'

const contactDetails = [
  { icon: MapPin, title: 'Dirección', lines: ['Av. Javier Prado Este 560, Of. 804', 'San Isidro, Lima 15046'] },
  { icon: Phone, title: 'Teléfono', lines: ['+51 1 642 3178'] },
  { icon: Mail, title: 'Correo', lines: ['contacto@lexiusta.pe'] },
  { icon: Clock3, title: 'Horario de atención', lines: ['Lunes a viernes, 9:00 a. m. – 6:00 p. m.'] },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '')
    const email = String(form.get('email') ?? '')
    const phone = String(form.get('phone') ?? '')
    const matter = String(form.get('matter') ?? '')
    const message = String(form.get('message') ?? '')
    const subject = encodeURIComponent(`Consulta legal: ${matter || name}`)
    const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\nAsunto: ${matter}\n\nConsulta:\n${message}`)

    setSubmitted(true)
    window.location.href = `mailto:contacto@lexiusta.pe?subject=${subject}&body=${body}`
  }

  return (
    <section id="contacto" className="bg-cream py-16 md:py-[clamp(5rem,9svh,8rem)]" aria-labelledby="contact-title">
      <div className="mx-auto w-full px-6 md:w-[min(calc(100%-6vw),1430px)] md:px-0">
        <header className="mx-auto mb-10 max-w-3xl text-center md:mb-[clamp(3rem,6svh,5.25rem)]">
          <h2 id="contact-title" className="font-display text-[clamp(3.8rem,6.3vw,6.6rem)] leading-[.78] font-semibold tracking-[-.065em] text-ink">Contacto</h2>
          <div className="mx-auto mt-5 flex items-center justify-center gap-2 text-gold" aria-hidden="true"><i className="h-px w-20 bg-current" /><span className="text-xs">◆</span><i className="h-px w-20 bg-current" /></div>
          <p className="mx-auto mt-5 max-w-2xl text-[.95rem] leading-relaxed text-ink md:text-[clamp(.95rem,1.2vw,1.25rem)]">Estamos aquí para ayudarte. Escríbenos y uno de nuestros especialistas se pondrá en contacto contigo a la brevedad.</p>
        </header>

        <div className="grid gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,1.15fr)] xl:gap-[clamp(3rem,6vw,7rem)]">
          <form className="grid gap-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nombre completo" icon={UserRound}><input name="name" autoComplete="name" required placeholder="Ingresa tu nombre completo" /></Field>
              <Field label="Correo electrónico" icon={Mail}><input name="email" type="email" autoComplete="email" required placeholder="Ingresa tu correo electrónico" /></Field>
              <Field label="Teléfono" icon={Phone}><input name="phone" type="tel" autoComplete="tel" placeholder="Ingresa tu número de teléfono" /></Field>
              <Field label="Asunto" icon={FileText}><input name="matter" required placeholder="Ingresa el asunto de tu consulta" /></Field>
            </div>
            <Field label="Mensaje" icon={MessageSquare}><textarea name="message" rows={5} required placeholder="Cuéntanos en qué podemos ayudarte..." /></Field>
            <button className="group flex min-h-16 items-center justify-center gap-5 rounded-lg bg-ink px-6 text-sm font-bold tracking-wide text-paper transition hover:bg-ink/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold" type="submit"><Send className="h-5 w-5 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />ENVIAR CONSULTA<ArrowRight className="h-5 w-5 text-gold transition-transform group-hover:translate-x-1" aria-hidden="true" /></button>
            <p className="flex items-center justify-center gap-2 text-center text-xs leading-relaxed text-ink/80"><LockKeyhole className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />Tu información será tratada con absoluta confidencialidad.</p>
            {submitted && <p className="text-center text-sm text-gold" role="status">Abrimos tu correo para enviar la consulta.</p>}
          </form>

          <div className="border-t border-gold/55 pt-8 xl:border-t-0 xl:border-l xl:pt-0 xl:pl-[clamp(3rem,5vw,5.5rem)]">
            <div className="grid gap-7 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-9">
              {contactDetails.map(({ icon: Icon, title, lines }) => <article className="flex gap-4" key={title}><Icon className="mt-0.5 h-7 w-7 shrink-0 stroke-[1.6] text-gold" aria-hidden="true" /><div><h3 className="text-base font-bold text-ink">{title}</h3>{lines.map((line) => <p className="mt-1 text-sm leading-relaxed text-ink/85" key={line}>{line}</p>)}</div></article>)}
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <img className="h-52 w-full rounded-xl object-cover [filter:saturate(.72)] sm:h-64" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85" alt="Recepción de una oficina jurídica" />
              <iframe className="h-52 w-full rounded-xl border border-gold/20 sm:h-64" title="Ubicación de Lex Iusta en San Isidro" src="https://www.google.com/maps?q=Av.+Javier+Prado+Este+560,+San+Isidro,+Lima&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-16 border-t border-gold/25 bg-ink py-6 text-paper md:mt-[clamp(4rem,8svh,7rem)]"><div className="mx-auto flex w-full flex-col gap-2 px-6 text-center text-[.68rem] font-medium tracking-[.1em] uppercase md:w-[min(calc(100%-6vw),1430px)] md:flex-row md:justify-between md:px-0"><span>Lex Iusta · Estudio Jurídico</span><span className="text-paper/70">Defensa legal con criterio y compromiso.</span></div></footer>
    </section>
  )
}

type FieldProps = { label: string; icon: typeof UserRound; children: ReactNode }

function Field({ label, icon: Icon, children }: FieldProps) {
  return <label className="grid gap-2 text-sm font-bold text-ink"><span>{label}</span><span className="flex min-h-16 items-center gap-3 rounded-lg border border-gold/55 bg-paper px-4 text-ink transition focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/15 [&_input]:min-w-0 [&_input]:flex-1 [&_input]:bg-transparent [&_input]:text-sm [&_input]:font-normal [&_input]:text-ink [&_input]:outline-none [&_input::placeholder]:text-ink/55 [&_textarea]:min-h-36 [&_textarea]:w-full [&_textarea]:resize-y [&_textarea]:bg-transparent [&_textarea]:pt-4 [&_textarea]:text-sm [&_textarea]:font-normal [&_textarea]:text-ink [&_textarea]:outline-none [&_textarea::placeholder]:text-ink/55"><Icon className="h-5 w-5 shrink-0 stroke-[1.75] text-gold" aria-hidden="true" />{children}</span></label>
}
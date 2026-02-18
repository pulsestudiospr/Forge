"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";

/* ─── SCROLL ANIMATION ─── */
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FadeIn({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(20px)",
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
    }}>{children}</div>
  );
}

/* ─── ICONS ─── */
const IconArrow = () => (
  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);
const IconCheck = () => (
  <svg className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);
const IconWhatsApp = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
const IconInstagram = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

/* ─── NAVBAR ─── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Programas", href: "#programas" },
    { label: "Horario", href: "#horario" },
    { label: "Precios", href: "#precios" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/[0.05]" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-[0.2em] text-amber-500" style={{ fontFamily: "var(--font-oswald)" }}>
          FÖRGE
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[11px] text-zinc-500 hover:text-white transition-colors uppercase tracking-[0.15em]">{l.label}</a>
          ))}
          <a href="#contacto" className="text-[11px] px-5 py-2 bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-[0.15em] transition-all">
            Clase Gratis
          </a>
        </div>
        <button className="md:hidden text-zinc-400 p-2" onClick={() => setOpen(!open)}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-black/95 backdrop-blur-xl px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base text-zinc-400 hover:text-white transition-colors uppercase tracking-wider">{l.label}</a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)} className="text-center py-2.5 bg-amber-500 text-black font-bold uppercase tracking-wider text-sm">Clase Gratis</a>
        </div>
      )}
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1600&q=80&auto=format&fit=crop"
          alt="Academia FÖRGE - Entrenamiento de Jiu Jitsu Brasileño en San Juan, Puerto Rico"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full text-center py-32">
        <div className="animate-fade-in-up">
          <p className="text-amber-500 text-[11px] font-bold tracking-[0.3em] uppercase mb-8">Jiu Jitsu Brasileño · San Juan, PR · 500+ Estudiantes</p>
        </div>

        <h1 className="animate-fade-in-up animate-delay-100 text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] mb-8 uppercase" style={{ fontFamily: "var(--font-oswald)" }}>
          Forja tu
          <br />
          <span className="text-amber-500">mejor</span> versión
        </h1>

        <p className="animate-fade-in-up animate-delay-200 text-zinc-300 text-xl sm:text-2xl max-w-lg mx-auto mb-8 leading-relaxed font-medium">
          Primera clase <span className="text-amber-500 font-bold">100% GRATIS</span>
        </p>

        <p className="animate-fade-in-up animate-delay-300 text-zinc-500 text-base max-w-md mx-auto mb-12 leading-relaxed">
          Todos los niveles bienvenidos. Sin contratos. Sin ego. Solo resultados reales.
        </p>

        <div className="animate-fade-in-up animate-delay-400 flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="#contacto" className="group inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold uppercase tracking-[0.1em] text-base transition-all duration-300 shadow-lg shadow-amber-500/30">
            🥋 Reservar Clase GRATIS <IconArrow />
          </a>
          <a 
            href="https://wa.me/17870000000?text=Hola%2C%20me%20interesa%20la%20clase%20gratis%20de%20Jiu%20Jitsu%20en%20FÖRGE" 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'whatsapp_click', {
                  event_category: 'engagement',
                  event_label: 'hero_section'
                });
              }
            }}
            className="inline-flex items-center justify-center px-10 py-5 border-2 border-green-500/50 hover:border-green-400 hover:bg-green-500/10 text-white uppercase tracking-[0.1em] text-base transition-all duration-300">
            💬 WhatsApp Directo
          </a>
        </div>

        <div className="animate-fade-in-up animate-delay-500 flex flex-wrap items-center justify-center gap-6 text-zinc-500 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Sin contratos</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Cancela cuando quieras</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Gi incluido gratis</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT / WHY ─── */
function About() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-amber-500 text-[11px] font-bold tracking-[0.3em] uppercase mb-4">Sobre nosotros</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase leading-tight mb-6" style={{ fontFamily: "var(--font-oswald)" }}>
                Más que un gym.<br/>Una comunidad.
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                FÖRGE es la academia de BJJ más respetada de San Juan. Desde principiantes hasta competidores élite, aquí forjas disciplina, confianza y una comunidad de por vida.
              </p>
              
              <div className="mb-6">
                <div className="flex items-center gap-2 text-yellow-400 mb-2">
                  ⭐⭐⭐⭐⭐ <span className="text-white text-sm font-bold">4.9/5</span>
                  <span className="text-zinc-500 text-sm">(127+ reseñas)</span>
                </div>
                <p className="text-zinc-500 text-sm italic">
                  "La mejor academia de BJJ en PR. Ambiente familiar y profesionalismo de primer nivel." - Carlos M.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/[0.06]">
                {[
                  { num: "10+", label: "Años", desc: "De experiencia" },
                  { num: "500+", label: "Estudiantes", desc: "Activos" },
                  { num: "95%", label: "Retención", desc: "Después de 3 meses" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-bold text-amber-500" style={{ fontFamily: "var(--font-oswald)" }}>{s.num}</div>
                    <div className="text-zinc-300 text-xs uppercase tracking-wider mt-1">{s.label}</div>
                    <div className="text-zinc-600 text-[10px] mt-1">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1615117972428-28de67cda58a?w=800&q=80"
                alt="Clase de Jiu Jitsu"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-amber-500 text-black px-5 py-3">
                <p className="text-xs font-bold uppercase tracking-wider">Primera clase</p>
                <p className="text-2xl font-bold" style={{ fontFamily: "var(--font-oswald)" }}>GRATIS</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── PROGRAMS ─── */
function Programs() {
  const items = [
    {
      title: "Jiu Jitsu Gi",
      desc: "El arte suave. Técnica sobre fuerza.",
      icon: "🥋",
    },
    {
      title: "No-Gi",
      desc: "Grappling sin kimono. Ritmo rápido.",
      icon: "⚡",
    },
    {
      title: "Kids BJJ",
      desc: "Disciplina y confianza desde temprano.",
      icon: "👊",
    },
    {
      title: "Strength & Conditioning",
      desc: "Fuerza funcional para el mat y la vida.",
      icon: "💪",
    },
    {
      title: "Open Mat",
      desc: "Entrena libre. Practica lo tuyo.",
      icon: "🔥",
    },
    {
      title: "Competición",
      desc: "Preparación para torneos.",
      icon: "🏆",
    },
  ];

  return (
    <section id="programas" className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-amber-500 text-[11px] font-bold tracking-[0.3em] uppercase mb-4">Programas</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase" style={{ fontFamily: "var(--font-oswald)" }}>
              Elige tu camino
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.06}>
              <div className="group p-6 border border-white/[0.05] hover:border-amber-500/20 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
                <span className="text-2xl mb-4 block">{s.icon}</span>
                <h3 className="font-bold text-base uppercase tracking-wide mb-2">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SCHEDULE ─── */
function Schedule() {
  const schedule = [
    { time: "6:00 AM", mon: "Open Mat", tue: "S&C", wed: "Open Mat", thu: "S&C", fri: "Open Mat", sat: "Open Mat" },
    { time: "7:30 AM", mon: "Fundamentals", tue: "No-Gi", wed: "Fundamentals", thu: "No-Gi", fri: "Fundamentals", sat: "All Levels" },
    { time: "12:00 PM", mon: "Lunch Roll", tue: "—", wed: "Lunch Roll", thu: "—", fri: "Lunch Roll", sat: "—" },
    { time: "5:00 PM", mon: "Kids BJJ", tue: "Kids BJJ", wed: "Kids BJJ", thu: "Kids BJJ", fri: "—", sat: "—" },
    { time: "6:30 PM", mon: "All Levels Gi", tue: "No-Gi", wed: "All Levels Gi", thu: "Competition", fri: "Open Mat", sat: "—" },
    { time: "8:00 PM", mon: "Advanced", tue: "S&C", wed: "Advanced", thu: "Sparring", fri: "—", sat: "—" },
  ];

  const days = ["mon", "tue", "wed", "thu", "fri", "sat"] as const;
  const dayLabels = ["LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB"];

  return (
    <section id="horario" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-amber-500 text-[11px] font-bold tracking-[0.3em] uppercase mb-4">Horario</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase" style={{ fontFamily: "var(--font-oswald)" }}>
              Entrena cuando puedas
            </h2>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-amber-500/20">
                  <th className="text-left py-3 px-3 text-zinc-600 text-[10px] uppercase tracking-[0.15em] font-medium w-20">Hora</th>
                  {dayLabels.map((d) => (
                    <th key={d} className="py-3 px-3 text-amber-500 text-[10px] uppercase tracking-[0.15em] font-bold text-center">{d}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {schedule.map((row) => (
                  <tr key={row.time} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-3 font-bold text-zinc-300 whitespace-nowrap text-xs" style={{ fontFamily: "var(--font-oswald)" }}>{row.time}</td>
                    {days.map((d) => (
                      <td key={d} className={`py-3.5 px-3 text-center text-xs ${row[d] === "—" ? "text-zinc-800" : "text-zinc-400"}`}>
                        {row[d]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-zinc-700 text-[10px] mt-4 text-center uppercase tracking-wider">Domingos cerrado · Horario sujeto a cambios</p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── PRICING ─── */
function Pricing() {
  const plans = [
    {
      name: "Drop-In",
      price: "$25",
      period: "clase",
      features: ["1 clase cualquier horario", "Sin compromiso", "Visitantes bienvenidos"],
      featured: false,
    },
    {
      name: "Ilimitado",
      price: "$150",
      period: "mes",
      features: ["Clases ilimitadas", "Todas las disciplinas", "Open mat incluido", "S&C incluido", "Comunidad FÖRGE"],
      featured: true,
    },
    {
      name: "Familiar",
      price: "$250",
      period: "mes",
      features: ["2 miembros", "Clases ilimitadas", "Kids BJJ incluido", "Descuento por miembro extra"],
      featured: false,
    },
  ];

  return (
    <section id="precios" className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-amber-500 text-[11px] font-bold tracking-[0.3em] uppercase mb-4">Membresías</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase" style={{ fontFamily: "var(--font-oswald)" }}>
              Invierte en ti
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {plans.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.08}>
              <div className={`p-7 h-full flex flex-col relative ${
                p.featured
                  ? "bg-amber-500/[0.06] border-2 border-amber-500/30"
                  : "border border-white/[0.05] hover:border-white/[0.1] transition-colors"
              }`}>
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] text-black font-bold bg-amber-500 px-4 py-0.5 uppercase tracking-[0.15em]">Popular</div>
                )}
                <h3 className="font-bold text-sm uppercase tracking-wider text-zinc-400">{p.name}</h3>
                <div className="mt-3 mb-6">
                  <span className="text-4xl font-bold" style={{ fontFamily: "var(--font-oswald)" }}>{p.price}</span>
                  <span className="text-zinc-600 text-xs ml-1">/{p.period}</span>
                </div>
                <ul className="space-y-2.5 mb-8 flex-grow">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-zinc-400">
                      <IconCheck /><span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contacto" className={`block text-center py-3 text-xs font-bold uppercase tracking-[0.15em] transition-all ${
                  p.featured
                    ? "bg-amber-500 hover:bg-amber-400 text-black"
                    : "bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.06]"
                }`}>Empezar</a>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="text-center text-zinc-600 text-xs mt-8 uppercase tracking-wider">Primera clase gratis · Sin contratos · Cancela cuando quieras</p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── CTA BANNER ─── */
function CtaBanner() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
              alt="Gym interior"
              className="w-full h-[350px] sm:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
              <div className="text-center px-6 max-w-2xl">
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase leading-tight mb-4" style={{ fontFamily: "var(--font-oswald)" }}>
                  El mat no espera.<br/><span className="text-amber-500">Tú tampoco.</span>
                </h2>
                <p className="text-zinc-400 text-base mb-8">Tu primera clase es gratis. Sin excusas.</p>
                <a href="#contacto" className="group inline-flex items-center px-10 py-4 bg-amber-500 text-black font-bold uppercase tracking-[0.1em] text-sm hover:bg-amber-400 transition-all">
                  Reservar ahora <IconArrow />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contacto" className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-amber-500 text-[11px] font-bold tracking-[0.3em] uppercase mb-4">Reserva tu clase</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase" style={{ fontFamily: "var(--font-oswald)" }}>
              Primera clase <span className="text-amber-500">100% gratis</span>
            </h2>
            <p className="text-zinc-400 mt-4 text-lg">Déjanos tus datos y te contactamos en menos de 24 horas</p>
            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Sin compromiso</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Respuesta rápida</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Asesoría personalizada</span>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10">
          <FadeIn>
            {sent ? (
              <div className="text-center py-8 px-6 border-2 border-green-500/30 bg-green-500/5 rounded-lg">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold uppercase text-green-400 mb-3">¡Reserva Confirmada!</h3>
                <p className="text-white text-lg mb-4">
                  Te contactaremos por WhatsApp en las próximas <span className="text-amber-500 font-bold">2 horas</span>
                </p>
                <div className="space-y-3 text-sm text-zinc-400">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Confirmaremos día y hora perfectos para ti</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Te prestamos el Gi (kimono) gratis</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Tour completo de las instalaciones</span>
                  </div>
                </div>
                <div className="mt-6">
                  <a href="https://wa.me/17870000000?text=Hola%2C%20acabo%20de%20reservar%20mi%20clase%20gratis" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-bold text-sm uppercase tracking-wide transition-all">
                    💬 Escribir por WhatsApp Ya
                  </a>
                </div>
              </div>
            ) : (
              <form 
                action="https://formsubmit.co/pulsedigitalstudios@gmail.com" 
                method="POST" 
                onSubmit={(e) => {
                  setSent(true);
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'form_submit', {
                      event_category: 'lead_generation',
                      event_label: 'free_class_booking',
                      value: 1
                    });
                  }
                  if (typeof window !== 'undefined' && window.fbq) {
                    window.fbq('track', 'Lead', {
                      content_name: 'Free BJJ Class Booking',
                      content_category: 'fitness'
                    });
                  }
                }} 
                className="space-y-4">
                <input type="hidden" name="_subject" value="🥋 FÖRGE - Nueva Clase Gratis - URGENTE" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input type="hidden" name="_next" value="https://forge-mu-blush.vercel.app/?success=true" />
                
                <div className="space-y-1">
                  <label className="block text-zinc-400 text-xs font-medium uppercase tracking-wide mb-2">
                    Tu nombre completo *
                  </label>
                  <input 
                    type="text" 
                    name="nombre" 
                    required 
                    placeholder="Ej: Juan Pérez" 
                    className="w-full px-4 py-4 bg-white/[0.05] border border-white/[0.1] focus:border-amber-500/70 focus:bg-white/[0.08] focus:outline-none text-white placeholder-zinc-500 text-base transition-all duration-300 rounded-sm" 
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-zinc-400 text-xs font-medium uppercase tracking-wide mb-2">
                    WhatsApp / Teléfono *
                  </label>
                  <input 
                    type="tel" 
                    name="telefono" 
                    required 
                    placeholder="787-000-0000" 
                    className="w-full px-4 py-4 bg-white/[0.05] border border-white/[0.1] focus:border-amber-500/70 focus:bg-white/[0.08] focus:outline-none text-white placeholder-zinc-500 text-base transition-all duration-300 rounded-sm" 
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-zinc-400 text-xs font-medium uppercase tracking-wide mb-2">
                    ¿Qué te interesa más?
                  </label>
                  <select name="interes" className="w-full px-4 py-4 bg-white/[0.05] border border-white/[0.1] focus:border-amber-500/70 focus:bg-white/[0.08] focus:outline-none text-white text-base transition-all duration-300 rounded-sm">
                    <option value="" className="bg-black">Selecciona una opción</option>
                    <option value="jiu-jitsu-gi" className="bg-black">🥋 Jiu Jitsu Gi (tradicional)</option>
                    <option value="no-gi" className="bg-black">⚡ No-Gi (sin kimono)</option>
                    <option value="kids" className="bg-black">👊 Kids BJJ (niños)</option>
                    <option value="strength" className="bg-black">💪 Strength & Conditioning</option>
                    <option value="principiante" className="bg-black">🤔 Soy principiante total</option>
                    <option value="no-se" className="bg-black">❓ No sé todavía</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-zinc-400 text-xs font-medium uppercase tracking-wide mb-2">
                    Experiencia previa (opcional)
                  </label>
                  <textarea 
                    rows={3} 
                    name="experiencia" 
                    placeholder="Ej: Nunca he hecho BJJ, tengo experiencia en karate, lesiones previas, etc." 
                    className="w-full px-4 py-4 bg-white/[0.05] border border-white/[0.1] focus:border-amber-500/70 focus:bg-white/[0.08] focus:outline-none text-white placeholder-zinc-500 text-base resize-none transition-all duration-300 rounded-sm" 
                  />
                </div>

                <button type="submit" className="w-full py-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold uppercase tracking-[0.1em] text-base transition-all duration-300 shadow-lg shadow-amber-500/30 rounded-sm">
                  🥋 Reservar Mi Clase GRATIS Ahora
                </button>
                
                <p className="text-center text-zinc-600 text-xs mt-3">
                  Al enviar, aceptas que te contactemos vía WhatsApp o llamada para coordinar tu clase gratuita
                </p>
              </form>
            )}
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-3">
              <a href="https://wa.me/17870000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-white/[0.05] hover:border-green-500/30 hover:bg-green-500/[0.03] transition-all group">
                <div className="w-10 h-10 bg-green-500/10 flex items-center justify-center text-green-400"><IconWhatsApp /></div>
                <div>
                  <div className="font-medium text-sm">WhatsApp</div>
                  <div className="text-zinc-600 text-xs">Escríbenos directo</div>
                </div>
              </a>

              <a href="https://www.instagram.com/forgejiujitsupr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-white/[0.05] hover:border-pink-500/30 hover:bg-pink-500/[0.03] transition-all group">
                <div className="w-10 h-10 bg-pink-500/10 flex items-center justify-center text-pink-400"><IconInstagram /></div>
                <div>
                  <div className="font-medium text-sm">Instagram</div>
                  <div className="text-zinc-600 text-xs">@forgejiujitsupr</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 border border-white/[0.05]">
                <div className="w-10 h-10 bg-amber-500/10 flex items-center justify-center text-sm">📍</div>
                <div>
                  <div className="font-medium text-sm">San Juan, PR</div>
                  <div className="text-zinc-600 text-xs">Lun–Vie 6AM–9PM · Sáb 8AM–2PM</div>
                </div>
              </div>

              <div className="p-4 border border-amber-500/10 bg-amber-500/[0.03]">
                <p className="text-zinc-400 text-sm leading-relaxed">
                  <span className="text-amber-500 font-bold">¿Primera vez?</span> No necesitas experiencia. Trae ropa cómoda. Nosotros te prestamos el Gi.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold tracking-[0.2em] text-amber-500" style={{ fontFamily: "var(--font-oswald)" }}>FÖRGE</span>
          <span className="text-xs text-zinc-700">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://www.instagram.com/forgejiujitsupr" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-amber-500 transition-colors">
            <IconInstagram />
          </a>
          <span className="text-zinc-700 text-[10px] uppercase tracking-wider">
            Diseño por{" "}
            <a href="https://pulse-digital-seven.vercel.app" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-amber-500 transition-colors">
              Pulse Digital Studios
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ─── WHATSAPP FLOAT ─── */
function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/17870000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-105 transition-all"
      aria-label="WhatsApp"
    >
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Schedule />
      <Pricing />
      <CtaBanner />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

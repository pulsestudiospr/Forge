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
      transform: inView ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
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
  <svg className="w-4 h-4 text-[#c9a84c] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);
const IconWhatsApp = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
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
    { label: "Disciplinas", href: "#disciplinas" },
    { label: "Horario", href: "#horario" },
    { label: "Instructores", href: "#instructores" },
    { label: "Precios", href: "#precios" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#c9a84c]/10 shadow-lg shadow-black/30" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between" style={{ height: "72px" }}>
        <a href="#" className="flex items-center gap-3">
          <span className="text-2xl font-bold tracking-[0.15em] text-[#c9a84c]" style={{ fontFamily: "var(--font-oswald)" }}>
            FÖRGE
          </span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-zinc-400 hover:text-[#c9a84c] transition-colors duration-200 uppercase tracking-wider">{l.label}</a>
          ))}
          <a href="#contacto" className="text-sm px-6 py-2.5 rounded-sm bg-[#c9a84c] hover:bg-[#dfc06a] text-black font-bold uppercase tracking-wider transition-all">
            Clase Gratis
          </a>
        </div>
        <button className="md:hidden text-zinc-400 p-2" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[#c9a84c]/10 bg-[#0a0a0a]/98 backdrop-blur-xl px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-lg text-zinc-400 hover:text-[#c9a84c] transition-colors uppercase tracking-wider">{l.label}</a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)} className="text-center px-6 py-3 bg-[#c9a84c] text-black font-bold uppercase tracking-wider">Clase Gratis</a>
        </div>
      )}
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1600&q=80"
          alt="Entrenamiento de Jiu Jitsu en San Juan Puerto Rico"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 w-full py-28">
        <div className="max-w-2xl">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#c9a84c]/30 bg-[#c9a84c]/5 text-[#c9a84c] text-xs font-bold uppercase tracking-[0.2em] mb-8">
              <div className="w-1.5 h-1.5 bg-[#c9a84c] animate-pulse-dot" />
              Abriendo 2026 · San Juan, PR
            </div>
          </div>

          <h1 className="animate-fade-in-up animate-delay-100 text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6 uppercase">
            Forja tu
            <br />
            <span className="gradient-gold">mejor versión</span>
          </h1>

          <p className="animate-fade-in-up animate-delay-200 text-zinc-300 text-lg sm:text-xl max-w-lg mb-10 leading-relaxed">
            Jiu Jitsu Brasileño y entrenamiento funcional. Todos los niveles. Sin ego. Solo trabajo.
          </p>

          <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row gap-4">
            <a href="#contacto" className="group inline-flex items-center justify-center px-8 py-4 bg-[#c9a84c] hover:bg-[#dfc06a] text-black font-bold uppercase tracking-wider text-base transition-all shadow-xl shadow-[#c9a84c]/20">
              Clase de Prueba Gratis <IconArrow />
            </a>
            <a href="#disciplinas" className="inline-flex items-center justify-center px-8 py-4 border border-zinc-600 hover:border-[#c9a84c]/50 hover:bg-white/5 transition-all text-zinc-300 uppercase tracking-wider text-base">
              Conoce Más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── STATS ─── */
function Stats() {
  const stats = [
    { num: "10+", label: "Años de experiencia" },
    { num: "500+", label: "Estudiantes entrenados" },
    { num: "6", label: "Disciplinas" },
    { num: "100%", label: "Todos los niveles" },
  ];

  return (
    <section className="py-16 border-y border-zinc-800/50 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#c9a84c]" style={{ fontFamily: "var(--font-oswald)" }}>{s.num}</div>
                <div className="text-zinc-500 text-sm mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── DISCIPLINES ─── */
function Disciplines() {
  const items = [
    {
      img: "https://images.unsplash.com/photo-1615117972428-28de67cda58a?w=600&q=80",
      title: "Jiu Jitsu Gi",
      desc: "El arte suave. Técnica sobre fuerza. Aprende sumisiones, barridos y control desde el primer día.",
      alt: "Clase de Jiu Jitsu Gi en San Juan Puerto Rico",
    },
    {
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
      title: "No-Gi / Submission",
      desc: "Grappling sin kimono. Ritmo rápido, agarre dinámico. Ideal para MMA y competición.",
      alt: "Clase de No-Gi Jiu Jitsu en Puerto Rico",
    },
    {
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
      title: "Strength & Conditioning",
      desc: "Entrenamiento funcional diseñado para complementar tu Jiu Jitsu y tu vida.",
      alt: "Entrenamiento funcional en gimnasio de Hato Rey",
    },
  ];

  return (
    <section id="disciplinas" className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase">Disciplinas</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight uppercase">
              Elige tu camino
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.12}>
              <div className="group overflow-hidden bg-[#111] border border-zinc-800 hover:border-[#c9a84c]/30 transition-all duration-500">
                <div className="h-60 overflow-hidden">
                  <img src={s.img} alt={s.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-3">{s.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
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
  const dayLabels = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  return (
    <section id="horario" className="py-28 md:py-36 bg-[#070707]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase">Horario</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight uppercase">
              Entrena cuando puedas
            </h2>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-[#c9a84c]/20">
                  <th className="text-left py-4 px-4 text-zinc-500 uppercase tracking-wider text-xs font-medium">Hora</th>
                  {dayLabels.map((d) => (
                    <th key={d} className="py-4 px-4 text-[#c9a84c] uppercase tracking-wider text-xs font-bold text-center">{d}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {schedule.map((row) => (
                  <tr key={row.time} className="border-b border-zinc-800/50 hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-medium text-zinc-300 whitespace-nowrap" style={{ fontFamily: "var(--font-oswald)" }}>{row.time}</td>
                    {days.map((d) => (
                      <td key={d} className={`py-4 px-4 text-center ${row[d] === "—" ? "text-zinc-700" : "text-zinc-300"}`}>
                        {row[d]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-zinc-600 text-xs mt-6 text-center">* Horario sujeto a cambios. Domingos cerrado.</p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── INSTRUCTORS ─── */
function Instructors() {
  const coaches = [
    {
      img: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?w=400&q=80",
      name: "Instructor Principal",
      rank: "Cinturón Negro",
      desc: "10+ años de experiencia. Competidor activo.",
    },
    {
      img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80",
      name: "Coach de S&C",
      rank: "Certified Trainer",
      desc: "Especialista en fuerza y acondicionamiento para artes marciales.",
    },
  ];

  return (
    <section id="instructores" className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase">Equipo</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight uppercase">
              Tus instructores
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {coaches.map((c, i) => (
            <FadeIn key={c.name} delay={i * 0.12}>
              <div className="group text-center">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-2 border-zinc-800 group-hover:border-[#c9a84c]/50 transition-all mb-6">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold uppercase">{c.name}</h3>
                <p className="text-[#c9a84c] text-sm font-medium uppercase tracking-wider mt-1">{c.rank}</p>
                <p className="text-zinc-500 text-sm mt-3">{c.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
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
      period: "por clase",
      features: ["1 clase cualquier horario", "Sin compromiso", "Ideal para visitantes"],
      featured: false,
    },
    {
      name: "Ilimitado",
      price: "$150",
      period: "mensual",
      features: ["Clases ilimitadas", "Todas las disciplinas", "Open mat incluido", "S&C incluido", "Comunidad FÖRGE"],
      featured: true,
    },
    {
      name: "Familiar",
      price: "$250",
      period: "mensual",
      features: ["2 miembros de familia", "Clases ilimitadas", "Kids BJJ incluido", "Descuento adicional por miembro"],
      featured: false,
    },
  ];

  return (
    <section id="precios" className="py-28 md:py-36 bg-[#070707]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase">Membresías</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight uppercase">
              Invierte en ti
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.1}>
              <div className={`p-8 h-full flex flex-col relative ${
                p.featured
                  ? "bg-gradient-to-b from-[#c9a84c]/10 to-transparent border-2 border-[#c9a84c]/40 shadow-2xl shadow-[#c9a84c]/10"
                  : "bg-[#111] border border-zinc-800 hover:border-zinc-700 transition-colors"
              }`}>
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs text-black font-bold bg-[#c9a84c] px-4 py-1 uppercase tracking-wider">Más Popular</div>
                )}
                <h3 className="font-bold text-lg uppercase tracking-wide">{p.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold" style={{ fontFamily: "var(--font-oswald)" }}>{p.price}</span>
                  <span className="text-zinc-500 text-sm ml-2">/{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <IconCheck /><span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contacto" className={`block text-center py-3.5 text-sm font-bold uppercase tracking-wider transition-all ${
                  p.featured
                    ? "bg-[#c9a84c] hover:bg-[#dfc06a] text-black"
                    : "bg-white/5 hover:bg-white/10 border border-zinc-800"
                }`}>Empezar</a>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="text-center text-zinc-500 text-sm mt-10">Primera clase siempre gratis. Sin contratos. Cancela cuando quieras.</p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CtaBanner() {
  return (
    <section className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <FadeIn>
          <div className="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517438322307-e67111335449?w=1200&q=80"
              alt="Interior de academia de Jiu Jitsu en Puerto Rico"
              className="w-full h-[400px] sm:h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30 flex items-center">
              <div className="px-8 sm:px-12 md:px-16 max-w-xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight uppercase">
                  El mat no espera.<br/><span className="text-[#c9a84c]">Tú tampoco.</span>
                </h2>
                <p className="text-zinc-300 text-lg mt-4 mb-8">Tu primera clase es gratis. Sin excusas.</p>
                <a href="#contacto" className="group inline-flex items-center px-8 py-4 bg-[#c9a84c] text-black font-bold uppercase tracking-wider hover:bg-[#dfc06a] transition-all shadow-xl">
                  Reservar Clase Gratis <IconArrow />
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
    <section id="contacto" className="py-28 md:py-36 bg-[#070707]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase">Contacto</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight uppercase">
              Tu primera clase es gratis
            </h2>
            <p className="text-zinc-400 mt-4 text-lg">Déjanos tus datos y te contactamos.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn>
            {sent ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-5xl mb-4">🥋</div>
                  <p className="text-xl font-bold uppercase">¡Listo!</p>
                  <p className="text-zinc-500 mt-2">Te contactamos pronto para tu clase gratis.</p>
                </div>
              </div>
            ) : (
              <form action="https://formsubmit.co/pulsedigitalstudios@gmail.com" method="POST" onSubmit={() => setSent(true)} className="space-y-5">
                <input type="hidden" name="_subject" value="FÖRGE - Nueva clase de prueba" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input type="text" name="nombre" required placeholder="Tu nombre" className="w-full px-5 py-4 bg-[#111] border border-zinc-800 focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c]/50 text-white placeholder-zinc-600 text-base transition-all" />
                <input type="tel" name="telefono" required placeholder="Teléfono / WhatsApp" className="w-full px-5 py-4 bg-[#111] border border-zinc-800 focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c]/50 text-white placeholder-zinc-600 text-base transition-all" />
                <select name="interes" className="w-full px-5 py-4 bg-[#111] border border-zinc-800 focus:border-[#c9a84c] focus:outline-none text-zinc-400 text-base transition-all">
                  <option value="">¿Qué te interesa?</option>
                  <option value="jiu-jitsu-gi">Jiu Jitsu Gi</option>
                  <option value="no-gi">No-Gi / Submission</option>
                  <option value="kids">Kids BJJ</option>
                  <option value="strength">Strength & Conditioning</option>
                  <option value="no-se">No sé todavía</option>
                </select>
                <textarea rows={3} name="mensaje" placeholder="¿Algo que debamos saber? (experiencia, lesiones, etc.)" className="w-full px-5 py-4 bg-[#111] border border-zinc-800 focus:border-[#c9a84c] focus:outline-none focus:ring-1 focus:ring-[#c9a84c]/50 text-white placeholder-zinc-600 text-base resize-none transition-all" />
                <button type="submit" className="w-full py-4 bg-[#c9a84c] hover:bg-[#dfc06a] text-black font-bold uppercase tracking-wider text-base transition-all shadow-lg shadow-[#c9a84c]/20">
                  Reservar Clase Gratis
                </button>
              </form>
            )}
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-5">
              <a href="https://wa.me/17870000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-5 bg-[#111] border border-zinc-800 hover:border-green-500/50 transition-all group">
                <div className="w-12 h-12 bg-green-500/10 flex items-center justify-center text-green-400 group-hover:bg-green-500/20 transition-colors"><IconWhatsApp /></div>
                <div>
                  <div className="font-medium">WhatsApp</div>
                  <div className="text-zinc-500 text-sm mt-0.5">Escríbenos directo</div>
                </div>
              </a>

              <a href="https://www.instagram.com/forgejiujitsupr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-5 bg-[#111] border border-zinc-800 hover:border-pink-500/50 transition-all group">
                <div className="w-12 h-12 bg-pink-500/10 flex items-center justify-center text-pink-400 group-hover:bg-pink-500/20 transition-colors"><IconInstagram /></div>
                <div>
                  <div className="font-medium">Instagram</div>
                  <div className="text-zinc-500 text-sm mt-0.5">@forgejiujitsupr</div>
                </div>
              </a>

              <div className="flex items-center gap-5 p-5 bg-[#111] border border-zinc-800">
                <div className="w-12 h-12 bg-[#c9a84c]/10 flex items-center justify-center text-lg">📍</div>
                <div>
                  <div className="font-medium">San Juan, PR</div>
                  <div className="text-zinc-500 text-sm mt-0.5">Lun–Vie 6AM–9PM · Sáb 8AM–2PM</div>
                </div>
              </div>

              <div className="p-5 bg-[#111] border border-zinc-800">
                <p className="text-zinc-400 text-sm leading-relaxed">
                  <span className="text-[#c9a84c] font-bold">¿Primera vez?</span> No necesitas experiencia. Solo trae ropa cómoda y ganas. Nosotros te prestamos el Gi.
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
    <footer className="border-t border-zinc-800/50 py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold tracking-[0.15em] text-[#c9a84c]" style={{ fontFamily: "var(--font-oswald)" }}>FÖRGE</span>
          <span className="text-sm text-zinc-600">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/forgejiujitsupr" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-[#c9a84c] transition-colors">
            <IconInstagram />
          </a>
          <span className="text-zinc-700 text-xs">Diseño por <a href="https://pulse-digital-seven.vercel.app" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-[#c9a84c] transition-colors">Pulse Digital Studios</a></span>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Disciplines />
      <Schedule />
      <Instructors />
      <Pricing />
      <CtaBanner />
      <Contact />
      <Footer />
    </>
  );
}

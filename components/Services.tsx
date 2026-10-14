import Link from "next/link";

const services = [
  {
    href: "/implantes",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2C8.686 2 6 4.686 6 8c0 2.21 1.12 4.155 2.825 5.305L8 18h8l-.825-4.695C16.88 12.155 18 10.21 18 8c0-3.314-2.686-6-6-6z" />
        <path d="M8 18l-.5 2a.5.5 0 00.5.5h8a.5.5 0 00.5-.5L16 18" />
        <line x1="10" y1="21" x2="14" y2="21" />
      </svg>
    ),
    title: "Implantes Dentários",
    description:
      "Reabilitação oral completa com implantes de titânio osseointegráveis. Recuperamos função mastigatória e estética para sorrisos transformados.",
    detail: "Protocolo All-on-4 · All-on-6 · Implante Unitário",
    cta: "Saiba Mais",
  },
  {
    href: "/hof",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M7 12c-2.5 1.5-4 3.5-4 5.5C3 20 7 21.5 12 21.5s9-1.5 9-4c0-2-1.5-4-4-5.5" />
        <path d="M9 15.5c.8.8 1.8 1.3 3 1.3s2.2-.5 3-1.3" />
      </svg>
    ),
    title: "Harmonização Orofacial",
    description:
      "Procedimentos estéticos minimamente invasivos que harmonizam rosto e sorriso. Toxina botulínica, preenchimentos e bioestimuladores com precisão clínica.",
    detail: "HOF · Botox · Preenchimento · Bioestimulador",
    cta: "Saiba Mais",
  },
  {
    href: "/contato",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 3C8 3 5 6 5 10c0 5 7 12 7 12s7-7 7-12c0-4-3-7-7-7z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
    title: "Clareamento Dental",
    description:
      "Clareamento profissional com tecnologia LED de última geração. Resultados seguros, duráveis e personalizados para o seu tom natural.",
    detail: "LED · Laser · Clareamento Caseiro Supervisionado",
    cta: "Agendar",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-24 px-6 max-w-7xl mx-auto"
      aria-labelledby="services-heading"
    >
      {/* Section header */}
      <div className="text-center mb-16">
        <span className="text-xs tracking-[0.3em] text-[#2CC8C8] uppercase font-sans mb-3 block">
          Especialidades
        </span>
        <h2
          id="services-heading"
          className="text-4xl sm:text-5xl font-light text-white leading-tight font-serif"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          O que fazemos
          <br />
          <span className="font-semibold italic text-[#2CC8C8]">com excelência</span>
        </h2>
      </div>

      {/* Cards */}
      <ul className="grid md:grid-cols-3 gap-6 list-none">
        {services.map((s) => (
          <li key={s.href}>
            <div
              className="group h-full rounded-2xl border border-[#253045] hover:border-[#2CC8C8]/40 p-8 flex flex-col gap-6 transition-all duration-300 hover:bg-[#131A28]"
              style={{
                background: "linear-gradient(135deg, #131A28 0%, #1C2638 100%)",
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-[#2CC8C8] group-hover:bg-[#2CC8C8]/15 transition-colors duration-300"
                style={{ background: "rgba(44,200,200,0.08)" }}
              >
                {s.icon}
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3
                  className="text-2xl font-medium text-white mb-3"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-[#6B7E92] leading-relaxed font-sans mb-4">
                  {s.description}
                </p>
                <p className="text-xs text-[#2CC8C8]/70 font-sans tracking-wide">
                  {s.detail}
                </p>
              </div>

              {/* Link */}
              <Link
                href={s.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#2CC8C8] hover:text-[#7AEAEA] transition-colors font-sans group-hover:gap-3 duration-200"
              >
                {s.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

import Link from "next/link";

const services = [
  {
    href: "/implantes",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 3c-1.8 0-3.3.8-4.3 2L6 7v2l.5 2L6 14v2l1.7 2c1 1.2 2.5 2 4.3 2s3.3-.8 4.3-2L18 16v-2l-.5-3 .5-2V7l-1.7-2C15.3 3.8 13.8 3 12 3z" />
        <line x1="12" y1="7" x2="12" y2="17" strokeDasharray="2 2" />
      </svg>
    ),
    title: "Implantes Dentários",
    description:
      "Titânio que osseointegra ao osso e fica para sempre. Recuperamos mastigação real, não só aparência.",
    detail: "All-on-4 · All-on-6 · Unitário · Carga Imediata",
    cta: "Ver protocolo",
  },
  {
    href: "/hof",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 4a5 5 0 100 8 5 5 0 000-8z" />
        <path d="M8 12c-3 1-5 3-5 5 0 2 4 3 9 3s9-1 9-3c0-2-2-4-5-5" />
        <path d="M9.5 16.5c.7.5 1.6.8 2.5.8s1.8-.3 2.5-.8" />
      </svg>
    ),
    title: "Harmonização Orofacial",
    description:
      "Resultado que parece natural porque é feito com base clínica. Sem exagero, com critério de proporção facial.",
    detail: "Botox · AH · Bioestimulador · Fios · Rinomodelação",
    cta: "Ver procedimentos",
  },
  {
    href: "/contato",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2C9 2 7 4 7 7c0 1.5.5 2.8 1.4 3.8L7 17h10l-1.4-6.2A5 5 0 0017 7c0-3-2-5-5-5z" />
        <path d="M9 17v1a3 3 0 006 0v-1" />
      </svg>
    ),
    title: "Clareamento Dental",
    description:
      "Clarear sem perder o natural. Tecnologia LED com gel de alto poder e proteção do esmalte.",
    detail: "LED · Laser · Moldeira Personalizada",
    cta: "Agendar sessão",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 px-6 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs tracking-[0.3em] text-[#2CC8C8] uppercase font-sans mb-3 block font-semibold">
            Especialidades
          </span>
          <h2
            id="services-heading"
            className="text-4xl sm:text-5xl font-light text-[#111827] leading-tight font-serif"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            O que a clínica
            <br />
            <span className="font-semibold text-[#111827]">resolve de verdade</span>
          </h2>
        </div>

        <ul className="grid md:grid-cols-3 gap-6 list-none">
          {services.map((s) => (
            <li key={s.href}>
              <div className="group h-full rounded-2xl border border-[#E5E7EB] hover:border-[#2CC8C8]/40 hover:shadow-[0_4px_24px_rgba(44,200,200,0.10)] p-8 flex flex-col gap-6 transition-all duration-300 bg-white">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#2CC8C8] bg-[#F0FCFC]">
                  {s.icon}
                </div>
                <div className="flex-1">
                  <h3
                    className="text-2xl font-medium text-[#111827] mb-3"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed font-sans mb-4">
                    {s.description}
                  </p>
                  <p className="text-xs text-[#2CC8C8] font-sans tracking-wide font-semibold">
                    {s.detail}
                  </p>
                </div>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#374151] hover:text-[#2CC8C8] transition-colors font-sans group-hover:gap-3 duration-200"
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
      </div>
    </section>
  );
}

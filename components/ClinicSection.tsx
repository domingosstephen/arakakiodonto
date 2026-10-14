import Image from "next/image";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4-4" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
    label: "Tomógrafo Cone Beam",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="4" width="20" height="14" rx="2" />
        <path d="M8 20h8M12 18v2" />
        <polyline points="7 10 10 13 17 8" />
      </svg>
    ),
    label: "Planejamento Digital",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 22s8-4 8-10V6l-8-3-8 3v6c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    label: "Biossegurança Rigorosa",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    label: "São Paulo, SP",
  },
];

export default function ClinicSection() {
  return (
    <section className="py-24 px-6 bg-[#F9FAFB]" aria-labelledby="clinica-heading">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <span className="text-xs tracking-[0.3em] text-[#2CC8C8] uppercase font-sans mb-3 block font-semibold">
            Estrutura
          </span>
          <h2
            id="clinica-heading"
            className="text-4xl sm:text-5xl font-light text-[#111827] leading-tight font-serif"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Consultório projetado
            <br />
            <span className="font-semibold text-[#111827]">para tratamentos precisos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/images/clinica.webp"
              alt="Consultório da Arakaki Odonto com cadeira odontológica teal e equipamentos modernos"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover"
              quality={85}
            />
          </div>

          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "9/10" }}>
            <Image
              src="/images/clareamento.webp"
              alt="Sessão de clareamento dental com tecnologia LED na Arakaki Odonto"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              quality={85}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white/85 backdrop-blur-sm px-5 py-3 border-t border-[#E5E7EB]">
              <p className="text-xs text-[#6B7280] font-sans">Clareamento LED Profissional</p>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-1 relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <Image
              src="/images/clinica2.jpg"
              alt="Vista geral do consultório da Arakaki Odonto"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              quality={85}
            />
          </div>
        </div>

        {/* Feature callouts — SVG icons, no emojis */}
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 list-none">
          {features.map((f) => (
            <li
              key={f.label}
              className="flex items-center gap-3 p-4 rounded-xl border border-[#E5E7EB] bg-white"
            >
              <span className="flex-shrink-0 text-[#2CC8C8]">{f.icon}</span>
              <span className="text-xs text-[#374151] font-sans font-medium">{f.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

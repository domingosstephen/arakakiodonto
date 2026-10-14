import Image from "next/image";

export default function ClinicSection() {
  return (
    <section
      className="py-24 px-6"
      style={{ background: "linear-gradient(to bottom, #131A28, #0B0F18)" }}
      aria-labelledby="clinica-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.3em] text-[#2CC8C8] uppercase font-sans mb-3 block">
            A Clínica
          </span>
          <h2
            id="clinica-heading"
            className="text-4xl sm:text-5xl font-light text-white leading-tight font-serif"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Um espaço pensado
            <br />
            <span className="font-semibold italic text-[#2CC8C8]">
              para o seu conforto
            </span>
          </h2>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large image */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/images/clinica.webp"
              alt="Consultório da Arakaki Odonto com cadeira odontológica em teal"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover"
              quality={85}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(11,15,24,0.35) 0%, transparent 60%)" }}
              aria-hidden="true"
            />
          </div>

          {/* Whitening image */}
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "9/10" }}>
            <Image
              src="/images/clareamento.webp"
              alt="Sessão de clareamento dental com tecnologia LED"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              quality={85}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(11,15,24,0.5) 0%, transparent 60%)" }}
              aria-hidden="true"
            />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-xs text-[#BFD0E2] font-sans tracking-wide">
                Clareamento LED Profissional
              </p>
            </div>
          </div>

          {/* Clinica 2 */}
          <div className="md:col-span-2 lg:col-span-1 relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <Image
              src="/images/clinica2.jpg"
              alt="Vista ampla do consultório odontológico da Arakaki Odonto"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              quality={85}
            />
          </div>
        </div>

        {/* Feature callouts */}
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 list-none">
          {[
            { icon: "🔬", label: "Tomógrafo Cone Beam" },
            { icon: "💻", label: "Planejamento Digital" },
            { icon: "🛡️", label: "Biossegurança Total" },
            { icon: "🌡️", label: "Conforto no Atendimento" },
          ].map((f) => (
            <li
              key={f.label}
              className="flex flex-col items-center text-center gap-2 p-4 rounded-xl border border-[#253045]"
            >
              <span className="text-2xl" aria-hidden="true">{f.icon}</span>
              <span className="text-xs text-[#94A8BE] font-sans tracking-wide">
                {f.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

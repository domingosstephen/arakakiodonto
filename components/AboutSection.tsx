const WHATSAPP = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

export default function AboutSection() {
  return (
    <section
      className="py-24 px-6"
      style={{ background: "#0B0F18" }}
      aria-labelledby="sobre-heading"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16 items-center">
        {/* Text side: takes 3/5 */}
        <div className="lg:col-span-3">
          <span className="text-xs tracking-[0.3em] text-[#2CC8C8] uppercase font-sans mb-4 block">
            Sobre a Profissional
          </span>

          <h2
            id="sobre-heading"
            className="text-4xl sm:text-5xl font-light text-white leading-tight mb-2 font-serif"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Dra. Jéssica
          </h2>
          <h3
            className="text-4xl sm:text-5xl font-semibold italic text-[#2CC8C8] leading-tight mb-8 font-serif"
            style={{
              fontFamily: "var(--font-dancing)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
            }}
          >
            Arakaki
          </h3>

          <p className="text-[#94A8BE] font-sans leading-relaxed mb-4 text-base">
            Cirurgiã-dentista com registro CRO 59293, a Dra. Jéssica Arakaki dedica sua prática clínica a dois pilares: a reabilitação oral com implantes de titanio e a harmonização estética do sorriso por meio da HOF.
          </p>
          <p className="text-[#94A8BE] font-sans leading-relaxed mb-10 text-base">
            Com formação continuada em implantodontia e técnicas de harmonização facial, atende com foco no resultado natural e na experiência confortável do paciente, do diagnóstico ao pós-procedimento.
          </p>

          {/* Credentials */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 list-none">
            {[
              { label: "CRO", value: "59293" },
              { label: "Especialidade", value: "Implantodontia" },
              { label: "Especialidade", value: "Harmonização Orofacial" },
              { label: "Atendimento", value: "São Paulo, SP" },
            ].map((c, i) => (
              <li
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl border border-[#253045]"
              >
                <span
                  className="w-8 h-8 rounded-lg bg-[#2CC8C8]/10 flex items-center justify-center text-[#2CC8C8] flex-shrink-0"
                  aria-hidden="true"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-[#4A5D70] font-sans">{c.label}</p>
                  <p className="text-sm text-white font-sans font-medium">{c.value}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium font-sans text-sm bg-[#2CC8C8] text-[#060910] hover:bg-[#52DADA] hover:shadow-[0_0_25px_rgba(44,200,200,0.35)] transition-all duration-200"
          >
            Agendar Consulta com a Dra. Jéssica
          </a>
        </div>

        {/* Visual side: takes 2/5 */}
        <div className="lg:col-span-2 flex justify-center lg:justify-end">
          <div
            className="relative w-full max-w-sm"
            style={{ aspectRatio: "3/4" }}
          >
            <div
              className="absolute -inset-4 rounded-3xl"
              style={{ background: "radial-gradient(ellipse, rgba(44,200,200,0.15) 0%, transparent 70%)" }}
              aria-hidden="true"
            />
            {/* Decorative card */}
            <div
              className="relative h-full rounded-2xl border border-[#2CC8C8]/20 flex flex-col items-center justify-center gap-6 p-10"
              style={{
                background: "linear-gradient(135deg, #131A28 0%, #1C2638 100%)",
              }}
            >
              {/* Monogram */}
              <div
                className="w-24 h-24 rounded-full border-2 border-[#2CC8C8]/40 flex items-center justify-center"
                style={{ background: "rgba(44,200,200,0.08)" }}
              >
                <span
                  className="text-5xl text-[#2CC8C8]"
                  style={{ fontFamily: "var(--font-dancing)" }}
                  aria-hidden="true"
                >
                  JA
                </span>
              </div>

              <div className="text-center">
                <p
                  className="text-2xl text-white font-serif"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Dra. Jéssica
                </p>
                <p
                  className="text-3xl text-[#2CC8C8] font-script"
                  style={{ fontFamily: "var(--font-dancing)" }}
                >
                  Arakaki
                </p>
                <p className="mt-2 text-xs text-[#6B7E92] tracking-[0.2em] font-sans uppercase">
                  CRO 59293
                </p>
              </div>

              <div
                className="w-full h-px"
                style={{ background: "linear-gradient(to right, transparent, #2CC8C8, transparent)" }}
                aria-hidden="true"
              />

              <div className="text-center">
                <p className="text-sm text-[#94A8BE] font-sans">
                  Implantes Dentários
                </p>
                <p className="text-sm text-[#94A8BE] font-sans">
                  Harmonização Orofacial
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const WHATSAPP = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";

export default function AboutSection() {
  return (
    <section className="py-24 px-6 bg-white" aria-labelledby="sobre-heading">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16 items-center">
        <div className="lg:col-span-3">
          <span className="text-xs tracking-[0.3em] text-[#2CC8C8] uppercase font-sans mb-4 block font-semibold">
            A Profissional
          </span>

          <h2
            id="sobre-heading"
            className="text-4xl sm:text-5xl font-light text-[#111827] leading-tight mb-2 font-serif"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Dra. Jéssica
          </h2>
          <h3
            className="text-[#2CC8C8] leading-tight mb-8"
            style={{
              fontFamily: "var(--font-dancing)",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            }}
          >
            Arakaki
          </h3>

          <p className="text-[#6B7280] font-sans leading-relaxed mb-4 text-base">
            CRO 59293. Formação em Odontologia com especialização em Implantodontia e atualização constante em Harmonização Orofacial. Atua há anos no mercado de São Paulo com foco em dois resultados: mastigação real e estética que não grita.
          </p>
          <p className="text-[#6B7280] font-sans leading-relaxed mb-10 text-base">
            Usa tomografia para planejar antes de operar. Usa base anatômica para decidir quanto colocar em HOF. Isso evita resultado ruim e retrabalho.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 list-none">
            {[
              { label: "CRO", value: "59293" },
              { label: "Conselho", value: "CRO-SP" },
              { label: "Especialidade", value: "Implantodontia" },
              { label: "Especialidade", value: "Harmonização Orofacial" },
            ].map((c, i) => (
              <li key={i} className="flex items-center gap-3 p-4 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB]">
                <svg className="text-[#2CC8C8] flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <div>
                  <p className="text-xs text-[#9CA3AF] font-sans">{c.label}</p>
                  <p className="text-sm text-[#111827] font-sans font-semibold">{c.value}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold font-sans text-sm bg-[#2CC8C8] text-white hover:bg-[#1A9999] transition-all duration-200"
          >
            Agendar consulta com a Dra. Jéssica
          </a>
        </div>

        {/* Visual card */}
        <div className="lg:col-span-2 flex justify-center lg:justify-end">
          <div
            className="w-full max-w-sm rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] flex flex-col items-center justify-center gap-6 p-10"
            style={{ aspectRatio: "3/4" }}
          >
            <div className="w-20 h-20 rounded-full border-2 border-[#2CC8C8] flex items-center justify-center bg-[#F0FCFC]">
              <span
                className="text-4xl text-[#2CC8C8]"
                style={{ fontFamily: "var(--font-dancing)" }}
                aria-hidden="true"
              >
                JA
              </span>
            </div>

            <div className="text-center">
              <p className="text-2xl text-[#111827] font-serif" style={{ fontFamily: "var(--font-cormorant)" }}>
                Dra. Jéssica
              </p>
              <p className="text-3xl text-[#2CC8C8]" style={{ fontFamily: "var(--font-dancing)" }}>
                Arakaki
              </p>
              <p className="mt-2 text-xs text-[#9CA3AF] tracking-[0.2em] font-sans uppercase">CRO 59293</p>
            </div>

            <div className="w-full h-px bg-[#E5E7EB]" aria-hidden="true" />

            <div className="text-center space-y-1">
              <p className="text-sm text-[#6B7280] font-sans">Implantes Dentários</p>
              <p className="text-sm text-[#6B7280] font-sans">Harmonização Orofacial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

const WHATSAPP = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "100svh", minHeight: "600px" }}
      aria-label="Seção principal"
    >
      {/* Video background — explicit dimensions prevent CLS */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/clinica.webp"
        width={1920}
        height={1080}
        aria-hidden="true"
        preload="none"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(6,9,16,0.45) 0%, rgba(11,15,24,0.55) 50%, rgba(11,15,24,0.92) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(44,200,200,0.08) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        {/* CRO badge */}
        <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#2CC8C8]/30 bg-[#2CC8C8]/8 backdrop-blur-sm">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#2CC8C8] animate-pulse"
            aria-hidden="true"
          />
          <span className="text-xs tracking-[0.2em] text-[#52DADA] uppercase font-sans font-medium">
            Dra. Jéssica Arakaki · CRO 59293
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] font-serif font-light max-w-4xl"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Seu sorriso tem um
          <br />
          <em className="not-italic font-semibold text-[#2CC8C8]">
            assunto pendente?
          </em>
        </h1>

        {/* Sub */}
        <p className="mt-6 text-base sm:text-lg text-[#94A8BE] font-sans max-w-xl leading-relaxed">
          Especialistas em Implantes Dentários e Harmonização Orofacial. Tecnologia de ponta com o cuidado que você merece.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-medium font-sans text-[#060910] bg-[#2CC8C8] hover:bg-[#52DADA] hover:shadow-[0_0_30px_rgba(44,200,200,0.4)] transition-all duration-200 text-base"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Agendar Avaliação
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium font-sans text-[#BFD0E2] border border-[#BFD0E2]/25 hover:border-[#2CC8C8]/50 hover:text-[#2CC8C8] transition-all duration-200 text-base"
          >
            Conheça os Serviços
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        aria-hidden="true"
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#2CC8C8]" />
      </div>
    </section>
  );
}

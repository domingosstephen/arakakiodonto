import Image from "next/image";
import Link from "next/link";

export default function ImplantesSection() {
  return (
    <section className="py-24 px-6 bg-[#F9FAFB]" aria-labelledby="implantes-heading">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs tracking-[0.3em] text-[#2CC8C8] uppercase font-sans mb-4 block font-semibold">
            Implantodontia
          </span>
          <h2
            id="implantes-heading"
            className="text-4xl sm:text-5xl font-light text-[#111827] leading-tight mb-6 font-serif"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Quando falam que
            <br />você precisa de enxerto,
            <br />
            <span className="font-semibold text-[#2CC8C8]">
              a maioria desiste.
            </span>
          </h2>
          <p className="text-[#6B7280] font-sans leading-relaxed mb-4 text-base">
            Na maioria dos casos, não precisa. Planejamento com tomografia cone beam 3D define o protocolo certo antes de abrir qualquer coisa. Sem surpresa na cadeira.
          </p>
          <p className="text-[#6B7280] font-sans leading-relaxed mb-8 text-base">
            All-on-4, All-on-6 ou unitário: o implante de titânio osseointegra ao osso em semanas e dura décadas. A prótese vai junto no mesmo dia quando o caso permite.
          </p>

          <ul className="space-y-3 mb-10 list-none">
            {[
              "Tomografia cone beam antes da cirurgia",
              "Guia cirúrgico digital para precisão milimétrica",
              "Carga imediata quando o osso permite",
              "Acompanhamento pós-operatório incluído",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 font-sans text-sm text-[#374151]">
                <svg className="mt-0.5 flex-shrink-0 text-[#2CC8C8]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/implantes"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold font-sans text-sm border border-[#2CC8C8] text-[#2CC8C8] hover:bg-[#2CC8C8] hover:text-white transition-all duration-200"
          >
            Ver todos os protocolos
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="relative" style={{ aspectRatio: "4/5" }}>
          <div className="relative rounded-2xl overflow-hidden h-full shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <Image
              src="/images/antes-depois.webp"
              alt="Resultado real de implante dentário na Arakaki Odonto: antes e depois"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              quality={85}
            />
            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 border-t border-[#E5E7EB]">
              <p className="text-xs text-[#6B7280] font-sans">
                Resultado real de paciente · Reabilitação total com implantes cerâmicos
              </p>
            </div>
            {/* Teal accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#2CC8C8]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

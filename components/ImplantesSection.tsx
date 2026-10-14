import Image from "next/image";
import Link from "next/link";

export default function ImplantesSection() {
  return (
    <section
      className="py-24 px-6"
      style={{ background: "linear-gradient(to bottom, #0B0F18, #131A28)" }}
      aria-labelledby="implantes-heading"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <span className="text-xs tracking-[0.3em] text-[#2CC8C8] uppercase font-sans mb-4 block">
            Especialidade Principal
          </span>
          <h2
            id="implantes-heading"
            className="text-4xl sm:text-5xl font-light text-white leading-tight mb-6 font-serif"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Implantes que
            <br />
            <span className="font-semibold italic text-[#2CC8C8]">
              devolvem a vida
            </span>
          </h2>
          <p className="text-[#94A8BE] font-sans leading-relaxed mb-8 text-base">
            O implante dentário vai além da estética. É função mastigatória recuperada, autoestima restaurada e qualidade de vida real. Utilizamos implantes de titânio de alta pureza com osseointegração comprovada.
          </p>

          <ul className="space-y-4 mb-10 list-none">
            {[
              "Protocolo All-on-4 e All-on-6 para reabilitação total",
              "Implante unitário com coroa de cerâmica",
              "Planejamento digital com tomografia cone beam",
              "Cirurgia minimamente invasiva sem pontos",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 font-sans text-sm text-[#BFD0E2]">
                <span
                  className="mt-1 w-4 h-4 rounded-full bg-[#2CC8C8]/15 flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2CC8C8]" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/implantes"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium font-sans text-sm border border-[#2CC8C8]/40 text-[#2CC8C8] hover:bg-[#2CC8C8] hover:text-[#060910] transition-all duration-200"
          >
            Saber Tudo Sobre Implantes
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Image */}
        <div className="relative" style={{ aspectRatio: "4/5" }}>
          <div
            className="absolute -inset-4 rounded-3xl"
            style={{ background: "radial-gradient(ellipse, rgba(44,200,200,0.12) 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          <div className="relative rounded-2xl overflow-hidden h-full">
            <Image
              src="/images/antes-depois.webp"
              alt="Resultado de implante dentário: antes e depois"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              quality={85}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(11,15,24,0.4) 0%, transparent 50%)",
              }}
              aria-hidden="true"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-xs text-[#94A8BE] font-sans tracking-wide">
                Resultado real de paciente · Implante total com prótese cerâmica
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

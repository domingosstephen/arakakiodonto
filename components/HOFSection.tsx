import Image from "next/image";
import Link from "next/link";

const procedures = [
  "Toxina Botulínica (Botox)",
  "Preenchimento com Ácido Hialurônico",
  "Bioestimuladores de Colágeno",
  "Fios de PDO para Lifting",
  "Skinbooster",
  "Rinomodelação",
];

export default function HOFSection() {
  return (
    <section
      className="py-24 px-6"
      style={{ background: "#0B0F18" }}
      aria-labelledby="hof-heading"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Image first on desktop */}
        <div className="relative order-2 lg:order-1" style={{ aspectRatio: "3/4" }}>
          <div
            className="absolute -inset-4 rounded-3xl"
            style={{ background: "radial-gradient(ellipse, rgba(44,200,200,0.10) 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          <div className="relative rounded-2xl overflow-hidden h-full">
            <Image
              src="/images/hof.webp"
              alt="Dra. Jéssica Arakaki realizando procedimento de Harmonização Orofacial"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
              quality={85}
            />
            {/* Teal accent bar */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{ background: "linear-gradient(to right, #0F6B6B, #2CC8C8, #0F6B6B)" }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <span className="text-xs tracking-[0.3em] text-[#2CC8C8] uppercase font-sans mb-4 block">
            Harmonização Orofacial
          </span>
          <h2
            id="hof-heading"
            className="text-4xl sm:text-5xl font-light text-white leading-tight mb-6 font-serif"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            HOF: onde o sorriso
            <br />
            <span className="font-semibold italic text-[#2CC8C8]">
              encontra o rosto
            </span>
          </h2>
          <p className="text-[#94A8BE] font-sans leading-relaxed mb-8 text-base">
            A Harmonização Orofacial é a fusão entre odontologia e estética facial. Realizamos procedimentos minimamente invasivos com critério clínico rigoroso, respeitando as proporções naturais do seu rosto.
          </p>

          <div className="mb-10">
            <p className="text-xs tracking-[0.2em] text-[#4A5D70] uppercase font-sans mb-4">
              Procedimentos disponíveis
            </p>
            <ul className="grid grid-cols-2 gap-3 list-none">
              {procedures.map((p) => (
                <li key={p} className="flex items-center gap-2 text-xs font-sans text-[#94A8BE]">
                  <span
                    className="w-1 h-4 rounded-full bg-[#2CC8C8]"
                    aria-hidden="true"
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/hof"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium font-sans text-sm border border-[#2CC8C8]/40 text-[#2CC8C8] hover:bg-[#2CC8C8] hover:text-[#060910] transition-all duration-200"
          >
            Conhecer a HOF
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

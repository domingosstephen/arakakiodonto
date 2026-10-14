import Image from "next/image";
import Link from "next/link";

const procedures = [
  "Toxina Botulínica",
  "Ácido Hialurônico",
  "Bioestimuladores",
  "Fios de PDO",
  "Skinbooster",
  "Rinomodelação",
];

export default function HOFSection() {
  return (
    <section className="py-24 px-6 bg-white" aria-labelledby="hof-heading">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div className="relative order-2 lg:order-1" style={{ aspectRatio: "3/4" }}>
          <div className="relative rounded-2xl overflow-hidden h-full shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
            <Image
              src="/images/hof.webp"
              alt="Dra. Jéssica Arakaki realizando procedimento de Harmonização Orofacial"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
              quality={85}
            />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#2CC8C8]" aria-hidden="true" />
          </div>
        </div>

        {/* Text */}
        <div className="order-1 lg:order-2">
          <span className="text-xs tracking-[0.3em] text-[#2CC8C8] uppercase font-sans mb-4 block font-semibold">
            HOF
          </span>
          <h2
            id="hof-heading"
            className="text-4xl sm:text-5xl font-light text-[#111827] leading-tight mb-6 font-serif"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            HOF não é sobre
            <br />parecer feito.
            <br />
            <span className="font-semibold text-[#2CC8C8]">
              É sobre critério clínico.
            </span>
          </h2>

          <p className="text-[#6B7280] font-sans leading-relaxed mb-4 text-base">
            A Harmonização Orofacial fica ruim quando não tem proporção. A Dra. Jéssica trabalha com base anatômica e referências de terço médio e inferior do rosto, não com fórmulas genéricas.
          </p>
          <p className="text-[#6B7280] font-sans leading-relaxed mb-8 text-base">
            Você sai da clínica parecendo que descansou bem, não parecendo que fez alguma coisa.
          </p>

          <div className="mb-10">
            <p className="text-xs tracking-[0.2em] text-[#9CA3AF] uppercase font-sans mb-4 font-semibold">
              Procedimentos
            </p>
            <ul className="grid grid-cols-2 gap-3 list-none">
              {procedures.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm font-sans text-[#374151]">
                  <svg className="text-[#2CC8C8] flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/hof"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold font-sans text-sm border border-[#2CC8C8] text-[#2CC8C8] hover:bg-[#2CC8C8] hover:text-white transition-all duration-200"
          >
            Ver todos os procedimentos
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

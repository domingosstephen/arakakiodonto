import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Harmonização Orofacial (HOF) | Arakaki Odonto",
  description:
    "Harmonização Orofacial em São Paulo. Toxina botulínica, preenchimento, bioestimuladores e lifting por fios. Dra. Jéssica Arakaki, CRO 59293.",
  alternates: {
    canonical: "https://arakakiodonto.com.br/hof",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Harmonização Orofacial (HOF)",
  description:
    "Conjunto de procedimentos estéticos minimamente invasivos que harmonizam o rosto com o sorriso: toxina botulínica, preenchimentos com ácido hialurônico, bioestimuladores e fios de PDO.",
  procedureType: "NoninvasiveProcedure",
  provider: {
    "@type": "Dentist",
    name: "Arakaki Odonto",
    url: "https://arakakiodonto.com.br",
  },
};

const WHATSAPP = "https://wa.me/5511999999999?text=Olá!%20Tenho%20interesse%20em%20Harmonização%20Orofacial.";

const procedures = [
  {
    name: "Toxina Botulínica",
    desc: "Relaxa músculos de forma pontual para suavizar linhas de expressão, tratar bruxismo e elevar as comissuras labiais.",
  },
  {
    name: "Ácido Hialurônico",
    desc: "Preenchimento de lábios, sulcos e volumes faciais com gel biocompatível. Resultado natural e reversível.",
  },
  {
    name: "Bioestimuladores de Colágeno",
    desc: "Estimulam a produção natural de colágeno para firmeza e rejuvenescimento progressivo da pele.",
  },
  {
    name: "Fios de PDO",
    desc: "Lifting não cirúrgico com fios reabsorvíveis que promovem sustentação e neocolagênese.",
  },
  {
    name: "Skinbooster",
    desc: "Microinjeções de ácido hialurônico para hidratação profunda e melhora da qualidade da pele.",
  },
  {
    name: "Rinomodelação",
    desc: "Correção do contorno nasal sem cirurgia, utilizando preenchimento para harmonizar o perfil.",
  },
];

export default function HOFPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />

      {/* Hero */}
      <section
        className="pt-40 pb-24 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(to bottom, #0B0F18, #131A28)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-[0.3em] text-[#2CC8C8] uppercase font-sans mb-4 block">
            Estética Facial
          </span>
          <h1
            className="text-5xl sm:text-6xl font-light text-white leading-tight mb-6 font-serif"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Harmonização
            <br />
            <span className="font-semibold italic text-[#2CC8C8]">
              Orofacial
            </span>
          </h1>
          <p className="text-[#94A8BE] font-sans leading-relaxed text-base max-w-xl mx-auto">
            Procedimentos minimamente invasivos que unem odontologia e estética para harmonizar seu rosto com o seu sorriso, respeitando suas proporções naturais.
          </p>
        </div>
      </section>

      {/* What is HOF */}
      <section className="py-20 px-6" style={{ background: "#0B0F18" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <Image
              src="/images/hof.webp"
              alt="Dra. Jéssica Arakaki realizando Harmonização Orofacial em paciente"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
              quality={85}
              priority
            />
          </div>
          <div>
            <h2
              className="text-3xl sm:text-4xl font-light text-white mb-6 font-serif"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              O que é a
              <span className="font-semibold italic text-[#2CC8C8]"> HOF?</span>
            </h2>
            <p className="text-[#94A8BE] font-sans leading-relaxed mb-4">
              A Harmonização Orofacial (HOF) é uma área da odontologia que usa técnicas estéticas minimamente invasivas para melhorar a proporção e simetria do terço inferior e médio do rosto.
            </p>
            <p className="text-[#94A8BE] font-sans leading-relaxed mb-4">
              Diferente de cirurgias plásticas, os procedimentos de HOF são realizados em consultório, com anestesia tópica ou local, e têm recuperação praticamente imediata.
            </p>
            <p className="text-[#94A8BE] font-sans leading-relaxed mb-8">
              A Dra. Jéssica Arakaki realiza todos os procedimentos com critério clínico rigoroso, prioriza resultados naturais e usa apenas produtos registrados na Anvisa.
            </p>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium font-sans text-sm bg-[#2CC8C8] text-[#060910] hover:bg-[#52DADA] transition-all duration-200"
            >
              Agendar Avaliação de HOF
            </a>
          </div>
        </div>
      </section>

      {/* Procedures grid */}
      <section className="py-20 px-6" style={{ background: "#131A28" }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-light text-white mb-12 text-center font-serif"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Procedimentos <span className="font-semibold italic text-[#2CC8C8]">realizados</span>
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
            {procedures.map((p) => (
              <li
                key={p.name}
                className="rounded-2xl border border-[#253045] p-7 hover:border-[#2CC8C8]/30 transition-colors"
                style={{ background: "linear-gradient(135deg, #0B0F18 0%, #1C2638 100%)" }}
              >
                <div
                  className="w-8 h-1 rounded-full bg-[#2CC8C8] mb-5"
                  aria-hidden="true"
                />
                <h3
                  className="text-xl font-medium text-white mb-3 font-serif"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {p.name}
                </h3>
                <p className="text-sm text-[#6B7E92] leading-relaxed font-sans">{p.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "#0B0F18" }}>
        <h2
          className="text-3xl sm:text-4xl font-light text-white mb-4 font-serif"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Vamos harmonizar
          <span className="font-semibold italic text-[#2CC8C8]"> seu rosto?</span>
        </h2>
        <p className="text-[#94A8BE] font-sans mb-8 max-w-md mx-auto">
          Agende sua avaliação e descubra quais procedimentos são indicados para o seu caso.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium font-sans text-[#060910] bg-[#2CC8C8] hover:bg-[#52DADA] hover:shadow-[0_0_30px_rgba(44,200,200,0.4)] transition-all duration-200"
        >
          Falar com a Dra. Jéssica
        </a>
      </section>

      <Footer />
    </>
  );
}

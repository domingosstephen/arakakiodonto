import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Harmonização Orofacial (HOF) | Arakaki Odonto",
  description:
    "Harmonização Orofacial em São Paulo. Toxina botulínica, preenchimento, bioestimuladores e lifting por fios. Dra. Jéssica Arakaki, CRO 59293.",
  alternates: { canonical: "https://arakakiodonto.com.br/hof" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Harmonização Orofacial (HOF)",
  description:
    "Procedimentos estéticos minimamente invasivos: toxina botulínica, ácido hialurônico, bioestimuladores e fios de PDO.",
  procedureType: "NoninvasiveProcedure",
  provider: { "@type": "Dentist", name: "Arakaki Odonto", url: "https://arakakiodonto.com.br" },
};

const WHATSAPP = "https://wa.me/5511999999999?text=Olá!%20Tenho%20interesse%20em%20Harmonização%20Orofacial.";

const procedures = [
  {
    name: "Toxina Botulínica",
    desc: "Relaxa músculos de forma pontual. Suaviza linhas de expressão, trata bruxismo e levanta comissuras labiais.",
  },
  {
    name: "Ácido Hialurônico",
    desc: "Preenchimento de lábios, sulcos e volumes faciais com gel biocompatível. Resultado natural e reversível.",
  },
  {
    name: "Bioestimuladores de Colágeno",
    desc: "Estimulam produção natural de colágeno para firmeza e rejuvenescimento progressivo da pele.",
  },
  {
    name: "Fios de PDO",
    desc: "Lifting não cirúrgico com fios reabsorvíveis. Sustentação imediata e estímulo de neocolagênese.",
  },
  {
    name: "Skinbooster",
    desc: "Microinjeções de ácido hialurônico para hidratação profunda e melhora da textura da pele.",
  },
  {
    name: "Rinomodelação",
    desc: "Correção do contorno nasal sem cirurgia usando preenchimento para harmonizar o perfil.",
  },
];

export default function HOFPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 bg-[#F9FAFB] border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs tracking-[0.3em] text-[#2CC8C8] uppercase font-sans mb-4 block font-semibold">
            Estética Facial
          </span>
          <h1
            className="text-5xl sm:text-6xl font-light text-[#111827] leading-tight mb-6 font-serif"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Harmonização
            <br />
            <span className="font-semibold text-[#2CC8C8]">Orofacial</span>
          </h1>
          <p className="text-[#6B7280] font-sans leading-relaxed text-base max-w-xl">
            Procedimentos minimamente invasivos com base anatômica. Resultado que não anuncia que foi feito.
          </p>
        </div>
      </section>

      {/* What is HOF */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.10)]" style={{ aspectRatio: "3/4" }}>
            <Image
              src="/images/hof.webp"
              alt="Dra. Jéssica Arakaki realizando Harmonização Orofacial em paciente"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
              quality={85}
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#2CC8C8]" aria-hidden="true" />
          </div>
          <div>
            <h2
              className="text-3xl sm:text-4xl font-light text-[#111827] mb-6 font-serif"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              HOF com
              <span className="font-semibold text-[#2CC8C8]"> critério clínico</span>
            </h2>
            <p className="text-[#6B7280] font-sans leading-relaxed mb-4">
              A Harmonização Orofacial fica ruim quando não tem proporção. A Dra. Jéssica trabalha com base anatômica e referências de terço médio e inferior do rosto, não com fórmulas genéricas.
            </p>
            <p className="text-[#6B7280] font-sans leading-relaxed mb-4">
              Todos os procedimentos são realizados em consultório, com anestesia tópica ou local. Recuperação praticamente imediata. Produtos registrados na Anvisa.
            </p>
            <p className="text-[#6B7280] font-sans leading-relaxed mb-8">
              Você sai parecendo que descansou bem, não parecendo que fez alguma coisa.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold font-sans text-sm bg-[#2CC8C8] text-white hover:bg-[#1A9999] transition-all duration-200"
            >
              Agendar Avaliação de HOF
            </a>
          </div>
        </div>
      </section>

      {/* Procedures grid */}
      <section className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-light text-[#111827] mb-12 text-center font-serif"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Procedimentos <span className="font-semibold text-[#2CC8C8]">realizados</span>
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
            {procedures.map((p) => (
              <li
                key={p.name}
                className="rounded-2xl border border-[#E5E7EB] p-7 bg-white hover:shadow-[0_4px_24px_rgba(44,200,200,0.10)] hover:border-[#2CC8C8]/30 transition-all duration-200"
              >
                <div className="w-8 h-1 rounded-full bg-[#2CC8C8] mb-5" aria-hidden="true" />
                <h3
                  className="text-xl font-medium text-[#111827] mb-3 font-serif"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {p.name}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed font-sans">{p.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-[#111827]">
        <h2
          className="text-3xl sm:text-4xl font-light text-white mb-4 font-serif"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Quer resultado que
          <span className="font-semibold text-[#2CC8C8]"> ninguém percebe que foi feito?</span>
        </h2>
        <p className="text-[#9CA3AF] font-sans mb-8 max-w-md mx-auto">
          Avaliação gratuita. A Dra. Jéssica analisa o seu rosto e indica quais procedimentos fazem sentido para o seu caso.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold font-sans text-[#111827] bg-[#2CC8C8] hover:bg-[#52DADA] transition-colors duration-200"
        >
          Falar com a Dra. Jéssica
        </a>
      </section>

      <Footer />
    </>
  );
}

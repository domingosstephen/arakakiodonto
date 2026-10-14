import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Implantes Dentários | Arakaki Odonto",
  description:
    "Especialistas em Implantes Dentários em São Paulo. All-on-4, All-on-6, implante unitário. Dra. Jéssica Arakaki, CRO 59293. Agende sua avaliação.",
  alternates: {
    canonical: "https://arakakiodonto.com.br/implantes",
  },
  openGraph: {
    title: "Implantes Dentários | Arakaki Odonto",
    description:
      "Reabilitação oral completa com implantes de titânio em São Paulo. All-on-4, All-on-6, implante unitário.",
    url: "https://arakakiodonto.com.br/implantes",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Implantes Dentários",
  description:
    "Reabilitação oral com implantes de titânio osseointegráveis. Protocolos All-on-4, All-on-6 e implante unitário com coroa cerâmica.",
  procedureType: "Surgical",
  followup: "Acompanhamento pós-operatório incluído",
  preparation: "Avaliação, tomografia cone beam e planejamento digital",
  status: "ActiveActionStatus",
  provider: {
    "@type": "Dentist",
    name: "Arakaki Odonto",
    url: "https://arakakiodonto.com.br",
  },
};

const faqs = [
  {
    q: "Quanto tempo dura um implante dentário?",
    a: "Um implante bem colocado e mantido com higiene adequada pode durar a vida toda. O titânio osseointegra ao osso de forma permanente.",
  },
  {
    q: "A cirurgia de implante dói?",
    a: "O procedimento é realizado sob anestesia local e é bem tolerado. O desconforto pós-operatório é controlado com medicação e costuma durar poucos dias.",
  },
  {
    q: "Quem pode receber implantes dentários?",
    a: "A maioria dos adultos com boa saúde bucal pode receber implantes. Avaliamos caso a caso via tomografia para verificar volume ósseo e condições sistêmicas.",
  },
  {
    q: "Qual a diferença entre All-on-4 e All-on-6?",
    a: "Ambos reabilitam a arcada completa com poucos implantes. O All-on-4 usa quatro implantes por arcada; o All-on-6 usa seis, oferecendo mais estabilidade em casos de maior reabsorção óssea.",
  },
];

const WHATSAPP = "https://wa.me/5511999999999?text=Olá!%20Tenho%20interesse%20em%20implantes%20dentários.";

export default function ImplantesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />

      {/* Page hero */}
      <section
        className="pt-40 pb-24 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(to bottom, #0B0F18, #131A28)" }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(44,200,200,0.3), transparent)" }}
          aria-hidden="true"
        />
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-[0.3em] text-[#2CC8C8] uppercase font-sans mb-4 block">
            Especialidade
          </span>
          <h1
            className="text-5xl sm:text-6xl font-light text-white leading-tight mb-6 font-serif"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Implantes
            <br />
            <span className="font-semibold italic text-[#2CC8C8]">
              Dentários
            </span>
          </h1>
          <p className="text-[#94A8BE] font-sans leading-relaxed text-base max-w-xl mx-auto">
            Reabilitação oral completa com implantes de titânio osseointegráveis. Tecnologia cone beam, planejamento digital e cirurgia minimamente invasiva em São Paulo.
          </p>
        </div>
      </section>

      {/* What is it */}
      <section className="py-20 px-6" style={{ background: "#0B0F18" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className="text-3xl sm:text-4xl font-light text-white mb-6 font-serif"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              O que é um
              <span className="font-semibold italic text-[#2CC8C8]"> implante dentário?</span>
            </h2>
            <p className="text-[#94A8BE] font-sans leading-relaxed mb-4">
              O implante dentário é um parafuso de titânio biocompatível inserido no osso maxilar ou mandibular para substituir a raiz de um dente perdido. Sobre ele, colocamos uma coroa de cerâmica com aspecto natural.
            </p>
            <p className="text-[#94A8BE] font-sans leading-relaxed mb-8">
              O titânio osseointegra ao osso em um processo chamado osseointegração, tornando o implante parte permanente do organismo. O resultado é funcional como um dente natural e esteticamente indistinguível.
            </p>

            <ul className="space-y-3 list-none">
              {[
                "Titânio grau médico de alta pureza",
                "Planejamento com tomografia cone beam 3D",
                "Guia cirúrgico digital para máxima precisão",
                "Protocolo de carga imediata quando indicado",
                "Garantia de procedimento e acompanhamento",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-sans text-[#BFD0E2]">
                  <span className="mt-1 w-1 h-4 rounded-full bg-[#2CC8C8] flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/5" }}>
            <Image
              src="/images/antes-depois.webp"
              alt="Resultado de implante dentário: transformação completa do sorriso"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              quality={85}
              priority
            />
          </div>
        </div>
      </section>

      {/* Protocols */}
      <section className="py-20 px-6" style={{ background: "#131A28" }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-light text-white mb-12 text-center font-serif"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Protocolos <span className="font-semibold italic text-[#2CC8C8]">disponíveis</span>
          </h2>
          <ul className="grid md:grid-cols-3 gap-6 list-none">
            {[
              {
                title: "Implante Unitário",
                desc: "Substitui um único dente perdido com coroa de cerâmica personalizada. Preserva os dentes adjacentes sem desgastá-los.",
                detail: "Indicado para perda unitária",
              },
              {
                title: "All-on-4",
                desc: "Reabilita a arcada completa com apenas quatro implantes estrategicamente posicionados. Prótese fixa no mesmo dia em muitos casos.",
                detail: "Arcada total com 4 implantes",
              },
              {
                title: "All-on-6",
                desc: "Reabilitação total com seis implantes, oferecendo maior distribuição de carga e estabilidade. Ideal para casos de maior reabsorção óssea.",
                detail: "Arcada total com 6 implantes",
              },
            ].map((p) => (
              <li
                key={p.title}
                className="rounded-2xl border border-[#253045] p-8"
                style={{ background: "linear-gradient(135deg, #131A28 0%, #1C2638 100%)" }}
              >
                <h3
                  className="text-2xl font-medium text-white mb-3 font-serif"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm text-[#6B7E92] leading-relaxed font-sans mb-4">{p.desc}</p>
                <span className="text-xs text-[#2CC8C8]/70 font-sans">{p.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ background: "#0B0F18" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-light text-white mb-12 text-center font-serif"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Perguntas <span className="font-semibold italic text-[#2CC8C8]">frequentes</span>
          </h2>
          <ul className="space-y-4 list-none">
            {faqs.map((faq) => (
              <li
                key={faq.q}
                className="rounded-xl border border-[#253045] p-6"
              >
                <h3 className="text-base font-medium text-white mb-2 font-sans">{faq.q}</h3>
                <p className="text-sm text-[#6B7E92] leading-relaxed font-sans">{faq.a}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: "#131A28" }}>
        <h2
          className="text-3xl sm:text-4xl font-light text-white mb-4 font-serif"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Pronto para recuperar
          <span className="font-semibold italic text-[#2CC8C8]"> seu sorriso?</span>
        </h2>
        <p className="text-[#94A8BE] font-sans mb-8 max-w-md mx-auto">
          Agende sua avaliação com a Dra. Jéssica Arakaki e descubra qual protocolo é ideal para o seu caso.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium font-sans text-[#060910] bg-[#2CC8C8] hover:bg-[#52DADA] hover:shadow-[0_0_30px_rgba(44,200,200,0.4)] transition-all duration-200"
        >
          Agendar Avaliação de Implante
        </a>
      </section>

      <Footer />
    </>
  );
}

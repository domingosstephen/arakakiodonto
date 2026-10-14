import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Implantes Dentários | Arakaki Odonto",
  description:
    "Especialistas em Implantes Dentários em São Paulo. All-on-4, All-on-6, implante unitário. Dra. Jéssica Arakaki, CRO 59293. Agende sua avaliação.",
  alternates: { canonical: "https://arakakiodonto.com.br/implantes" },
  openGraph: {
    title: "Implantes Dentários | Arakaki Odonto",
    description: "Reabilitação oral completa com implantes de titânio em São Paulo.",
    url: "https://arakakiodonto.com.br/implantes",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Implantes Dentários",
  description: "Reabilitação oral com implantes de titânio osseointegráveis. Protocolos All-on-4, All-on-6 e implante unitário.",
  procedureType: "Surgical",
  followup: "Acompanhamento pós-operatório incluído",
  preparation: "Avaliação, tomografia cone beam e planejamento digital",
  provider: { "@type": "Dentist", name: "Arakaki Odonto", url: "https://arakakiodonto.com.br" },
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
    a: "Ambos reabilitam a arcada completa com poucos implantes. O All-on-4 usa quatro implantes por arcada; o All-on-6 usa seis, com mais estabilidade para casos de maior reabsorção óssea.",
  },
];

const WHATSAPP = "https://wa.me/5511999999999?text=Olá!%20Tenho%20interesse%20em%20implantes%20dentários.";

export default function ImplantesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />

      {/* Page hero */}
      <section className="pt-40 pb-20 px-6 bg-[#F9FAFB] border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs tracking-[0.3em] text-[#2CC8C8] uppercase font-sans mb-4 block font-semibold">
            Especialidade
          </span>
          <h1
            className="text-5xl sm:text-6xl font-light text-[#111827] leading-tight mb-6 font-serif"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Implantes
            <br />
            <span className="font-semibold text-[#2CC8C8]">Dentários</span>
          </h1>
          <p className="text-[#6B7280] font-sans leading-relaxed text-base max-w-xl">
            Reabilitação oral com implantes de titânio osseointegráveis. Tomografia cone beam, planejamento digital e cirurgia minimamente invasiva em São Paulo.
          </p>
        </div>
      </section>

      {/* What is it */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className="text-3xl sm:text-4xl font-light text-[#111827] mb-6 font-serif"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              O que é um
              <span className="font-semibold text-[#2CC8C8]"> implante dentário?</span>
            </h2>
            <p className="text-[#6B7280] font-sans leading-relaxed mb-4">
              Um parafuso de titânio biocompatível inserido no osso para substituir a raiz do dente perdido. Sobre ele, uma coroa de cerâmica com aspecto indistinguível do natural.
            </p>
            <p className="text-[#6B7280] font-sans leading-relaxed mb-8">
              O titânio osseointegra ao osso em semanas. Mastigação completa, sem remover à noite, sem cuidados especiais além da higiene regular. Para sempre.
            </p>

            <ul className="space-y-3 list-none">
              {[
                "Titânio grau médico de alta pureza",
                "Tomografia cone beam 3D antes da cirurgia",
                "Guia cirúrgico digital para precisão milimétrica",
                "Carga imediata quando o osso permite",
                "Acompanhamento pós-operatório incluído",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-sans text-[#374151]">
                  <svg className="mt-0.5 flex-shrink-0 text-[#2CC8C8]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.10)]" style={{ aspectRatio: "4/5" }}>
            <Image
              src="/images/antes-depois.webp"
              alt="Resultado real de implante dentário: transformação completa do sorriso"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              quality={85}
              priority
            />
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#2CC8C8]" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Protocols */}
      <section className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-light text-[#111827] mb-12 text-center font-serif"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Protocolos <span className="font-semibold text-[#2CC8C8]">disponíveis</span>
          </h2>
          <ul className="grid md:grid-cols-3 gap-6 list-none">
            {[
              {
                title: "Implante Unitário",
                desc: "Substitui um único dente com coroa de cerâmica personalizada. Preserva os dentes adjacentes sem encostá-los.",
                detail: "Perda unitária",
              },
              {
                title: "All-on-4",
                desc: "Arcada completa com quatro implantes estratégicos. Prótese fixa no mesmo dia em muitos casos.",
                detail: "4 implantes por arcada",
              },
              {
                title: "All-on-6",
                desc: "Seis implantes por arcada para maior distribuição de carga. Ideal para reabsorção óssea mais avançada.",
                detail: "6 implantes por arcada",
              },
            ].map((p) => (
              <li
                key={p.title}
                className="rounded-2xl border border-[#E5E7EB] p-8 bg-white hover:shadow-[0_4px_24px_rgba(44,200,200,0.10)] hover:border-[#2CC8C8]/30 transition-all duration-200"
              >
                <div className="w-8 h-1 rounded-full bg-[#2CC8C8] mb-5" aria-hidden="true" />
                <h3
                  className="text-2xl font-medium text-[#111827] mb-3 font-serif"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed font-sans mb-4">{p.desc}</p>
                <span className="text-xs text-[#2CC8C8] font-sans font-semibold">{p.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-light text-[#111827] mb-12 text-center font-serif"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Perguntas <span className="font-semibold text-[#2CC8C8]">frequentes</span>
          </h2>
          <ul className="space-y-4 list-none">
            {faqs.map((faq) => (
              <li key={faq.q} className="rounded-xl border border-[#E5E7EB] p-6 bg-[#F9FAFB]">
                <h3 className="text-base font-semibold text-[#111827] mb-2 font-sans">{faq.q}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed font-sans">{faq.a}</p>
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
          Chega de mastigar
          <span className="font-semibold text-[#2CC8C8]"> de um lado só.</span>
        </h2>
        <p className="text-[#9CA3AF] font-sans mb-8 max-w-md mx-auto">
          Avaliação gratuita com a Dra. Jéssica Arakaki. Ela analisa a tomografia e explica o protocolo ideal para o seu caso.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold font-sans text-[#111827] bg-[#2CC8C8] hover:bg-[#52DADA] transition-colors duration-200"
        >
          Agendar Avaliação de Implante
        </a>
      </section>

      <Footer />
    </>
  );
}

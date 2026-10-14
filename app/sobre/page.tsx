import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sobre a Dra. Jéssica Arakaki | Arakaki Odonto",
  description:
    "Conheça a Dra. Jéssica Arakaki, CRO 59293. Cirurgiã-dentista especializada em Implantes Dentários e Harmonização Orofacial em São Paulo.",
  alternates: { canonical: "https://arakakiodonto.com.br/sobre" },
};

const WHATSAPP = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";

export default function SobrePage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 bg-[#F9FAFB] border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs tracking-[0.3em] text-[#2CC8C8] uppercase font-sans mb-4 block font-semibold">
            A Profissional
          </span>
          <h1
            className="text-5xl sm:text-6xl font-light text-[#111827] leading-tight mb-2 font-serif"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Dra. Jéssica
          </h1>
          <h2
            className="text-[#2CC8C8] leading-tight mb-6"
            style={{ fontFamily: "var(--font-dancing)", fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            Arakaki
          </h2>
          <p className="text-[#6B7280] font-sans leading-relaxed text-base max-w-xl">
            CRO 59293. Especializada em Implantodontia e Harmonização Orofacial. Resultado natural e diagnóstico honesto.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl font-light text-[#111827] mb-8 font-serif"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Formação e <span className="font-semibold text-[#2CC8C8]">especialidades</span>
          </h2>

          <div className="space-y-6 text-[#6B7280] font-sans leading-relaxed">
            <p>
              A Dra. Jéssica Arakaki é cirurgiã-dentista com CRO 59293, atuação clínica voltada para Implantodontia e Harmonização Orofacial em São Paulo.
            </p>
            <p>
              Em Implantodontia, trabalha com os principais protocolos de reabilitação oral: implante unitário, All-on-4 e All-on-6. Todo caso começa com tomografia cone beam para planejamento digital e máxima previsibilidade cirúrgica.
            </p>
            <p>
              Em Harmonização Orofacial, realiza toxina botulínica, preenchimento com ácido hialurônico, bioestimuladores de colágeno, fios de PDO e rinomodelação. O critério é base anatômica e proporção facial, não volume excessivo.
            </p>
            <p>
              Formação continuada constante, materiais registrados pela Anvisa e protocolo de biossegurança rigoroso em todas as etapas.
            </p>
          </div>

          {/* Credentials */}
          <div className="mt-12 rounded-2xl border border-[#E5E7EB] p-8 bg-[#F9FAFB]">
            <h3
              className="text-xl font-medium text-[#111827] mb-6 font-serif"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Registro e credenciais
            </h3>
            <ul className="space-y-4 list-none">
              {[
                ["CRO", "59293"],
                ["Conselho", "CRO-SP (São Paulo)"],
                ["Especialidade", "Implantodontia"],
                ["Especialidade", "Harmonização Orofacial"],
                ["Atendimento", "São Paulo, SP"],
              ].map(([label, value], i) => (
                <li
                  key={i}
                  className="flex items-center justify-between border-b border-[#E5E7EB] pb-4 last:border-0 last:pb-0"
                >
                  <span className="text-xs text-[#9CA3AF] font-sans tracking-wide uppercase">{label}</span>
                  <span className="text-sm text-[#111827] font-sans font-semibold">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 text-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold font-sans text-white bg-[#2CC8C8] hover:bg-[#1A9999] transition-all duration-200"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre a Dra. Jéssica Arakaki | Arakaki Odonto",
  description:
    "Conheça a Dra. Jéssica Arakaki, CRO 59293. Cirurgiã-dentista especializada em Implantes Dentários e Harmonização Orofacial em São Paulo.",
  alternates: {
    canonical: "https://arakakiodonto.com.br/sobre",
  },
};

const WHATSAPP = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.";

export default function SobrePage() {
  return (
    <>
      <Nav />

      <section
        className="pt-40 pb-24 px-6"
        style={{ background: "linear-gradient(to bottom, #0B0F18, #131A28)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-[0.3em] text-[#2CC8C8] uppercase font-sans mb-4 block">
            A Profissional
          </span>
          <h1
            className="text-5xl sm:text-6xl font-light text-white leading-tight mb-2 font-serif"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Dra. Jéssica
          </h1>
          <h2
            className="text-5xl sm:text-6xl text-[#2CC8C8] leading-tight mb-8"
            style={{ fontFamily: "var(--font-dancing)", fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            Arakaki
          </h2>
          <p className="text-[#94A8BE] font-sans leading-relaxed text-base max-w-xl mx-auto">
            Cirurgiã-dentista com CRO 59293, especializada em Implantodontia e Harmonização Orofacial. Comprometida com resultados naturais e atendimento humanizado.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 px-6" style={{ background: "#0B0F18" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl font-light text-white mb-8 font-serif"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Formação e <span className="font-semibold italic text-[#2CC8C8]">especialidades</span>
          </h2>

          <div className="space-y-6 text-[#94A8BE] font-sans leading-relaxed">
            <p>
              A Dra. Jéssica Arakaki é cirurgiã-dentista registrada no CRO sob o número 59293, com atuação clínica voltada para duas áreas de alta especialização: a Implantodontia e a Harmonização Orofacial.
            </p>
            <p>
              Em Implantodontia, a Dra. Jéssica trabalha com os principais protocolos de reabilitação oral, incluindo implantes unitários, All-on-4 e All-on-6, sempre com planejamento digital e tomografia cone beam para máxima previsibilidade cirúrgica.
            </p>
            <p>
              Em Harmonização Orofacial, realiza procedimentos como toxina botulínica, preenchimento com ácido hialurônico, bioestimuladores de colágeno, fios de PDO e rinomodelação, com foco em resultados naturais e proporcionais.
            </p>
            <p>
              Sua prática clínica é orientada por formação continuada constante, uso de materiais de alta qualidade registrados pela Anvisa e um protocolo de biossegurança rigoroso em todas as etapas do atendimento.
            </p>
          </div>

          {/* Credentials */}
          <div
            className="mt-12 rounded-2xl border border-[#253045] p-8"
            style={{ background: "linear-gradient(135deg, #131A28 0%, #1C2638 100%)" }}
          >
            <h3
              className="text-xl font-medium text-white mb-6 font-serif"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Registro e credenciais
            </h3>
            <ul className="space-y-4 list-none">
              {[
                ["CRO", "59293"],
                ["Conselho", "CRO-SP (São Paulo)"],
                ["Especialidade 1", "Implantodontia"],
                ["Especialidade 2", "Harmonização Orofacial"],
                ["Atendimento", "São Paulo, SP"],
              ].map(([label, value]) => (
                <li key={label} className="flex items-center justify-between border-b border-[#253045] pb-4 last:border-0 last:pb-0">
                  <span className="text-xs text-[#4A5D70] font-sans tracking-wide uppercase">{label}</span>
                  <span className="text-sm text-white font-sans font-medium">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 text-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium font-sans text-[#060910] bg-[#2CC8C8] hover:bg-[#52DADA] transition-all duration-200"
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

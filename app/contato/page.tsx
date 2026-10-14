import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contato | Arakaki Odonto",
  description:
    "Entre em contato com a Arakaki Odonto. Agende sua avaliação via WhatsApp com a Dra. Jéssica Arakaki, CRO 59293, em São Paulo.",
  alternates: {
    canonical: "https://arakakiodonto.com.br/contato",
  },
};

const WHATSAPP = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

export default function ContatoPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 bg-[#F9FAFB] border-b border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs tracking-[0.3em] text-[#2CC8C8] uppercase font-sans mb-4 block font-semibold">
            Fale Conosco
          </span>
          <h1
            className="text-5xl sm:text-6xl font-light text-[#111827] leading-tight mb-6 font-serif"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Agende sua
            <br />
            <span className="font-semibold text-[#2CC8C8]">avaliação gratuita</span>
          </h1>
          <p className="text-[#6B7280] font-sans leading-relaxed text-base max-w-xl">
            A Dra. Jéssica Arakaki responde pessoalmente. Sem telefonista, sem formulário, sem espera.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {/* WhatsApp */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-[#E5E7EB] hover:border-[#2CC8C8]/40 hover:shadow-[0_4px_24px_rgba(44,200,200,0.10)] p-10 flex flex-col gap-6 transition-all duration-200 bg-white"
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-[#2CC8C8] bg-[#F0FCFC]"
              aria-hidden="true"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div>
              <h2
                className="text-2xl font-medium text-[#111827] mb-2 font-serif"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                WhatsApp
              </h2>
              <p className="text-sm text-[#6B7280] font-sans leading-relaxed mb-3">
                Atendimento direto com a Dra. Jéssica. Resposta em até 2 horas durante horário comercial.
              </p>
              <span className="text-xs text-[#2CC8C8] font-sans font-semibold">Segunda a Sábado · 08h às 18h</span>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#2CC8C8] group-hover:gap-3 transition-all font-sans">
              Enviar mensagem
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/arakakiodonto"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-[#E5E7EB] hover:border-[#2CC8C8]/40 hover:shadow-[0_4px_24px_rgba(44,200,200,0.10)] p-10 flex flex-col gap-6 transition-all duration-200 bg-white"
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-[#2CC8C8] bg-[#F0FCFC]"
              aria-hidden="true"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </div>
            <div>
              <h2
                className="text-2xl font-medium text-[#111827] mb-2 font-serif"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Instagram
              </h2>
              <p className="text-sm text-[#6B7280] font-sans leading-relaxed mb-3">
                Acompanhe resultados reais, procedimentos e dicas de saúde bucal.
              </p>
              <span className="text-xs text-[#2CC8C8] font-sans font-semibold">@arakakiodonto</span>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#2CC8C8] group-hover:gap-3 transition-all font-sans">
              Ver perfil
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        {/* Location info */}
        <div className="max-w-4xl mx-auto mt-6">
          <div className="rounded-2xl border border-[#E5E7EB] p-8 bg-[#F9FAFB]">
            <h2
              className="text-xl font-medium text-[#111827] mb-4 font-serif"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Localização
            </h2>
            <p className="text-sm text-[#374151] font-sans leading-relaxed mb-2 font-semibold">
              São Paulo, SP, Brasil
            </p>
            <p className="text-xs text-[#9CA3AF] font-sans">
              Endereço completo disponível via WhatsApp ao agendar sua avaliação.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-[#111827]">
        <h2
          className="text-3xl sm:text-4xl font-light text-white mb-4 font-serif"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Primeira consulta
          <span className="font-semibold text-[#2CC8C8]"> sem custo.</span>
        </h2>
        <p className="text-[#9CA3AF] font-sans mb-8 max-w-md mx-auto">
          A Dra. Jéssica analisa o seu caso e explica o que é possível fazer, quanto tempo leva e o que esperar. Sem promessa vaga.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold font-sans text-[#111827] bg-[#2CC8C8] hover:bg-[#52DADA] transition-colors duration-200"
        >
          Agendar pelo WhatsApp
        </a>
      </section>

      <Footer />
    </>
  );
}

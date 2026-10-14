const WHATSAPP = "https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

export default function WhatsAppCTA() {
  return (
    <section className="py-24 px-6 bg-[#111827]" aria-labelledby="cta-heading">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs tracking-[0.3em] text-[#2CC8C8] uppercase font-sans mb-4 block font-semibold">
          Próximo passo
        </span>

        <h2
          id="cta-heading"
          className="leading-tight mb-6 font-serif text-white"
          style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
        >
          A avaliação é gratuita.
          <br />
          <span className="text-[#2CC8C8] font-semibold">O diagnóstico é honesto.</span>
        </h2>

        <p className="text-[#9CA3AF] font-sans leading-relaxed mb-10 text-base max-w-xl mx-auto">
          A Dra. Jéssica analisa o seu caso pessoalmente e explica o que é possível fazer, quanto tempo leva e o que esperar do resultado. Sem promessa vaga.
        </p>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-semibold font-sans text-base text-[#111827] bg-[#2CC8C8] hover:bg-[#52DADA] transition-colors duration-200"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Falar no WhatsApp
        </a>

        <p className="mt-6 text-xs text-[#6B7280] font-sans">
          Segunda a Sábado · Resposta em até 2 horas
        </p>
      </div>
    </section>
  );
}

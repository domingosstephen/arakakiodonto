const stats = [
  { value: "CRO 59293", label: "Registro Profissional" },
  { value: "Titânio", label: "Implantes Osseointegráveis" },
  { value: "HOF", label: "Harmonização Orofacial" },
  { value: "São Paulo", label: "Atendimento Presencial" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#F9FAFB] border-y border-[#E5E7EB]" aria-label="Credenciais">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 list-none">
          {stats.map((s) => (
            <li key={s.value} className="flex flex-col items-center text-center gap-1">
              <span
                className="text-xl sm:text-2xl font-semibold text-[#111827]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {s.value}
              </span>
              <span className="text-xs text-[#9CA3AF] tracking-wide font-sans">
                {s.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

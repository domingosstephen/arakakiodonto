const stats = [
  { value: "CRO 59293", label: "Registro Profissional" },
  { value: "Implantes", label: "Especialidade Principal" },
  { value: "HOF", label: "Harmonização Orofacial" },
  { value: "SP", label: "São Paulo, Brasil" },
];

export default function TrustBar() {
  return (
    <section
      className="relative z-10 -mt-16 mx-auto max-w-5xl px-6"
      aria-label="Credenciais"
    >
      <div
        className="rounded-2xl border border-[#2CC8C8]/15 px-6 py-6"
        style={{
          background:
            "linear-gradient(135deg, rgba(19,26,40,0.95) 0%, rgba(28,38,56,0.95) 100%)",
          backdropFilter: "blur(12px)",
        }}
      >
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 list-none">
          {stats.map((s) => (
            <li
              key={s.value}
              className="flex flex-col items-center text-center gap-1"
            >
              <span
                className="text-xl sm:text-2xl font-semibold text-[#2CC8C8]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {s.value}
              </span>
              <span className="text-xs text-[#6B7E92] tracking-wide font-sans uppercase">
                {s.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { fechas } from '../../data/fechas'

export default function Fechas() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-display text-3xl text-[var(--wine)] mb-2">Fechas</h1>
      <p className="text-[var(--ink)]/70 mb-10">las que no se nos olvidan</p>

      <ol className="relative border-l-2 border-[var(--rose)]/40 pl-6 space-y-10">
        {fechas.map((f) => (
          <li key={f.id} className="relative">
            <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-[var(--wine)]" />
            <p className="font-hand text-lg text-[var(--rose)]">
              {new Date(f.fecha).toLocaleDateString('es-ES', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
            <h3 className="font-display text-xl text-[var(--wine)]">{f.titulo}</h3>
            <p className="text-[var(--ink)]/70 mt-1">{f.nota}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

import { viajes } from '../../data/viajes'

export default function Viajes() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="font-display text-3xl text-[var(--wine)] mb-2">Viajes</h1>
      <p className="text-[var(--ink)]/70 mb-12">los lugares que ya son nuestros</p>

      <div className="space-y-8">
        {viajes.map((v) => (
          <article
            key={v.id}
            className="bg-white/70 border border-[var(--rose)]/30 rounded-lg p-6"
          >
            <p className="font-hand text-lg text-[var(--rose)]">
              {new Date(v.fecha).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
            </p>
            <h2 className="font-display text-2xl text-[var(--wine)]">{v.lugar}</h2>
            <p className="text-[var(--ink)]/70 mt-2">{v.resumen}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

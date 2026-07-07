import { compromisos } from '../../data/compromisos'

export default function Compromisos() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-display text-3xl text-[var(--wine)] mb-2">Compromisos</h1>
      <p className="text-[var(--ink)]/70 mb-12">lo que viene, lo que prometemos</p>

      <ul className="space-y-4">
        {compromisos.map((c) => (
          <li
            key={c.id}
            className="flex items-start gap-3 bg-white/70 border rounded-lg p-4"
            style={{ borderColor: 'rgba(201,151,75,0.4)' }}
          >
            <span
              className="mt-1 w-2.5 h-2.5 rounded-full shrink-0"
              style={{ background: 'var(--gold)' }}
            />
            <p className={c.cumplido ? 'line-through text-[var(--ink)]/40' : 'text-[var(--ink)]'}>
              {c.texto}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

import { Link } from 'react-router-dom'

const secciones = [
  { to: '/fechas', titulo: 'Fechas', desc: 'los días que marcamos en el calendario' },
  { to: '/fotos', titulo: 'Fotos', desc: 'cada momento capturado' },
  { to: '/videos', titulo: 'Videos', desc: 'lo que las fotos no alcanzan a contar' },
  { to: '/viajes', titulo: 'Viajes', desc: 'los lugares que ya son nuestros' },
  { to: '/compromisos', titulo: 'Compromisos', desc: 'lo que viene' },
]

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-center">
      <p className="font-hand text-2xl text-[var(--rose)] mb-2">para Kim</p>
      <h1 className="font-display text-4xl md:text-5xl text-[var(--wine)] leading-tight">
        Nuestro álbum
      </h1>
      <p className="mt-4 text-[var(--ink)]/70 max-w-md mx-auto">
        un lugar para guardar todo lo que hemos vivido, y todo lo que falta por vivir.
      </p>

      <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-6">
        {secciones.map((s) => (
          <Link
            key={s.to}
            to={s.to}
            className="group rounded-lg border border-[var(--rose)]/30 bg-white/60 px-4 py-6 hover:border-[var(--wine)] transition-colors"
          >
            <h2 className="font-display text-lg text-[var(--wine)] group-hover:underline">
              {s.titulo}
            </h2>
            <p className="font-hand text-base text-[var(--ink)]/70 mt-1">{s.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

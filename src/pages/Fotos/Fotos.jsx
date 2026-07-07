import PhotoCard from '../../components/PhotoCard'
import { fotos } from '../../data/fotos'

export default function Fotos() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="font-display text-3xl text-[var(--wine)] mb-2">Fotos</h1>
      <p className="text-[var(--ink)]/70 mb-12">cada momento capturado</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-14 gap-x-8">
        {fotos.map((f, i) => (
          <PhotoCard key={f.id} imagen={f.imagen} caption={f.caption} rotate={i % 2 === 0 ? -2 : 2} />
        ))}
      </div>
    </section>
  )
}

import { videos } from '../../data/videos'

export default function Videos() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="font-display text-3xl text-[var(--wine)] mb-2">Videos</h1>
      <p className="text-[var(--ink)]/70 mb-12">lo que las fotos no alcanzan a contar</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {videos.map((v) => (
          <div key={v.id} className="bg-white/70 border border-[var(--rose)]/30 rounded-lg p-3">
            <div className="aspect-video bg-[var(--paper-2)] flex items-center justify-center rounded">
              {v.src ? (
                <video src={v.src} controls className="w-full h-full rounded" />
              ) : (
                <span className="font-hand text-xl text-[var(--rose)]">sin video aún</span>
              )}
            </div>
            <p className="font-hand text-lg text-center mt-2">{v.caption}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

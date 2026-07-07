/**
 * Tarjeta tipo polaroid con washi tape.
 * Úsala en Fotos, Viajes, Compromisos... cualquier sección con imágenes.
 *
 * props:
 *  - src: ruta de la imagen (ej. "/images/playa.jpg")
 *  - caption: texto manuscrito debajo de la foto
 *  - rotate: leve inclinación en grados (por defecto alterna solo, pero puedes forzarla)
 */
export default function PhotoCard({ imagen, caption, rotate = -2 }) {
  return (
    <div
      className="polaroid w-full max-w-[260px] mx-auto"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="tape" />
      <div className="aspect-square bg-[var(--paper-2)] overflow-hidden">
        {imagen ? (
          <img src={imagen} alt={caption || 'foto'} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[var(--rose)] font-hand text-2xl">
            sin foto aún
          </div>
        )}
      </div>
      {caption && (
        <p className="font-hand text-lg text-center text-[var(--ink)] mt-2">{caption}</p>
      )}
    </div>
  )
}

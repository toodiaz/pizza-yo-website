export default function Talleres() {
  const WA = "https://wa.me/523321792390";
  const gallery = [1, 2, 3, 4];

  return (
    <main>
      {/* Header */}
      <section className="bg-[#E63946] text-white py-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold">
          Talleres <span className="text-[#FFD60A]">Pizza-Yo</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Llevamos la experiencia Pizza-Yo para tu evento. Aprende a hacer pizza artesanal
          mientras te divertes con familia, amigos o tu equipo.
        </p>
      </section>

      {/* Info */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#E63946] mb-4">¿Cómo funciona?</h2>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li>📅 <strong>Todos los días</strong> – Reserva con anticipación para tu evento.</li>
              <li>🎪 <strong>Para tu evento</strong> – Llevamos ingredientes, horno y todo lo necesario.</li>
              <li>👨‍🍳 <strong>Guiado por expertos</strong> – Te enseñamos paso a paso.</li>
              <li>👨‍👩‍👧‍👦 <strong>Para todas las edades</strong> – Chicos y grandes se divierten igual.</li>
            </ul>
          </div>
          <div className="bg-[#FFD60A]/20 rounded-2xl p-8 text-center border-2 border-dashed border-[#FFD60A]">
            <span className="text-6xl">🍕</span>
            <p className="mt-4 font-bold text-[#E63946] text-xl">Desde $100 por persona</p>
            <p className="text-gray-600 mt-1">A partir de 50 piezas para eventos</p>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#E63946] mb-8">Galería</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((n) => (
            <div key={n} className="aspect-square bg-white border-2 border-gray-100 rounded-xl overflow-hidden relative shadow-sm">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300 text-sm gap-1">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Cargando imagen...</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E63946] py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Reserva tu taller <span className="text-[#FFD60A]">pizzero</span>
        </h2>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-[#FFD60A] text-[#E63946] font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          📲 Reservar por WhatsApp
        </a>
      </section>
    </main>
  );
}

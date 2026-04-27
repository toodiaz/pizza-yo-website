export default function PizzasPage() {
  const WA = "https://wa.me/523321792390";

  const gallery = [1, 2, 3, 4];
  const galleryDulce = [1, 2, 3, 4];

  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="bg-[#E63946] text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">🍕 Nuestras Pizzas</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          Ingredientes de calidad, masa artesanal y una variedad que sorprende a todos.
        </p>
      </section>

      {/* Pizzas tradicionales */}
      <section className="max-w-5xl mx-auto py-14 px-4">
        <h2 className="text-3xl font-bold text-center mb-3">Pizzas Tradicionales</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Masa artesanal con una gran variedad de ingredientes frescos. Personalizamos cada pizza
          según tus gustos — cuéntanos qué quieres y lo hacemos realidad.
        </p>
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

      {/* Pizzas dulces */}
      <section className="bg-[#FFF8E7] py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">
              🍫 Pizzas Dulces
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Masa de pizza artesanal — sin salsa de tomate ni ingredientes salados — cubierta
              con Nutella y toppings dulces. Perfecta para celebraciones, postres o simplemente
              darse un gusto diferente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border-t-4 border-[#FFD60A]">
              <span className="text-4xl">🍫</span>
              <h3 className="font-bold text-lg mt-3 mb-1">Nutella</h3>
              <p className="text-gray-600 text-sm">Base de Nutella con toppings a elegir. Irresistible.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border-t-4 border-[#FFD60A]">
              <span className="text-4xl">🍓</span>
              <h3 className="font-bold text-lg mt-3 mb-1">Toppings variados</h3>
              <p className="text-gray-600 text-sm">Frutas, malvaviscos, granola, chispas y más opciones de temporada.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border-t-4 border-[#FFD60A]">
              <span className="text-4xl">🎂</span>
              <h3 className="font-bold text-lg mt-3 mb-1">Ideal para eventos</h3>
              <p className="text-gray-600 text-sm">Una sorpresa deliciosa para cumpleaños, fiestas y reuniones.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryDulce.map((n) => (
              <div key={n} className="aspect-square bg-white border-2 border-[#FFD60A]/30 rounded-xl overflow-hidden relative shadow-sm">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300 text-sm gap-1">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Cargando imagen...</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 text-center">
        <h2 className="text-2xl font-bold mb-3">¿Te antojaste?</h2>
        <p className="text-gray-600 mb-6">Escríbenos y cuéntanos qué quieres — lo personalizamos para ti.</p>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#E63946] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-red-700 transition"
        >
          Pedir por WhatsApp 🍕
        </a>
      </section>

    </main>
  );
}

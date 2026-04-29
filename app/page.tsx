export default function Home() {
  const WA = "https://wa.me/523321792390";
  const IG = "https://www.instagram.com/_pizza_yo_/";

  const waIcon = (
    <svg className="w-7 h-7 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.428a.75.75 0 00.906.994l5.87-1.54A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.67-.497-5.214-1.367l-.371-.214-3.843 1.009 1.022-3.748-.234-.386A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  );

  const steps = [
    { n: "1", icon: "💬", title: "Escríbenos", desc: "Mándanos un WhatsApp con la fecha y número de personas. Te respondemos rápido." },
    { n: "2", icon: "🚐", title: "Llegamos a tu evento", desc: "Llevamos horno, masa artesanal, ingredientes y todo lo necesario. Tú no prepares nada." },
    { n: "3", icon: "🍕", title: "¡A hacer pizza!", desc: "Tus invitados hacen su propia pizza, la personalizan y se la comen al momento." },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[90vh] bg-gradient-to-br from-[#E63946] to-[#b91c2c] text-white px-6 overflow-hidden">
        {/* Logo wallpaper background */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "url('/logo.png')",
            backgroundSize: "140px auto",
            backgroundRepeat: "repeat",
          }}
        />
        <div className="relative z-10 flex flex-col items-center">
          <img src="/logo.png" alt="Pizza-Yo" className="w-40 md:w-56 mb-6 drop-shadow-xl" />
          {/* Hook principal */}
          <p className="text-base md:text-lg font-semibold tracking-widest uppercase text-[#FFD60A] mb-2 opacity-90">
            Zapopan · GDL · Tlajomulco
          </p>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight drop-shadow-lg">
            Pizza? <span className="text-[#FFD60A]">Yo!!!</span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-2xl opacity-90">
            Llevamos el taller de pizza directo a tu fiesta.<br className="hidden md:block" />
            Niños y adultos hacen su propia pizza — y se la comen al momento.
          </p>
          {/* Prueba social */}
          <p className="mt-3 text-sm md:text-base opacity-75 italic">
            ★★★★★ &nbsp;"mis hijos ya quieren que vuelvan para la siguiente fiesta" — Diana R.
          </p>
          {/* Botones principales */}
          <div className="mt-7 flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-xl px-6 py-5 rounded-2xl shadow-lg hover:scale-105 transition-transform">
              {waIcon} WhatsApp
            </a>
            <a href={IG} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:opacity-90 text-white font-bold text-xl px-6 py-5 rounded-2xl shadow-lg hover:scale-105 transition-transform">
              <svg className="w-7 h-7 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Instagram
            </a>
          </div>
          {/* Urgencia suave */}
          <p className="mt-5 text-sm opacity-70">
            📅 Fechas limitadas — reserva con anticipación
          </p>
        </div>
      </section>

      {/* Barra de confianza */}
      <section className="bg-[#1a1a1a] text-white py-4 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6 text-sm font-medium text-center">
          <span>✅ Llevamos todo — tú no preparas nada</span>
          <span>✅ Ingredientes frescos y de calidad</span>
          <span>✅ Niños y adultos disfrutan por igual</span>
          <span>✅ Atención rápida por WhatsApp</span>
        </div>
      </section>

      {/* Cómo funciona — 3 pasos */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#E63946] mb-4">
          ¿Cómo funciona?
        </h2>
        <p className="text-center text-gray-500 mb-12">Tan fácil como 1, 2, 3</p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="relative bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#E63946] text-white rounded-full flex items-center justify-center font-extrabold text-sm">
                {s.n}
              </div>
              <span className="text-5xl">{s.icon}</span>
              <h3 className="mt-4 text-xl font-bold text-gray-800">{s.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Servicios rápidos */}
      <section className="bg-gray-50 py-14 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <a href="/talleres" className="group bg-white rounded-2xl shadow-md p-8 border-t-4 border-[#E63946] hover:shadow-xl transition-shadow block">
            <span className="text-4xl">👨‍🍳</span>
            <h3 className="mt-4 text-xl font-bold text-gray-800 group-hover:text-[#E63946] transition-colors">Taller de pizza</h3>
            <p className="mt-2 text-gray-600 text-sm">Tus invitados hacen su propia pizza. Ideal para cumpleaños, eventos escolares y reuniones familiares.</p>
            <span className="mt-4 inline-block text-[#E63946] font-semibold text-sm">Ver más →</span>
          </a>
          <a href="/fiestas" className="group bg-white rounded-2xl shadow-md p-8 border-t-4 border-[#FFD60A] hover:shadow-xl transition-shadow block">
            <span className="text-4xl">🍕</span>
            <h3 className="mt-4 text-xl font-bold text-gray-800 group-hover:text-[#E63946] transition-colors">Pizzas al momento</h3>
            <p className="mt-2 text-gray-600 text-sm">Nuestro personal capacitado lleva el horno y prepara las pizzas en vivo para todos tus invitados.</p>
            <span className="mt-4 inline-block text-[#E63946] font-semibold text-sm">Ver más →</span>
          </a>
        </div>
      </section>

      {/* Reseña destacada */}
      <section className="py-14 px-6 max-w-3xl mx-auto text-center">
        <p className="text-5xl mb-4">💬</p>
        <p className="text-xl md:text-2xl text-gray-700 italic">
          "salio todo perfecto llevaron todo y los niños se divirtieron muchisimo haciendo su propia pizza"
        </p>
        <p className="mt-4 font-bold text-[#E63946]">— Roberto G.</p>
        <p className="text-[#FFD60A] text-xl mt-1">★★★★★</p>
      </section>

      {/* CTA Final */}
      <section className="bg-[#FFD60A] py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#E63946]">
          ¿Ya tienes fecha en mente?
        </h2>
        <p className="mt-3 text-lg text-[#E63946]/80 max-w-xl mx-auto">
          Escríbenos hoy y asegura tu lugar — las fechas se llenan rápido.
        </p>
        <a href={WA} target="_blank" rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-3 bg-[#E63946] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform">
          {waIcon} Reservar por WhatsApp
        </a>
      </section>
    </main>
  );
}

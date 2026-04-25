export default function Home() {
  const WA = "https://wa.me/523321792390";
  const benefits = [
    { icon: "🍕", title: "Masa Artesanal", desc: "Preparada al momento con ingredientes frescos y naturales." },
    { icon: "🎉", title: "Diversión Garantizada", desc: "Cada pizza es una experiencia única para toda la familia." },
    { icon: "🚀", title: "Llegamos a Ti", desc: "Llevamos todo lo necesario directo a tu domicilio o evento." },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[85vh] bg-gradient-to-br from-[#E63946] to-[#b91c2c] text-white px-6">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight drop-shadow-lg">
          Pizza? <span className="text-[#FFD60A]">Yo!!!</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl opacity-90">
          Talleres de pizza para chicos y grandes. Diversión, sabor y momentos inolvidables.
        </p>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-[#FFD60A] text-[#E63946] font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          ¡Reserva ahora por WhatsApp!
        </a>
      </section>

      {/* Beneficios */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#E63946] mb-12">
          ¿Por qué Pizza-Yo?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-shadow border-t-4 border-[#E63946]"
            >
              <span className="text-5xl">{b.icon}</span>
              <h3 className="mt-4 text-xl font-bold text-gray-800">{b.title}</h3>
              <p className="mt-2 text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-[#FFD60A] py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#E63946]">
          ¿Listos para la mejor pizza?
        </h2>
        <p className="mt-3 text-lg text-[#E63946]/80 max-w-xl mx-auto">
          Escríbenos y creamos la experiencia perfecta para ti.
        </p>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-[#E63946] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          💬 Escríbenos por WhatsApp
        </a>
      </section>
    </main>
  );
}

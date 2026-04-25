export default function Fiestas() {
  const WA = "https://wa.me/523321792390";
  const testimonios = [
    { name: "Mariana G.", text: "Los chicos no pararon de divertirse. ¡La mejor fiesta que organizamos!", stars: 5 },
    { name: "Diego R.", text: "Súper profesionales y la pizza estaba increíble. Todos quedaron encantados.", stars: 5 },
    { name: "Carla P.", text: "Mis hijos siguen hablando de la fiesta Pizza-Yo. ¡Repetimos seguro!", stars: 5 },
  ];

  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#E63946] to-[#b91c2c] text-white py-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold">
          Fiestas <span className="text-[#FFD60A]">Pizza-Yo</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Transformá cualquier celebración en una experiencia inolvidable. Cumpleaños, reuniones, eventos corporativos y más.
        </p>
      </section>

      {/* Propuesta */}
      <section className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {[
          { icon: "🎂", title: "Cumpleaños", desc: "El festejo más original y divertido para cualquier edad." },
          { icon: "🏢", title: "Corporativos", desc: "Team building con sabor: ideal para empresas y equipos." },
          { icon: "✨", title: "Eventos Especiales", desc: "Comuniones, baby showers, reuniones familiares y más." },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow border-b-4 border-[#FFD60A]">
            <span className="text-5xl">{item.icon}</span>
            <h3 className="mt-4 text-xl font-bold text-gray-800">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Testimonios */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#E63946] mb-12">
          Lo que dicen nuestros clientes
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonios.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6">
              <p className="text-[#FFD60A] text-xl mb-2">{"★".repeat(t.stars)}</p>
              <p className="text-gray-700 italic">&ldquo;{t.text}&rdquo;</p>
              <p className="mt-4 font-bold text-[#E63946]">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFD60A] py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#E63946]">
          ¡Hacé tu fiesta con Pizza-Yo!
        </h2>
        <p className="mt-3 text-lg text-[#E63946]/80 max-w-xl mx-auto">
          Contanos qué tenés en mente y armamos un plan a tu medida.
        </p>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-[#E63946] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          🎉 Consultá por WhatsApp
        </a>
      </section>
    </main>
  );
}

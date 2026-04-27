export default function Fiestas() {
  const WA = "https://wa.me/523321792390";
  const testimonios = [
    { name: "Karla M.", text: "la verdad me sorprendio muchisimo el servicio mis niños quedaron felicisimos y la pizza estaba deliciosa 🍕" },
    { name: "Diana R.", text: "mis hijos ya quieren que vuelvan para la siguiente fiesta jajaj muy recomendable" },
    { name: "Roberto G.", text: "salio todo perfecto llevaron todo y los niños se divirtieron muchisimo haciendo su propia pizza" },
  ];

  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#E63946] to-[#b91c2c] text-white py-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold">
          Fiestas <span className="text-[#FFD60A]">Pizza-Yo</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Transforma cualquier celebración en una experiencia inolvidable. Cumpleaños, reuniones, eventos corporativos y más.
        </p>
      </section>

      {/* Dos modalidades */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">¿Cómo quieres tu evento?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-[#E63946]">
            <span className="text-5xl">👨‍🍳</span>
            <h3 className="mt-4 text-xl font-bold text-gray-800">Taller de pizza</h3>
            <p className="mt-2 text-gray-600">
              Nuestro servicio estrella. Los invitados hacen su propia pizza guiados por nuestro equipo.
              Se divierten, aprenden y se comen lo que hicieron. Funciona perfecto para niños y adultos.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-[#FFD60A]">
            <span className="text-5xl">🍕</span>
            <h3 className="mt-4 text-xl font-bold text-gray-800">Solo pizzas al momento</h3>
            <p className="mt-2 text-gray-600">
              Llevamos el horno y los ingredientes, y nuestro personal capacitado prepara las pizzas
              al momento para todos tus invitados. Tú disfrutas, nosotros nos encargamos.
            </p>
          </div>
        </div>
      </section>

      {/* Para qué tipo de eventos */}
      <section className="bg-gray-50 py-14 px-6 max-w-5xl mx-auto rounded-2xl mb-8">
        <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
          {[
            { icon: "🎂", title: "Cumpleaños", desc: "El festejo más original y divertido para cualquier edad." },
            { icon: "🏢", title: "Corporativos", desc: "Team building con sabor, ideal para empresas y equipos." },
            { icon: "✨", title: "Eventos especiales", desc: "Comuniones, baby showers, reuniones familiares y más." },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <span className="text-5xl">{item.icon}</span>
              <h3 className="mt-4 text-xl font-bold text-gray-800">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reseñas */}
      <section className="py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#E63946] mb-12">
          Lo que dicen nuestros clientes
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonios.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <p className="text-[#FFD60A] text-xl mb-3">★★★★★</p>
              <p className="text-gray-700">{t.text}</p>
              <p className="mt-4 font-bold text-[#E63946] text-sm">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFD60A] py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#E63946]">
          ¡Haz tu fiesta con Pizza-Yo!
        </h2>
        <p className="mt-3 text-lg text-[#E63946]/80 max-w-xl mx-auto">
          Cuéntanos qué tienes en mente y creamos un plan a tu medida.
        </p>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-[#E63946] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          🎉 Consulta por WhatsApp
        </a>
      </section>
    </main>
  );
}

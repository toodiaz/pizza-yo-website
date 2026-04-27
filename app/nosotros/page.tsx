export default function NosotrosPage() {
  const WA = "https://wa.me/523321792390";

  const valores = [
    { icon: "🔥", titulo: "Calidad real", desc: "Ingredientes frescos y masa artesanal. No recortamos en lo que más importa." },
    { icon: "🎉", titulo: "Diversión garantizada", desc: "Niños y adultos disfrutan por igual — hacer tu propia pizza siempre es un hit." },
    { icon: "🚐", titulo: "Llevamos todo", desc: "Horno, ingredientes, utensilios. Tú solo preocúpate por disfrutar." },
    { icon: "🤝", titulo: "Servicio al cliente", desc: "Atención cercana antes, durante y después de cada evento. Respondemos rápido." },
  ];

  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="bg-[#E63946] text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Sobre Pizza-Yo</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          Un negocio familiar que lleva la experiencia de hacer pizza directo a tu evento.
        </p>
      </section>

      {/* Quiénes somos */}
      <section className="max-w-4xl mx-auto py-14 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">¿Qué hacemos?</h2>
        <div className="prose prose-lg mx-auto text-gray-700 text-center max-w-3xl space-y-4">
          <p>
            Pizza-Yo es un negocio familiar nacido en Zapopan. Nuestro servicio consiste en llevar
            todo lo necesario — horno, masa madre, ingredientes y utensilios — directamente a tu
            fiesta o evento para que los invitados vivan la experiencia de hacer su propia pizza
            y comérsela al momento.
          </p>
          <p>
            Lo que nos diferencia de otros talleres es la calidad. Usamos ingredientes frescos y
            masa artesanal, y cuidamos cada detalle del servicio. No somos un taller de "niños
            ensuciando" — somos una experiencia completa que disfrutan igual chicos y grandes.
          </p>
          <p>
            También podemos ir como <strong>proveedor de comida</strong>: nuestro personal
            capacitado lleva el horno y los ingredientes y prepara las pizzas al momento para
            todos los invitados. Tú eliges cómo quieres vivirlo.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section className="bg-gray-50 py-14 px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">¿Cómo podemos ir a tu evento?</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-[#E63946]">
            <span className="text-4xl">👨‍🍳</span>
            <h3 className="text-xl font-bold mt-4 mb-2 text-[#E63946]">Taller de pizza</h3>
            <p className="text-gray-600">
              Nuestro servicio principal. Los invitados — niños y adultos — hacen su propia pizza
              guiados por nuestro equipo. Se divierten, aprenden y se comen lo que hicieron.
              Llevamos absolutamente todo.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-[#FFD60A]">
            <span className="text-4xl">🍕</span>
            <h3 className="text-xl font-bold mt-4 mb-2">Proveedor de comida</h3>
            <p className="text-gray-600">
              Nuestro personal capacitado lleva el horno y los ingredientes y prepara las pizzas
              al momento para todos tus invitados. Ideal cuando quieres ofrecer pizza artesanal
              fresca sin que sea un taller.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-14 px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Lo que nos define</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {valores.map((v) => (
            <div key={v.titulo} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition border border-gray-100">
              <span className="text-4xl">{v.icon}</span>
              <h3 className="text-lg font-bold mt-3 mb-2 text-[#E63946]">{v.titulo}</h3>
              <p className="text-sm text-gray-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Zonas */}
      <section className="bg-gray-50 py-10 px-4 text-center">
        <p className="text-gray-600 text-lg">
          📍 Atendemos eventos en <strong>Zapopan, Guadalajara</strong> y partes de <strong>Tlajomulco</strong>.
          ¿No sabes si llegamos a tu zona? Mándanos tu dirección y te confirmamos.
        </p>
        <a
          href="https://wa.me/523321792390?text=Hola!%20quiero%20saber%20si%20hacen%20servicio%20en%20mi%20zona"
          target="_blank" rel="noopener noreferrer"
          className="mt-5 inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3 rounded-full transition"
        >
          Pregunta por tu zona 📍
        </a>
      </section>

      {/* Misión */}
      <section className="max-w-4xl mx-auto py-14 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
        <div className="bg-[#FFD60A] rounded-xl p-8 text-gray-900">
          <p className="text-xl font-semibold">
            "Llevar la mejor experiencia de pizza artesanal a cada fiesta, creando momentos
            de diversión y sabor con ingredientes honestos y un servicio que siempre cumple."
          </p>
        </div>
      </section>

    </main>
  );
}

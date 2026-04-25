export default function PizzasPage() {
  const zonas = [
    { nombre: "Zona Real", minimo: 2, colonias: "Zona Real, Pinar de la Calma, Ciudad Bugambilias" },
    { nombre: "Jardín Real", minimo: 1, colonias: "Jardín Real, Puerta de Hierro, Colinas de San Javier" },
    { nombre: "Valle Real", minimo: 1, colonias: "Valle Real, Los Olivos, Royal Country" },
  ];

  return (
    <main className="min-h-screen">
      <section className="bg-[#E63946] text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">🍕 Pizzas de Sábado</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          Cada sábado horneamos pizzas artesanales y las llevamos directo a tu puerta en Zapopan.
        </p>
      </section>

      <section className="max-w-5xl mx-auto py-14 px-4">
        <div className="bg-[#FFD60A] text-gray-900 rounded-xl p-6 mb-12 text-center font-semibold text-lg">
          ⏰ Los pedidos cierran cada <span className="underline">viernes a las 10:00 PM</span>. ¡No te quedes sin la tuya!
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">Zonas de Entrega</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {zonas.map((z) => (
            <div key={z.nombre} className="border-2 border-[#E63946] rounded-2xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-[#E63946] mb-2">{z.nombre}</h3>
              <p className="text-3xl font-extrabold mb-1">{z.minimo} pizza{z.minimo > 1 ? "s" : ""}</p>
              <p className="text-sm text-gray-500 mb-3">mínimo por pedido</p>
              <p className="text-sm text-gray-600"><strong>Colonias:</strong> {z.colonias}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-14 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">¿Lista/o para ordenar?</h2>
        <p className="text-gray-600 mb-6">Escríbenos por WhatsApp antes del viernes a las 10 PM.</p>
        <a
          href="https://wa.me/521135759862943271?text=¡Hola!%20Quiero%20pedir%20pizzas%20para%20este%20sábado%20🍕"
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

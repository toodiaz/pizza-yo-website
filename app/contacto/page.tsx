export default function ContactoPage() {
  const faqs = [
    { q: "¿Cuándo puedo ordenar?", a: "Los pedidos se reciben de lunes a viernes antes de las 10:00 PM. La entrega es cada sábado." },
    { q: "¿Cuál es el pedido mínimo?", a: "Depende de tu zona: Zona Real mínimo 2 pizzas, Jardín Real y Valle Real mínimo 1 pizza." },
    { q: "¿Aceptan pagos en efectivo?", a: "Sí, aceptamos efectivo al momento de la entrega y también transferencia bancaria anticipada." },
    { q: "¿Puedo personalizar mis pizzas?", a: "¡Claro! Escríbenos por WhatsApp y te compartimos las opciones disponibles de la semana." },
    { q: "¿Hacen pedidos para eventos?", a: "Sí, manejamos pedidos grandes con al menos 5 días de anticipación. Contáctanos para cotizar." },
  ];

  return (
    <main className="min-h-screen">
      <section className="bg-[#E63946] text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contáctanos</h1>
        <p className="text-lg opacity-90">Estamos a un mensaje de distancia 🍕</p>
      </section>

      <section className="max-w-5xl mx-auto py-14 px-4 grid md:grid-cols-3 gap-8">
        <div className="bg-white border rounded-2xl p-6 text-center shadow-sm">
          <span className="text-4xl">📱</span>
          <h3 className="font-bold text-lg mt-3 mb-2">WhatsApp</h3>
          <a href="https://wa.me/521135759862943271" target="_blank" rel="noopener noreferrer"
            className="text-[#E63946] font-semibold hover:underline">+52 1 13575986294</a>
          <p className="text-sm text-gray-500 mt-1">Respuesta en menos de 2 horas</p>
        </div>
        <div className="bg-white border rounded-2xl p-6 text-center shadow-sm">
          <span className="text-4xl">📍</span>
          <h3 className="font-bold text-lg mt-3 mb-2">Ubicación</h3>
          <p className="text-gray-700">Zapopan, Jalisco</p>
          <p className="text-sm text-gray-500 mt-1">Entrega a domicilio los sábados</p>
        </div>
        <div className="bg-white border rounded-2xl p-6 text-center shadow-sm">
          <span className="text-4xl">🕐</span>
          <h3 className="font-bold text-lg mt-3 mb-2">Horarios</h3>
          <p className="text-gray-700">Pedidos: Lun–Vie</p>
          <p className="text-sm text-gray-500 mt-1">Entregas: Sábados 12:00–6:00 PM</p>
        </div>
      </section>

      <section className="bg-gray-50 py-14 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Preguntas Frecuentes</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="bg-white rounded-xl p-5 shadow-sm group cursor-pointer">
              <summary className="font-semibold text-gray-900 list-none flex justify-between items-center">
                {f.q}
                <span className="text-[#E63946] text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-gray-600 text-sm">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="py-14 px-4 text-center">
        <a href="https://wa.me/521135759862943271?text=¡Hola!%20Tengo%20una%20pregunta%20sobre%20Pizza-Yo"
          target="_blank" rel="noopener noreferrer"
          className="inline-block bg-[#E63946] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-red-700 transition">
          Escríbenos por WhatsApp 💬
        </a>
      </section>
    </main>
  );
}

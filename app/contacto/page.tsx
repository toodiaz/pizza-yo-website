export default function ContactoPage() {
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
          <a href="https://wa.me/523321792390" target="_blank" rel="noopener noreferrer"
            className="text-[#E63946] font-semibold hover:underline">+52 33 2179 2390</a>
          <p className="text-sm text-gray-500 mt-1">Respuesta rápida</p>
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
          <p className="text-gray-700">Lun–Vie atención a clientes</p>
          <p className="text-sm text-gray-500 mt-1">Eventos con reserva previa</p>
        </div>
      </section>

      <section className="py-14 px-4 text-center">
        <a href="https://wa.me/523321792390?text=¡Hola!%20Tengo%20una%20pregunta%20sobre%20Pizza-Yo"
          target="_blank" rel="noopener noreferrer"
          className="inline-block bg-[#E63946] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-red-700 transition">
          Escríbenos por WhatsApp 💬
        </a>
      </section>
    </main>
  );
}

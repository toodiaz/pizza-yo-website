export default function NosotrosPage() {
  const valores = [
    { icon: "🔥", titulo: "Pasión", desc: "Cada pizza lleva horas de dedicación, desde la masa hasta el horno." },
    { icon: "🌿", titulo: "Ingredientes reales", desc: "Sin conservadores ni atajos. Compramos fresco cada semana." },
    { icon: "🤝", titulo: "Comunidad", desc: "Nacimos en Zapopan y crecemos gracias a nuestros vecinos." },
    { icon: "😄", titulo: "Alegría", desc: "Creemos que una buena pizza hace mejor cualquier sábado." },
  ];

  return (
    <main className="min-h-screen">
      <section className="bg-[#E63946] text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Sobre Pizza-Yo</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">De nuestra cocina a tu mesa, con amor y masa madre.</p>
      </section>

      <section className="max-w-4xl mx-auto py-14 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Nuestra Historia</h2>
        <div className="prose prose-lg mx-auto text-gray-700 text-center max-w-3xl">
          <p>
            Pizza-Yo nació en 2023 como un proyecto familiar en Zapopan. Lo que empezó como pizzas
            para amigos los sábados se convirtió en una tradición de barrio. Perfeccionamos nuestra
            masa madre durante meses, probamos decenas de combinaciones de quesos y salsas, y hoy
            entregamos pizzas artesanales que hablan por sí solas.
          </p>
          <p className="mt-4">
            No somos una cadena ni buscamos serlo. Somos un equipo pequeño que hornea con cariño
            cada fin de semana para las familias de la zona.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-14 px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Nuestros Valores</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {valores.map((v) => (
            <div key={v.titulo} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
              <span className="text-4xl">{v.icon}</span>
              <h3 className="text-lg font-bold mt-3 mb-2 text-[#E63946]">{v.titulo}</h3>
              <p className="text-sm text-gray-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-14 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
        <div className="bg-[#FFD60A] rounded-xl p-8 text-gray-900">
          <p className="text-xl font-semibold">
            "Llevar la mejor pizza artesanal a cada hogar de Zapopan, creando momentos de felicidad
            cada sábado, con ingredientes honestos y un servicio cercano."
          </p>
        </div>
      </section>
    </main>
  );
}

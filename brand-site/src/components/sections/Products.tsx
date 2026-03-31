export function Products() {
  const items = [
    "CLASIFICACIÓN 1",
    "CLASIFICACIÓN 2",
    "CLASIFICACIÓN 3",
    "CLASIFICACIÓN 4",
    "CLASIFICACIÓN 5",
  ];

  return (
    <section id="productos" className="py-20 px-6 bg-black">
      <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">
        Productos
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{item}</h3>
            <p className="text-gray-400 text-sm">
              Descripción breve del producto o categoría.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
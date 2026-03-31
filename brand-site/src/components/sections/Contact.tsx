export default function Contact() {
  return (
    <section id="contacto" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6 text-yellow-400">
        Contáctanos
      </h2>

      <p className="text-gray-400 mb-6">
        Estamos listos para ayudarte.
      </p>

      <input
        placeholder="Tu correo"
        className="px-4 py-2 rounded-lg text-black mb-4"
      />

      <br />

      <button className="bg-orange-500 px-6 py-2 rounded-lg text-black font-semibold">
        Enviar
      </button>
    </section>
  );
}
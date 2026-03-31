import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-3xl">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Soluciones Industriales <br />
          <span className="text-yellow-400">de Alto Impacto</span>
        </motion.h1>

        <p className="text-gray-300 mb-8">
          Innovación, calidad y confianza para impulsar tu empresa al siguiente nivel.
        </p>

        <Button>Ver Productos</Button>
      </div>
    </section>
  );
}
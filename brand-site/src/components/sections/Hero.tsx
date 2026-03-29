import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scroll = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Decorative accent circles */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/30 blur-2xl pointer-events-none z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-32 pb-32">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-accent/15 text-accent border border-accent/30 text-sm font-semibold tracking-wider mb-8 uppercase backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Excelencia e Innovación
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.05] mb-8 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Impulsamos tu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-300 to-accent/80">
              Visión al Futuro
            </span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            className="text-lg md:text-xl text-white/75 mb-12 max-w-2xl mx-auto leading-relaxed text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Somos expertos en crear soluciones estratégicas que transforman
            empresas. Descubre cómo podemos ayudarte a alcanzar tus objetivos
            con innovación y dedicación.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full text-base px-8 shadow-lg shadow-primary/30"
              onClick={() => scroll("#contacto")}
            >
              Comienza tu proyecto
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-base px-8 backdrop-blur-sm"
              onClick={() => scroll("#nosotros")}
            >
              Quiénes Somos
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/50 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {[
              { value: "12+",  label: "Años de experiencia"   },
              { value: "450+", label: "Proyectos entregados"  },
              { value: "98%",  label: "Clientes satisfechos"  },
            ].map(({ value, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-accent font-bold text-lg">{value}</span>
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scroll("#nosotros")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/40 hover:text-white/80 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Desplazar hacia abajo"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  )
}
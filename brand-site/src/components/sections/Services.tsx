import { motion } from "framer-motion"
import { Layers, Zap, Code, TrendingUp, Users, Smartphone } from "lucide-react"

const services = [
  { title: "Estrategia Digital",       description: "Análisis profundo y planificación para posicionar tu marca donde tu audiencia la busca.", icon: Layers,     color: "text-blue-500",    bg: "bg-blue-500/10"    },
  { title: "Desarrollo a Medida",      description: "Plataformas web y aplicaciones robustas, escalables y orientadas a la conversión.",       icon: Code,       color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { title: "Marketing de Crecimiento", description: "Campañas multicanal para maximizar el ROI y la adquisición de clientes.",                  icon: TrendingUp, color: "text-orange-500",  bg: "bg-orange-500/10"  },
  { title: "Consultoría de Innovación",description: "Transformamos procesos internos con nuevas tecnologías y metodologías ágiles.",             icon: Zap,        color: "text-purple-500",  bg: "bg-purple-500/10"  },
  { title: "Diseño UX/UI",             description: "Experiencias de usuario intuitivas y atractivas que enamoran desde el primer clic.",       icon: Smartphone, color: "text-pink-500",    bg: "bg-pink-500/10"    },
  { title: "Capacitación Corporativa", description: "Programas de formación para empoderar a tu equipo con las habilidades del futuro.",        icon: Users,      color: "text-cyan-500",    bg: "bg-cyan-500/10"    },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Nuestros Servicios</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Soluciones Integrales</h3>
            <p className="text-muted-foreground text-lg">Diseñados para resolver los desafíos más complejos del entorno empresarial moderno.</p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-black/5 hover:shadow-xl transition-all duration-300 h-full">
                <div className={`w-14 h-14 rounded-2xl ${s.bg} ${s.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <s.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{s.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
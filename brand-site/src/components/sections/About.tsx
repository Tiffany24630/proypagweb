import { motion } from "framer-motion"
import { Target, Lightbulb, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import React from "react"

export function About() {
  const values = [
    { icon: Target,     title: "Misión", description: "Proveer soluciones integrales de la más alta calidad, impulsando el crecimiento y éxito sostenido de cada cliente." },
    { icon: Lightbulb,  title: "Visión", description: "Ser reconocidos globalmente como la agencia líder en innovación, estableciendo nuevos estándares de excelencia para 2030." },
    { icon: ShieldCheck, title: "Valores", description: "Nos regimos por la transparencia, la innovación constante y el compromiso con la excelencia en cada proyecto." },
  ]

  return (
    <section id="nosotros" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Quiénes Somos</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
              Más que una agencia, somos <span className="text-gradient">tu socio estratégico</span>
            </h3>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Con más de 10 años de experiencia, hemos perfeccionado el arte de combinar creatividad y análisis de datos para resultados reales y sostenibles.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nuestro equipo multidisciplinario está obsesionado con los resultados. No solo entregamos proyectos; construimos relaciones a largo plazo.
            </p>
          </motion.div>

          <motion.div className="relative" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img src={`${import.meta.env.BASE_URL}images/about-vision.png`} alt="Nuestra visión" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <Card className="h-full hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-4">
                    <v.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-2xl">{v.title}</CardTitle>
                </CardHeader>
                <CardContent><CardDescription className="text-base">{v.description}</CardDescription></CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
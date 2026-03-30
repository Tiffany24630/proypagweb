import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const [count, setCount] = useState(from)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return
    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)
      const ease = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(ease * (to - from) + from))
      if (progress < 1) window.requestAnimationFrame(step)
    }
    window.requestAnimationFrame(step)
  }, [isInView, from, to, duration])

  return <span ref={ref}>{count}</span>
}

export function Stats() {
  const stats = [
    { label: "Años de Experiencia",   value: 12,  suffix: "+" },
    { label: "Proyectos Entregados",  value: 450, suffix: "+" },
    { label: "Clientes Satisfechos",  value: 98,  suffix: "%" },
    { label: "Premios Ganados",       value: 25,  suffix: ""  },
  ]

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                <Counter from={0} to={stat.value} duration={2.5} />
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <div className="text-white/80 font-medium text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
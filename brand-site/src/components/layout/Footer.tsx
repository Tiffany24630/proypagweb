import { Mail, MapPin, Phone } from "lucide-react"
import { FaInstagram, FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6"

const socialLinks = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaFacebook,  href: "#", label: "Facebook"  },
  { icon: FaLinkedin,  href: "#", label: "LinkedIn"  },
  { icon: FaXTwitter,  href: "#", label: "X/Twitter" },
]

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={scrollToTop}
            >
              <div className="w-12 h-12 rounded-xl bg-white text-primary flex items-center justify-center font-display font-bold text-2xl">
                T
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">Tu Marca</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Transformando ideas en realidades excepcionales. Somos tu socio
              estratégico para llevar tu negocio al siguiente nivel con
              soluciones innovadoras y resultados medibles.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              {[
                { label: "Inicio",             href: "#inicio"   },
                { label: "Quiénes Somos",      href: "#nosotros" },
                { label: "Nuestros Servicios", href: "#servicios"},
                { label: "Contacto",           href: "#contacto" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Av. Reforma 123, Piso 5<br />Ciudad de México, CP 06600</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+52 (55) 1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>hola@tumarca.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Boletín</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Suscríbete para recibir noticias y novedades exclusivas.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Tu correo"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-accent text-white placeholder:text-white/50"
              />
              <button className="bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-accent/90 transition-colors whitespace-nowrap">
                Unirse
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Tu Marca. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
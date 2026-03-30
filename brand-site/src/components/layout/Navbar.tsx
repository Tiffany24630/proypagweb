import { useState, useEffect } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Inicio",        href: "#inicio"   },
    { name: "Quiénes Somos", href: "#nosotros" },
    { name: "Servicios",     href: "#servicios" },
    { name: "Contacto",      href: "#contacto" },
  ]

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" })
    }
  }

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "glass-nav py-4" : "bg-transparent py-6")}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("#inicio")}>
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">T</div>
            <span className={cn("font-bold text-xl transition-colors", isScrolled ? "text-foreground" : "text-foreground md:text-white")}>Tu Marca</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button key={link.name} onClick={() => scrollToSection(link.href)}
                className={cn("text-sm font-medium hover:opacity-70 transition-opacity",
                  isScrolled ? "text-foreground/80" : "text-white/90")}>
                {link.name}
              </button>
            ))}
            <Button variant={isScrolled ? "default" : "accent"} onClick={() => scrollToSection("#contacto")} className="ml-4 gap-2 rounded-full">
              Hablemos <ArrowRight className="w-4 h-4" />
            </Button>
          </nav>

          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl py-4 px-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <button key={link.name} onClick={() => scrollToSection(link.href)}
              className="text-left py-3 px-4 rounded-lg hover:bg-muted font-medium">
              {link.name}
            </button>
          ))}
          <Button className="w-full mx-4" onClick={() => scrollToSection("#contacto")}>Contactar Ahora</Button>
        </div>
      )}
    </header>
  )
}
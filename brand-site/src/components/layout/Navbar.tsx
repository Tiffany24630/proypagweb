import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const scroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-yellow-400">IVSA</h1>

        <nav className="hidden md:flex gap-8 items-center">
          <button onClick={() => scroll("#inicio")}>Inicio</button>

          <div className="relative group">
            <span className="cursor-pointer">Productos</span>

            <div className="absolute top-full left-0 mt-2 bg-black border border-white/10 rounded-xl p-4 hidden group-hover:block">
              {["CLASIFICACIÓN 1","CLASIFICACIÓN 2","CLASIFICACIÓN 3","CLASIFICACIÓN 4","CLASIFICACIÓN 5"].map((item,i)=>(
                <div key={i} className="py-1 hover:text-yellow-400 cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <button onClick={() => scroll("#contacto")}>Contacto</button>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black p-4 flex flex-col gap-4">
          <button onClick={() => scroll("#inicio")}>Inicio</button>
          <button onClick={() => scroll("#productos")}>Productos</button>
          <button onClick={() => scroll("#contacto")}>Contacto</button>
        </div>
      )}
    </header>
  );
}
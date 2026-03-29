import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import Contact from "@/components/sections/Contact";

function Safe({ children }: { children: React.ReactNode }) {
  try {
    return <>{children}</>;
  } catch (e) {
    console.error("Error en componente:", e);
    return <div>Error cargando sección</div>;
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Safe><Navbar /></Safe>

      <main className="flex flex-col gap-10 p-4">
        <Safe><Hero /></Safe>
        <Safe><About /></Safe>
        <Safe><Services /></Safe>
        <Safe><Stats /></Safe>
        <Safe><Contact /></Safe>
      </main>

      <Safe><Footer /></Safe>
    </div>
  );
}
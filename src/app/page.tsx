import Hero from "@/components/HeroSection";
import Features from "@/components/Features";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "../../data";
import Projects from "@/components/Projects";
import { CanvasRevealEffectDemo } from "@/components/CanvasRevealEffectDemo";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Features/>
        <Projects/>
        <CanvasRevealEffectDemo/>
        <Clients/>
        <Contact/>
      </div>
    </main>
  );
}

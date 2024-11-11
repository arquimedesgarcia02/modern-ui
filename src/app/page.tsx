import Hero from "@/components/HeroSection";
import Features from "@/components/Features";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "../../data";
import Projects from "@/components/Projects";
import { CanvasRevealEffectDemo } from "@/components/CanvasRevealEffectDemo";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Features/>
        <Projects/>
        <CanvasRevealEffectDemo/>
      </div>
    </main>
  );
}

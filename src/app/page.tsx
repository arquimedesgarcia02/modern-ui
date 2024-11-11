import Hero from "@/components/HeroSection";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero/>
        <Features/>
      </div>
    </main>
  );
}

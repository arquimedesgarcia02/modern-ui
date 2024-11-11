import { features } from "../../data";
import { Button } from "./ui/moving-border";

export default function Features() {
    return (
        <section id="experience" className="pt-60 pb-20 w-full">
            <h1 className="heading text-white">
                <span className="text-purple-300">Features</span>
            </h1>

            <div className="w-full mt-12 grid lg:grid-cols-6 grid-cols-1 gap-10">
                {
                    features.map((feature) => (
                        <Button
                            key={feature.id}
                            borderRadius="1rem"
                            duration={Math.floor(Math.random() * 10000) + 10000}
                            className="flex-1"
                        >
                            <div className="flex flex-col space-x-2 items-center justify-center p-10">
                                <img 
                                    src={feature.thumbnail} 
                                    alt={feature.thumbnail}
                                    className="w-16"
                                />

                                <div className="mt-2">
                                    <h1 className="text-2xl font-bold">{feature.title}</h1>
                                    <p className="mt-5 text-slate-300">{feature.featureDesc}</p>
                                </div>
                            </div>
                        </Button>
                    ))
                }
            </div>
        </section>
    );
}
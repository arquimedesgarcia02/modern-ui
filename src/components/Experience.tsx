import React from "react";
import { Button } from "./ui/moving-border.tsx";
import { features } from "../../data/index";

export default function Experience() {
    return(
        <section id="experience" className="py-20 w-full bg-black">
            <h1 className="heading text-white">
                <span className="text-purple-200">Experience</span>
            </h1>

            <div className="w-full mt-12 grid lg:grid-cols-6 grid-cols-1 gap-10">
                {
                    features.map((card) => (
                        <Button
                            key={card.id}
                            duration={Math.floor(Math.random() * 10000) + 10000}
                            borderRadius="1rem"
                            style={{
                                background: "rgb(0, 0, 0)",
                                borderRadius: `calc(1rem* 0.96)`,
                            }}
                            className="bg-black"
                        >
                            <div>
                                <img 
                                    src={card.thumbnail} 
                                    alt={card.thumbnail}
                                    className="w-16 text-center" 
                                />

                                <div>
                                    <h1>{card.title}</h1>
                                    <p>{card.featureDesc}</p>
                                </div>
                            </div>
                        </Button>
                    ))
                }
            </div>
        </section>
    );
}
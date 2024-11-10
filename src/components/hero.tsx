import React from "react";

import { FaArrowDownLong } from "react-icons/fa6";

import { Spotlight } from "./ui/Spotlight";
import { SparklesPreview } from "./SparklesPreview";
import MagicButton from "./ui/MagicButton";

export default function Hero() {
    return(
        <section id="home" className="pb-20 pt-32">
            <div>
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="pink"/>

                <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple"/>

                <Spotlight className="left-80 top-28 h-[60vh] w-[50vw]" fill="blue"/>

                <div className="w-full absolute z-50 left-0 -top-72">
                    <img 
                        src="footer-grid.svg"
                        alt="grid"
                        className="w-full h-full opacity-50"
                    />
                </div>
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <SparklesPreview title="Modern UI"/>

                    <div className="mt-9">
                        <a href="#about">
                            <MagicButton 
                                title="Show more"
                                position="right"
                                icon={<FaArrowDownLong />}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

import React from "react";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { clients } from "../../data";

export default function Clients () {
    return (
        <section id="clients" className="pt-60 pb-20 w-full">
            <h1 className="heading text-white">
                Kind words from <span className="text-purple-400">satisfied Clients</span>
            </h1>

            <div className="flex flex-col items-center max-lg:mt-10">
                <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards 
                        items={clients}
                        direction="left"
                        speed="slow"
                        className="hover:cursor-pointer"
                    />
                </div>
            </div>
        </section>
    );
}
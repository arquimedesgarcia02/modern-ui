import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { projects } from "../../data";

export default function Projects () {
    return (
        <section id="projects" className="pt-60 pb-20 w-full">
            <div>
                <h1 className="heading text-white">
                    <span className="text-purple-400">Projects</span>
                </h1>

                <p className="text-slate-300 text-center mt-4 text-lg">Unleash Your Creativity: Build Stunning Projects with Modern UI.</p>
            </div>

            <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
                {
                    projects.map((project) => (
                        <div
                            key={project.id}
                            className="flex items-center justify-center sm:w-96 w-[80vw]"
                        >
                            <PinContainer
                                title="Aceternity"
                                href="https://ui.aceternity.com"
                            >
                                <div className="flex basis-full flex-col tracking-tight sm:basis-1/2 w-[20rem] h-[20rem]">
                                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-slate-100">
                                        {project.title}
                                    </h3>

                                    <div>
                                        <span className="text-slate-500">
                                            {project.description}
                                        </span>
                                    </div>

                                    <div className="flex flex-1 w-full rounded-lg mt-4">
                                        <img 
                                            src={project.img} 
                                            alt="project img" 
                                        />
                                    </div>
                                </div>
                            </PinContainer>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}
import React from "react";
import MagicButton from "./ui/MagicButton";
import { socialIcons } from "../../data";
import { Tooltip } from "./ToolTip";
import { FaLocationCrosshairs } from "react-icons/fa6";

export default function Contact() {
    return (
        <footer className="pt-48 pb-10 w-full" id="contact">
            <div className="flex flex-col items-center">
                <h1 className="heading text-white lg:max-w-[45vw]">
                    Build, Customize, and Inspire with <span className="text-purple-400">Modern UI</span>.
                </h1>

                <p className="text-slate-300 md:mt-10 my-5 text-center text-lg">
                    Empowering Creativity, One Interface at a Time. Ready to take  digital presence to the next level?
                </p>

                <Tooltip/>
                
                <MagicButton
                    title="Let's get in touch"
                    position="right"
                    icon={<FaLocationCrosshairs/>}
                />
            </div>

            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-white text-sm md:font-normal font-light">
                    Copyright © 2024 Modern UI
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {
                        socialIcons.map((info) => (
                            <div
                                key={info.id}
                            >
                                <img src={info.img} alt="icons" width={20} height={20}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </footer>
    );
}
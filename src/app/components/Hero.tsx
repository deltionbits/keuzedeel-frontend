import React from "react";
import Image from "next/image";

const heroInfo = [
    {
        title: "Boxed Games",
        description: "Alsof je \'m voor het eerst weer unboxed."
    }
];

const Hero = () => {
    return (
        <div className="relative bg-cover bg-center h-64 rounded-xl shadow-lg mb-6">
            <Image 
                src="/hero.webp" 
                alt="Hero background"
                fill
                priority
                sizes="(max-width: 850px) 100vw, 80vw"
                className="rounded-xl object-cover"
            />
            <div className="backdrop-blur-sm absolute inset-0 bg-black/50 rounded-xl"></div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center p-4">
                <Image 
                    src="/box.svg" 
                    width={80} 
                    height={80} 
                    alt="Boxed logo" 
                    className="h-20 w-20 mr-2 filter invert" 
                />
                <h1 className="text-4xl font-bold mb-2">{heroInfo[0].title}</h1>
                <p className="text-lg">{heroInfo[0].description}</p>
            </div>
        </div>
    );
};

export default Hero;
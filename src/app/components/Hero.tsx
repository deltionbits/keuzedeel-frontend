import React from "react";

const Hero = () => {
    return (
        <div className="relative bg-cover bg-center h-64 rounded-xl shadow-lg mb-6" style={{ backdropFilter: 'blur(10px)', backgroundImage: "url('/hero.png')" }}>
            <div className="backdrop-blur-sm absolute inset-0 bg-black/50 rounded-xl"></div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center p-4">
            <img src="box.svg" alt="Boxed logo" className="h-20 w-20 mr-2 filter invert" />
                <h1 className="text-4xl font-bold mb-2">Boxed Games</h1>
                
                <p className="text-lg">Alsof je 'm voor het eerst weer unboxed.</p>
            </div>
        </div>
    );
};

export default Hero;
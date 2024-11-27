import React from "react";
import Image from "next/image";

const aboutContent = {
    title: "Boxed Games.",
    welcomeText: "Waar passie voor gaming samenkomt met de beste selectie!",
    mission: {
        title: "Onze Missie",
        description: "Bij Boxed Games geloven we dat gaming meer is dan alleen entertainment. Het is een manier om verhalen te beleven, uitdagingen aan te gaan en verbinding te maken. Onze missie is om gamers van alle leeftijden en achtergronden de beste gaming-ervaring te bieden door een zorgvuldig gecureerde collectie van de nieuwste en meest iconische games."
    },
    vision: {
        title: "Onze Visie",
        description: "We zien een toekomst waarin gaming grenzen vervaagt, gemeenschappen verbindt en nieuwe werelden ontsluit. Boxed Games streeft ernaar om niet alleen een winkel te zijn, maar een thuishaven voor gamers, waar passie, kwaliteit en persoonlijke service centraal staan."
    }
};

const About = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <Image src="box.svg" width={350} height={350} alt="" className="pt-5 pb-5 filter invert drop-shadow-2xl" />
                <h1 className="text-4xl font-bold text-red-500 mb-4">{aboutContent.title}</h1>
                <p className="text-lg text-gray-600 mb-8">
                    {aboutContent.welcomeText}
                </p>
                <div className="space-y-4 max-w-[50vw]">
                    <div className="bg-white p-6">
                        <h2 className="text-2xl font-semibold text-red-500 text-3xl text-center">{aboutContent.mission.title}</h2>
                        <p className="text-gray-600 mt-2 text-center text-xl">
                            {aboutContent.mission.description}
                        </p>
                    </div>
                    <div className="bg-white p-6">
                        <h2 className="text-2xl font-semibold text-red-500 text-3xl text-center">{aboutContent.vision.title}</h2>
                        <p className="text-gray-600 mt-2 text-center text-xl">
                            {aboutContent.vision.description}
                        </p>
                    </div>
                </div>
                <div className="pt-[5vh]">
                    <h2 className="text-2xl font-semibold text-gray-800 mt-8 text-center">Ons Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-800">Aymen Ebrahim</h3>
                            <p className="text-gray-600 mt-2">Oprichter & CEO</p>
                            <p className="text-red-500 mt-2 hover:text-red-700">Contact</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-800">Aymen Ebrahim</h3>
                            <p className="text-gray-600 mt-2">Marketing Directeur</p>
                            <p className="text-red-500 mt-2 hover:text-red-700">Contact</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold text-gray-800">Aymen Ebrahim</h3>
                            <p className="text-gray-600 mt-2">Inkoop & Merchandise Manager</p>
                            <p className="text-red-500 mt-2 hover:text-red-700">Contact</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
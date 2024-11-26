import React from "react";
import Link from "next/link";
import Image from "next/image";

const gameInfo = [
    {
        title: "God of War",
        description: "In God of War besturen spelers Kratos, een Spartaanse krijger die door de Griekse goden is gestuurd om Ares, de god van de oorlog, te doden. Naarmate het verhaal vordert, blijkt dat Kratos de voormalige dienaar van Ares is, die was misleid om zijn eigen familie te vermoorden en wordt achtervolgd door vreselijke nachtmerries."
    }
];


const Homepage = () => {
    return (
        <>
            <main className="flex-grow container mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 relative aspect-video">
                    <Image
                        src="/gow.jpg"
                        alt="Game cover or main visual"
                        className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
                    />
                </div>
                <div className="md:col-span-1 flex flex-col justify-center items-center text-center">
                    <h1 className="text-3xl font-bold text-red-500 mb-4">Topics</h1>
                    <p className="font-semibold text-gray-600 hover:text-red-400 hover:underline transition-colors duration-200 ease-in-out">
                        God of War
                    </p>
                    <p className="font-semibold text-gray-600 hover:text-red-400 hover:underline transition-colors duration-200 ease-in-out">
                        Game 2
                    </p>
                    <p className="font-semibold text-gray-600 hover:text-red-400 hover:underline transition-colors duration-200 ease-in-out">
                        Nog een game
                    </p>
                    <p className="font-semibold text-gray-600 hover:text-red-400 hover:underline transition-colors duration-200 ease-in-out">
                        Coole game
                    </p>
                    <p className="font-semibold text-gray-600 hover:text-red-400 hover:underline transition-colors duration-200 ease-in-out">
                        Releases
                    </p>
                </div>
            </main>

            <div className="flex-grow container mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
                <div className="flex flex-col col-span-2">
                    <div className="flex items-center">
                        <Image src="chev-right.svg" alt="" className="h-6 w-6 mr-2" />
                        <h1 className="-m-2 font-bold text-xl">Game informatie: {gameInfo[0].title}</h1>
                    </div>
                    <p className="m-1 pl-3">
                        {gameInfo[0].description}
                    </p>
                </div>

                <div className="col-span-1 flex flex-col justify-center items-center text-center">
                    <h1 className="text-2xl font-bold mb-4">Externe links</h1>
                    <ul className="list-disc list-inside list-none">
                        <li><Link href="#" className="text-blue-500">Game  </Link></li>
                        <li><Link href="#" className="text-blue-500">link 2</Link></li>
                        <li><Link href="#" className="text-blue-500">link 3</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Homepage;
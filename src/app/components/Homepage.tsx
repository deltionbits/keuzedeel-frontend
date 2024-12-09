import React from "react";
import Link from "next/link";
import Image from "next/image";

const gameInfo = [
    {
        title: "League of Legends",
        description: "In League of Legends speel je een zogenaamde 'champion' die je moet levelen en uitrusten met items. Het doel van het spel is om de basis van de tegenstander te vernietigen. Dit doe je door de basis te verdedigen en de basis van de tegenstander aan te vallen. Het spel is gratis te spelen en wordt regelmatig geüpdatet met nieuwe champions en items."
    }
];


const Homepage = () => {
    return (
        <>
            <main className="flex-grow container mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 relative aspect-video">
                    <Image
                        src="/lol.webp"
                        width={1200} height={1200}
                        alt="Game cover or main visual"
                        className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
                        priority
                    />
                </div>
                <div className="md:col-span-1 flex flex-col justify-center items-center text-center">
                    <div className="flex flex-col space-y-4">
                        <div className="grid grid-cols-1 grid-rows-1 gap-4">
                            <div>
                            <Image
                            src="/r6s.webp"
                            width={1200} height={1200}
                            alt="Game cover or main visual"
                            className="rounded-xl shadow-lg"
                            priority
                        />
                            </div>
                            <div className="row-start-2">
                            <Image
                            src="/valo.webp"
                            width={1200} height={1200}
                            alt="Game cover or main visual"
                            className="rounded-xl shadow-lg"
                            priority
                        />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="flex-grow container mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
                <div className="flex flex-col col-span-2">
                    <div className="flex items-center">
                        <Image src="chev-right.svg" alt="" className="h-6 w-6 mr-2" width={1200} height={12} priority />
                        <h1 className="-m-2 font-bold text-xl">Game informatie: {gameInfo[0].title}</h1>
                    </div>
                    <p className="m-1 pl-3">
                        {gameInfo[0].description}
                    </p>
                </div>

                <div className="col-span-1 flex flex-col justify-center items-center text-center">
                    <h1 className="text-2xl font-bold mb-4">Externe links</h1>
                    <ul className="list-disc list-inside list-none">
                        <li><Link href="https://www.ign.com/wikis" target="_blank" className="text-blue-600">IGN Guides</Link></li>
                        <li><Link href="https://www.metacritic.com/game/" target="_blank" className="text-blue-600">MetaCritic</Link></li>
                        <li><Link href="https://www.gamespot.com/" target="_blank" className="text-blue-600">Gamespot</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Homepage;
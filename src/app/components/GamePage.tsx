import React from "react";
import Image from "next/image";

const games = [
    { id: 1, title: "League of Legends", image: "/lol.jpg" },
    { id: 2, title: "Valorant", image: "/valo.jpg" },
    { id: 3, title: "Rainbow 6: Siege", image: "/r6s.jpg" },
];

const GamePage = () => {
    return (
        <>
            <div className="min-h-[79vh] bg-white py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-gray-900 mb-4">Game Page</h1>
                        <p className="text-xl text-gray-600">Ontdek onze game selectie!</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {games.map((game) => (
                            <div
                                key={game.id}
                                className="bg-white rounded-xl shadow-xl shadow-red-300/20 overflow-hidden transition-transform hover:scale-105"
                            >
                                <div className="p-4">
                                    <Image
                                        width={1200} height={1200}
                                        src={game.image}
                                        alt={game.title}
                                        className="w-full h-80 object-cover rounded-lg"
                                    />
                                    <h3 className="text-xl font-semibold text-gray-800 mt-4 text-center">
                                        {game.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default GamePage;
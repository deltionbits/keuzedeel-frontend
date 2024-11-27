import React from "react";
import Link from "next/link";
import Image from "next/image";

const games = [
    { 
      id: 1, 
      title: "League of Legends", 
      image: "/lol.jpg", 
      type: "Game",
      description: "Populair multiplayer online battle arena spel",
      ArticleType: "Game Informatie",
      UpdateText: "Nieuwe kampioen en balanswijzigingen af en toe!",
      fullDetails: "League of Legends is een competitieve multiplayer online battle arena (MOBA) waar teams van kampioenen strijden om de basis van de tegenstander te vernietigen. Het spel bevat veel verschillende kampioenen met unieke vaardigheden en wordt vaak geüpdatet met nieuwe content.",
      Price: "Free to play"
    },
    { 
      id: 2, 
      title: "Valorant", 
      image: "/valo.jpg", 
      type: "Game",
      description: "Populair tactisch first-person shooter spel",
      ArticleType: "Release",
      UpdateText: "2025-12-31",
      fullDetails: "Valorant is een tactische first-person shooter (FPS) die teamgebaseerd is, waarbij elke speler de rol van een agent met unieke vaardigheden op zich neemt. Het doel is om te strijden tegen de tegenstander in verschillende spelmodi en strategisch te winnen.",
      Price: "Free to play"
    },
    { 
      id: 3, 
      title: "Rainbow Six Siege", 
      image: "/r6s.jpg", 
      type: "Game",
      description: "Tactisch team-gebaseerd schietspel",
      ArticleType: "Update",
      UpdateText: "Nieuwe operators en balanswijzigingen!",
      fullDetails: "Rainbow Six Siege is een tactische first-person shooter waarin teams van operators strijden tegen elkaar. Het draait om het gebruik van strategische planning en communicatie, waarbij elk teamlid een unieke rol en speciale uitrusting heeft.",
      Price: "Free to play"
    },
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
                            <Link
                                href={`/games/${game.id}`}
                                key={game.id}
                                className="block"
                            >
                                <div
                                    className="bg-white rounded-xl shadow-xl shadow-red-300/20 overflow-hidden transition-transform hover:scale-105 cursor-pointer"
                                >
                                    <div className="p-4">
                                        <Image
                                            width={1200}
                                            height={1200}
                                            src={game.image}
                                            alt={game.title}
                                            className="w-full h-80 object-cover rounded-lg"
                                        />
                                        <h3 className="text-2xl font-semibold text-gray-800 mt-4 text-center">
                                            {game.title}
                                        </h3>
                                        <h4 className="text-xl font-bold text-red-500 text-center">
                                            {game.type}
                                        </h4>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default GamePage;
export { games };
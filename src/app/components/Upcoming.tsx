import React from "react";
import Image from "next/image";
import Link from "next/link";

const games = [
  { 
    id: 1, 
    title: "Valorant", 
    image: "/valo.jpg", 
    type: "Update",
    description: "Tactical shooter with unique agent abilities",
    ArticleType: "Update",
    UpdateText: "New agent and map!",
    fullDetails: "Valorant is a team-based tactical shooter where players choose unique agents with special abilities. Developed by Riot Games, it combines precise gunplay with strategic character skills."
  },
  { 
    id: 2, 
    title: "God of War: Ragnarok 2", 
    image: "/gow.jpg", 
    type: "Release",
    description: "Epic Norse mythology action-adventure",
    ArticleType: "Release",
    ReleaseDate: "2025-12-31",
    fullDetails: "God of War: Ragnarok continues the story of Kratos and Atreus in the Norse mythology setting. Players explore stunning landscapes and engage in intense combat."
  },
  { 
    id: 3, 
    title: "League of Legends", 
    image: "/lol.jpg", 
    type: "Update",
    description: "Popular multiplayer online battle arena game",
    ArticleType: "Update",
    UpdateText: "New champion and balance changes!",
    fullDetails: "League of Legends is a competitive multiplayer online battle arena (MOBA) where teams of champions battle to destroy the opponent's base."
  },
];

const Upcoming = () => {
  return (
    <>
      <div className="min-h-[79vh] bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Upcoming games</h1>
            <p className="text-xl text-gray-600">Geniet van ons aankomend aanbod en/of game updates!</p>
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
                    <h4 className="text-xl font-bold text-gray-600 text-center">
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

export default Upcoming;
export { games };
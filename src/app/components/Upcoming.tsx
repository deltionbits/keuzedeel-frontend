import React from "react";
import Image from "next/image";
import Link from "next/link";

const games = [
  { 
    id: 1, 
    title: "Valorant", 
    image: "/valo.jpg", 
    type: "Update",
    description: "Tactische shooter met unieke agent vaardigheden",
    ArticleType: "Update",
    UpdateText: "Nieuwe agent en map!",
    fullDetails: "Valorant is een op team gebaseerde tactische shooter waar spelers unieke agenten kiezen met speciale vaardigheden. Ontwikkeld door Riot Games, combineert het precieze schietwerk met strategische karaktervaardigheden."
  },
  { 
    id: 2, 
    title: "God of War: Ragnarok 2", 
    image: "/gow.jpg", 
    type: "Release",
    description: "Episch actie-avontuur in de Noorse mythologie",
    ArticleType: "Release",
    UpdateText: "2025-12-31",
    fullDetails: "God of War: Ragnarok vervolgt het verhaal van Kratos en Atreus in de setting van de Noorse mythologie. Spelers verkennen adembenemende landschappen en gaan de strijd aan in intensieve gevechten."
  },
  { 
    id: 3, 
    title: "League of Legends", 
    image: "/lol.jpg", 
    type: "Update",
    description: "Populair multiplayer online battle arena spel",
    ArticleType: "Update",
    UpdateText: "Nieuwe kampioen en balanswijzigingen!",
    fullDetails: "League of Legends is een competitieve multiplayer online battle arena (MOBA) waar teams van kampioenen strijden om de basis van de tegenstander te vernietigen."
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
                href={`/upcoming/${game.id}`} 
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

export default Upcoming;
export { games };
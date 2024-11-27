"use client";

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

import { games } from './GamePage'

export default function GameDetails() {
    const pathname = usePathname();
    const router = useRouter();
    const id = parseInt(pathname.split('/')[2]);

    const game = games.find((g) => g.id === id);

    if (!game) {
        return (
            <div className="min-h-[75vh]">
                <div className="pt-[20vh] text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Game niet gevonden</h1>
                    <a href="/games" className="text-blue-600 hover:underline">
                        Terug naar Games
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="flex place-content-center">
            <div className="min-h-[75vh] max-w-[80vw]">
                <div className="pt-[20vh] grid md:grid-cols-2 gap-8">
                    <div>
                        <img
                            src={game.image}
                            alt={game.title}
                            className="w-full h-full object-cover rounded-xl shadow-lg"
                        />
                    </div>

                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">{game.title}</h1>
                        <h2 className="text-2xl text-red-500 mb-4">{game.type}</h2>
                        <p className="text-lg text-gray-600 mb-6">{game.description}</p>
                        <div className="bg-gray-100 p-6 rounded-xl">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Game details</h3>
                            <p className="text-gray-700">{game.fullDetails}</p>
                        </div>
                        <div className="mt-5 bg-gray-100 p-6 rounded-xl">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">{game.ArticleType}</h3>
                            <p className="text-gray-700">{game.UpdateText}</p>
                            <p className='text-gray-700 pt-5'>Dit spel is <span className='text-red-500 text-bold'>{game.Price}</span></p>
                        </div>
                        <div>
                            <Link href="/games" className="block mt-6">
                                <p className="text-red-500 text-xl hover:underline font-bold">Back to Games</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
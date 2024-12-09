import React from "react";
import Image from "next/image";

const CartVars = [
    {
        Amount: "4",
        Total: "€ 109,99",
    },
    { id: 1, title: "League of Legends", aantal: "1", prijs: "€ 49,99", totaal: "€ 49,99", image: "/lol.webp", type: "Game" },
    { id: 2, title: "Playstation 5", aantal: "2", prijs: "€ 10,00", totaal: "€ 20,00", image: "/ps5.webp", type: "Console" },
    { id: 3, title: "DualSense 4 Controller", aantal: "1", prijs: "€ 15,00", totaal: "€ 15,00", image: "/dualsense.webp", type: "Controller" },
    { id: 4, title: "God of War", aantal: "1", prijs: "€ 35,00", totaal: "€ 35,00", image: "/gow.webp", type: "Game" },
];

const Cart = () => {
    return (
        <>
            <div className="min-h-[79vh] bg-white py-12 px-4">
                <div className="max-w-7xl mx-auto pb-10">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Winkelwagen ({CartVars[0].Amount} items)</h1>
                </div>

                <div className="grid grid-cols-5 gap-y-4 max-w-[60vw] mx-auto">
                    <div className="col-span-2 font-bold border-r border-b border-red-500 text-center flex items-center justify-center text-xl">Product</div>
                    <div className="col-start-3 font-bold border-b border-r border-red-500 text-center flex items-center justify-center text-xl">Aantal</div>
                    <div className="col-start-4 font-bold border-b border-r border-red-500 text-center flex items-center justify-center text-xl">Prijs</div>
                    <div className="col-start-5 font-bold border-b border-red-500 text-center flex items-center justify-center text-xl">Totaal</div>

                    {CartVars.slice(1).map((cartItem) => (
                        <React.Fragment key={cartItem.id}>
                            <div className="col-span-2 flex items-center">
                                {cartItem.image ? (
                                    <Image
                                        src={cartItem.image}
                                        width={150}
                                        height={150}
                                        alt={cartItem.title || "Game Foto"}
                                        className="mr-4"
                                    />
                                ) : (
                                    <div className="bg-gray-300 flex items-center justify-center text-center mr-4">No Image</div>
                                )}
                                <div>
                                    <div className="font-bold">{cartItem.title || "Untitled"}</div>
                                    <div className="italic text-sm">{cartItem.type || "Unknown Type"}</div>
                                </div>
                            </div>

                            <div className="col-start-3 text-center flex items-center justify-center">
                                {cartItem.aantal}
                            </div>

                            <div className="col-start-4 text-center flex items-center justify-center">
                                {cartItem.prijs}
                            </div>

                            <div className="col-start-5 text-center flex items-center justify-center">
                                {cartItem.totaal}
                            </div>
                        </React.Fragment>
                    ))}

                    <div className="col-span-4 text-right pr-10 mt-4 text-xl">
                        Totaal: <span className="font-bold">{CartVars[0].Total}</span>
                    </div>
                    <div className="text-right mt-4">
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
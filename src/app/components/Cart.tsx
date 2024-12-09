import React from "react";
import Image from "next/image";

const CartVars = [
    {
        Amount: "4",
        Total: "€ 109,99",
        AantalValues: ["1", "2", "1", "1"],
        PrijsValues: ["€ 49,99", "€ 10,00", "€ 15,00", "€ 35,00"],
        TotaalValues: ["€ 49,99", "€ 10,00", "€ 15,00", "€ 35,00"]
    },
    { id: 1, title: "League of Legends", image: "/lol.webp", type: "Game" },
    { id: 2, title: "Playstation 5", image: "/ps5.webp", type: "Console" },
    { id: 3, title: "DualSense 4 Controller", image: "/dualsense.webp", type: "Controller" },
    { id: 4, title: "God of War", image: "/gow.webp", type: "Game" },
];

const Cart = () => {
    return (
        <>
            <div className="min-h-[79vh] bg-white py-12 px-4">
                <div className="max-w-7xl mx-auto pb-10">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Winkelwagen ({CartVars[0].Amount} items)</h1>
                    <p className="text-xl text-gray-600"></p>
                </div>

                <div className="grid grid-cols-5 grid-rows-7 gap-y-4 max-w-[60vw] mx-auto">
                    <div className="col-span-2 font-bold border-r border-b border-red-500 text-center flex items-center justify-center text-xl">Product</div>
                    {CartVars.slice(1, 5).map((cartItem, index) => (
                        <div key={cartItem.id} className={`col-span-2 col-start-1 row-start-${index + 2}`}>
                            <div className="grid grid-cols-2 grid-rows-2">
                                {cartItem.image ? (
                                    <Image
                                        src={cartItem.image}
                                        width={1200}
                                        height={1200}
                                        alt={cartItem.title || "Game Foto"}
                                        className="row-span-2"
                                    />
                                ) : (
                                    <div className="row-span-2 bg-gray-300 flex items-center justify-center text-center">No Image Available</div>
                                )}
                                <div className="pl-3 font-bold">{cartItem.title || "Untitled"}</div>
                                <div className="pl-3 col-start-2 row-start-2 italic">{cartItem.type || "Unknown Type"}</div>
                            </div>
                        </div>
                    ))}
                    <div className="col-span-3 col-start-1 row-start-6"></div>
                    <div className="col-start-3 row-start-1 font-bold border-b border-r border-red-500 text-center flex items-center justify-center text-xl">Aantal</div>
                    {CartVars[0]?.AantalValues?.map((amount, index) => (
                        <div key={index} className={`col-start-3 row-start-${index + 2} text-center flex items-center justify-center`}>
                            {amount}
                        </div>
                    ))}
                    <div className="col-start-4 row-start-1 font-bold border-b border-r border-red-500 text-center flex items-center justify-center text-xl">Prijs</div>
                    {CartVars[0]?.PrijsValues?.map((prijs, index) => (
                        <div key={index} className={`col-start-4 row-start-${index + 2} text-center flex items-center justify-center`}>
                            {prijs}
                        </div>
                    ))}
                    <div className="col-start-5 row-start-1 font-bold border-b border-red-500 text-center flex items-center justify-center text-xl">Totaal</div>
                    {CartVars[0]?.TotaalValues?.map((totaal, index) => (
                        <div key={index} className={`col-start-5 row-start-${index + 2} text-center flex items-center justify-center`}>
                            {totaal}
                        </div>
                    ))}
                    <div className="col-span-2 col-start-4 row-start-6">
                        <p className="text-right mr-10 text-xl">Totaal: <span className="font-bold">{CartVars[0].Total}</span></p>
                    </div>
                    <div className="text-right mr-10 col-start-5">
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

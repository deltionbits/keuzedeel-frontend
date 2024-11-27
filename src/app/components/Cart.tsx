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
    { id: 1, title: "League of Legends", image: "/lol.jpg", type: "Game" },
    { id: 2, title: "Playstation 5", image: "/ps5.jpg", type: "Console" },
    { id: 3, title: "DualSense 4 Controller", image: "/dualsense.jpg", type: "Controller" },
    { id: 4, title: "God of War", image: "/gow.jpg", type: "Game" },
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
                    <div className="col-span-2 col-start-1 row-start-2">
                        <div className="grid grid-cols-2 grid-rows-2">
                            <Image src={CartVars[1].image} width={1200} height={1200} alt="Game Foto" className="row-span-2" />
                            <div className="pl-3 font-bold">{CartVars[1].title}</div>
                            <div className="pl-3 col-start-2 row-start-2 italic">{CartVars[1].type}</div>
                        </div>
                    </div>
                    <div className="col-span-2 col-start-1 row-start-3">
                        <div className="grid grid-cols-2 grid-rows-2">
                            <Image src={CartVars[2].image} width={250} height={300} alt="Game Foto" className="row-span-2" />
                            <div className="pl-3 font-bold">{CartVars[2].title}</div>
                            <div className="pl-3 col-start-2 row-start-2 italic">{CartVars[2].type}</div>
                        </div>
                    </div>
                    <div className="col-span-2 col-start-1 row-start-4">
                        <div className="grid grid-cols-2 grid-rows-2">
                            <Image src={CartVars[3].image} width={200} height={300} alt="Game Foto" className="row-span-2" />
                            <div className="pl-3 font-bold">{CartVars[3].title}</div>
                            <div className="pl-3 col-start-2 row-start-2 italic">{CartVars[3].type}</div>
                        </div>
                    </div>
                    <div className="col-span-2 col-start-1 row-start-5">
                        <div className="grid grid-cols-2 grid-rows-2">
                            <Image src={CartVars[4].image} width={1200} height={1200} alt="Game Foto" className="row-span-2" />
                            <div className="pl-3 font-bold">{CartVars[4].title}</div>
                            <div className="pl-3 col-start-2 row-start-2 italic">{CartVars[4].type}</div>
                        </div>
                    </div>
                    <div className="col-span-3 col-start-1 row-start-6"></div>
                    <div className="col-start-3 row-start-1 font-bold border-b border-r border-red-500 text-center flex items-center justify-center text-xl">Aantal</div>
                    <div className="col-start-3 row-start-2 text-center flex items-center justify-center">{CartVars[0].AantalValues[0]}</div>
                    <div className="col-start-3 row-start-3 text-center flex items-center justify-center">{CartVars[0].AantalValues[1]}</div>
                    <div className="col-start-3 row-start-4 text-center flex items-center justify-center">{CartVars[0].AantalValues[2]}</div>
                    <div className="col-start-3 row-start-5 text-center flex items-center justify-center">{CartVars[0].AantalValues[3]}</div>
                    <div className="col-start-4 row-start-1 font-bold border-b border-r border-red-500 text-center flex items-center justify-center text-xl">Prijs</div>
                    <div className="col-start-4 row-start-2 text-center flex items-center justify-center">{CartVars[0].PrijsValues[0]}</div>
                    <div className="col-start-4 row-start-3 text-center flex items-center justify-center">{CartVars[0].PrijsValues[1]}</div>
                    <div className="col-start-4 row-start-4 text-center flex items-center justify-center">{CartVars[0].PrijsValues[2]}</div>
                    <div className="col-start-4 row-start-5 text-center flex items-center justify-center">{CartVars[0].PrijsValues[3]}</div>
                    <div className="col-start-5 row-start-1 font-bold border-b border-red-500 text-center flex items-center justify-center text-xl">Totaal</div>
                    <div className="col-start-5 row-start-2 text-center flex items-center justify-center">{CartVars[0].TotaalValues[0]}</div>
                    <div className="col-start-5 row-start-3 text-center flex items-center justify-center">{CartVars[0].TotaalValues[1]}</div>
                    <div className="col-start-5 row-start-4 text-center flex items-center justify-center">{CartVars[0].TotaalValues[2]}</div>
                    <div className="col-start-5 row-start-5 text-center flex items-center justify-center">{CartVars[0].TotaalValues[3]}</div>
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
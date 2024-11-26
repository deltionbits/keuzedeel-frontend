import React from "react";
import Image from "next/image";

const CartVars = [
    {
        Amount: "4",
        Total: "€ 109,99"
    }
];

const Cart = () => {
    return (
        <>
            <div className="min-h-[79vh] bg-white py-12 px-4">
                <div className="max-w-7xl mx-auto pb-10">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Cart ({CartVars[0].Amount} items)</h1>
                    <p className="text-xl text-gray-600"></p>
                </div>


                <div className="grid grid-cols-5 grid-rows-6 gap-y-4 max-w-[60vw] mx-auto">
                    <div className="col-span-2 font-bold border-r border-b border-red-500 text-center flex items-center justify-center text-xl">Product</div>
                    <div className="col-span-2 col-start-1 row-start-2">
                        <div className="grid grid-cols-2 grid-rows-2">
                            <Image src="gow.jpg" width={12} height={12} alt="Game Foto" className="row-span-2" />
                            <div className="pl-3 font-bold">God of War</div>
                            <div className="pl-3 col-start-2 row-start-2 italic">Game</div>
                        </div>
                    </div>
                    <div className="col-span-2 col-start-1 row-start-3">
                    <div className="grid grid-cols-2 grid-rows-2">
                            <Image src="gow.jpg" width={12} height={12} alt="Game Foto" className="row-span-2" />
                            <div className="pl-3 font-bold">God of War</div>
                            <div className="pl-3 col-start-2 row-start-2 italic">Game</div>
                        </div>
                    </div>
                    <div className="col-span-2 col-start-1 row-start-4">
                    <div className="grid grid-cols-2 grid-rows-2">
                            <Image src="gow.jpg" width={12} height={12} alt="Game Foto" className="row-span-2" />
                            <div className="pl-3 font-bold">God of War</div>
                            <div className="pl-3 col-start-2 row-start-2 italic">Game</div>
                        </div>
                    </div>
                    <div className="col-span-2 col-start-1 row-start-5">
                    <div className="grid grid-cols-2 grid-rows-2">
                            <Image src="gow.jpg" width={12} height={12} alt="Game Foto" className="row-span-2" />
                            <div className="pl-3 font-bold">God of War</div>
                            <div className="pl-3 col-start-2 row-start-2 italic">Game</div>
                        </div>
                    </div>
                    <div className="col-span-3 col-start-1 row-start-6"></div>
                    <div className="col-start-3 row-start-1 font-bold border-b border-r border-red-500 text-center flex items-center justify-center text-xl">Aantal</div>
                    <div className="col-start-3 row-start-2 text-center flex items-center justify-center">1</div>
                    <div className="col-start-3 row-start-3 text-center flex items-center justify-center">2</div>
                    <div className="col-start-3 row-start-4 text-center flex items-center justify-center">1</div>
                    <div className="col-start-3 row-start-5 text-center flex items-center justify-center">1</div>
                    <div className="col-start-4 row-start-1 font-bold border-b border-r border-red-500 text-center flex items-center justify-center text-xl">Prijs</div>
                    <div className="col-start-4 row-start-2 text-center flex items-center justify-center">€ 49,99</div>
                    <div className="col-start-4 row-start-3 text-center flex items-center justify-center">€ 10,00</div>
                    <div className="col-start-4 row-start-4 text-center flex items-center justify-center">€ 15,00</div>
                    <div className="col-start-4 row-start-5 text-center flex items-center justify-center">€ 35,00</div>
                    <div className="col-start-5 row-start-1 font-bold border-b border-red-500 text-center flex items-center justify-center text-xl">Totaal</div>
                    <div className="col-start-5 row-start-2 text-center flex items-center justify-center">€ 49,99</div>
                    <div className="col-start-5 row-start-3 text-center flex items-center justify-center">€ 10,00</div>
                    <div className="col-start-5 row-start-4 text-center flex items-center justify-center">€ 15,00</div>
                    <div className="col-start-5 row-start-5 text-center flex items-center justify-center">€ 35,00</div>
                    <div className="col-span-2 col-start-4 row-start-6">
                        <p className="text-right mr-10 text-xl">Totaal: <span className="font-bold">{CartVars[0].Total}</span></p>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Cart;
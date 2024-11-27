import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
            <>
            <div className="min-h-[78vh]">
                <div className="flex flex-col items-center justify-center py-12">
                    <h1 className="text-4xl font-bold mb-4">Vragen?</h1>
                    <p className="text-xl text-gray-600">Stuur ons een mail!</p>
                    <form className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    Naam
                                </label>
                                <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Jan Pieterszoon" />
                            </div>
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                                    Email
                                </label>
                                <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="email@voorbeeld.com" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                                    Bericht
                                </label>
                                <textarea className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" rows="5" placeholder="Je bericht..."></textarea>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Verzenden
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            </>
    );
};

export default Footer;
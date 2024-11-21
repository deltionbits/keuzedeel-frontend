import React from "react";

const Footer = () => {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center pt-20 pb-5 -m-5">
            <div className="grid grid-cols-4 grid-rows-1 gap-4 w-full">
                <a href="/">
                    <div className="col-span-1 flex justify-center items-center">
                        <img src="/box.svg" alt="Boxed logo" className="h-12" />
                        <p className="font-bold pl-2">Boxed Games</p>
                    </div>
                </a>
                <div className="flex flex-col items-center">
                    <a href="#" className="font-semibold py-1 px-1 rounded hover:text-red-400 transition-colors duration-200 ease-in-out">Home</a>
                    <a href="#" className="font-semibold py-1 px-1 rounded hover:text-red-400 transition-colors duration-200 ease-in-out">About</a>
                </div>
                <div className="flex flex-col items-center">
                    <a href="#" className="font-semibold py-1 px-1 rounded hover:text-red-400 transition-colors duration-200 ease-in-out">Games</a>
                    <a href="#" className="font-semibold py-1 px-1 rounded hover:text-red-400 transition-colors duration-200 ease-in-out">Cart</a>
                </div>
                <div className="flex flex-col items-center">
                    <a href="#" className="font-semibold py-1 px-1 rounded hover:text-red-400 transition-colors duration-200 ease-in-out">Contact</a>
                    <a href="#" className="font-semibold py-1 px-1 rounded hover:text-red-400 transition-colors duration-200 ease-in-out">Upcoming</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
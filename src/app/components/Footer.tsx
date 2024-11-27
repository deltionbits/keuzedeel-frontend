import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-white  to-red-100/50 row-start-3 flex gap-5 flex-wrap items-center justify-center pt-20 pb-5 -m-4 rounded-xl">
            <div className="grid grid-cols-4 grid-rows-1 gap-4 w-full">
                <Link href="/">
                    <div className="col-span-1 flex justify-center items-center">
                        <Image src="/box.svg" width={120} height={120} alt="Boxed logo" className="h-12" />
                        <p className="font-bold pl-2">Boxed Games</p>
                    </div>
                </Link>
                <div className="flex flex-col items-center">
                    <Link href="/" className="font-semibold py-1 px-1 rounded hover:text-red-400 transition-colors duration-200 ease-in-out">Home</Link>
                    <Link href="/about" className="font-semibold py-1 px-1 rounded hover:text-red-400 transition-colors duration-200 ease-in-out">About</Link>
                </div>
                <div className="flex flex-col items-center">
                    <Link href="/games" className="font-semibold py-1 px-1 rounded hover:text-red-400 transition-colors duration-200 ease-in-out">Games</Link>
                    <Link href="/cart" className="font-semibold py-1 px-1 rounded hover:text-red-400 transition-colors duration-200 ease-in-out">Winkelwagen</Link>
                </div>
                <div className="flex flex-col items-center">
                    <Link href="/contact" className="font-semibold py-1 px-1 rounded hover:text-red-400 transition-colors duration-200 ease-in-out">Contact</Link>
                    <Link href="upcoming" className="font-semibold py-1 px-1 rounded hover:text-red-400 transition-colors duration-200 ease-in-out">Upcoming</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
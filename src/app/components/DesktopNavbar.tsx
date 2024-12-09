"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";

const DesktopNavbar = () => {
  return (
    <>
      <nav className="bg-gradient-to-b from-red-100/50 to-white row-start-1 flex items-center justify-between mt-1 pl-4 pr-4 pb-8 pt-5 -m-4 mt-[-15px] rounded-xl">
        <div>
          <Link className="text-black font-bold py-2 px-4 hover:text-red-400 transition-colors duration-200 ease-in-out flex items-center" href="/">
            <Image src="box.svg" width={1000} height={1} alt="Boxed logo" className="h-6 w-6 mr-2" />
            Boxed Games
          </Link>
        </div>

        <ol className="flex gap-4 ml-auto">
          <li>
            <Link className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-400 transition-colors duration-200 ease-in-out flex items-center" href="/current-games">
              <Image src="flame.svg" width={12} height={12} alt="" className="h-6 w-6 mr-2 filter invert" />
              Games
            </Link>
          </li>
          <li>
            <Link className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-400 transition-colors duration-200 ease-in-out flex items-center" href="/upcoming-games">
              <Image src="megaphone.svg" width={12} height={12} alt="" className="h-6 w-6 mr-2 filter invert" />
              Upcoming
            </Link>
          </li>
          <li>
            <Link className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-400 transition-colors duration-200 ease-in-out flex items-center" href="/about">
              <Image src="info.svg" alt="" width={12} height={12} className="h-6 w-6 mr-2 filter invert" />
              About
            </Link>
          </li>
          <li>
            <Link className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-400 transition-colors duration-200 ease-in-out flex items-center" href="/contact">
              <Image src="phone.svg" alt="" width={12} height={12} className="h-6 w-6 mr-2 filter invert" />
              Contact
            </Link>
          </li>
          <li>
            <Link className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-400 transition-colors duration-200 ease-in-out flex items-center" href="/cart">
              <Image src="shoppingcart.svg" width={12} height={12} alt="" className="h-6 w-6 mr-2 filter invert" />
              Winkelwagen
            </Link>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default DesktopNavbar;
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
      // bg-gradient-to-b from-red-100/50  to-white row-start-1
    <nav className="flex items-center justify-between mt-1 pl-4 pr-4 pb-8 pt-5 -ml-4 -mr-4 -mt-[15px] rounded-xl">
      <div>
        <Link className="text-black font-bold py-2 px-4 hover:text-red-400 transition-colors duration-200 ease-in-out flex items-center" href="/">
          <Image src="box.svg" alt="Boxed logo" className="h-6 w-6 mr-2" />
          Boxed Games
        </Link>
      </div>

      <ol className="flex gap-4 ml-auto">
        <li>
          <Link className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-400 transition-colors duration-200 ease-in-out flex items-center" href="/games">
            <Image src="flame.svg" alt="" className="h-6 w-6 mr-2 filter invert" />
            Games
          </Link>
        </li>
        <li>
          <Link className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-400 transition-colors duration-200 ease-in-out flex items-center" href="/upcoming">
            <Image src="megaphone.svg" alt="" className="h-6 w-6 mr-2 filter invert" />
            Upcoming
          </Link>
        </li>
        <li>
          <Link className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-400 transition-colors duration-200 ease-in-out flex items-center" href="/about">
            <Image src="info.svg" alt="" className="h-6 w-6 mr-2 filter invert" />
            About
          </Link>
        </li>
        <li>
          <Link className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-400 transition-colors duration-200 ease-in-out flex items-center" href="/contact">
            <Image src="phone.svg" alt="" className="h-6 w-6 mr-2 filter invert" />
            Contact
          </Link>
        </li>
        <li>
          <Link className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-400 transition-colors duration-200 ease-in-out flex items-center" href="/cart">
            <Image src="shoppingcart.svg" alt="" className="h-6 w-6 mr-2 filter invert" />
            Cart
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default Navbar;
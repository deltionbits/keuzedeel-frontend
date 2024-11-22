import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-b from-red-100/50  to-white row-start-1 flex items-center justify-between mt-1 pl-4 pr-4 pb-8 pt-5 -m-4 mt-[-15px] rounded-xl">
      <div>
        <a className="text-black font-bold py-2 px-4 hover:text-red-400 transition-colors duration-200 ease-in-out flex items-center" href="/">
          <img src="box.svg" alt="Boxed logo" className="h-6 w-6 mr-2" />
          Boxed Games
        </a>
      </div>

      <ol className="flex gap-4 ml-auto">
        <li>
          <a className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-400 transition-colors duration-200 ease-in-out flex items-center" href="/games">
            <img src="flame.svg" alt="" className="h-6 w-6 mr-2 filter invert" />
            Games
          </a>
        </li>
        <li>
          <a className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-400 transition-colors duration-200 ease-in-out flex items-center" href="/upcoming">
            <img src="megaphone.svg" alt="" className="h-6 w-6 mr-2 filter invert" />
            Upcoming
          </a>
        </li>
        <li>
          <a className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-400 transition-colors duration-200 ease-in-out flex items-center" href="/about">
            <img src="info.svg" alt="" className="h-6 w-6 mr-2 filter invert" />
            About
          </a>
        </li>
        <li>
          <a className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-400 transition-colors duration-200 ease-in-out flex items-center" href="/contact">
            <img src="phone.svg" alt="" className="h-6 w-6 mr-2 filter invert" />
            Contact
          </a>
        </li>
        <li>
          <a className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-400 transition-colors duration-200 ease-in-out flex items-center" href="/cart">
            <img src="shoppingcart.svg" alt="" className="h-6 w-6 mr-2 filter invert" />
            Cart
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default Navbar;
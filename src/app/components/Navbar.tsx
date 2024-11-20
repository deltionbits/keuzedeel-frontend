import React from "react";

const Navbar = () => {
    return (
<nav className="row-start-1 flex items-center justify-between mt-1 pl-4 pr-4">
<div>
  <a className="hover:bg-red-400 transition-colors duration-200 ease-in-out" href="/">
    Home
  </a>
</div>

<ol className="flex gap-4 ml-auto">
  <li>
    <a className="hover:bg-red-400 transition-colors duration-200 ease-in-out" href="/games">
      Games
    </a>
  </li>
  <li>
    <a className="hover:bg-red-400 transition-colors duration-200 ease-in-out" href="/about">
      About
    </a>
  </li>
  <li>
    <a className="hover:bg-red-400 transition-colors duration-200 ease-in-out" href="/contact">
      Contact
    </a>
  </li>
  <li>
    <a className="hover:bg-red-400 transition-colors duration-200 ease-in-out" href="/cart">
      Cart
    </a>
  </li>
</ol>
</nav>
    );
};

export default Navbar;
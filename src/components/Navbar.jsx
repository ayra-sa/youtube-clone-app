import React from "react";
import { BsYoutube } from "react-icons/bs";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between px-5 py-4 fixed top-0 left-0 right-0 bg-neutral-800 z-30">
        <a href="/" className="flex items-center gap-x-1">
          <i className="text-red-600 text-4xl">
            <BsYoutube />
          </i>
          <span className="text-4xl">MeTube</span>
        </a>

        <SearchBar />
      </nav>
    </header>
  );
};

export default Navbar;

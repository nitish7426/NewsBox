import React, { useEffect, useRef } from "react";
import Search from "./Search";
import Logo from "./Logo";
import DarkMode from "./DarkMode";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navlinks = [
    {
      id: 1,
      text: "Headlines",
      to: "/",
    },
    {
      id: 2,
      text: "General",
      to: "/category/general",
    },
    {
      id: 3,
      text: "Business",
      to: "/category/business",
    },
    {
      id: 4,
      text: "Entertainment",
      to: "/category/entertainment",
    },
    {
      id: 5,
      text: "Health",
      to: "/category/health",
    },
    {
      id: 6,
      text: "Science",
      to: "/category/science",
    },
    {
      id: 7,
      text: "Sports",
      to: "/category/sports",
    },
    {
      id: 8,
      text: "Technology",
      to: "/category/technology",
    },
  ];

  return (
    <header>
      <nav className="h-16 flex items-center justify-between px-4 md:px-8">
        <Logo />
        <div className="flex gap-4">
          <Search />
          <DarkMode />
        </div>
      </nav>

      <nav className="overflow-x-auto scrollbar-hide md:justify-evenly py-2 w-full flex">
        {navlinks.map((value) => (
          <NavLink
            className="border-b-2 border-transparent font-medium tracking-wider px-4 pb-1 md:text-lg md:px-6"
            key={value.id}
            to={value.to}
          >
            {value.text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;

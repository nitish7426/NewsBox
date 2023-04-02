import React, { useContext, useEffect, useRef, useState } from "react";
import { BiSun, BiMoon, BiDesktop } from "react-icons/bi";
import { context } from "../context/DarkModeContext";
const buttons = [
  {
    text: "system",
    icon: <BiDesktop size={23} />,
  },
  {
    text: "light",
    icon: <BiSun size={23} />,
  },
  {
    text: "dark",
    icon: <BiMoon size={23} />,
  },
];

const DarkMode = () => {
  const [dropdown, setDropdown] = useState(false);
  const { theme, setTheme } = useContext(context);
  const dropdownRef = useRef();
  useEffect(() => {
    const handleEvent = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleEvent);
    return () => {
      document.removeEventListener("mousedown", handleEvent);
    };
  }, []);
  return (
    <div className="w-fit relative flex" ref={dropdownRef}>
      <button
        className="text-neutral-500 dark:text-neutral-400"
        onClick={() => setDropdown(!dropdown)}
      >
        {theme === "system" && <BiDesktop size={25} />}
        {theme === "light" && <BiSun size={25} />}
        {theme === "dark" && <BiMoon size={25} />}
      </button>

      {/* drop down */}
      <div
        className={`flex flex-col bg-neutral-100 dark:bg-neutral-800 rounded-xl p-1.5 absolute right-0 top-full m-2 z-20 duration-150 origin-top-right ease-in-out ${
          dropdown ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        {buttons.map(({ text, icon }) => (
          <button
            className={`flex items-center capitalize font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-lg gap-2 py-2 px-4 ${
              theme === text
                ? "text-orange-500"
                : "dark:text-neutral-300 text-neutral-600"
            }`}
            key={text}
            onClick={() => setTheme(text)}
          >
            {icon}
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DarkMode;

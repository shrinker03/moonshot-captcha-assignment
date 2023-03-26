import React, { useContext } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="w-[100%] bg-slate-800 h-[3rem] flex justify-center items-center text-slate-100 p-3 gap-6">
      <div className="text-2xl">Header</div>
      {theme === "dark" ? (
        <BsFillSunFill className="cursor-pointer" onClick={toggleTheme} />
      ) : (
        <BsFillMoonFill className="cursor-pointer" onClick={toggleTheme} />
      )}
    </div>
  );
};

export default Header;

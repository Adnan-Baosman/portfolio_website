"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className=" flex flex-col items-center justify-center fixed top-3 lg:top-7 lg:right-5 right-2 z-[1000]">
    <button
      className="bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
    <span className="text-[5px] lg:text-[10px] mt-[5px]">
    {theme === "light" ? "Light Mode" : "Dark Mode"}
  </span>
  </div>
  );
}

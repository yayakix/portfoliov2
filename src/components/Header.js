import { useState } from "react";
import "../css/Header.css";
import ColorScheme from "./ColorScheme";

function Header() {
  const headerList = [
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Projects",
      url: "#projects",
    },
    {
      name: "Skills",
      url: "#skills",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ];
  return (
    <div className="header text-center bg-white dark:!bg-black flex justify-center items-center mb-24 shadow-xl dark:shadow-none shadow-slate-50 h-16 sticky top-0 z-10 dark:text-white">
      <div className="hidden md:block text-xl dark:text-white">
        <a href="#" id="hometab" className="dark:text-white">
          Iyana Marquez
        </a>
      </div>
      <div className="list-none flex flex-row text-xs md:text-xl  dark:bg-black ">
        {headerList.map((headerItem) => {
          return (
            <li className="mx-2 md:mx-4 flex-none ">
              <a className="dark:text-white" href={headerItem.url}>
                {headerItem.name}
              </a>
            </li>
          );
        })}
        <ColorScheme />
      </div>
      {/* <div className="bottomnav">
          <li>
            <a
              href="https://docs.google.com/document/d/10DHq4Xq6HKmtkbnLC8-JJA_4nqbkPZ-RNV2bcQ6QnhQ/edit?usp=sharing"
              id="resume"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </div> */}
    </div>
  );
}

export default Header;

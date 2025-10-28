"use client";

import Menu from "./menu";

import { useState, useRef } from "react";
import { animate } from "animejs";

export default function MobileView() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenu = (open: boolean) => {
    const translate = open ? ["-200px", "0px"] : ["0px", "-250px"];
    if (menuRef.current) {
      setShowMenu(true);
      animate(menuRef.current, {
        translateX: translate,
        ease: "inOut",
        duration: 200,
        onComplete: () => {
          if (!open) {
            setShowMenu(false);
          }
        },
      });
    }
  };

  return (
    <>
      <div
        ref={menuRef}
        className={`bg-black/80 backdrop-blur-2xl absolute z-40 left-0 w-4/6 h-screen pt-6 pr-4 md:hidden ${
          showMenu ? "flex items-baseline" : "hidden"
        }`}
      >
        <Menu></Menu>
        <button onClick={() => handleMenu(false)} className="z-40 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="absolute left-5 top-4 md:hidden">
        <button
          onClick={() => handleMenu(true)}
          className="bg-black/60 z-30 rounded-full items-center p-2 relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

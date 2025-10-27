"use client";

import Chat from "./components/chat";
import Menu from "./components/menu";

import { useState, useRef } from "react";
import { animate } from "animejs";

export default function Home() {
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
      <div className="relative font-josefin h-screen w-full overflow-hidden md:py-8">
        {/* Background lights */}
        <div className="absolute -top-35 -left-40 w-100 h-100 bg-pink-500 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-100 -right-50 w-100 h-100 bg-blue-500 rounded-full blur-3xl opacity-25"></div>
        <div className="absolute -top-35 right-110 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -top-35 left-115 w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-20"></div>

        <div
          ref={menuRef}
          className={`bg-black/80 backdrop-blur-2xl absolute z-40 left-0 w-4/6 h-screen pt-6 pr-4 md:hidden ${
            showMenu ? "flex items-baseline" : "hidden"
          }`}
        >
          <Menu></Menu>
          <button
            onClick={() => handleMenu(false)}
            className="z-40 rounded-full"
          >
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

        {/* Content */}
        <div className="relative py-4 z-10 flex h-14/15 md:h-full w-full md:justify-center md:py-0 md:pr-8">
          <div className="pt-8 w-0 hidden md:w-1/5 md:block">
            <Menu></Menu>
          </div>
          <div className="w-full px-4 md:w-4/5">
            <Chat></Chat>
          </div>
        </div>
      </div>
    </>
  );
}

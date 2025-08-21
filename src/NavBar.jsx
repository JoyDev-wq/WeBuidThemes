import React, { useEffect, useRef } from "react";
import go_logo from "./assets/go-logo.svg";
import { gsap } from "gsap";


const NavBar = () => {
  // const pRef = useRef(null);

  useEffect(() => {
    gsap.from(".logo-img, .p", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger:0.2
    });
  },[]);

  return (
    <div className="flex justify-between items-center border-b border-gray-500 text-white px-[2.5rem] py-[2rem]">
      <div className="flex justify-between items-center gap-7 text-xl">
        <img
          src={go_logo}
          className="logo-img w-[3.5rem] sm:w-[4rem] mr-[2rem] cursor-pointer"
          alt=""
        />
        <p className="p hidden md:flex cursor-pointer">
          Home
        </p>
        <p className="p hidden md:flex cursor-pointer">
          Pages
        </p>
        <p className="p hidden md:flex cursor-pointers">
          Components
        </p>
      </div>
      <div className="p text-lg sm:text-2xl cursor-pointer">
        <p>Joydev Sarkar</p>
      </div>
    </div>
  );
};

export default NavBar;

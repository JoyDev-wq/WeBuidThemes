import React from "react";
import first from "./assets/fifth-1.jpg";
import second from "./assets/fifth-2.jpg";

const Fifth = () => {
  return (
    <div>
      <hr />
      <div className="px-[2rem] lg:px-[15rem] py-[5rem] mt-[4rem]">
        <div className="flex flex-col md:flex-row justify-center gap-[3rem] xl:gap-[1rem]  items-center ">
          <img
            className="w-[30rem] xl:w-[40rem] shadow-2xl"
            src={first}
            alt=""
          />
          <div className="xl:ml-[4rem] flex flex-col gap-[2rem]">
            <h1 className="text-center lg:text-left text-[#54AF5D] text-xl font-semibold">VIDEO</h1>
            <p className="text-center lg:text-left text-2xl sm:text-3xl md:text-5xl">Our Most Requested Tour</p>
            <div className=" flex justify-center items-center lg:justify-start">
              <button className="w-[10rem] sm:w-[12rem] lg:w-[13rem] h-[3rem] lg:h-[4.5rem] bg-[#54AF5D] text-white text-lg lg:text-2xl rounded-full">
              Reserve Now
            </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-[25rem] md:h-[30rem] w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${second})`,
        }}
      >
        <div className="h-full w-full inert-0 bg-black/35 z-0">
          <div className="h-full flex flex-col justify-center items-center gap-[1rem]">
            <h3 className="text-[#e5e5e5] text-[1rem] sm:text-lg md:text-xl">MORE QUESTIONS?</h3>
            <h1 className="px-[10%] lg:px-[25%] text-center text-3xl sm:text-4xl md:text-6xl text-white
            mb-[2rem]">
              Ask our live support via chat or phone
            </h1>
            <button className="px-[2rem] sm:px-[3rem] py-3 sm:py-[1rem] bg-white text-[1rem] md:text-xl lg:text-2xl rounded-full">
              {" "}
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fifth;

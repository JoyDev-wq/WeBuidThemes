import React from "react";
import first from "./assets/fifth-1.jpg";
import second from "./assets/fifth-2.jpg";

const Fifth = () => {
  return (
    <div>
      <hr />
      <div className="px-[5rem] lg:px-[15rem] lg:py-[5rem] mt-[4rem]">
        <div className="flex flex-col xl:flex-row justify-center gap-[2rem] items-center ">
          <img
            className="w-[30rem] xl:w-[40rem] shadow-2xl"
            src={first}
            alt=""
          />
          <div className="xl:ml-[6rem] flex flex-col gap-[1.5rem]">
            <h1 className="text-[#54AF5D] text-xl font-semibold">VIDEO</h1>
            <p className="text-5xl">Our Most Requested Tour</p>
            <button className="w-[13rem] h-[4.5rem] bg-[#54AF5D] text-white  text-2xl rounded-full">
              Reserve Now
            </button>
          </div>
        </div>
      </div>
      <div
        className="h-[35rem] w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${second})`,
        }}
      >
        <div className="h-full w-full inert-0 bg-black/30 z-0">
          <div className="h-full flex flex-col justify-center items-center gap-[1rem]">
            <h3 className="text-[#e5e5e5] text-xl">MORE QUESTIONS?</h3>
            <h1 className="px-[10%] lg:px-[30%] text-center text-6xl text-white
            mb-[2rem]">
              Ask our live support via chat or phone
            </h1>
            <button className="px-[3.5rem] py-[1.5rem] bg-white text-2xl rounded-full">
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

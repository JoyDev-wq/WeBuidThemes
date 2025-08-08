import React from "react";
import capture from "./assets/capture-svgrepo-com-4.svg";
import user from "./assets/users-svgrepo-com-2.svg";
import wifi from "./assets/wifi-svgrepo-com.svg";
import clock from "./assets/clock-circle-svgrepo-com-1.svg";
import chat from "./assets/chat-round-svgrepo-com.svg";
import location from "./assets/location-svgrepo-com.svg";

const Fourth = () => {
  return (
    <div className="px-[7%] sm:px-[15%] lg:px-[20%] py-[7rem]">
      <div className="flex flex-col gap-[3rem]">
        <div className="flex flex-col gap-5">
          <h1 className="text-green-600 text-lg font-semibold">FEATURES</h1>
          <p className="w-[27rem] text-2xl lg:text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className=" flex flex-col md:flex-row flex-wrap gap-2 mt-[2rem]">
          <div className="flex items-center gap-[1rem] border border-gray-300 w-[20rem] px-[1rem] py-[1rem] rounded-full">
            <img src={capture} alt="" className="w-[1.8rem] " />
            <p className="text-[1.2rem] md:text-[1.4rem]">300 square feet space</p>
          </div>
          <div className="flex items-center gap-[1rem] border border-gray-300 w-[16rem] px-[1rem] py-[1rem] rounded-full">
            <img src={clock} alt="" className="w-[1.8rem]" />
            <p className="text-[1.2rem] md:text-[1.4rem]">24/7 availability</p>
          </div>
          <div className="flex items-center gap-[1rem] border border-gray-300 w-[18rem] px-[1rem] py-[1rem] rounded-full">
            <img src={location} alt="" className="w-[1.8rem]" />
            <p className="text-[1.2rem] md:text-[1.4rem]">in the heart of city</p>
          </div>
          <div className="flex items-center gap-[1rem] border border-gray-300 w-[25rem] px-[1rem] py-[1rem] rounded-full">
            <img src={wifi} alt="" className="w-[1.8rem]" />
            <p className="text-[1.2rem] md:text-[1.4rem]">highspeed internet connection</p>
          </div>
          <div className="flex items-center gap-[1rem] border border-gray-300 w-[18rem] px-[1rem] py-[1rem] rounded-full">
            <img src={user} alt="" className="w-[1.8rem]" />
            <p className="text-[1.2rem] md:text-[1.4rem]">up to 50 members</p>
          </div>
          <div className="flex items-center gap-[1rem] border border-gray-300 w-[19rem] px-[1rem] py-[1rem] rounded-full">
            <img src={chat} alt="" className="w-[1.8rem]" />
            <p className="text-[1.2rem] md:text-[1.4rem]">amazing networking</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourth;

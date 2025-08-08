import React from "react";
import images from "./images";
import right_arrow from "./assets/arrow-right-svgrepo-com.svg";

const Third = () => {
  return (
    <div className="bg-[#f5f5f5] py-[5rem]">
      <div className="text-center">
        <h1 className="text-6xl">
          <span className="font-bold">Modern interiors </span>for a <br />{" "}
          better experience.
        </h1>
        <p className="text-[#808080] mt-[2rem] text-xl">
          Lorem ipsum dolor sit amet, consectetur
          <br /> adipiscing elit, sed do eiusmod tempor
          <br /> incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="mt-[2rem] ">
        <div className="w-full h-full inert-0 bg-black/15 z-0 py-[2rem]">
          <div className="flex flex-row-reverse overflow-x-auto gap-4 my-[1rem] scrollbar-hide">
            {images.map((img) => (
              <img
                key={img.id}
                className="w-[380px] aspect-square object-cover object-center rounded-lg"
                src={img.src}
                alt=""
              />
            ))}
          </div>
          <div className="flex overflow-x-auto gap-4 my-[1rem] scrollbar-hide ">
            {images.map((img) => (
              <img
                key={img.id}
                className="w-[380px] aspect-square object-cover object-bottom rounded-lg"
                src={img.src}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-[2rem]">
          <div className="w-[21rem] h-[5rem] bg-[#54AF5D] flex  items-center text-white rounded-full gap-[2rem] cursor-pointer">
            <img className="w-[5rem] h-[5rem] py-[1.7rem] bg-[#4a9751] rounded-full" src={right_arrow} alt="" />
            <button className="pr-[32px] text-2xl font-medium">View All Photos</button>
          </div>
        </div>
    </div>
  );
};

export default Third;
//  h-[20rem]

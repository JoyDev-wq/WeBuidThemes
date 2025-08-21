// import React, { useEffect } from "react";
import capture from "./assets/capture-svgrepo-com-4.svg";
import user from "./assets/users-svgrepo-com-2.svg";
import wifi from "./assets/wifi-svgrepo-com.svg";
import clock from "./assets/clock-circle-svgrepo-com-1.svg";
import chat from "./assets/chat-round-svgrepo-com.svg";
import location from "./assets/location-svgrepo-com.svg";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const Fourth = () => {
  // useEffect(() => {
  //   // let ctx = gsap.context(() => {
  //     const t1 = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: ".section",
  //         start: "top 80%",
  //         end: "bottom 60%",
  //         scrub: 1.5,
  //       },
  //     });
  //     t1.from(".text", {
  //       opacity: 0,
  //       x: -100,
  //       duration: 1,
  //     }).from(".features", {
  //       opacity: 0,
  //       x: -100,
  //       duration: 0.5,
  //     });
  //     // .from(".box",{
  //     //   opacity:0,
  //     //   x:-100,
  //     //   duration:1,
  //     //   stagger:0.2
  //     // })
  //   });
  //   // return () => ctx.revert();
  // // }, []);

  return (
    <div className="section px-[7%] sm:px-[15%] lg:px-[20%] py-[7rem]">
      <div className=" flex flex-col gap-[3rem]">
        <div className=" text flex flex-col gap-5">
          <h1 className="text-green-600 text-lg font-semibold">FEATURES</h1>
          <p className="w-[18rem] sm:w-[27rem] text-[1rem] sm:text-2xl lg:text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="features flex  flex-col md:flex-row flex-wrap gap-2 mt-[2rem]">
          <div className="box flex items-center gap-[1rem] border border-gray-300 w-[17em]  sm:w-[20rem] px-[0.8rem] py-[0.8rem] sm:px-[1rem] sm:py-[1rem] rounded-full">
            <img src={capture} alt="" className="w-[1.5rem] sm:w-[1.8rem] " />
            <p className="text-[1rem] sm:text-[1.2rem] md:text-[1.4rem]">
              300 square feet space
            </p>
          </div>
          <div className="box flex items-center gap-[1rem] border border-gray-300 w-[13rem] sm:w-[16rem] px-[0.8rem] py-[0.8rem] sm:px-[1rem] sm:py-[1rem] rounded-full">
            <img src={clock} alt="" className="w-[1.5rem] sm:w-[1.8rem] " />
            <p className="text-[0.9rem] sm:text-[1.2rem]  md:text-[1.4rem]">
              24/7 availability
            </p>
          </div>
          <div className="box flex items-center gap-[1rem] border border-gray-300 w-[14rem] sm:w-[18rem] px-[0.8rem] py-[0.8rem] sm:px-[1rem] sm:py-[1rem] rounded-full">
            <img src={location} alt="" className="w-[1.5rem] sm:w-[1.8rem] " />
            <p className="text-[1rem] sm:text-[1.2rem]  md:text-[1.4rem]">
              in the heart of city
            </p>
          </div>
          <div className="box flex items-center gap-[1rem] border border-gray-300 w-[20rem] sm:w-[25rem] px-[0.8rem] py-[0.8rem] sm:px-[1rem] sm:py-[1rem] rounded-full">
            <img src={wifi} alt="" className="w-[1.5rem] sm:w-[1.8rem] " />
            <p className="text-[1rem] sm:text-[1.2rem]  md:text-[1.4rem]">
              highspeed internet connection
            </p>
          </div>
          <div className="box flex items-center gap-[1rem] border border-gray-300 w-[14rem] sm:w-[18rem] px-[0.8rem] py-[0.8rem] sm:px-[1rem] sm:py-[1rem] rounded-full">
            <img src={user} alt="" className="w-[1.5rem] sm:w-[1.8rem] " />
            <p className="text-[1rem] sm:text-[1.2rem]  md:text-[1.4rem]">
              up to 50 members
            </p>
          </div>
          <div className="box flex items-center gap-[1rem] border border-gray-300 w-[15rem] sm:w-[19rem] px-[0.8rem] py-[0.8rem] sm:px-[1rem] sm:py-[1rem] rounded-full">
            <img src={chat} alt="" className="w-[1.5rem] sm:w-[1.8rem] " />
            <p className="text-[1rem] sm:text-[1.2rem]  md:text-[1.4rem]">
              amazing networking
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourth;

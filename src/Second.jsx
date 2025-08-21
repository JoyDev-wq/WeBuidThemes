import React, { useEffect } from "react";
import tree from "./assets/plant.png";
import capture from "./assets/capture-svgrepo-com-1.svg";
import user from "./assets/users-svgrepo-com-2.svg";
import wifi from "./assets/wifi-svgrepo-com.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Second = () => {
  useEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section",
        start: "80% bottom", // when section top reaches 80% of viewport
        end: "bottom 60%",
        scrub: 1.5,
      },
    });
    t1.from(".heading", {
      opacity: 0,
      x: 100,
      duration: 2,
      ease: "power3.out",
    })
      .from(".para", {
        opacity: 0,
        duration:2,
        x: 100,
        ease: "power3.out",
      })
      .from(".box-section",{
        opacity:0,
        duration:0.5,
        x:100
      })
      .from(".box", {
        opacity: 0,
        duration: 5,
        x: 100,
        ease: "power3.out",
        stagger:0.5
      });
  }, []);

  
  return (
    <div className="w-full py-[4rem] overflow-hidden">
      <div className=" flex flex-col xl:flex-row justify-between items-center ">
        <div className="section xl:w-[80%] flex flex-col gap-8 xl:pl-[20rem]">
          <h1 className="heading text-center xl:text-left text-2xl sm:text-4xl lg:text-5xl ">
            A good place
            <br /> to build your startup.
          </h1>
          <p className=" para text-center xl:text-left text-xl px-[20%] md:text-2xl xl:pr-[40%] xl:px-0 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="box-section flex flex-wrap items-center mt-8 justify-center xl:justify-normal px-[20%] xl:px-0">
            <div className="box w-[15rem] sm:w-[20rem]  xl:w-[16rem] border border-gray-300 p-[2rem] rounded-lg">
              <img className="h-[2rem] sm:h-12 mb-6" src={capture} alt="" />
              <h2 className="text-xl sm:text-2xl">1000 ft</h2>
              <p className="text-lg text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className="box w-[15rem] sm:w-[20rem] xl:w-[16rem] border border-gray-300 p-[2rem] rounded-lg">
              <img className="h-[2rem] sm:h-12 mb-6" src={user} alt="" />
              <h2 className="text-xl sm:text-2xl">80 members</h2>
              <p className="text-[1rem] sm:text-lg text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className="box w-[15rem] sm:w-[20rem]  xl:w-[16rem] border border-gray-300 p-[2rem] rounded-lg">
              <img className="h-[2rem] sm:h-12 mb-6" src={wifi} alt="" />
              <h2 className="text-xl sm:text-2xl">100 mb/s</h2>
              <p className="text-lg text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:w-[20%] h-[45rem] flex justify-center xl:justify-end">
          <img className="h-full w-auto object-contain" src={tree} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Second;

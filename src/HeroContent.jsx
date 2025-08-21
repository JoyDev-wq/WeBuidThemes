import { gsap } from "gsap";
import { useEffect,useRef } from "react";


const HeroContent = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);


  useEffect(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      duration: 1,
      y:-150,
      ease: "power2.out",
    });
  },[]);

  useEffect(()=>{
    gsap.from(buttonRef.current,{
      opacity: 0,
      duration: 1,
      y:150,
      ease: "power2.out",
    })
  })

  return (
    <div className="container mx-auto h-[85vh] w-full">
      <div className="h-[100%] w-full flex flex-col justify-center items-center px-[5rem] md:px-[10rem]">
        <p ref={textRef} className="text-2xl sm:text-4xl xl:px-[10%] md:text-6xl lg:text-7xl text-white text-center ">
          A <span className="font-bold">coworking space</span> that feels like
          home.
        </p>
        <button ref={buttonRef} className="text-[1rem] sm:text-xl font-light bg-white px-10 sm:px-16 py-4 rounded-full mt-[3rem]">
          Check Availablity
        </button>
      </div>
      {/* <img className='text-green-500 fill-current' src={capture} alt="" /> */}
    </div>
  );
};

export default HeroContent;


//   useEffect(() => {
//   let ctx = gsap.context(() => {
//     gsap.from(textRef.current, {
//       opacity: 0,
//       y: -200,
//       duration: 2,
//       ease: "power2.out"
//     });
//   });
//   return () => ctx.revert(); // cleanup on unmount
// }, []);
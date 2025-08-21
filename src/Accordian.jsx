import { useState } from "react";
import rightArrow from "./assets/right-arrow-svgrepo-com.svg";
import downArrow from "./assets/down-arrow-5-svgrepo-com.svg";

const Accordian = () => {
  const [openIndex,setOpenIndex] = useState(false);
  const [openAcc,setOpenAcc] = useState(false);

//   const toggleActive = () => {
//     setActiveClass(!activeClass);
//     setIsOpen(!isOpen);
//   };

    const toggleAccordion = (index)=>{
        setOpenIndex(openIndex===index?null:index);
    }
    const toggleAction = (index)=>{
        setOpenAcc(openAcc===index?null:index);
    }

  const questions = [
    "How do your Membership Agreement work?",
    "What is the refund policy?",
    "Can I upgrade later?",
  ];
  const questions_1 = [
    "How long is the membership?",
    "Are there any hidden charges?",
    "Is support available 24/7?",
  ]

  return (
    <div className="w-full sm:px-[3rem] py-[5rem] items-start bg-[#ec0a0a] flex justify-center flex-wrap">
      <div className="w-[20rem] sm:w-[30rem] flex justify-center items-center flex-col gap-4 mb-[1rem]">
        {questions.map((question, index) => (
          <div
            key={index}
            className="w-[20rem] bg-white py-[0.5rem] sm:py-[1rem] px-[1rem] sm:px-[2rem] text-xl rounded-lg "
          >
            <h1
              className="flex justify-between mb-[1rem] text-[1rem] sm:text-[1.5rem] cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              {question}
              <span>
                {openIndex === index ? (
                  <img className="w-[2rem]" src={rightArrow} alt="" />
                ) : (
                  <img className="w-[2rem]" src={downArrow} alt="" />
                )}
              </span>
            </h1>
            <p
              className={`${
                openIndex === index ? "block" : "hidden"
              } transition-all duration-300 ease-in-out text-[#999] text-[1rem] `}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              quam odit voluptatum, rem libero modi labore porro commodi
              inventore architecto explicabo reiciendis, perspiciatis
              voluptatibus odio, sequi nobis? Optio, aperiam, tenetur!
            </p>
          </div>
        ))}
      </div>
      <div className="w-[20rem] sm:w-[30rem] flex flex-col justify-center items-center gap-4">
        {questions_1.map((question, index) => (
          <div
            key={index}
            className="w-[20rem] bg-white py-[0.5rem] sm:py-[1rem] px-[1rem] sm:px-[2rem] text-xl rounded-lg "
          >
            <h1
              className="flex justify-between text-[1rem] sm:text-[1.5rem] mb-[1rem] cursor-pointer"
              onClick={() => toggleAction(index)}
            >
              {question}
              <span>
                {openAcc === index ? (
                  <img className="w-[2rem]" src={rightArrow} alt="" />
                ) : (
                  <img className="w-[2rem]" src={downArrow} alt="" />
                )}
              </span>
            </h1>
            <p
              className={`${
                openAcc === index ? "block" : "hidden"
              } transition-all duration-1000 ease-in-out text-[#999] text-[1rem]`}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              quam odit voluptatum, rem libero modi labore porro commodi
              inventore architecto explicabo reiciendis, perspiciatis
              voluptatibus odio, sequi nobis? Optio, aperiam, tenetur!
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;


// <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 py-[3rem] lg:mx-[5rem] mx-[10rem]">
//         {questions.map((question, index) => (
//           <div 
//           key={index} 
//           className="w-[23rem] bg-white py-[1rem] px-[2rem] text-xl rounded-lg  self-start">
//             <h1
//               className="flex justify-between mb-[1rem]"
//               onClick={()=>toggleAccordion(index)}
//             >
//               {question}{" "}
//               <span>
//                 {openIndex===index ? (
//                   <img className="w-[2rem]" src={rightArrow} alt="" />
//                 ) : (
//                   <img className="w-[2rem]" src={downArrow} alt="" />
//                 )}
//               </span>
//             </h1>
//             <p className={`${openIndex===index?"block":"hidden"} transition-all duration-300 ease-in-out text-[#999]`}>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
//               quam odit voluptatum, rem libero modi labore porro commodi
//               inventore architecto explicabo reiciendis, perspiciatis
//               voluptatibus odio, sequi nobis? Optio, aperiam, tenetur!
//             </p>
//           </div>
//         ))}
//       </div>
  /* <div className='w-[23rem] bg-purple-700 py-[2rem] px-[2rem] text-xl rounded-lg'>
    <h1 className='flex justify-between mb-[1rem]' onClick={toggleActive} >How do your Membership Agreement work? <span>{isOpen?(
        <img className='w-[2.5rem]' src={rightArrow} alt="" />
        ):(
        <img  className='w-[3rem]'  src={downArrow} alt="" /> )}
        </span></h1>
    <p className={activeClass?"":"active"} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quam odit voluptatum, rem libero modi labore porro commodi inventore architecto explicabo reiciendis, perspiciatis voluptatibus odio, sequi nobis? Optio, aperiam, tenetur!</p>
</div>

*/
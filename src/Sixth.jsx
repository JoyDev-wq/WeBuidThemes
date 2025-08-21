import React from 'react'
import cart from './assets/cart-large-minimalistic-svgrepo-com.svg'

const Sixth = () => {
  return (
    <div className='px-[2rem] sm:px-[5rem] xl:px-[15rem] py-[5rem] bg-[#f5f5f5]'>
      <div className="flex flex-col justify-center items-center">
        <div className="text-center ">
            <h1 className='text-3xl sm:text-5xl mb-[2rem]'>Our <span className='font-semibold'>packages</span> </h1>
            <p className='text-lg sm:text-2xl text-[#7c7c7c]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className="flex flex-wrap justify-center mt-[5rem] gap-[2rem]">
            <div className="w-[20rem] md:w-[23rem] px-[2rem] py-[2rem] flex flex-col justify-center items-center gap-[3rem] bg-white shadow-xl rounded-md">
                <h1 className='text-[#54AF5D] text-xl font-semibold'>SMALL PACK</h1>
                <div className=" text-center">
                    <h1 className='text-6xl md:text-8xl mb-[1.5rem]'>$29</h1>
                    <p className='text-[#999] text-lg sm:text-xl px-[2%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta earum facere vel voluptates</p>
                </div>
                <button className='w-full bg-[#54AF5D] py-[1.4rem] flex justify-center items-center rounded-lg'><img className='w-[1.8rem]' src={cart} alt="" /></button>
            </div>
            <div className="w-[20rem] md:w-[23rem] px-[2rem] py-[2rem] flex flex-col justify-center items-center gap-[3rem] bg-white shadow-xl rounded-md">
                <h1 className='text-[#54AF5D] text-xl font-semibold'>MEDIUM  PACK</h1>
                <div className=" text-center">
                    <h1 className='text-6xl md:text-8xl mb-[1.5rem] font-Rubik'>$49</h1>
                    <p className='text-[#999] text-lg sm:text-xl px-[2%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta earum facere vel voluptates</p>
                </div>
                <button className='w-full bg-[#54AF5D] py-[1.4rem] flex justify-center items-center rounded-lg'><img className='w-[1.8rem]' src={cart} alt="" /></button>
            </div>
            <div className="w-[20rem] md:w-[23rem] px-[2rem] py-[2rem] flex flex-col justify-center items-center gap-[3rem] bg-white shadow-xl rounded-md">
                <h1 className='text-[#54AF5D] text-xl font-semibold'>LARGE PACK</h1>
                <div className=" text-center">
                    <h1 className='text-6xl md:text-8xl mb-[1.5rem]'>$89</h1>
                    <p className='text-[#999] text-lg sm:text-xl px-[2%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta earum facere vel voluptates</p>
                </div>
                <button className='w-full bg-[#54AF5D] py-[1.4rem] flex justify-center items-center rounded-lg'><img className='w-[1.8rem]' src={cart} alt="" /></button>
            </div>
        </div>
        <p className='text-[#999] text-center mt-[2rem] text-xl'>All plans include a fixed workplace.</p>
      </div>
    </div>
  )
}

export default Sixth

import React from 'react'
import capture from './assets/capture-svgrepo-com-1.svg'

const HeroContent = () => {
  return (
    <div className='container mx-auto h-[85vh] w-full'>
      <div className="h-[100%] w-full flex flex-col justify-center items-center px-[5rem] md:px-[10rem]">
        <p className='text-3xl md:text-4xl lg:text-8xl text-white text-center'>A <span className='font-bold'>coworking space</span> that feels like home.</p>
        <button className='text-2xl bg-white px-16 py-5 rounded-full mt-[3rem]'>Check Availablity</button>
      </div>
      {/* <img className='text-green-500 fill-current' src={capture} alt="" /> */}
    </div>
  )
}

export default HeroContent

import React from 'react'
import tree from './assets/plant.png'
import capture from './assets/capture-svgrepo-com-1.svg'
import user from './assets/users-svgrepo-com-2.svg'
import wifi from './assets/wifi-svgrepo-com.svg'

const Second = () => {
  return (
    <div className=' py-[3rem] px-[2rem] sm:py-[6rem] sm:px-[5rem] overflow-hidden'>
      <div className="flex flex-col xl:flex-row justify-between items-center ">
        <div className=" flex flex-col gap-8 ">
            <h1 className='text-center xl:text-left text-2xl sm:text4xl lg:text-5xl '>A good place<br/> to build your startup.</h1>
            <p className=' text-center xl:text-left text-xl md:text-2xl text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="flex flex-wrap items-center mt-8 justify-center xl:justify-normal">
                <div className='w-[25rem] md:w-[18rem] border border-gray-300 p-[2rem] rounded-lg'>
                    <img className='h-12 mb-6' src={capture} alt="" />
                    <h2 className='text-2xl'>1000 ft</h2>
                    <p className='text-lg text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className='w-[25rem] md:w-[18rem] border border-gray-300 p-[2rem] rounded-lg'>
                    <img className='h-12 mb-6' src={user} alt="" />
                    <h2 className='text-2xl'>80 members</h2>
                    <p className='text-lg text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className='w-[25rem] md:w-[18rem] border border-gray-300 p-[2rem] rounded-lg'>
                    <img className='h-12 mb-6' src={wifi} alt="" />
                    <h2 className='text-2xl'>100 mb/s</h2>
                    <p className='text-lg text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
        <div className="h-[45rem]  w-full mt-[2rem] flex justify-center xl:justify-end">
            <img className='h-full w-auto object-contain' src={tree} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Second

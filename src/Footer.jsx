import React from 'react'
import logo from './assets/go-logo.svg'

const Footer = () => {
  return (
    <div className='w-full bg-[#151515]'>
      <div className='mx-[10%] py-[5rem] xl:mx-[25rem] flex justify-between items-center'>
        <h1 className='text-xl lg:text-4xl text-white'>Rue du Monte 47, 1000 <br /> Brussels, Belgium</h1>
        <div className="socials">
            <ul className='mt-[2rem] flex flex-col gap-2 text-2xl text-right text-[#555]'>
                <li className='font-semibold'>Facebook</li>
                <li className='font-semibold'>Twitter</li>
                <li className='font-semibold'>Instagram</li>
                <li className='font-semibold'>Linkedin</li>
            </ul>
        </div>
      </div>
      <hr className='border border-[#555]'/>
      <div className="mx-[10%] py-[5rem] xl:mx-[25rem] flex justify-between items-center">
        <div className="">
            <img src={logo} alt="" />
        </div>
        <div className=" text-[#555] text-xl">
            <p className=''>&copy; MADE WITH LOVE.</p>
        </div>
      </div >
    </div>
  )
}

export default Footer

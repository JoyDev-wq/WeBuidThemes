import React from 'react'
import go_logo from './assets/go-logo.svg'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center border-b border-gray-500 text-white px-[2.5rem] py-[2rem]'>
      <div className="flex justify-between items-center gap-7 text-xl">
        <img src={go_logo} className='w-[3.5rem] sm:w-[4rem] mr-[2rem]' alt=""/>
        <p className='hidden md:flex'>
            Home
        </p>
        <p className='hidden md:flex'>
            Pages
        </p>
        <p className='hidden md:flex'>
            Components
        </p>
      </div>

      <div className="text-lg sm:text-2xl">
        <p>Joydev Sarkar</p>
      </div>
    </div>
  )
}

export default NavBar

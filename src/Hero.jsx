import React from 'react'
import hero_bg from './assets/download.jpg'
import NavBar from './NavBar'
import HeroContent from './HeroContent'

const Hero = () => {
  return (
    <div className='h-screen w-full bg-cover bg-center' style={{
            background:`url(${hero_bg})`
    }}>
        <div className='h-full w-full inert-0 bg-black/40 z-0'>
          <div className=''/>
            <div>
                <NavBar/>
                <HeroContent/>
            </div>
        </div>
      
    </div>
  )
}

export default Hero

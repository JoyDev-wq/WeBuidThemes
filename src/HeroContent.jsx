
const HeroContent = () => {
  return (
    <div className='container mx-auto h-[85vh] w-full'>
      <div className="h-[100%] w-full flex flex-col justify-center items-center px-[5rem] md:px-[10rem]">
        <p className='text-5xl xl:px-[10%] md:text-6xl lg:text-7xl text-white text-center'>A <span className='font-bold'>coworking space</span> that feels like home.</p>
        <button className='text-[1.1rem] md:text-2xl font-light bg-white px-16 py-4 rounded-full mt-[3rem]'>Check Availablity</button>
      </div>
      {/* <img className='text-green-500 fill-current' src={capture} alt="" /> */}
    </div>
  )
}

export default HeroContent

import React from 'react'
import video from "../assets/Hero.mp4"
import logo from "../assets/logo.png";

const HeroSection = () => {
  return (
    <section className='relative h-screen flex justify-center items-center'>
    <div className='absolute inset-0 -z-20 h-full w-full overflow-hidden '>
        <video src={video} muted autoPlay loop poster="Hero" className="w-full object-cover"></video>
    </div>
    <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-transparent from-70% to-black"></div>
    <div className="h-screen relative z-20 flex flex-col justify-end pb-20">
        <img src={logo} alt="restoria" className="w-full p-4" />
        <p className="p-4 text-lg tracking-tighter text-white">Paris</p>
    </div>
</section>
  )
}

export default HeroSection
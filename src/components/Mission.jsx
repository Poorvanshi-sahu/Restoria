import React from 'react';
import missionImg from "../assets/mission.jpeg";
import missionVideo from "../assets/mission.mp4";

const MISSION =
  "At our restaurant, our mission is to create delicious and memorable dining experiences.";

const Mission = () => {
  return (
    <section className='mission px-1'>
        <div className="container mx-auto text-center">
            <h2 className='mb-8 text-3xl lg:text-4xl'>Our Mission</h2>
            <div className='relative flex items-center justify-center '>
                <video className='w-full rounded-3xl' muted autoPlay loop playsInline poster={missionImg}>
                    <source src={missionVideo} type='video/mp4'/>
                </video>
                <div className='w-full h-full rounded-3xl absolute bg-black/50'>
                </div>
                 <p className='absolute max-w-lg tracking-tighter lg:text-3xl'>{MISSION}</p>
            </div>
        </div>
    </section>
  )
}

export default Mission
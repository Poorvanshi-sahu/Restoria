import React from 'react'
import about from "../assets/About.jpg"

const ABOUT = {
    header: "We love cooking!",
    content:
      "At Restaura, we believe that great food goes beyond taste; it tells a story of dedication and creativity. From our chef's signature creations to our attentive service, every detail is curated to ensure your visit is nothing short of exceptional. Whether you're savoring our renowned Tikka Kebab or exploring our diverse menu inspired by global flavors, each dish is a celebration of flavor and innovation. Join us for a culinary journey where every bite leaves a lasting impression. Experience Restaura—where every meal is a masterpiece.",
};

const About = () => {
  return (
    <section className='container mx-auto mb-8' id='about'>
        <h2 className='mb-8 text-center text-3xl tracking-tighter lg:text-4xl'>About Us</h2>
        <div className='flex flex-wrap'>
            <div className='w-full p-4 lg:w-1/2'>
               <div className='lg:h-screen rounded-3xl lg:-rotate-3 overflow-hidden'>
                 <img src={about} alt=""/>
               </div>
            </div>
            <div className='w-full p-4 lg:w-1/2'>
                <h2 className='text-4xl tracking-tighter lg:text-6xl'>
                    {ABOUT.header}
                </h2>
                <div className='mb-8 mt-1 h-2 w-36 bg-rose-300 lg:-rotate-3'></div>
                <p className='m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl'>{ABOUT.content}</p>
            </div>
        </div>
    </section>
  )
}

export default About
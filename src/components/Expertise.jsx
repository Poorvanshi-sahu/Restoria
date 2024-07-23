import React from 'react';
import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import indian from "../assets/indian.jpeg";

const CUSINES = [
    {
      number: "01.",
      image: italian,
      title: "Italian",
      description:
        "Experience the flavors of Italy with our exquisite Italian cuisine, featuring traditional recipes and contemporary dishes.",
    },
    {
      number: "02.",
      image: japanese,
      title: "Japanese",
      description:
        "Delight in the art of Japanese culinary excellence, offering a fusion of classic and modern flavors.",
    },
    {
      number: "03.",
      image: indian,
      title: "Indian",
      description:
        "Indulge in the rich and diverse tastes of India, with a menu that celebrates the country's culinary heritage.",
    },
  ];

const Expertise = () => {
  return (
    <section id='expertise'>
        <h2 className='my-8 text-center text-3xl tracking-tighter lg:text-4xl'>
             Our Expertise
        </h2>
        <div className='container mx-auto px-4'>
            {
                CUSINES.map((cusine, index)=>{
                    return <div className='flex items-center border-b-4 border-dotted border-neutral-700/40 py-2' key={index}>
                            <div className='flex-shrink-0 pr-8 text-2xl'>{cusine.number}</div>
                            <div className='w-1/3 flex-shrink-0'>
                                 <img src={cusine.image} alt={cusine.title} className='h-auto rounded-3xl' />
                            </div>
                            <div className='pl-8'>
                                <h3 className='text-2xl uppercase tracking-tighter text-rose-300'>
                                    {cusine.title}
                                </h3>
                                <p className='mt-4 text-lg tracking-tighter'>{cusine.description}</p>
                            </div>
                    </div>
                })
            }
        </div>
    </section>
  )
}

export default Expertise
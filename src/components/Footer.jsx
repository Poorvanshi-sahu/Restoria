import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SOCIAL_MEDIA_LINKS = [
    {
      href: "https://x.com/",
      icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
    },
  
    {
      href: "https://x.com/",
      icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
    },
    {
      href: "https://x.com/",
      icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
    },
  ];

const Footer = () => {
  return (
    
    <div className='mb-8 mt-20'>
        <div className='flex justify-center items-center gap-8'>
            {
                SOCIAL_MEDIA_LINKS.map((link, index)=>{
                     return <a href={link.href} key={index} className='' target='_blank' rel="noopener noreferrer">{link.icon}</a>
                })
            }
        </div>
        <p className='mt-8 text-center tracking-tighter text-neutral-500'>
            &copy;compileTab. All rights reserved.
        </p>
    </div>
  )
}

export default Footer
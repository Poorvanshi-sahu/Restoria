import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from 'react-icons/fa';

const LINKS = [
    { text: "Dishes", targetId: "dishes" },
    { text: "About", targetId: "about" },
    { text: "Mission", targetId: "mission" },
    { text: "Expertise", targetId: "expertise" },
    { text: "Review", targetId: "review" },
    { text: "Contact", targetId: "contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = ()=>{
     setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const handleScroll = (event, targetID)=>{
    console.log(targetID);
      event.preventDefault();
      const targetElement = document.getElementById(targetID);
      console.log(targetElement);
      if(targetElement){
        const offSetTop = targetElement.offsetTop-80;
        window.scrollTo({
            top:offSetTop,
            behavior:'smooth'
        })  
      }
      setIsMobileMenuOpen(false)
  }

  return (
      <nav className='w-full fixed top-4 z-50 flex flex-col items-center justify-center'>
             <div className='flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg'>
                <img src={logo} alt="logo" width={80} height={22}/>
                <div className='hidden space-x-6 lg:flex'>
                    {LINKS.map((link, index)=>{
                        return <a href={`#${link.targetId}`} className={`text-sm hover:opacity-50 ${index!=0?'border-l-2 border-neutral-300/20 pl-2':""}`} onClick={(e)=>{handleScroll(e, link.targetId)}} key={index}>{link.text}</a>
                    })}
                </div>
                <div className='lg:hidden'>
                    <button onClick={toggleMobileMenu}>
                        {
                            isMobileMenuOpen?<FaTimes/>:<FaBars/>
                        }
                    </button>
                </div>
             </div>
             {
                isMobileMenuOpen && (
                    <div className='w-full backdrop-blur-lg lg:hidden'>
                        {
                            LINKS.map((link,index)=>{
                                return <a href={`#${link.targetId}`} className='block p-4 flex flex-col w-full uppercase tracking-tighter' onClick={(e)=>handleScroll(e,link.targetId)} key={index}>{link.text}</a>
                            })
                        }
                    </div>
                )
             }
      </nav>
  )
}

export default Navbar
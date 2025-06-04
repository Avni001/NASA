import React, { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

export default function Navbar() {

  const [open, close] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); 

  const Toggle = () => {
    close(!open);
  };

  const navMenu = [
    { href: "/", name: "Home" },
    { href: "/", name: "Missions" },
    { href: "/", name: "Humans in Space" },
    { href: "/", name: "Earth" },
    { href: "/", name: "The Solar System" },
    { href: "/", name: "The Universe" },
    { href: "/", name: "Science" },
    { href: "/", name: "Aeronautics" },
    { href: "/", name: "Technology" },
    { href: "/", name: "Learning Resources" },
    { href: "/", name: "About NASA" },
  ];

  const desktopDropdowns = [
    {
      name: 'News & Events',
      items: ['News Releases', 'Recently Published', 'Mission Updates','Blogs','Events','Virtual guest program','Media Resources']
    },
    {
      name: 'Multimedia',
      items: ['Images', 'Videos', 'Podcasts','NASA+','STEM Multimedia','e-books','Image of the day','Sounds & Ringtones']
    },
    {
      name: 'NASA+',
      items:[]
      
    }
  ];

  const handleDropdownToggle = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <div className='flex justify-between h-20 bg-black text-white items-center text-xl font-bold px-10 relative'>
      <div className='block md:hidden' onClick={Toggle}>
        {open ? <RxCross2 /> : <FaBars />}
      </div>

      {open && (
        <ul className="md:hidden flex flex-col gap-7 w-full absolute top-20 px-10 bg-black left-0 z-50">
          <div className='text-xl'>Back</div>
          <hr />
          {navMenu.map((items, key) => (
            <li key={key} className='text-xl flex flex-row justify-between'>
              {items.name}
              <IoIosArrowForward />
            </li>
          ))}
        </ul>
      )}

      <div className='hidden md:flex justify-between gap-10 items-center'>
        <div>Explore</div>
        <div><input className='border-1 border-white p-2' type="text" placeholder='Search' /></div>
      </div>

      <div>
        <img className='h-[70px] w-[80px]  ' src="https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg" alt="NASA Logo" />
      </div>

    
      <div className='hidden md:flex gap-10 relative'>
        {desktopDropdowns.map((menu, index) => (
          <div key={index} className="relative cursor-pointer" onClick={() => handleDropdownToggle(menu.name)}>
            <div className='flex items-center gap-1'>
              <span>{menu.name}</span>
              {menu.name === "NASA+" && (
                <button className='border border-red-700 px-2 text-sm'>LIVE</button>
              )}
            </div>
            
           
            {activeDropdown === menu.name && (
              <div className="absolute top-10 left-0 bg-black text-white p-4 text-sm w-52 shadow-lg z-50">
                {menu.items.map((item, key) => (
                  <p key={key} className="py-1 hover:text-gray-300 cursor-pointer">{item}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      
      <div className='block md:hidden'>
        <CiSearch />
      </div>
    </div>
  );
}














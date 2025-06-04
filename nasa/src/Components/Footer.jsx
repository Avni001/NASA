import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";





export default function Footer() {
  return (
    <div className='bg-black text-white flex flex-col gap-8 '>

        <div> <img className='px-10 mt-8' src="https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg" alt="" /></div>

     <div className='flex justify-around'>  

        <div className='w-[400px] flex flex-col gap-3'>
            <h1 className='text-2xl font-bold'>National Aeronautics and Space Administration</h1>
            <h1>NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery.</h1>
            <h1>About NASA's Mission</h1>
            <h1 className='text-2xl font-bold'>Join Us</h1>
        </div>

        <div className='flex flex-col gap-3'>
            <h1>Home</h1>
            <h1>News & Events</h1>
            <h1>Multimedia</h1>
            <h1>NASA+</h1>
            <h1>Missions</h1>
        </div>

        <div className='flex flex-col gap-3'>
            <h1>Humans in Space</h1>
            <h1>Earth</h1>
            <h1>The Solar System</h1>
            <h1>The Universe</h1>
            <h1>Science</h1>
        </div>

        <div className='flex flex-col gap-3'>
            <h1>Aeronautics</h1>
            <h1>Technology</h1>
            <h1>Learning Resources</h1>
            <h1>About NASA</h1>
            <h1>NASA en Espanol</h1>
        </div>

        <div className='flex flex-col gap-3'>
            <h1>Follow NASA</h1>
              <div className='flex flex-row gap-5'>
                <FaFacebook />
                <FaInstagram />
                <FaSquareXTwitter />
                <FaYoutube />





              </div>
            <h1>More NASA Social Accounts</h1>
            <h1>NASA Newsletters</h1>

        </div>
     </div> 

     <hr />

    </div>
  )
}

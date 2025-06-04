import React from 'react'

export default function Explore() {
  return (
    <div>
         <img className='h-[600px] w-full relative' src="https://www.nasa.gov/wp-content/uploads/2023/01/webb-tarantula-neb.png?resize=2000,1561" alt="" />

         <div className=' w-[600px] flex flex-col gap-10 absolute mt-[-400px] text-white px-20'>
            <h1 className='text-6xl font-bold'>Explore the Universe from your Inbox</h1>
               <div>
                 <h1 className='font-bold'>Stay up-to-date on the latest news from NASA-from Earth to the Moon, the Solar System and beyond.</h1>
                 <h1>We will never share your email address.</h1>
               </div>
            <h1 className='text-2xl font-bold'>Sign Up</h1>
         </div>

    </div>
  )
}

import React from 'react'

export default function Solarsystem() {
  return (
    <div className='flex flex-col gap-20'>
        <div className='flex justify-between px-30'>
            <h1 className='text-6xl font-bold'>Solar System Exploration</h1>
            <h1 className='text-2xl font-bold'>Discover More</h1>
        </div>


        <div className='flex justify-around px-30 text-white'>
            <div><img className='h-[450px] w-[300px] object-cover relative' src="https://science.nasa.gov/wp-content/uploads/2023/06/planets3x3-pluto-colormercury-axis-tilt-nolabels-1080p.00001-print.jpg" alt="" />
                  <h1 className='text-3xl font-bold absolute mt-[-90px] px-7'>Planets</h1>
            </div>


            <div><img className='h-[450px] w-[300px] object-cover relative' src="https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/releases/2017/04/STScI-01EVSG4P65KZZHCK1KJ9K32FEJ.png" alt="" />
                 <h1 className='text-3xl font-bold absolute mt-[-90px] px-7'>Moons</h1>
            </div>


            <div><img className='h-[450px] w-[300px] object-cover relative' src="https://science.nasa.gov/wp-content/uploads/2018/07/bennu-banner-1920x640-1.jpg" alt="" />
                    <h1 className='text-3xl font-bold w-[300px] absolute mt-[-90px] px-7'>Asteroids,Comets & Meteors</h1>
            </div>


            <div><img className='h-[450px] w-[300px] object-cover relative' src="https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/mission/35th-anniversary/stargazing-banner-2_crop.jpg" alt="" />
                 <h1 className='text-3xl font-bold absolute mt-[-90px] px-7'>Skywatching</h1>
            </div>

        </div>
    </div>
  )
}

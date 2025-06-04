import React from 'react'

export default function News() {
    return (
        <div className='flex flex-col gap-12'>
            <div className='flex justify-between px-10'>
                <h1 className='text-6xl font-bold'>Featured News</h1>
                <h1 className='text-3xl font-bold'>Recently Published</h1>
            </div>

            <div className='flex justify-around'>
                <div className=''><img className='h-[400px] w-[600px] relative ' src="https://images-assets.nasa.gov/image/iss073e0078897/iss073e0078897~large.jpg?w=1920&h=1280&fit=crop&crop=faces%2Cfocalpoint" alt=""  />
                    <h1 className=' text-white absolute mt-[-100px] font-bold px-3'>3 MIN READ</h1>
                    <div className='absolute mt-[-70px] w-[600px]'>
                       <h1 className='text-white text-2xl  font-bold px-3'>Crew works on Spacesuits,Life Support as Human Research Continues</h1>

                    </div>
                </div>

                <div className=''> <img className='h-[400px] w-[400px] object-cover relative ' src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/mars/resources/detail_files/3850_1marsglobe1-full2.jpg" alt="" />
                     <h1 className='absolute mt-[-100px] text-white px-3'>4 MIN READ</h1>
                     <h1 className='absolute mt-[-70px] text-white text-2xl font-bold w-[400px] px-3'>NASA'S MAVEN Makes First Observation of Atmospheric Sputtering at Mars</h1>
                </div>

                <div className='flex flex-col gap-5'>
                    <img className='h-[190px] w-[300px] relative' src="https://www.nasa.gov/wp-content/uploads/2025/05/orion-spacecraft.jpg" alt="" />
                      <div className='absolute mt-[70px] text-white' >
                         <h1 className=''>2 MIN READ</h1>
                         <h1 className='text-2xl w-[300px] font-bold '>NASA Marks Milestones for Artemis III Orion Spacecraft at Kennedy</h1>
                      </div>

                    <img className='h-[190px] w-[300px] relative' src="https://www.nasa.gov/wp-content/uploads/2025/05/lprt.jpg?resize=1536,1477" alt="" />
                        <div className='absolute mt-[270px] text-white'>
                                <h1 className=''>5 MIN READ</h1>
                                 <h1 className=' text-2xl  w-[300px] font-bold'>Eccentric 'Star' Defies Easy Explanation,NASA'S Chandra Finds</h1>
                        </div>

                </div>
            </div>

            


            <div className='flex flex-row justify-between px-10'>

                <div className='  flex '>
                    <img className='h-[90px] w-[90px] rounded-full object-cover' src="https://assets.science.nasa.gov/dynamicimage/assets/science/cds/general/images/2023/08/pia24473-psyche-spacecraft-16.jpg" alt="" />
                    <div>
                        <h1>2 MIN READ</h1>
                        <h1 className='font-bold'>NASA'S Psyche Spacecraft Using backup fuel line </h1>
                    </div>

                </div>


                <div className='flex'>
                    <img className='h-[90px] w-[90px] rounded-full object-cover' src="https://science.nasa.gov/wp-content/uploads/2023/04/EZIE_3Sats_2022-scaled-1.jpg" alt="" />
                    <div>
                        <h1>2 MIN READ</h1>
                        <h1 className='font-bold'>NASA'S EZIE Begins study of Auroral Electrojets</h1>
                    </div>
                </div>

                <div className='flex'>
                    <img className='h-[90px] w-[90px] rounded-full object-cover' src="https://images-assets.nasa.gov/image/PIA26336/PIA26336~large.jpg" alt="" />
                    <div>
                        <h1>5 MIN READ</h1>
                        <h1 className='font-bold'>Percolating Clues:NASA Models new way to build Planetary cores</h1>
                    </div>
                </div>

                <div className='flex'>
                    <img className='h-[90px] w-[90px] rounded-full object-cover' src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/planetary-science-division/2025/Landscape_onSurface.jpg" alt="" />
                    <div>
                        <h1>6 MIN READ</h1>
                        <h1 className='font-bold'>NASA'S Dragonfly Mission Sets sights on Titan's Mysteries </h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

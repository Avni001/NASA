import React from 'react';

export default function Home() {
    return (
        <div>
            {/* <video autoPlay className='w-full relative'>
                <source src="https://res.cloudinary.com/doiazps20/video/upload/v1748413716/videoplayback_s5oigz.mp4" type="video/mp4" />
                {/* <source src="https://res.cloudinary.com/doiazps20/video/upload/v1748413716/videoplayback_s5oigz.mp4" type="video/ogg" /> 
                
             </video> */} 

            <div><img className='w-full h-[700px] relative' src="https://assets.science.nasa.gov/dynamicimage/assets/science/missions/webb/science/2025/webb-STScI-01JTRMS6MK2TVR1NFHRVEVK3RC-4K.tif?w=1536&h=864&fit=crop&crop=faces%2Cfocalpoint" alt="" /></div>


            <div className='h-[300px] w-[950px] text-white flex flex-col gap-7 absolute top-60 ml-7'>
                <h1 className='text-7xl font-bold'>For the Benefit of All</h1>
                <h1 className='text-2xl'>Nasa investigates the unknown in space,innovates for the benefit of humanity and inspires the world through discovery </h1>
                 <button className='text-white bg-red-500 text-2xl p-2 w-70 rounded-sm font-bold'>NASA MISSIONS</button>
            </div>

            <div className='flex flex-row gap-20 text-white absolute top-150 text-2xl'>
                <hr />
                <div>
                    <h1 className='text-sm'>CREWED LUNAR FLYBY</h1>
                    <h1 className='font-bold'>Artemis II</h1>
                </div>
                <hr />
                <div>
                    <h1 className='text-sm'>PLANETARY DEFENSE</h1>
                    <h1 className='font-bold'>Neo Surveyer</h1>
                </div>
                <hr />
                <div>
                    <h1 className='text-sm'>COSMIC WONDERS</h1>
                    <h1 className='font-bold'>Artemis II</h1>
                </div>
            </div>

        </div>




    );
}

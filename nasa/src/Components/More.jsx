import React from 'react'

export default function More() {
  return (
    <div className='flex flex-col gap-10'>
        <h1 className='text-5xl font-bold px-30'>More Topics From NASA</h1>

        <div className='flex justify-around px-30 text-white'>
            <div>
                <img className='h-[450px] w-[300px] object-cover relative' src="https://www.nasa.gov/wp-content/uploads/2022/08/jsc2022e046413_orig.jpg?resize=1536,864" alt="" />
                <h1 className='text-3xl font-bold absolute mt-[-90px] px-7'>Missions</h1>
            </div>

            <div>
                <img className='h-[450px] w-[300px] object-cover relative' src="https://www.nasa.gov/wp-content/uploads/2022/12/51476067951-e10dfb6875-o.jpg?resize=1536,1024" alt="" />
                <h1 className='text-3xl font-bold absolute mt-[-90px] px-7'>Humans In Space</h1>
            </div>

            <div>
                <img className='h-[450px] w-[300px] object-cover relative' src="https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001016/GSFC_20171208_Archive_e001016~large.jpg" alt="" />
                <h1 className='text-3xl font-bold absolute mt-[-90px] px-7'>Earth</h1>
            </div>

            <div>
                <img className='h-[450px] w-[300px] object-cover relative' src="https://science.nasa.gov/wp-content/uploads/2023/06/solar-system-illustration-16x9-1.jpg" alt="" />
                <h1 className='text-3xl font-bold absolute mt-[-90px] px-7'>Our Solar System</h1>
            </div>
        </div>


          <div className='flex justify-around px-30 text-white'>
            <div>
                <img className='h-[450px] w-[300px] object-cover relative' src="https://science.nasa.gov/wp-content/uploads/2023/09/ngc5068-1-flat-final.jpg" alt="" />
                <h1 className='text-3xl font-bold absolute mt-[-90px] px-7'>Universe</h1>
            </div>

            <div>
                <img className='h-[450px] w-[300px] object-cover relative' src="https://science.nasa.gov/wp-content/uploads/2023/04/hubble_faq_image-jpg.webp" alt="" />
                <h1 className='text-3xl font-bold absolute mt-[-90px] px-7'>Science Missions</h1>
            </div>

            <div>
                <img className='h-[450px] w-[300px] object-cover relative' src="https://www.nasa.gov/wp-content/uploads/2024/01/p23-168-087.jpg?resize=1536,1024" alt="" />
                <h1 className='text-3xl font-bold absolute mt-[-90px] px-7'>Aeronautics</h1>
            </div>

            <div>
                <img className='h-[450px] w-[300px] object-cover relative' src="https://www.nasa.gov/wp-content/uploads/2022/12/nasa_technology1.png" alt="" />
                <h1 className='text-3xl font-bold absolute mt-[-90px] px-7'>Technology</h1>
            </div>
        </div>
    </div>

  )
}

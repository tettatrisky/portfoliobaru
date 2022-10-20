import React from 'react'
import Img from "../assets/portfolio/portfolio1.PNG"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

const portfolio = () => {
  return (
    <div name="portfolio" className='bg-black w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-6'>
                <p className='text-4xl font-bold inline border-b-2'>Portfolio</p>
                <p className='py-6 text-xl'>Most Recent Work</p>
            </div>
            <div className='grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                <div className='shadow-md rounded-lg'>
                    <img src={Img} alt="" className='rounded-md duration-200 hover:scale-105'/>
                </div>
                <div className='mx-'>
                    <p className='text-xl font-bold'>Slicing Website DOTA 2</p>
                    <p className='text-lg font-semibold py-4'>I created this Web class using Languages HTML, tailwindCSS (Not Responsive)</p>

                </div>
                <div className='py-10'>
                <a href="https://tettatriskyslicingweb.netlify.app/"> <button className='text-white w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-emerald-400 to-blue-400 cursor-pointer'>Demo <HiOutlineArrowNarrowRight size={15} className="ml-2 mt-1"/></button></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default portfolio
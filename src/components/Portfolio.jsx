import React from 'react'
import Dota from "../assets/portfolio/portfolio1.jpg"
import HealthCare from "../assets/portfolio/portfolio2.jpg"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

const portfolio = () => {
  return (
    <div name="portfolio" className='bg-gradient-to-r from-black to-blue-900 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-6'>
                <p className='text-4xl font-bold inline border-b-2'>Portfolio</p>
                <p className='py-6 text-xl'>Most Recent Work</p>
            </div>
            <div className='grid sm:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            <div className='shadow-md rounded-lg shadow-gray-600 w-auto'>
                    <img src={Dota} alt="" className='rounded-md duration-200 hover:scale-105 h-[200px]'/>
                </div>
                <div className=''>
                    <p className='text-xl font-bold'>Slicing Website DOTA 2</p>
                    <p className='text-lg font-semibold py-4'>I created this Web class using Languages HTML, tailwindCSS (Not Responsive)</p>
                <a href="https://tettatriskyslicingweb.netlify.app/"> <button className='text-white px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-emerald-400 to-blue-400 cursor-pointer'>Demo <HiOutlineArrowNarrowRight size={15} className="ml-2 mt-1 "/></button></a>
                </div>
            </div>
            <div className='grid sm:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-10'>
            <div className='shadow-md rounded-lg shadow-gray-600 w-auto'>
                    <img src={HealthCare} alt="" className='rounded-md duration-200 hover:scale-105 h-[200px]'/>
                </div>
                <div className=''>
                    <p className='text-xl font-bold'>Create Website Healthcare</p>
                    <p className='text-lg font-semibold py-4'>I created this Web from school and class using Languages HTML, tailwindCSS (Not Responsive)</p>
                <a href="https://healtcare1.netlify.app/"> <button className='text-white px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-emerald-400 to-blue-400 cursor-pointer'>Demo <HiOutlineArrowNarrowRight size={15} className="ml-2 mt-1 "/></button></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default portfolio
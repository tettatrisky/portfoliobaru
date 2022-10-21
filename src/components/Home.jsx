import React from 'react'
import Img from "../assets/tetta.png"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import {Link} from "react-scroll"
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-r from-black to-blue-900'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='text-white flex flex-col justify-center h-full'>
                <h2 className='text-3xl sm:text-5xl font-bold'>My Introduction</h2>
                <p className='text-gray-400 py-4 max-w-end'>Hello, My Name is Tetta Trisky Theovana, I am 19 Years Old. I Study at University Unikom and I majored in Information engineering.My achievement is to become fullstack developer.</p>
                <div> 
                    <Link to="portfolio" smooth duration={500} className=' text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-emerald-400 to-blue-400 cursor-pointer'>
                        Portfolio
                        <span>
                        <HiOutlineArrowNarrowRight size={15} className="ml-2 mt-1"/>
                        </span>
                    </Link>
                </div>
            </div>
            <div className=''>
                <img src={Img} alt="potoku" className=" rounded-2xl mx-auto w-2/3" />
            </div>
        </div>
    </div>
  )
}

export default Home
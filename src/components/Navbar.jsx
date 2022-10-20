import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"

const NavBar = () => {

  const [nav,setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: "home"
    },
    {
      id: 2,
      link: "about"
    },
    {
      id: 3,
      link: "portfolio"
    },
    {
      id: 4,
      link: "experience"
    },
    {
      id: 5,
      link: "contact"
    },
  ]
  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4'>
      <div>
        <h1 className='text-2xl mx-5'>MyPortfolio</h1>
      </div>
      <ul className='hidden md:flex'>
        {links.map(({ id, link}) => (
        <li key={id} className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200'>
        {link}
        </li>
        ))} 

      </ul>
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-white md:hidden'>
        {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>
      
      {nav && (
      <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-white'>
      {links.map(({ id, link}) => (
        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-2xl'>
        {link}
        </li>
        ))} 
      </ul>
      )}
    </div>
  )
}

export default NavBar
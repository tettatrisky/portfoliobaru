import React from 'react'
import html from "../assets/html.png"
import javascript from "../assets/javascript.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import css from "../assets/css.png"

const MySkills = () => {

    const skills =[
        {
            id: 1,
            src: html,
            title:"HTML",
            style:"shadow-orange-500"
        }, 
        {
            id: 2,
            src: css,
            title:"CSS (Still Learn)",
            style:"shadow-blue-500"
        },
        {
            id: 3,
            src: javascript ,
            title:"Javascript (Still Learn)",
            style:"shadow-yellow-500"
        },
        {
            id: 4,
            src: tailwind,
            title:"TailwindCSS (Still Learn,cant be responsive)",
            style:"shadow-emerald-500"
        },
        {
            id: 5,
            src: react,
            title:"ReactJS (Still Learn)",
            style:"shadow-sky-500"
        }
    ]

  return (
    <div name="myskills" className='bg-gradient-to-r from-black to-blue-900 h-full'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div className='mt-48'>
            <p className='text-4xl font-bold border-b-2 p-2 inline '>My Skills</p>
        </div>

        <div className='w-full grid grid-cols-2 sm-grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

            {
                skills.map(({id,src,title,style})=> (
                    <div key={id} className={`shadow-md mt-10 hover:scale-105 duration-200 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='mx-auto w-32'/>
                    <p className='mt-4'>{title}</p>
                    </div>
                ))
            }


            </div>
        </div>
    </div>
  )
}

export default MySkills
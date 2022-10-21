import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-full bg-gradient-to-r from-black to-blue-900 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-10'>
                <p className='text-4xl font-bold inline border-b-2 '>Contact Me</p>
                <p className='pt-6'>Submit Form</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/f060f867-e3c2-4f51-a493-abab37772df0" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md focus:outline-none' />
                    <input type="text" name="email" placeholder='Enter your email' className='p-2 my-4 bg-transparent border-2 rounded-md focus:outline-none'/>
                    <textarea name="message" rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md focus:outline-none'></textarea>
                    <button className='w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-emerald-400 to-blue-400 cursor-pointer h-9 mx-48 mt-8'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
import React from 'react'
import {FaWhatsapp, FaFacebook, FaInstagram} from 'react-icons/fa'

const SocialMedia = () => {
const links = [
    {
        id: 1,
        logo: (
            <>
                    Whatsapp <FaWhatsapp size={30}/>
            </>
        ),
        href: 'https://wa.me/6282216637745'
    },
    {
        id: 1,
        logo: (
            <>
                    Facebook <FaFacebook size={30}/>
            </>
        ),
        href: 'https://www.facebook.com/tettatriskyy'
    },
    {
        id: 1,
        logo: (
            <>
                    Instagram <FaInstagram size={30}/>
            </>
        ),
        href: 'https://www.instagram.com/tettatrisky/'
    },
]

  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
        <ul>

            {links.map(({id, logo, href}) => (

            <li key={id} className='flex bg-gray-500 h-11 justify-between items-center w-40 h-12 px-4 bg-black ml-[-110px] hover:rounded-md hover:ml-[-10px] duration-300 bg-gray-500'>
                <a href={href} className='flex justify-between items-center w-full text-white '>
                    {logo}
                </a>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default SocialMedia
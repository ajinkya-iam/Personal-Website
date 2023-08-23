import React from 'react'
import logo from "../image/logo.png"

const Navbar = () => {
    return (
        <div className='flex flex-col h-[96px] w-full max-w-[1080px] mx-auto pt-10 items-start gap-4'>
            <div className='flex items-center gap-3'>
                <img src={logo} className='w-[38px] h-[38px] object-contain' />
                <h1 className='text-white font-sans font-medium -mt-1.5'>Ajinkya Shinde</h1>
            </div>

            <ul className='flex mt-4 gap-8'>
                <li className='text-white hover:font-medium font-light'>Overview</li>
                <li className='text-white hover:font-medium font-light'>Experince</li>
                <li className='text-white hover:font-medium font-light'>Projects</li>
                <li className='text-white hover:font-medium font-light'>Contact</li>
            </ul>

            <div className='bg-gray-800 -mt-2 py-[0.1px] w-full'></div>

        </div>
    )
}

export default Navbar

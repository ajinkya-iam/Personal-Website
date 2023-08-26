import React from 'react'

import { data } from "../assets/Data"
import { Button } from 'antd'

const LeftSidebar = () => {
    return (
        <div className='w-[450px] flex flex-col items-center'>

            <img src={data.personl_info.profile_url} className='w-[200px] h-[200px] object-contain rounded-full' />
            <h1 className='text-2xl font-bold tracking-wider mt-4 uppercase'>{data.personl_info.name}</h1>
            <p>{data.personl_info.role}</p>
            <Button className='text-white w-[250px] mt-4 uppercase tracking-wider font-medium'>Contact Me</Button>

            <div className='w-[250px]'>
                <div className='flex gap-4 mt-4 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                    </svg>
                    <p>{data.personl_info.current_company}</p>
                </div>
                <div className='flex gap-4 mt-4 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <p>{data.personl_info.location}</p>
                </div>
            </div>

            <div className='flex flex-col w-[250px] mt-4'>
                <div className='border-b border-neutral-800 w-full p-1'></div>
                <h1 className='mt-4 font-bold text-lg'>Experience</h1>
                {
                    data.experience.map((item) => (
                        <div className='w-full border rounded-md border-neutral-900 p-3 mt-2'>
                            <h1 className='font-bold'>{item.company}</h1>
                            <p className='text-xs'>{item.role}<span className='bg-neutral-800 px-1 ml-1 rounded-md'>{item.job_type}</span></p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default LeftSidebar
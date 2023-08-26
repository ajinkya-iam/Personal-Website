import React from 'react'

import { data } from '../assets/Data'

const Project = () => {
    return (
        <div className='flex flex-col'>
            <h1 className='py-4 font-bold text-lg'>Projects</h1>
            <div className='grid grid-cols-2 gap-3 w-full items-center'>
                {data.projects.map((item) => (
                    <div className='flex flex-col w-full border rounded-md border-neutral-900 px-5 py-4'>
                        <h1 className='font-bold'>{item.project_name}</h1>
                        <h1 className='text-xs'>{item.language}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project
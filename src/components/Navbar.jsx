import React from 'react'
import logo from "../image/logo.png"
import { Tabs } from 'antd'
import Project from '../pages/Project';
import Overview from '../pages/Overview';
import Experience from '../pages/Experiience';
import Contact from '../pages/Contact';

const Navbar = () => {


    const onChange = (key) => {
        console.log(key);
    };

    const items = [
        {
            key: '1',
            label: 'Overview',
            children: <Overview />,
        },
        {
            key: '2',
            label: 'Experience',
            children: <Experience/>,
        },
        {
            key: '3',
            label: 'Projects',
            children: <Project />,
        },
        {
            key: '4',
            label: 'Contact',
            children: <Contact/>,
        },
    ];

    return (
        <div className='flex flex-col h-[96px] w-full bg-black max-w-[1080px] mx-auto pt-10 items-start gap-4'>
            <div className='flex items-center gap-3'>
                <img src={logo} className='w-[38px] h-[38px] object-contain' />
                <h1 className='text-white font-sans font-medium -mt-1.5'>Ajinkya Shinde</h1>
            </div>

            <Tabs className='w-full text-white' defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    )
}

export default Navbar

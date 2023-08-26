import React, { useState } from 'react';
import { Badge, Button } from 'antd';
import { data } from '../assets/Data.js'
import About from '../components/About.jsx';
import LeftSidebar from '../components/LeftSidebar.jsx';
import Project from '../components/Project.jsx';

const Overview = () => {

    return (
        <div className='flex'>
            <LeftSidebar />
            <div className='flex flex-col w-full gap-7'>
                <About />
                <Project/>
            </div>
        </div>
    );
};

export default Overview;

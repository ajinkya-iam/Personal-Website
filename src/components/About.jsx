import React from 'react'

import { data } from '../assets/Data'

const About = () => {
    return (
        <div className='flex flex-col w-full items-center'>
            <div className='flex flex-col w-full items-center border rounded-md border-neutral-900 px-5 py-8'>
                <h1 className="text-center text-4xl font-extrabold py-4">Hi 👋, I'm <span className='uppercase'>{data.personl_info.name}</span></h1>
                <div className='border-b border-neutral-800 w-full p-1'></div>
                <h3 className="text-center text-xl font-extrabold mt-8">{data.personl_info.role}</h3>

                <h3 className="text-center text-xl font-extrabold mt-4">Know / Using</h3>

                <div className='flex gap-2 mt-10'>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg" alt="android" width="40" height="40" />

                    <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40" />

                    <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" />

                    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" />

                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40" />

                    <img src="https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" alt="kotlin" width="40" height="40" />

                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40" />

                    <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40" />
                </div>
            </div>
        </div>
    )
}

export default About
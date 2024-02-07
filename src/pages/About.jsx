import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const About = () => {

    return (
        <div className='w-full h-[85vh] max-sm:pb-10 max-sm:h-ful overflow-auto flex justify-evenly items-center max-sm:flex-col max-sm:gap-10 max-sm:justify-start'>
            <div className='relative w-[470px] aspect-square max-sm:w-[300px] flex justify-center items-center rounded-full'>
                <img src="profile_bg.png" className='absolute bottom-0 left-0' alt="profile_background" />
                <img src="profile.png" className='z-10 rounded-full mb-7 max-sm:mb-0 w-[70%]' alt="subramanyam" />
            </div>
            <div className='text-white w-[43%] max-sm:w-[90%] flex flex-col gap-7 max-sm:gap-5'>
                <h1 className='font-extrabold text-5xl max-sm:text-3xl capitalize'>about me</h1>
                <p style={{ lineHeight: '23px' }} className='text-base max-sm:text-[15px] text-justify'>
                    Iam a Passionate Full stack web developer with a strong dedication to creating beautiful,
                    functional, and user-friendly responsive websites. So iam looking for an oppurtunity
                    to start my career as a web developer to use and enhance my skills as a professional .
                    Feel free to explore my portfolio to see diverse range of projects i have created .
                </p>
                <Link to='/projects' style={{ alignSelf: 'flex-end' }} className='bg-[#05f0f8bd] w-fit pl-[2px] flex items-center gap-2 py-[2px] pr-2 '>
                    <span className='bg-black px-6 max-sm:px-3 py-[3px] max-sm:py-[1px] text-lg max-sm:text-base font-bold'>projects</span>
                    <FaArrowRightLong className='text-gray-900 max-sm:text-xs' />
                </Link>
            </div>
        </div>
    )
}

export default About

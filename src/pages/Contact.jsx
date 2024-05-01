import React from 'react'
import { MdLocalPhone, MdEmail } from "react-icons/md";


const Contact = () => {
    return (
        <div className='text-white w-full h-[86vh] flex items-center justify-center gap-[85px] max-sm:gap-[86px] flex-col max-sm:pl-3'>
            <h1 className='font-extrabold capitalize text-5xl mr-[45px] max-sm:mr-[80px] relative z-10 contact_heading max-sm:text-3xl'>contact me</h1>
            <footer className='z-20 text-lg max-sm:text-sm font-semibold'>
                <span className='relative contact_phone '>
                    <MdLocalPhone className='inline text-2xl mr-4 max-sm:mr-3' />
                    7329027835 || 9398534218
                </span>
                <br />
                <span className='relative contact_email'>
                    <MdEmail className='inline text-2xl mr-4 max-sm:mr-3' />
                    gsubramanyam933@gmail.com
                </span>
            </footer>
        </div>
    )
}

export default Contact
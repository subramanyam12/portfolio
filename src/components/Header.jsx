import React from 'react'
import { PiGithubLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Navbar from './Navbar';

const ICONS = [[PiGithubLogoFill, 'github.com/subramanyam12', 'black', 'white'], [FaLinkedinIn, 'linkedin.com/in/ganta-subramanyam', 'white', '#0068c2'], [SiLeetcode, 'leetcode.com/siddu143s', 'orange', 'rgba(255,255,255,0.2)']]
const Header = () => {

  return (
    <header className='w-[95%] h-14 z-20 max-sm:h-10 max-sm:pb-4 px-6 max-sm:px-4 flex items-center justify-between rounded-[30px] text-white '>
      <h1 className='text-2xl max-sm:text-lg font-bold capitalize border-[1px] border-gray-600 bg-[#ffffff18] px-6 max-sm:px-4 py-[2px] rounded-full '>portfolio</h1>
      <nav className='flex gap-14 max-sm:gap-5 items-center max-sm:flex-row-reverse h-full'>

        <Navbar />

        <div className='flex gap-3'>
          {ICONS.map(([Icon, link, color, bgColor]) => (
            <div key={Icon} style={{ color: color, backgroundColor: bgColor }} className='icon_shadow rounded-lg text-2xl max-sm:text-xl p-1' >
              <a href={`https://${link}`} target='_blank'><Icon /></a>
            </div>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header

import React,{useRef,useEffect,useContext} from 'react'
import {TbBrandGithubFilled} from 'react-icons/tb'
import {TiSocialLinkedin} from 'react-icons/ti'
import {SiLeetcode} from 'react-icons/si'
import Popup from './Popup'
import { scrollvalue } from '../App'

const About = () => {
  
  const {sethighlight} = useContext(scrollvalue)
  const Aboutref=useRef()
  
  useEffect(()=>{
    let child = Aboutref.current.getBoundingClientRect()
  
     Aboutref.current.parentNode.addEventListener('scroll',()=>{
      // console.log(child.top,child.bottom);
       if(child.top<=0 && child.bottom >=0){
         sethighlight('About')
       }
     })
    },[])

  return (
    <div ref={Aboutref} className='flex flex-col justify-center gap-10 '>
         <h1 className='relative uppercase font-bold text-5xl max-sm:mb-10 max-sm:text-4xl'>ganta <span className='text-[#E36858] max-sm:ml-[15%] max-sm:absolute -bottom-[40px] right-0'>subramanyam</span></h1>
         <p className='text-lg leading-8 text-justify text-gray-700 indent-[200px]'>Iam a Passionate Full stack web developer with a strong dedication to creating beautiful, functional, and user-friendly responsive websites. So iam looking for an oppurtunity to start my career as a web developer to use and enhance my skills as a professional .
         Feel free to explore my portfolio to see diverse range of projects i have created .
         </p>
         <div className=' flex gap-10 justify-center'>
            <a href="https://github.com/Subramanyam12" target='_blank' className='relative flex justify-center group bg-white border-[1px] text-5xl border-gray-400 duration-300 rounded-full p-1 cursor-pointer'>
                <TbBrandGithubFilled  />
                <Popup name='Github'/>
            </a>
            <a href='https://linkedin.com/in/subramanyam-ganta-499410252' target='_blank' className='relative group flex justify-center bg-blue-600 text-white border-[1px] border-gray-400 text-[52px] rounded-full px-[2px] cursor-pointer'>
                <TiSocialLinkedin />
                <Popup name='Linkedin'/>
            </a>
            <a href='https://leetcode.com/siddu143s/' target='_blank' className='relative group flex justify-center items-center bg-gray-600 text-white border-[1px] border-gray-400 text-4xl  px-[10px] rounded-full cursor-pointer'>
                <SiLeetcode className='text-[#fab133]'/>
                <Popup name='Leetcode'/>
            </a>
         </div>
    </div>
  )
}

export default About
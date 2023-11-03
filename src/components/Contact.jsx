import React,{useEffect,useRef,useContext} from 'react'
import {MdEmail} from 'react-icons/md'
import {FaPhone} from 'react-icons/fa'
import {TbBrandGithubFilled} from 'react-icons/tb'
import {TiSocialLinkedin} from 'react-icons/ti'
import {SiLeetcode} from 'react-icons/si'
import Popup from './Popup'
import { scrollvalue } from '../App'

const Contact = () => {
  
  const {sethighlight} = useContext(scrollvalue)
  const Contactref=useRef()
 
  
  useEffect(()=>{
      let child = Contactref.current.getBoundingClientRect()
      Contactref.current.parentNode.addEventListener('scroll',()=>{
        if(child.top<=0 && child.bottom >=0){
          sethighlight('Contact')
        }
      })
    },[])

  return (
    <div ref={Contactref}>
      <h1 className='text-5xl max-sm:text-4xl font-bold'>Contact Details</h1>
      <div className='flex max-sm:w-[80vw] text-lg font-semibold flex-col gap-5 max-sm:gap-3 m-10 max-sm:m-7'>
        <span className='flex items-center gap-3'><MdEmail /> gsubramanyam933@gmail.com</span>
        <span className='flex items-center gap-3'><FaPhone /> 9398534218</span>
        <div className=' flex gap-10 max-sm:mt-10 justify-center'>
            <a href="https://github.com/Subramanyam12" target='_blank' className='relative flex justify-center group bg-white border-[1px] text-5xl border-gray-400 duration-300 rounded-full p-1 cursor-pointer'>
                <TbBrandGithubFilled  />
                <Popup name='Github'/>
            </a>
            <a href='https://linkedin.com/in/subramanyam-ganta-499410252' target='_blank' className='relative group flex justify-center bg-blue-600 text-white border-[1px] border-gray-400 text-[52px] rounded-full px-[2px] cursor-pointer'>
                <TiSocialLinkedin />
                <Popup name='Linkedin'/>
            </a>
            <a href='https://leetcode.com/siddu143s/' target='_blank' className='relative group flex justify-center items-center bg-gray-600 text-white border-[1px] border-gray-400 text-4xl px-[10px] rounded-full cursor-pointer'>
                <SiLeetcode className='text-[#fab133]'/>
                <Popup name='Leetcode'/>
            </a>
         </div>
      </div>
    </div>
  )
}

export default Contact
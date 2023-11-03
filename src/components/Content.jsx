import React,{useRef,useEffect,useContext, useState} from 'react'
import About from './About'
import Education from './Education'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import { scrollvalue } from '../App'

const Content = () => {
  const Contentref=useRef()
  const {scroll} = useContext(scrollvalue)
  

  useEffect(()=>{
    const child=Contentref.current.children[scroll]
    child.scrollIntoView({ behavior: 'smooth',block:scroll===3 ?'start':'center'})
  },[scroll])
  
  return (
    <div ref={Contentref} className='w-[80%] max-sm:w-full pt-[30vh] max-sm:pt-[20vh] overflow-y-auto content-scroll font-serif flex flex-col gap-20 px-10 max-sm:pl-4 max-sm:pr-3 bg-[#f1d9ca]'>
       <About />
       <Education />
       <Skills />
       <Projects />
       <Contact />
    </div>
  )
}

export default Content
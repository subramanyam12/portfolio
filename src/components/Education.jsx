import React,{useEffect,useRef,useContext} from 'react'
import { scrollvalue } from '../App'

const Education = () => {
  
  const {sethighlight} = useContext(scrollvalue)

  const Educationref=useRef()
  useEffect(()=>{
    Educationref.current.parentNode.addEventListener('scroll',()=>{
      let child = Educationref.current.getBoundingClientRect()
      if(child.top<=200 && child.bottom >=0){
        sethighlight('Education')
      }else if(child.top>400 && child.bottom>1000){
        sethighlight('About')
      }
    })
  },[])

  return (
    <div ref={Educationref} className='flex flex-col gap-10'>
        <h1 className='text-5xl max-sm:text-4xl font-bold'>Education</h1>
        <section className='flex text-gray-500 flex-col gap-2'>
            <h1 className='text-3xl max-sm:text-2xl text-gray-700 font-semibold'>Btech - Mechanical</h1>
            <span className='text-xl max-sm:text-lg'>YSR Engineering College of Yogi Vemana University , Proddutur , Andhra Pradesh .</span>
            <span className='text-lg max-sm:text-base' >GPA - <span className='text-gray-700 font-bold'>9.0</span></span>
            <span className='text-lg max-sm:text-base' >Dec 2020 - May 2023</span>
        </section>

        <section className='flex text-gray-500 flex-col gap-2'>
            <h1 className='text-3xl max-sm:text-2xl text-gray-700 font-semibold'>Diploma - Mechanical</h1>
            <span className='text-xl max-sm:text-lg'>Loyola Polytechnic [YSRR] , Pulivendula.</span>
            <span className='text-lg max-sm:text-base' >Percentage - <span className='text-gray-700 font-bold'>87 %</span></span>
            <span className='text-lg max-sm:text-base' >June 2017 - April 2020</span>
        </section>

        <section className='flex text-gray-500 flex-col gap-2'>
            <h1 className='text-3xl max-sm:text-2xl text-gray-700 font-semibold'>SSC - 10<sup>th</sup></h1>
            <span className='text-xl max-sm:text-lg'>Zilla Parishad High School.</span>
            <span className='text-lg max-sm:text-base' >GPA - <span className='text-gray-700 font-bold'>9.2</span></span>
            <span className='text-lg max-sm:text-base' >Year of Pass - 2017</span>
        </section>

    </div>
  )
}

export default Education
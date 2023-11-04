import React,{useState,useRef,useEffect,useContext} from 'react'
import { scrollvalue } from '../App'


const Skills = () => {
   const [rangebool, setrangebool] = useState(false)
  const {sethighlight} = useContext(scrollvalue)

    const skillsref=useRef()
   const rangeref=useRef()

    useEffect(()=>{
      skillsref.current.parentNode.addEventListener('scroll',()=>{
        let child = skillsref.current.getBoundingClientRect()
        if(child.top<=300 && child.bottom >=0){
          sethighlight('Skills')
        }
      })
      
      skillsref.current.parentNode.addEventListener('scroll',()=>{
        let child = rangeref.current.getBoundingClientRect()
          setrangebool(true ? child.top<=600 && child.bottom >=0 : true)
      }) 
    },[])

    const skillsrange=[
        {name:'React',value:'w-[65%]'},
        {name:'Django',value:'w-[50%]'},
        {name:'JavaScript',value:'w-[70%]'},
        {name:'Django Rest Framework',value:'w-[50%]'},
        {name:'HTML',value:'w-[80%]'},
        {name:'Python',value:'w-[80%]'},
        {name:'CSS',value:'w-[70%]'},
        {name:'MongoDB',value:'w-[60%]'},
    ]
  
  return (
    <div ref={skillsref}>
       <h1 ref={skillsref} className='text-5xl max-sm:text-4xl mb-10 font-bold'>Skills</h1>
       <div ref={rangeref} className='flex max-sm:flex-col justify-center flex-wrap gap-12 max-sm:gap-8'>
         {
           skillsrange.map(({name,value},i)=>(
            <label className='' key={i}><span className='text-gray-700 text-xl font-bold'> {name} </span><br />
                <div className='w-[30vw] border-gray-400 border-[1px] mt-2 max-sm:w-full h-[14px] overflow-hidden bg-gray-300 rounded-full'>
                    <div className={`${value} ${rangebool && 'skillanimate'} h-full bg-blue-600`}></div>
                </div>
            </label>
           ))
         }
       </div>
    </div>
  )
}

export default Skills

import React,{useState,useEffect,useContext} from 'react'
import {IoIosArrowDropdownCircle,IoIosArrowDropupCircle} from 'react-icons/io'
import { scrollvalue } from '../App'

const Navbar = () => {
    const [menuindex, setmenuindex] = useState(0)
    const menu=['About','Education','Skills','Projects','Contact']
    const [menuhide, setmenuhide] = useState(true)
    const [menufocus, setmenufocus] = useState(true)
    const {highlight,setscroll} = useContext(scrollvalue)


    useEffect(()=>{
      menufocus && setmenuindex(menu.indexOf(highlight))
    },[highlight])
    
   const clickhandler=(i)=>{
    setmenufocus(false)
    setTimeout(()=>setmenufocus(true),700)
    setmenuindex(i)
    setscroll(i)
   }

    return (
    
    <div className={`w-[20%] z-20 menuanimation max-sm:fixed  left-0 top-0 flex flex-col max-sm:flex-row gap-6 max-sm:gap-0 items-center max-sm:justify-evenly py-10 max-sm:py-2 navmenu h-full ${menuhide ? 'max-sm:h-16' : 'max-sm:h-[250px]'}  max-sm:w-full`}>
      <h1 className={`font-bold max-sm:block hidden absolute left-10 text-[white] text-3xl ${!menuhide && 'max-sm:opacity-0 max-sm:hidden'}`}>Portfolio</h1>
        <div className={`w-[13vw] max-sm:cursor-default image ${menuhide ? 'max-sm:opacity-0' : 'max-sm:opacity-100'} max-sm:w-[40%] image p-2 aspect-square bg-[#c4c1c19f] rounded-full cursor-pointer`}>
            <img className='w-full aspect-square object-cover bg-gray-300 rounded-full' src="subbu.jpg" alt="" />
        </div>
        <nav className={` ${menuhide ? 'max-sm:opacity-0 ' : 'max-sm:opacity-100'} relative w-full max-sm:w-32 flex flex-col items-center gap-1 text-xl max-sm:text-lg text-[#0C0D0D] cursor-pointer max-sm:cursor-default`}>
         {
        menu.map((item,i)=>(
            <div key={i} onClick={()=>clickhandler(i)} className={`py-1 w-full text-center  ${menuindex===i ? ' duration-500  rounded-xl font-bold text-white ': 'text-[#e9e7e6c2] max-sm:text-[#f1efefd5]'}`} >{item}</div>
             ))
         }
        </nav>
        <div onClick={()=>setmenuhide(prev=>!prev)} className='absolute max-sm:cursor-default right-10 hidden max-sm:block -bottom-3 duration-300 cursor-pointer border-[1px] border-[#f6f6f87a] rounded-full bg-[#9595be6c] text-[#f2f2f8d8] text-4xl'>{!menuhide ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle /> }</div>
    </div>


  )
}

export default Navbar

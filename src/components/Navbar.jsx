import React, { useState, useEffect } from 'react'
import Heimbergmenu from './Heimbergmenu'
import { Link, useLocation } from 'react-router-dom'

const MENU = ["home", 'about', 'education', 'projects', 'contact']
const Navbar = () => {
    let path = location.pathname.split('/')[1]
    const [selectedMenu, setselectedMenu] = useState(path ? path : 'home')
    const [clicked, setClicked] = useState(false)
    const currlocation = useLocation()

    useEffect(() => {
        path === 'projects' && setselectedMenu(path)
    }, [currlocation]);

    const handleMenuClick = (e, name) => {
        document.documentElement.style.setProperty('--origin-value', e.nativeEvent.offsetX + 7 + 'px')
        setselectedMenu(name)
    }

    return (
        <>
            <div className=' max-sm:hidden font-semibold flex gap-10 text-gray-400 text-lg h-full'>
                {
                    MENU.map((name) => (
                        <Link key={name} to={name === 'home' ? '/' : name} onClick={(e) => handleMenuClick(e, name)} className={`relative hover:text-[#ffffffd7] ${selectedMenu === name && 'menu_bar text-white'} duration-300 flex items-center justify-center cursor-pointer max-sm:cursor-default`}>{name}</Link>
                    ))
                }
            </div>

            <div className='hidden max-sm:block relative'>
                <Heimbergmenu clicked={clicked} setClicked={setClicked} />
                <div style={{ animation: 'navwidth_anime 400ms ease-out' }} className={`${clicked ? 'flex' : 'hidden'} p-2 overflow-hidden font-semibold absolute top-8 -right-1 justify-between text-gray-400 text bg-gradient-to-t from-[#2a2033] rounded-lg border-[1px] border-gray-700 flex-col max-sm:gap-1 `}>
                    {
                        MENU.map((name) => (
                            <Link key={name} to={name === 'home' ? '/' : name} onClick={(e) => handleMenuClick(e, name)} className={`relative px-7 py-1 hover:text-[#ffffffd7] ${selectedMenu === name ? 'text-white bg-[#3233c8] shadow-[inset_0_0_5px_rgba(0,0,0,0.3)]' : 'hover:bg-[#848c9c34] hover:shadow-[inset_0_0_5px_rgba(0,0,0,0.3)]'} rounded duration-300 flex items-center justify-center cursor-pointer max-sm:cursor-default`}>{name}</Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar
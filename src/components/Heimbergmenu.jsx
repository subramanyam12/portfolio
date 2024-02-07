import React from 'react'

const Heimbergmenu = ({ clicked, setClicked }) => {
    return (
        <div onClick={() => setClicked(prev => !prev)} className='flex flex-col relative gap-1 '>
            <div className={`${clicked && '-rotate-45 '} duration-300 origin-right w-6 h-[2px] bg-[#ffffff6c]`}></div>
            <div className={`${clicked && 'invisible'} delay-100 w-6 h-[2px] bg-[#ffffff6c]`}></div>
            <div className={`${clicked && 'rotate-45 mt-1'} duration-300 origin-right w-6 h-[2px] bg-[#ffffff6c]`}></div>
        </div>
    )
}

export default Heimbergmenu
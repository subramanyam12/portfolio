import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'



const Cardtilt = ({name,description,image,skills,website}) => {
    return (
        <div style={{ perspective: '1000px' }} className='w-[350px] max-sm:w-[90%] h-[400px] max-sm:h-[380px] cursor-pointer max-sm:cursor-default container mb-10 relative'>
            {
                Array(9).fill(1).map((item, id) => (
                    <div key={id} className=' subcard z-10 absolute w-[33.3333%] bg-transparent h-[33.3333%]'></div>
                ))
            }
            <div style={{ transformStyle: 'preserve-3d' }} className='w-full outline outline-gray-200 outline-[1px] -outline-offset-[6px] h-full p-4 flex duration-500 card bg-[#3f5e7e] rounded-2xl'> 
                <div className='absolute grup-hover:translate-y-[40px] durtion-500 bottombox goup-hover:opacity-10 opacity- right-0 -bottom-0 rounded-2xl bg-[#3f5e7e] h-20 w-full'>
                    <div className=' absolute bottom-0 flex items-center justify-center left-0 w-[70%] h-[45px] bg-green-00 px-3 text-white'>
                        <span className='capitalize text-sm text-center font-thin line-clamp-2'>{skills}</span>
                    </div>
                    <div className='absolute bottom-[9px] right-[14px] flex gap-3 text-[#ffffffdf] text-3xl'>
                       {website ==='websocket-drawing-pad' ? <a href='https://websocket-drawing-pad.vercel.app/' target='_blank' className=''><TbWorldWww /></a> : website ==='blog-post' || website==='memory-gamer' ? null : <a href={`https://subramanyam12.github.io/${website}`} target='_blank' className=''><TbWorldWww /></a>}
                        <a href={`https://github.com/subramanyam12/${website}`} target='_blank' className='text-black bg-white rounded-full'><FaGithub /></a>  
                    </div>
                </div>
                <div style={{transform:'translateZ(10px)'}} className='flex internal flex-col gap-4 h-full w-full text-white' > 
                    <h1 className='text-2xl relative top-2 font-extrabold'>{name}</h1>
                    <div className='duration-500' ><img className='duration-500 w-full aspect-[2/1.3] rounded-xl' src={image} alt={name} /></div>
                    <p className=' text-sm text-justify font-[100]'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Cardtilt
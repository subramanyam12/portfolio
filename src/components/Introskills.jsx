import React from 'react'

const IMAGES = ['react', 'django', 'python', 'js', 'mongoDB', 'html', 'css']

const Introskills = () => {

    return (
        <div className='relative overflow-hidden flex justify-center items-center flex-col h-full'>

            <div className='relative flex justify-center items-center'>
                <img src="laptop.png" className='w-[40%] max-sm:w-[55%] relative bottom-2 aspect-square' alt="laptop" />
                <h1 style={{ letterSpacing: '4px', filter: "drop-shadow(0 0 1px rgba(255, 255, 255, 0.527))drop-shadow(0 0 2px rgba(255,255,255, 0.288))", textShadow: '-1px 1px gray' }} className='filter absolute bottom-8 max-sm:bottom-3 text-white text-2xl max-sm:text-lg capitalize font-extrabold'>skills</h1>
            </div>

            <div style={{ animation: 'rotate_skills 13s linear infinite' }} className='rotate absolute w-full h-full -translate-y-[170px] max-sm:-translate-y-[130px]'>
                {
                    IMAGES.map((image, i) => (
                        <div key={image} style={{ rotate: `${i * 51}deg` }} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-[0_170px] max-sm:origin-[0_130px] rounded-full flex justify-center items-center'>
                            <img src={`${image}.png`} style={{ animation: `rotate_skill${i} 13s linear infinite` }} className={`${IMAGES[i] === 'html' || IMAGES[i] === 'css' ? 'w-[63px] max-sm:w-[51px]' : 'w-[70px] max-sm:w-[60px]'} aspect-square`} alt={image} />
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default Introskills
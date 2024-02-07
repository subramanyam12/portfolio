import React from 'react'
import Introskills from '../components/Introskills'


const Home = () => {

    return (
        <div className=' text-[#ffffff4b] h-[85vh] flex max-sm:flex-col max-sm:items-center'>
            <div className=' flex justify-center flex-col max-sm:mt-20 pl-24 max-sm:pl-0'>

                <h1 className='capitalize max-sm:text-sm text-white'>hello everyone , i am
                    <br />
                    <span className='font-bold text-7xl max-sm:text-5xl'>
                        ganta
                        <br />
                        <span className='text-[#2cf1ff]'>subramanyam</span>
                    </span>
                </h1>

                <div style={{ letterSpacing: '2px' }} className='flex justify-end mt-5 max-sm:mt-2 font-bold text-3xl max-sm:text-xl text-white'>
                    <h1 className='relative profession_name text-gray-600'>web developer</h1>
                </div>

            </div>

            <Introskills />
        </div>
    )
}

export default Home

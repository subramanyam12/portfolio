import React from 'react'

const Education = () => {
    return (
        <div className='text-white capitalize w-full h-[86vh] max-sm:px-6 flex flex-col gap-2 max-sm:gap-0 justify-center items-center max-sm:pl-6'>
            <h1 className='font-extrabold text-5xl max-sm:text-3xl w-full pl-12 pt-10 max-sm:pt-0 max-sm:pl-0 max-m:underline'>education</h1>
            <div className='flex gap-5 w-full justify-center items-center'>
                <main className='flex flex-col w-1/2 max-sm:w-full h-[80%] pl-24 max-sm:pl-0 gap-6 text-lg max-sm:text-base'>

                    <section>
                        <h2 className='font-bold text-3xl max-sm:text-xl'>btech - mechanical</h2>
                        <p className='font-semibold mt-1 text-lg max-sm:text-base text-gray-300'>ysr engineering college of yogi vemana university .</p>
                        <p className='my-1 text-gray-400'>proddutur , andhra pradesh .</p>
                        <span className='text-gray-400'>dec 2020 - may 2023 | <span className='font-bold text-white'>9.0 GPA</span></span>
                    </section>

                    <section className=' pl-14 max-sm:pl-0'>
                        <h2 className='font-bold text-3xl max-sm:text-xl'>diploma - mechanical</h2>
                        <p className='font-semibold mt-1 text-lg max-sm:text-base text-gray-300'>loyola polytechnic YSRR .</p>
                        <p className='my-1 text-gray-400'>pulivendula , andhra pradesh .</p>
                        <span className='text-gray-400'>june 2017 - april 2020 | <span className='font-bold text-white'>87 %</span></span>
                    </section>

                </main>
                <div className='w-1/2 max-sm:hidden'>
                    <img src="education.png" className='w-[65%] aspect-square mb-4' alt="education" />
                </div>
            </div>
        </div>
    )
}

export default Education
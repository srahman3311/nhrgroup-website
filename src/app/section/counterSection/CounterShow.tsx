import React from 'react'
import { FaPlaneDeparture, FaRegThumbsUp, FaUniversity, FaUserGraduate } from 'react-icons/fa'

const CounterShow = () => {
    return (
        <div className='h-fit lg:h-[35vh]  bg-black px-16 py-12 text-white grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-start lg:place-content-center'>
            <div className='flex items-center justify-start lg:justify-center'>

                <div className='flex items-center gap-4'>
                    <div className='text-5xl lg:text-7xl'>
                        <FaUserGraduate />
                    </div>
                    <div>
                        <h2 className='text-2xl lg:text-5xl'>16+</h2>
                        <div>

                            <small className='text-yellow-400 text-md lg:text-lg'>Years of Experience</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-start lg:justify-center'>

                <div className='flex items-center gap-4'>
                    <div className='text-5xl lg:text-7xl'>
                        <FaUniversity />
                    </div>
                    <div>
                        <h2 className='text-2xl lg:text-5xl'>100+</h2>
                        <div>

                            <small className='text-yellow-400 text-md lg:text-lgtext-yellow-400 text-lg'>University&lsquo;s</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-start lg:justify-center'>

                <div className='flex items-center gap-4'>
                    <div className='text-5xl lg:text-7xl'>
                        <FaPlaneDeparture />
                    </div>
                    <div>
                        <h2 className='text-2xl lg:text-5xl'>5+</h2>
                        <div>

                            <small className='text-yellow-400 text-md lg:text-lg'>Countries</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-start lg:justify-center'>


                <div className='flex items-center gap-4'>
                    <div className='text-5xl lg:text-7xl'>
                        <FaRegThumbsUp />
                    </div>
                    <div>
                        <h2 className='text-2xl lg:text-5xl'>2000+</h2>
                        <div>

                            <small className='text-yellow-400 text-md lg:text-lg'>Success Story</small>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CounterShow

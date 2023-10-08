import React, { useState } from 'react'
import { COURSES_LIST } from './config'

const LowerHeader = () => {
    const [logoHover, setLogoHover] = useState(false)
    return (
        <div className='w-full flex items-center justify-between gap-4 bg-black-opacity-10 px-12'>
            <div className='flex gap-5'>
                <span
                    className='text-white py-2 hover:text-theme-orange text-xs flex items-center gap-1 cursor-pointer hover:border-b border-theme-orange'
                    onMouseEnter={() => setLogoHover(true)}
                    onMouseLeave={() => setLogoHover(false)}
                >
                    <img className='w-4' src={logoHover ? "images/icon-orange.svg" : "images/icon.svg"} alt="" />
                    <span>All Courses</span>
                </span>
                {
                    COURSES_LIST.map((li, idx) => {
                        return (
                            <span key={idx} className='text-white py-2 hover:text-theme-orange text-xs flex items-center gap-1 cursor-pointer hover:border-b border-theme-orange'>
                                {li}
                            </span>
                        )
                    })
                }
            </div>
            <div className='flex gap-1 cursor-pointer'>
                <img src="images/new.svg" alt="" />
                <span className='text-white text-xs'>Course Finder</span>
            </div>
        </div>
    )
}

export default LowerHeader
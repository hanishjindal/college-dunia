import React from 'react'
function Header() {
    return (
        <div className='w-full p-3 flex items-center gap-4 bg-black-opacity-20 px-7' >
            <a href='#' className='border-r border-[rgba(232,232,232,0.2)] pr-4 cursor-pointer'>
                <img src="images/logo.svg" alt="logo" className='w-[187px]' />
            </a>
            {/* <span className='text-[rgba(232,232,232,0.2)] '>|</span> */}
            <div className='flex flex-col gap-1 col-span-1  font-light'>
                <p className='text-theme-orange text-xs flex'>
                    <img className='w-4' src="images/graduate.svg" alt="" />
                    &nbsp;Select Goal &
                    <img className='w-4' src="images/location.svg" alt="" />
                    City
                </p>
                <div className='min-w-[100px] relative flex cursor-pointer'>
                    <div className='bg-transparent text-white h-full text-[13px]'>
                        Select Goal
                    </div>
                    <img className='w-5' src="images/down-arrow.svg" alt="" />
                </div>
            </div>
            <button
                className='w-[47%] rounded-md h-12 bg-white flex items-center text-sm text-[#adb5bd] px-2 gap-1 cursor-pointer hover:text-[#666]'
            >
                <img className='ml-[14px]' src="images/search.svg" alt="" />
                <span>Search for Colleges, Exams, Courses and More..</span>
            </button>
            <div className='flex gap-2 border-r border-[rgba(232,232,232,0.2)] pr-4 cursor-pointer'>
                <img src="images/review.svg" alt="" />
                <div className='flex flex-col text-white gap-1'>
                    <span className='text-sm'>Write a Review</span>
                    <span className='text-[10px] whitespace-nowrap bg-theme-orange p-[1px] px-1 rounded-[2px] flex justify-center items-center w-fit'>Get Upto ₹500*</span>
                </div>
            </div>
            <div className='flex gap-1 items-center cursor-pointer'>
                <img src="images/cube.svg" alt="" />
                <span className='text-sm text-white'>Explore</span>
            </div>
            <div className='p-[9px] rounded-full bg-black-opacity-30 border border-gray-opacity-20 cursor-pointer'>
                <img src="images/bell.svg" alt="" />
            </div>
            <div className='p-[9px] rounded-full bg-black-opacity-30 border border-gray-opacity-20 cursor-pointer flex gap-2'>
                <img src="images/hamburger-menu.svg" alt="" />
                <img src="images/user.svg" alt="" />
            </div>
        </div>
    )
}

export default Header

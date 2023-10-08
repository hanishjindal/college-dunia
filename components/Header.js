import React from 'react'
import CourseModal from './CourseModal'
function Header({
    courseModal,
    setCourseModal,
    handleCourseSelect,
    course,
    handleCloseCourseModal,
    city,
    handleCitySelect,
    setSearchModal
}) {
    return (
        <div className='w-full p-3 flex items-center gap-4 bg-black-opacity-20 px-7' >
            <a href='#' className='border-r border-[rgba(232,232,232,0.2)] pr-4 cursor-pointer'>
                <img src="images/logo.svg" alt="logo" className='w-[187px]' />
            </a>
            <div className='flex flex-col gap-1 col-span-1 font-light relative items-start'>
                <p className='text-theme-orange text-xs flex justify-center whitespace-nowrap'>
                    <img className='w-4' src="images/graduate.svg" alt="" />
                    <span className='flex '> &nbsp;Select Goal &</span>
                    <img className='w-4' src="images/location.svg" alt="" />
                    City
                </p>
                <div
                    className='min-w-[100px] relative flex cursor-pointer'
                    onClick={
                        (e) => {
                            e.stopPropagation()
                            setCourseModal('course')
                        }
                    }
                >
                    <div className='bg-transparent text-white h-full text-[13px] whitespace-nowrap'>
                        {
                            (course && city !== 'India') ?
                                `${course}, ${city}`
                                :
                                'Select Goal'
                        }
                    </div>
                    <img className='w-4' src="images/down-arrow.svg" alt="" />
                </div>
                {
                    courseModal &&
                    <CourseModal
                        courseModal={courseModal}
                        setCourseModal={setCourseModal}
                        handleCourseSelect={handleCourseSelect}
                        course={course}
                        handleCloseCourseModal={handleCloseCourseModal}
                        city={city}
                        handleCitySelect={handleCitySelect}
                    />
                }
            </div>
            <button
                className='w-[47%] rounded-md h-12 bg-white flex items-center text-sm text-[#adb5bd] px-2 gap-1 cursor-pointer hover:text-[#666]'
                onClick={() => setSearchModal(true)}
            >
                <img className='ml-[14px]' src="images/search.svg" alt="" />
                <span>Search for Colleges, Exams, Courses and More..</span>
            </button>
            <div className='flex gap-2 border-r border-[rgba(232,232,232,0.2)] pr-4 cursor-pointer'>
                <img src="images/review.svg" alt="" />
                <div className='flex flex-col text-white gap-1'>
                    <span className='text-sm whitespace-nowrap'>Write a Review</span>
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
            {
                courseModal &&
                <div className='w-full h-screen absolute top-0 left-0 bg-black opacity-20 z-[995]'></div>
            }
        </div>
    )
}

export default Header

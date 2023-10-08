import React, { useState } from 'react'
import { COURSE_DATA, CITY_STATE } from './config'

const CourseModal = ({
    courseModal,
    setCourseModal,
    handleCourseSelect,
    course,
    city,
    handleCloseCourseModal,
    handleCitySelect
}) => {
    const [blueHover, setBlueHover] = useState(Array(COURSE_DATA.length).fill(null));

    const handleMouseEnter = (courseIndex, streamIndex) => {
        const newBlueHover = [...blueHover];
        newBlueHover[courseIndex] = streamIndex;
        setBlueHover(newBlueHover);
    };

    const handleMouseLeave = () => {
        setBlueHover(Array(COURSE_DATA.length).fill(null));
    };
    return (
        <div
            className='absolute top-full -left-24 z-[999]'
            onClick={e => e.stopPropagation()}
        >
            <div className={`
            w-[732px]
            max-h-[479px]
            my-0 mx-auto
            relative
            text-center
            z-[999]
            mt-4
            after:content-['']
            after:h-full
            after:w-full
            after:rounded
            after:absolute
            after:bottom-0
            after:left-0
            after:shadow-lg
            before:content-['']
            before:h-4
            before:w-4
            before:-top-1
            before:rounded-sm
            before:rotate-45
            before:shadow-lg
            before:bg-white
            before:absolute
            before:z-[998]
            arrow-top
            `}>
                <div className="w-full p-5 pb-0 overflow-hidden rounded-lg bg-white relative z-[998] flex flex-col gap-4 shadow-2xl">
                    <div className='flex justify-between items-center'>
                        <span className='text-base font-medium text-gray-700'>Select Your Study Preference</span>
                        <span className='text-sm cursor-pointer text-blue-500 font-[500] opacity-60' onClick={handleCloseCourseModal}>Skip</span>
                    </div>
                    {
                        courseModal === 'city' &&
                        <div className='w-full flex gap-4 items-center'>
                            <span className='text-sm text-gray-700'>Your Selected Goal is:</span>
                            <span className='flex gap-1 items-center'>
                                <img src="images/green-tick.svg" alt="" />
                                <span className='text-[13px]'>Country: {city}</span>
                            </span>
                            <span className='flex gap-1 items-center'>
                                <img src="images/green-tick.svg" alt="" />
                                <span className='text-[13px]'>Course: {course}</span>
                            </span>
                            <span className='flex gap-1 items-center cursor-pointer' onClick={() => setCourseModal('course')}>
                                <img src="images/edit.svg" alt="" />
                                <span className='text-custom-blue text-[13px] font-medium'>Modify</span>
                            </span>
                        </div>
                    }
                    <div className='border border-gray-300 px-5 py-2 rounded text-custom-gray flex items-center gap-2 bg-custom-gray-2'>
                        <img src="images/search.svg" alt="" />
                        <input
                            className='border-none outline-none text-gray-900 w-full bg-transparent text-sm'
                            placeholder={courseModal === 'city' ? "Search / Select Your Preferred City or state" : "Search and Select Your Course"}
                            type="text"
                        />
                    </div>
                    <div className='w-full flex flex-col gap-5 max-h-[364px] overflow-y-scroll'>
                        {
                            courseModal === 'course' ?
                                COURSE_DATA.map((courses, index) => {
                                    return (
                                        <div className='w-full flex flex-col gap-4 px-2 mb-4' key={index}>
                                            <div className='w-full flex items-center gap-2'>
                                                <img className='w-10' src={courses.icon} alt="" />
                                                <span className='text-sm text-gray-900 font-medium'>{courses.name}</span>
                                            </div>
                                            <div className='w-full grid grid-cols-3 gap-2'>
                                                {
                                                    courses.list.map((stream, idx) => {
                                                        return (
                                                            <div
                                                                key={idx}
                                                                className={`flex justify-between items-center cursor-pointer py-3 px-4 rounded duration-200 ${(idx === blueHover[index] | course === stream) ? 'bg-custom-blue border border-custom-blue' : ''}`}
                                                                onMouseEnter={() => handleMouseEnter(index, idx)}
                                                                onMouseLeave={handleMouseLeave}
                                                                onClick={() => { handleCourseSelect(stream) }}
                                                            >
                                                                <span className={`${(idx === blueHover[index] | course === stream) ? 'text-custom-blue' : 'text-gray-600'} text-sm w-full text-left`}>{stream}</span>
                                                                <img src={(idx === blueHover[index] | course === stream) ? "images/arrow-blue.svg" : "images/arrow.svg"} alt="" />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                CITY_STATE.map((type, index) => {
                                    return (
                                        <div className='w-full flex flex-col gap-4 mb-7' key={index}>
                                            <span className='flex text-sm text-gray-900 font-medium'>{type.name}</span>
                                            <div className='w-4/5 grid grid-cols-4 gap-4'>
                                                {
                                                    type.list.map((city, idx) => {
                                                        return (
                                                            <div
                                                                key={idx}
                                                                className={`flex flex-col justify-center items-center border rounded w-32 h-20 gap-1 cursor-pointer ${idx === blueHover[index] ? 'bg-custom-blue border-custom-blue' : 'border-gray-200'}`}
                                                                onMouseEnter={() => handleMouseEnter(index, idx)}
                                                                onMouseLeave={handleMouseLeave}
                                                                onClick={() => handleCitySelect(city.name)}
                                                            >
                                                                <img className='w-12' src={city.img} alt="" />
                                                                <span className={`text-[13px] font-medium ${idx === blueHover[index] ? 'text-custom-blue' : 'text-gray-400'}`}>{city.name}</span>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseModal
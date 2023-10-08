"use client"
import Header from '@/components/Header';
import LowerHeader from '@/components/LowerHeader';
import React, { useState, useEffect } from 'react';
import { CAROUSEL_DATA, TYPING_LIST } from '@/components/config'
import { TypeAnimation } from 'react-type-animation';

function BackgroundChanger() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [city, setCity] = useState('India')
  const [course, setCourse] = useState(null)
  const [courseModal, setCourseModal] = useState(null)

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentBgIndex + 1) % CAROUSEL_DATA.length;
      setCurrentBgIndex(nextIndex);
    }, 2000);
    return () => clearInterval(timer);
  }, [currentBgIndex]);

  const handleCourseSelect = (stream) => {
    setCourse(stream)
    setCourseModal('city')
  }

  const handleCloseCourseModal = () => {
    setCourseModal(null)
    if (course === null || city === 'India') {
      setCourse(null)
      setCity('India')
    }
  }

  return (
    <div
      className='h-[70vh] bg-gradient-to-b from-black via-black to-gray-600 relative'
      onClick={handleCloseCourseModal}
    >
      <div
        className="bg-cover bg-center h-full z-40 opacity-30 w-full"
        style={{ backgroundImage: `url(${CAROUSEL_DATA[currentBgIndex].link})` }}
      >
      </div>

      <div className='absolute top-0 left-0 w-full h-full flex flex-col gap-6 justify-center items-center mt-10'>
        <span className='text-[40px] text-white font-semibold'>
          {course ? 'Search ' : 'Find Over '}
          <TypeAnimation
            sequence={TYPING_LIST}
            wrapper="span"
            speed={50}
            cursor={false}
            repeat={Infinity}
          />
          &nbsp;in {city}
        </span>
        <button
          className='relative w-[64%] shadow-md rounded-[4px] h-14 outline-none overflow-hidden bg-white flex items-center text-sm text-[#adb5bd] px-2 gap-1 cursor-pointer after:content-["Search"] after:bg-theme-orange after:h-full after:flex after:items-center after:justify-center after:text-white after:absolute after:right-0 after:w-24 after:text-base'
        >
          <img className='ml-[6px] opacity-50 w-6' src="images/search.svg" alt="" />
          <span>Search for colleges, exams, courses and more..</span>
        </button>
        <div className='w-[64%] flex justify-end'>
          <button className='bg-theme-orange text-white text-sm h-9 rounded outline-none px-[10px] font-bold w-48 hover:opacity-80'>Need Counselling</button>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 w-full flex justify-center py-3 text-sm'>
        <span className='w-[75%] flex justify-end gap-5'>
          <a href="#" className='text-white outline-none border-b border-white'>{CAROUSEL_DATA[currentBgIndex].name}</a>
          <span className='rounded-full bg-black-opacity-40 text-white px-2'>{currentBgIndex + 1} / {CAROUSEL_DATA.length}</span>
        </span>
      </div>

      <div className='fixed top-0 left-0 w-full'>
        <Header
          courseModal={courseModal}
          setCourseModal={setCourseModal}
          handleCourseSelect={handleCourseSelect}
          course={course}
          handleCloseCourseModal={handleCloseCourseModal}
          city={city}
        />
        <LowerHeader />
      </div>
    </div>
  );
}

export default BackgroundChanger;

import React from 'react'

const SearchModal = ({ setSearchModal }) => {
    return (
        <div className='w-screen h-screen absolute top-0 bottom-0 overflow-hidden'>
            <div className='bg-white w-full h-[44%]'>
                <div className='flex justify-between items-center px-8 py-5'>
                    <input
                        className='text-bold-gray border-none outline-none px-6 text-2xl font-bold w-full placeholder:text-bold-gray'
                        type="text"
                        placeholder="Search for Colleges, Exams, News and more"
                    />
                    <img className='w-6 cursor-pointer' src="images/cross.svg" alt="" onClick={() => { setSearchModal(false) }} />
                </div>
                <div className='w-full bg-light-gray h-full px-20 py-2 flex flex-col gap-2'>
                    <span className='text-2xl font-medium text-theme-orange'>TRENDING SEARCHES</span>
                    <ul className='list-disc flex flex-col gap-2 font-medium'>
                        <li>Upcoming Exams</li>
                        <li>&quot;IIT&quot; in Colleges</li>
                        <li>&quot;CAT&quot; in Exams</li>
                        <li>&quot;CAT Cutoff&quot; in News</li>
                        <li>&quot;MBA Colleges&quot; in Delhi/NCR</li>
                        <li>&quot;MCA Colleges&quot; in Delhi/NCR</li>
                    </ul>
                </div>
            </div>
            <div className='w-full h-full bg-black opacity-80' onClick={() => { setSearchModal(false) }}></div>
        </div>
    )
}

export default SearchModal
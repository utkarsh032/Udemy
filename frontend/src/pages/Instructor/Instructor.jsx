import React from 'react'
import { Link } from 'react-router-dom'

export const Instructor = () => {
  return (
    <div className='p-16'>
      <div className='flex items-center justify-between border p-12 shadow-md '>
        <p>Jump Into Course Creation</p>
        <Link to='/instructor/course' className='border px-6 py-3 rounded-md bg-[#a855f7] text-white font-bold'>Create Your Course</Link>
      </div>
      <p className='text-center p-14'>Based on your experience, we think these resources will be helpful.</p>
    </div>
  )
}

import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import {Line} from "rc-progress"


const Myenrollments = () => {
  const navigate=useNavigate()
  const {enrolledcourses}=useContext(AppContext)

  return (
    <>
   <div className='md:px-36 px-8 pt-10'>
    <h1 className='text-3xl font-semibold'>My Enrollments</h1>
    <table className='md:table-auto table-fixed w-full border mt-10 overflow-hidden'>
      <thead className='border-b text-gray-900 border-gray-500/20 text-sm text-left max:sm-hidden'>
        <tr>
          <th className='px-4 py-3 font-semibold'>Course</th>
          <th className='px-4 py-3 font-semibold'>Completed</th>
          <th className='px-4 py-3 font-semibold'>Status</th>
        </tr>
      </thead>
      <tbody className='text-gray-700'>
        {
          enrolledcourses.map((course,index)=>{
            return <tr className='border-b border-gray-500/20' key={index}>
              <td className='flex items-center md:px-4 pl-2 md:pl-4 py-3 space-x-3 '>
                <img className='w-14 sm:w-24 md:w-28' src={course.courseThumbnail} alt="" />
                <div className='flex-1'>
                  <p className='mb-1 max-sm:text-sm'>{course.courseTitle}</p>
                  <Line className='bg-gray-300 rounded-full' strokeWidth={2}/>
                </div>
              </td>
              <td className='px-4 py-3'>
                <span>Lectures</span>
              </td>
              <td className='max-sm:text-right'>
                <button className='bg-blue-600 py-1.5 px-3 sm:px-5 max-sm:text-xs sm:py-2 text-white cursor-pointer rounded'>Completed</button>
              </td>
            </tr>
          })
        }
      </tbody>
    </table>
    </div>
    </>
  )
}

export default Myenrollments
import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { Link, useLocation } from 'react-router-dom'

const Coursecard = ({course}) => {
    const {currency,calculateRating}=useContext(AppContext)
    const location=useLocation()
  return (
    <div className='md:h-120 border border-gray-500/30 overflow-hidden rounded-t-3xl rounded-b-3xl bg-white'>
        <img className='w-full' src={course.courseThumbnail} />
        <div className='px-4 text-left mt-4'>
            <h3 className='text-xl font-medium'>{course.courseTitle}</h3>
            <div className='flex items-center space-x-2 mt-2'>
              Complete Syllabus - 
            </div>
            <p className='text-xl'>https://blog.Edurise.com/</p>
            <div className='flex gap-3 pt-2 justify-between'>
              <div className='flex gap-2'>
              <p className='font-medium text-xl sm:text-2xl'>{currency} {(course.coursePrice - course.discount * course.coursePrice/100).toFixed(2)}</p>
              <p className='md:text-lg text-gray-500 line-through'>{currency}{course.coursePrice}</p>
              </div>
              <p className='md:text-lg text-green-500'>{course.discount}%off</p>
            </div>
            
           {location.pathname === "/" ? (
          <Link to={`/courseinfo/${course._id}`}>
             <button className="bg-blue-600 text-white py-3 px-4 w-full rounded-full cursor-pointer mt-3">View Details</button>
             </Link>) : (
               <Link to={"/course/"+course._id}>
                <button className="bg-blue-600 text-white py-3 px-4 w-full rounded-full cursor-pointer mt-3">Buy Now</button>
                </Link>
              )}
        </div>
    </div>
  )
}

export default Coursecard
import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { AppContext } from '../../context/AppContext'
import Coursecard from './Coursecard'

const CourseSection = () => {
const {allcourses}=useContext(AppContext)

  return (
    <div className='py-16 px-8 md:px-25'>
        <h2 className='text-3xl font-medium text-gray-400'>What You'll Learn with us</h2>
        <h1 className='font-medium text-3xl prata-regular text-left pt-7 text-white'>Tech Courses <span className='text-2xl font-thin'>(20% off)</span></h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-0 md:my-4 my-3 gap-4'>
            {allcourses.slice(0,4).map((course,index)=>{
                return <Coursecard key={index} course={course}/>
            })}
        </div>
        <div className='mt-12'>
        <Link to={"/course-list"} onClick={()=>scrollTo(0,0)} className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'>
        Show all Courses
        </Link>
        </div>
    </div>
  )
}

export default CourseSection
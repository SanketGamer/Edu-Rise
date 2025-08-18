import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { AppContext } from '../../context/AppContext'
import { useParams } from 'react-router-dom'
import Coursecard from './Coursecard'

const Courseinfo = () => {
  const { allcourses } = useContext(AppContext)
  const { id } = useParams()
  const [filteredcourse, setFilteredCourse] = useState([])

  useEffect(() => {
    if (allcourses && allcourses.length > 0) {
      const course = allcourses.filter(item => item._id === id)
      setFilteredCourse(course)
    }
  }, [allcourses,id])

  return (
    <>
      {filteredcourse.map((course, index) => (
        <div key={index}>
          {/* Header Section */}
          <div className='bg-blue-600 md:py-30 px-20'>
           {/* Left: Title */}
            <h1 className='md:text-6xl text-4xl text-white md:w-1/2'>
             {course.courseTitle}
            </h1>
            </div>

          {/* Syllabus Section */}
          <div className='flex justify-between'>
          <div className='mt-6'>
            <h2 className='font-medium text-4xl px-6 text-gray-700'>Syllabus :</h2>
            {course.Syllabus && typeof course.Syllabus === 'object' ? (
              <ul className='font-thin flex flex-col gap-3 px-6 text-2xl mt-4'>
                {Object.entries(course.Syllabus).map(([week, topic], i) => (
                  <li key={i}>
                    <strong>{week}:</strong> {topic}
                  </li>
                ))}
              </ul>
            ) : (
              <p className='px-6 text-xl text-gray-500'>No syllabus available</p>
            )}
          </div>

            {/* Right: Course Card */}
          <div className='hidden md:block relative md:bottom-60 right-20 w-1/5 rounded-t-3xl rounded-b-3xl'>
            <Coursecard course={course}/>
          </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Courseinfo

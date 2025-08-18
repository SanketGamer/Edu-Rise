import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { useParams } from 'react-router-dom'

function Title() {
  const { id } = useParams()
  const { premiumAllCourses } = useContext(AppContext)
  const OnePremiumCourse = premiumAllCourses.filter(course => course._id === id)

  return (
    <div className="relative bg-blue-600 px-6 md:px-20 py-20 sm:py-28 overflow-visible">
      {OnePremiumCourse.map((course, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row items-start justify-between gap-10"
        >
          {/* Left section */}
          <div className="flex-1 z-10">
            <h1 className="text-white text-4xl font-bold leading-tight mb-6">
              {course.PreCourseLogo}
            </h1>
          </div>

          {/* Right card */}
          <div className="relative w-full max-w-84 mt-10 lg:mt-0 z-20">
            <div className="lg:absolute lg:-right-20 lg:top-1/2 lg:-translate-y-1/2 shadow-xl p-4 mt-60 mr-19">
              <PremiumCourseCard course={course} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Title

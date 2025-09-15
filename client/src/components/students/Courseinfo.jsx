import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { AppContext } from '../../context/AppContext'
import { useParams } from 'react-router-dom'
import Coursecard from './Coursecard'
import axios from 'axios'

const Courseinfo = () => {
  const { allcourses, backendUrl } = useContext(AppContext)
  const [syllabus, setSyllabus] = useState([])
  const { id } = useParams()
  const [filteredcourse, setFilteredCourse] = useState([])

  useEffect(() => {
    if (allcourses && allcourses.length > 0) {
      const course = allcourses.filter(item => item._id === id)
      setFilteredCourse(course)
    }
  }, [allcourses, id])

  useEffect(() => {
    async function GetSyllabus() {
      try {
        const { data } = await axios.get(`${backendUrl}/api/v1/educator/syllabus/${id}`)
        if (data.success) {
          setSyllabus(data.syllabus)
        }
      } catch (error) {
        console.error("Error fetching syllabus:", error)
      }
    }
    GetSyllabus()
  }, [id, backendUrl])

  return (
    <>
      {filteredcourse.map((course, index) => (
        <div key={index}>
          {/* Header Section */}
          <div className='bg-blue-600 md:py-30 px-20'>
            <h1 className='md:text-6xl text-4xl text-white md:w-1/2'>
              {course.courseTitle}
            </h1>
          </div>

          {/* Syllabus Section */}
          <div className='flex justify-between'>
            <div className='mt-6'>
              <h2 className='font-medium text-4xl px-6 text-gray-700'>Syllabus :</h2>
              {syllabus.length > 0 ? (
                <div className='px-6 mt-4'>
                  {syllabus.map((weekObj, i) => (
                    <div key={i} className='mb-4 p-3'>
                      <h3 className='font-thin text-xl'>
                        Week {weekObj.week}: {weekObj.title}
                      </h3>
                      <ul className='list-none pl-6'>
                        {weekObj.topics.map((topic, idx) => (
                          <li key={idx}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <p className='px-6 text-xl text-gray-500'>No syllabus available</p>
              )}
            </div>

            {/* Right: Course Card */}
            <div className='hidden md:block relative md:bottom-60 right-20 w-1/5 rounded-t-3xl rounded-b-3xl'>
              <Coursecard course={course} />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Courseinfo

import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { EducatorContext } from '../context/EducatorContext'
import Loading from '../components/Loading'


const MyCourses = () => {

  const {currency,backendUrl,isEducator,token}=useContext(EducatorContext)
  const [courses,setcourses]=useState(null)

  async function fetchEducatorCourses(){
   try{
    const {data}=await axios.get(backendUrl+"/api/v1/educator/courses",{headers:{Authorization: `Bearer ${token}`}})
    data.success && setcourses(data.courses)
   }
   catch(error){
    toast.error(error.message)
   }
  }

  useEffect(()=>{
   if(isEducator){
    fetchEducatorCourses()
   }
  },[isEducator])

  return courses? (
    <div className='h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0'>
      <div className='w-full'>
        <h2 className='pb-4 text-lg font-medium'>My Courses</h2>
        <div>
          <table className='w-full md:table-auto table-fixed overflow-hidden'>
            <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left'>
              <tr>
                <th className='px-4 py-3 truncate font-semibold'>All Courses</th>
                <th className='px-4 py-3 truncate font-semibold'>Earnings</th>
                <th className='px-4 py-3 truncate font-semibold'>Students</th>
                <th className='px-4 py-3 truncate font-semibold'>Published On</th>
              </tr>
            </thead>
            <tbody className='text-sm text-gray-500'>
              {
                courses.map((course)=>{
                 return <tr key={course._id} className='border-b border-gray-500/20'>
                    <td className='md:px-4 py-3 pl-2 md:pl-4 flex items-center space-x-3 truncate'>
                      <img src={course.courseThumbnail} className='w-16'/>
                      <span className='truncate hidden md:block'>{course.courseTitle}</span>
                    </td>
                    <td className='px-4 py-3'>{currency} {Math.floor(course.enrolledStudents.length * (course.coursePrice - course.discount*course.coursePrice/100))}</td>
                    <td className='px-4 py-3'>{course.enrolledStudents.length}</td>
                    <td className='px-4 py-3'>{new Date(course.createdAt).toLocaleDateString()}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : <Loading/>
}

export default MyCourses
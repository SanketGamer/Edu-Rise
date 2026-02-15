import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../../components/students/Sidebar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Searchbar from '../../components/students/Searchbar'
import { AppContext } from '../../context/AppContext'
import Coursecard from '../../components/students/Coursecard'
import { assets } from '../../assets/assets'

const CourseList = () => {

  const {input}=useParams()
  const navigate=useNavigate()
  const {allcourses}=useContext(AppContext)
  const [filteredCourse,setfilteredCourse]=useState([])
  
  useEffect(()=>{
    if(allcourses && allcourses.length>0){
    const tempCourses=allcourses.slice();
    input? setfilteredCourse(tempCourses.filter(item=>item.courseTitle.toLowerCase().includes(input.toLowerCase()))) :setfilteredCourse(tempCourses)
    }
  },[allcourses,input])

  return (
    <>
    <div className='bg-gray-900 relative md:px-36 px-8 pt-20 text-left h-screen w-screen'>
      {/* left Side */}

        {/* right Side Show courses */}
        <div className='flex flex-col md:flex-row gap-6 items-center justify-between w-full'>
          <div>
            <h1 className='font-semibold text-4xl text-green-500'>Course List</h1>
            <Link className='text-indigo-500 cursor-pointer' to={"/"}><span>Home</span> / <span>Course List</span></Link>
          </div>
          <Searchbar data={input}/>
        </div>
        {
          input && <div className='inline-flex items-center gap-4 px-4 py-2 border mt-8 -mb-8 text-gray-600'>
            <p>{input}</p>
            <img className='cursor-pointer' src={assets.cross_icon} onClick={()=>navigate("/course-list")} alt="" />
          </div>
        }
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-0 gap-4 md:my-4 my-3'>
         {
          filteredCourse.map((course,index)=>{
            return <Coursecard key={index} course={course}/>
          })
        }
       </div>
    </div>
    </>
  )
}

export default CourseList
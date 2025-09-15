import React, { useContext, useState,useEffect } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { Link, useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'


const Coursecard = ({course}) => {
    const {id}=useParams()
    const {currency,backendUrl,getToken,userData}=useContext(AppContext)
    const location=useLocation()
    const [isAlreadyEnrolled,setisAlreadyEnrolled]=useState(false)


   async function EnrollCourse(){
   try{
   if(!userData){
     return toast.warn("Login to Enroll")
    }
    if(isAlreadyEnrolled){
      return toast.warn("Already Enrolled")
    }
    const token=await getToken();
    const {data}=await axios.post(backendUrl+"/api/v1/user/purchase",{courseId:course._id},{headers: {Authorization:`Bearer ${token}`}})
     console.log("Payment API response:", data)
      if(data.success){
      const {success_url}=data
      window.location.replace(success_url)
      }
     else{
      toast.error(data.message)
    }
  }
  catch(error){
   toast.error(error.message)
  }
 }
 
    useEffect(()=>{
     if(userData &&  course){
       setisAlreadyEnrolled(userData.enrolledCourses.includes(course._id)  || false)
     }
     },[userData,course])

  return (
    <div className='md:h-128 h-116 border border-gray-500/30 overflow-hidden rounded-t-3xl rounded-b-3xl bg-white'>
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
          </Link>
         ) : location.pathname === "/course-list" ? (
          <Link to={`/courseinfo/${course._id}`}>
          <button className="bg-blue-600 text-white py-3 px-4 w-full rounded-full cursor-pointer mt-3">View Details</button>
          </Link>
          ) : (<div>
              <button onClick={EnrollCourse} className="bg-blue-600 text-white py-3 px-4 w-full rounded-full cursor-pointer mt-3">
                {isAlreadyEnrolled ? "Already Enrolled" : "Buy Now"}</button>
              </div>
           )}

        </div>
    </div>
  )
}

export default Coursecard
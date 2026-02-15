import React, { useContext, useState,useEffect } from 'react'
import { motion } from 'framer-motion'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'


const Coursecard = ({course}) => {
    const {id}=useParams()
    const navigate=useNavigate()
    const {currency,backendUrl,getToken,userData,isAlreadyEnrolled,setisAlreadyEnrolled}=useContext(AppContext)
    const location=useLocation()
    
     async function EnrollCourse(){
     try{
     if(!userData){
     return toast.warn("Login to Enroll")
    }
    if(isAlreadyEnrolled){
      window.location.href = "/my-enrollments";
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  }

  const imageVariants = {
    
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#1d4ed8",
      boxShadow: "0 8px 25px rgba(29, 78, 216, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  }

  return (
    <motion.div 
      className='md:h-128 h-116 border border-gray-500/30 overflow-hidden rounded-t-3xl rounded-b-3xl bg-white'
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
        <motion.div className="overflow-hidden">
          <motion.img 
            className='w-full' 
            src={course.courseThumbnail}
            variants={imageVariants}
          />
        </motion.div>
        
        <div className='px-4 text-left mt-4'>
            <motion.h3 
              className='text-xl font-medium'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {course.courseTitle}
            </motion.h3>
            
            <motion.div 
              className='flex items-center space-x-2 mt-2'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Complete Syllabus - 
            </motion.div>
            
            <motion.p 
              className='text-xl'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              https://blog.Edurise.com/
            </motion.p>
            
            <motion.div 
              className='flex gap-3 pt-2 justify-between'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className='flex gap-2'>
                <p className='font-medium text-xl sm:text-2xl'>{currency} {(course.coursePrice - course.discount * course.coursePrice/100).toFixed(2)}</p>
                <p className='md:text-lg text-gray-500 line-through'>{currency}{course.coursePrice}</p>
              </div>
              <motion.p 
                className='md:text-lg text-green-500'
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              >
                {course.discount}%off
              </motion.p>
            </motion.div>
            
        {location.pathname === "/" ? (
          <Link to={`/courseinfo/${course._id}`}>
            <motion.button 
              className="bg-blue-600 text-white py-3 px-4 w-full rounded-full cursor-pointer mt-3"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              View Details
            </motion.button>
          </Link>
         ) : location.pathname === "/course-list" ? (
          <Link to={`/courseinfo/${course._id}`}>
            <motion.button 
              className="bg-blue-600 text-white py-3 px-4 w-full rounded-full cursor-pointer mt-3"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              View Details
            </motion.button>
          </Link>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button 
                onClick={EnrollCourse}
                className="bg-blue-600 text-white py-3 px-4 w-full rounded-full cursor-pointer mt-3"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {isAlreadyEnrolled ? "Already Enrolled" : "Buy Now"}
              </motion.button>
            </motion.div>
           )}

        </div>
    </motion.div>
  )
}

export default Coursecard
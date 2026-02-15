import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import {Link} from "react-router-dom"
import { AppContext } from '../../context/AppContext'
import Coursecard from './Coursecard'

const CourseSection = () => {
const {allcourses}=useContext(AppContext)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      x: -20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  }

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#374151",
      borderColor: "#6b7280",
      color: "#ffffff",
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
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
      className='py-16 px-8 md:px-25'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
        <motion.h2 
          className='text-3xl font-medium text-gray-400'
          variants={titleVariants}
        >
          What You'll Learn with us
        </motion.h2>
        
        <motion.h1 
          className='font-medium text-3xl prata-regular text-left pt-7 text-white'
          variants={titleVariants}
        >
          Tech Courses 
          <motion.span 
            className='text-2xl font-thin'
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            (20% off)
          </motion.span>
        </motion.h1>
        
        <motion.div 
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-0 md:my-4 my-3 gap-4'
          variants={gridVariants}
        >
            {allcourses.map((course,index)=>{
                return <Coursecard key={course._id || index} course={course}/>
            })}
        </motion.div>
        
        <motion.div 
          className='mt-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
        <motion.div
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Link 
            to={"/course-list"} 
            onClick={()=>scrollTo(0,0)} 
            className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded block'
          >
            Show all Courses
          </Link>
        </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default CourseSection
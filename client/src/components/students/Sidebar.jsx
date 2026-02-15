import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  const sidebarVariants = {
    hidden: { x: -300, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  }

  const menuItemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      x: 10,
      scale: 1.05,
      backgroundColor: "#dbeafe",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2
      }
    }
  }

  return (
    <motion.div 
      className='sm:block hidden'
      initial="hidden"
      animate="visible"
    >
    <motion.div 
      className=' bg-blue-100 flex flex-col gap-6 h-screen px-5 py-8  overflow-hidden'
      variants={sidebarVariants}
    >
        <motion.h1 
          className='text-gray-700'
          variants={titleVariants}
        >
          Main Menu
        </motion.h1>
        
      <motion.div
        variants={menuItemVariants}
        whileHover="hover"
      >
        <NavLink className={`${({isActive})=> isActive? "bg-blue-500 font-bold": "text-gray-700"} flex gap-2`} to={"/"}>
          <motion.svg 
            className='w-8  text-gray-900' 
            class="w-6 h-6 text-gray-800 dark:text-white" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            fill="none" 
            viewBox="0 0 24 24"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
          </motion.svg>
           <p>Home</p>
        </NavLink>
      </motion.div>
      
      <motion.div
        variants={menuItemVariants}
        whileHover="hover"
      >
        <NavLink className={`${({isActive})=> isActive? "bg-blue-500 font-bold": "text-gray-700"} flex gap-2`} to={"/course-list"}>
          <motion.svg 
            className='w-8' 
            class="w-6 h-6 text-gray-800 dark:text-white" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            fill="none" 
            viewBox="0 0 24 24"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
          </motion.svg>
           <p>Courses</p>
        </NavLink>
      </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Sidebar
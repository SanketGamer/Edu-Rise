import React, { use, useState } from 'react'
import { motion } from 'framer-motion'
import { assets } from '../../assets/assets'
import {useNavigate} from "react-router-dom"

const Searchbar = ({data}) => {
  const navigate=useNavigate()
  const [input,setinput]=useState(data?data:"")

  const onSearchHandler=(e)=>{
    e.preventDefault();
    navigate("/course-list/"+input)
  }
  const searchVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
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
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
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
      className='w-full flex items-center justify-center mt-4'
      variants={searchVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.form 
        onSubmit={onSearchHandler} 
        className='max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded-t-2xl rounded-b-2xl'
        whileHover="hover"
      >
        <motion.img 
          src={assets.search_icon} 
          alt="search_icon" 
          className='md:w-auto w-10 px-3'
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2 }}
        />
        <motion.input 
          onChange={(e)=>setinput(e.target.value)} 
          value={input} 
          type="text" 
          placeholder='Search for courses' 
          className='sm:w-full h-full outline-none text-gray-500/80'
          whileFocus={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        />
        <motion.button 
          type='submit' 
          className='bg-blue-600 text-white md:px-6 px-4 md:py-2 py-1 mx-1 rounded-lg'
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Search
        </motion.button>
      </motion.form>
    </motion.div>
  )
}

export default Searchbar
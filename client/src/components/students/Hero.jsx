import React from 'react'
import { motion } from 'framer-motion'
import Searchbar from '../../components/students/Searchbar'
import { Link } from 'react-router-dom'
const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
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

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  }

  return (
    <motion.div 
      className='text-center flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 bg-gradient-to-b'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
        <motion.div variants={itemVariants}>
          <Link to="course-list">
            <motion.button 
              class="custom-button"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Book Your Slots now
            </motion.button>
          </Link>
        </motion.div>
        
        <motion.h1 
          className='text-2xl md:text-5xl text-home-heading-small md:text-home-heading-large relative font-bold max-w-3xl text-green-400'
          variants={titleVariants}
        >
          Start Your Tech Journey with us.
          <motion.span 
            className='text-blue-600'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Java, Python, c++
          </motion.span>
        </motion.h1>
        
        <motion.div variants={itemVariants}>
          <Searchbar/>
        </motion.div>
    </motion.div>
  )
}

export default Hero
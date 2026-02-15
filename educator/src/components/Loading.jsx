import React from 'react'
import { motion } from 'framer-motion'

const Loading = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const spinnerVariants = {
    hidden: { 
      scale: 0,
      rotate: 0
    },
    visible: { 
      scale: 1,
      rotate: 360,
      transition: {
        scale: {
          type: "spring",
          stiffness: 200,
          damping: 15,
          duration: 0.5
        },
        rotate: {
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }
      }
    }
  }

  const pulseVariants = {
    hidden: { scale: 1, opacity: 0.7 },
    visible: { 
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div 
      className='min-h-screen flex items-center justify-center'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className='relative'
        variants={pulseVariants}
      >
        <motion.div 
          className='w-16 sm:w-20 aspect-square border-4 border-gray-300 border-t-4 border-t-blue-400 rounded-full'
          variants={spinnerVariants}
        />
        <motion.div
          className='absolute inset-0 w-16 sm:w-20 aspect-square border-4 border-transparent border-t-4 border-t-blue-600 rounded-full'
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </motion.div>
  )
}

export default Loading
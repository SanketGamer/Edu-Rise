import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Faqs = () => {
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

  return (
    <motion.div 
      className='w-screen bg-gray-900 h-screen sm:px-28 px-1 py-4'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h1 
        className='text-3xl font-medium prata-regular mt-7 text-white'
        variants={titleVariants}
      >
        FAQs
      </motion.h1>
      
      <motion.div 
        className='flex flex-col gap-3 mt-6'
        variants={containerVariants}
      >
          <FaqsSection title="Q. Why should I choose EduRise?">
          <div>No compromises. With EduRise, you don't have to choose between different tutors and random tutorials. Get the power of building production-ready applications.</div>
     </FaqsSection>
        <FaqsSection title="Q. Who will be teaching me?">
          <div>⁠Learn from the best. Sanniv das & Anupam is the top instructor in India for landing jobs freshers.</div>
     </FaqsSection>
     <FaqsSection title="Q.Is EduRise suitable for beginners?">
          <div>Yes, EduRise is perfect for beginners. Start from the basics and advance to complex technologies through projects.</div>
     </FaqsSection>
     <FaqsSection title="Q. How will EduRise help me grow as a developer?">
          <div>Learn, build, and ship — without the fear of missing out. Reach your inflection point and become a self-sufficient developer in just a few months.</div>
     </FaqsSection>
     <FaqsSection title="Q. How can I get my doubts resolved quickly?">
          <div>Personal TAs are available to help you get your doubts solved. Get it fixed by asking in the Discord community!</div>
     </FaqsSection>
      <FaqsSection title="Q. Are there hands-on assignments?">
          <div>Definitely. We craft assignments to ensure a hands-on learning experience.</div>
     </FaqsSection>
      <FaqsSection title="Q. What is the refund policy?">
          <div>We offer a 7-day no-questions-asked refund policy</div>
     </FaqsSection>
      </motion.div>
    </motion.div>
  )
}

function FaqsSection({title,children,}){
  const [open,setopen]=useState(false)
  
  const faqVariants = {
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
        damping: 15
      }
    },
    hover: {
      scale: 1.02,
      backgroundColor: "#1f2937",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      y: -10
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.3
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <motion.div 
      className='border-b border-gray-800 rounded-t-3xl rounded-b-3xl px-4 py-3 bg-gray-950'
      variants={faqVariants}
      whileHover="hover"
    >
      <motion.div 
        onClick={()=>setopen(!open)} 
        className='p-4 cursor-pointer flex justify-between items-center text-white font-semibold'
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>{title}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-blue-400 text-xl"
        >
          ▼
        </motion.span>
      </motion.div>
      
      <AnimatePresence>
        {open && (
          <motion.div 
            className='text-white pl-4 pb-7 text-left overflow-hidden'
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Faqs
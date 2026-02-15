import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../../components/students/Hero'
import CourseSection from '../../components/students/CourseSection'
import Testimonials from './Testimonials'
import Footer from '../../components/students/Footer'
import Faqs from '../../components/students/Faqs'


const Home = () => {
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

  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
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
        duration: 0.8
      }
    }
  }

  return (
    <motion.div 
      className={`flex flex-col items-center space-y-7 text-center bg-transparent`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={sectionVariants}>
        <Hero/>
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <CourseSection/>
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Testimonials/>
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Faqs/>
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Footer/>
      </motion.div>
    </motion.div>
  )
}

export default Home

import React from 'react'
import {Routes,Route, useLocation} from "react-router-dom"
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/students/Home'
import CourseList from './pages/students/CourseList'
import Myenrollments from './pages/students/Myenrollments'
import Loading from './components/students/Loading'
import TermsCondition from './pages/students/TermsCondition'
import PrivacyPolicy from './pages/students/PrivacyPolicy'
import RefundPolicy from './pages/students/RefundPolicy'
import NavbarWrapper from './components/students/NavbarWrapper'
import Faqs from './components/students/Faqs'
import Testimonials from './pages/students/Testimonials'
import CourseDetails from './pages/students/CourseDetails'
import Courseinfo from './components/students/Courseinfo'
import "quill/dist/quill.snow.css";
import {ToastContainer} from "react-toastify"
import BackgroundBubbles from './components/BackgroundBubbles'


const App = () => {
  const location = useLocation()

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      y: -20,
      scale: 1.02
    }
  }

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.4
  }

  return (
    <div className='text-default min-h-screen bg-transparent relative'>
     <BackgroundBubbles/>
     <div className='relative z-10'>
       <ToastContainer/>
       <NavbarWrapper/>
       <AnimatePresence mode="wait">
       <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Home/>
          </motion.div>
        }/>
        <Route path="/course-list" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <CourseList/>
          </motion.div>
        }/>
        <Route path="/course-list/:input" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <CourseList/>
          </motion.div>
        }/>
        <Route path='/course/:id' element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <CourseDetails/>
          </motion.div>
        }/>
        <Route path='/courseinfo/:id' element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Courseinfo/>
          </motion.div>
        }/>
        <Route path="/my-enrollments" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Myenrollments/>
          </motion.div>
        }/>
        <Route path="/loading/:path" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Loading/>
          </motion.div>
        }/>
      
        <Route path='/terms&condition' element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <TermsCondition/>
          </motion.div>
        }/>
        <Route path='/privacy&policy' element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <PrivacyPolicy/>
          </motion.div>
        }/>
        <Route path='/refund-policy' element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <RefundPolicy/>
          </motion.div>
        }/>
        <Route path='/faqs' element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Faqs/>
          </motion.div>
        }/>
        <Route path='/testimonials' element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Testimonials/>
          </motion.div>
        }/>
    
       </Routes>
       </AnimatePresence>
     </div>
    </div>
  )
}

export default App
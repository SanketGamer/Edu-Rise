import React from 'react'
import {Routes,Route} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import { AnimatePresence, motion } from 'framer-motion'
import AddCourse from './pages/Addcourse'
import Dashboard from './pages/Dashboard'
import Mycourses from './pages/MyCourses'
import StudentEnroll from './pages/StudentEnroll'
import Educator from './pages/Educator'
import LoginPage from './pages/LoginPage'


const App = () => {

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
    <div>
      <div>
         <ToastContainer/>
         <AnimatePresence mode="wait">
           <Routes>
             <Route path='login' element={<LoginPage/>}/>
           {/* nested routes-> /educator/add-course */}
         <Route path='/educator' element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Educator/>
          </motion.div>
        }>
            <Route path='/educator' element={<Dashboard/>}/>
            <Route path='add-course' element={<AddCourse/>}/>
            <Route path='my-course' element={<Mycourses/>}/>
            <Route path='student-enrolled' element={<StudentEnroll/>}/>
         </Route>
        </Routes>
         </AnimatePresence>
      </div>
    </div>
  )
}

export default App
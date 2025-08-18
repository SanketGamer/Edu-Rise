
import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/students/Home'
import CourseList from './pages/students/CourseList'
import Myenrollments from './pages/students/Myenrollments'
import Player from './pages/students/Player'
import Loading from './components/students/Loading'
import TermsCondition from './pages/students/TermsCondition'
import PrivacyPolicy from './pages/students/PrivacyPolicy'
import RefundPolicy from './pages/students/RefundPolicy'
import Educator from './pages/Educator/Educator'
import Dashboard from './pages/Educator/Dashboard'
import AddCourse from './pages/Educator/AddCourse'
import Mycourses from './pages/Educator/Mycourses'
import StudentEnrolled from './pages/Educator/StudentEnrolled'
import NavbarWrapper from './components/students/NavbarWrapper'
import Faqs from './components/students/Faqs'
import Testimonials from './pages/students/Testimonials'
import CourseDetails from './pages/students/CourseDetails'
import Courseinfo from './components/students/Courseinfo'
import "quill/dist/quill.snow.css";


const App = () => {

  return (
    <div className='text-default min-h-screen bg-white '>
     <BrowserRouter>
     <NavbarWrapper/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course-list" element={<CourseList/>}/>
      <Route path="/course-list/:input" element={<CourseList/>}/>
      <Route path='/course/:id' element={<CourseDetails/>}/>
      <Route path='/courseinfo/:id' element={<Courseinfo/>}/>
      <Route path="/my-enrollments" element={<Myenrollments/>}/>
      <Route path="/player/:courseId" element={<Player/>}/>
      <Route path="/loading/:path" element={<Loading/>}/>
      {/* nested routes-> /educator/add-course */}
      <Route path='/educator' element={<Educator/>}>
          <Route path='/educator' element={<Dashboard/>}/>
          <Route path='add-course' element={<AddCourse/>}/>
          <Route path='my-course' element={<Mycourses/>}/>
          <Route path='student-enrolled' element={<StudentEnrolled/>}/>
       </Route>
      <Route path='/terms&condition' element={<TermsCondition/>}/>
      <Route path='/privacy&policy' element={<PrivacyPolicy/>}/>
      <Route path='/refund-policy' element={<RefundPolicy/>}/>
      <Route path='/faqs' element={<Faqs/>}/>
      <Route path='/testimonials' element={<Testimonials/>}/>
  
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
import React from 'react'
import Hero from '../../components/students/Hero'
import CourseSection from '../../components/students/CourseSection'
import Testimonials from './Testimonials'
import Footer from '../../components/students/Footer'
import Faqs from '../../components/students/Faqs'


const Home = () => {
  

  return (
    <div className={`flex flex-col items-center space-y-7 text-center bg-[#111827]`}>
      <Hero/>
      <CourseSection/>
      <Testimonials/>
      <Faqs/>
      <Footer/>
    </div>
  )
}

export default Home
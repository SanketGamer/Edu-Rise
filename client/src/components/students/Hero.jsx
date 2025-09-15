import React from 'react'
import Searchbar from '../../components/students/Searchbar'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='text-center flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 bg-gradient-to-b'>
        <Link to="course-list">
       <button class="custom-button">Book Your Slots now</button>

        </Link>
      <h1 className='text-2xl md:text-5xl text-home-heading-small md:text-home-heading-large relative font-bold max-w-3xl text-green-400'>Start Your Tech Journey with us.
      <span className='text-blue-600'>Java, Python, c++</span></h1>
      <Searchbar/>
    </div>
  )
}

export default Hero
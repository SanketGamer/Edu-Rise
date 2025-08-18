import React from 'react'
import Searchbar from '../../components/students/Searchbar'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
const Hero = () => {
  return (
    <div className='text-center flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 bg-gradient-to-b'>
        <Link to="course-list">
        <button className="px-12 py-3 rounded-full text-white font-medium border border-transparent bg-black/20 hover:bg-black/30 relative z-10 cursor-pointer">
    <span className="absolute inset-0 rounded-full bg-gradient-to-r"></span>
        Book Your Slots now
        </button>

        </Link>
      <h1 className='text-2xl md:text-5xl text-home-heading-small md:text-home-heading-large relative font-bold max-w-3xl text-green-400'>Start Your Tech Journey with us.
      <span className='text-blue-600'>Java, Python, c++</span><img className='md:block hidden absolute -bottom-7 right-0' src={assets.sketch} alt='sketch'/></h1>
      <p className='text-gray-300 max-w-2xl mx-auto sm:text-sm text-base'>Join Our Courses and get the firsthand knowledge about web development and others</p>
      <Searchbar/>
    </div>
  )
}

export default Hero
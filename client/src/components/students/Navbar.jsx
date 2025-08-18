import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { NavLink,Link, useLocation, useParams } from 'react-router-dom'
import { useClerk,UserButton,useUser,} from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const location=useLocation()
  const {id}=useParams()
  const isCourseListPage=location.pathname.includes("/course-list")
  const HomePage=location.pathname.includes("/")
   const {isEducator,setEducator}=useContext(AppContext)
  const {openSignIn}=useClerk()
  const {user}=useUser()
     const navigate=useNavigate()

  return (
    <div className={`flex items-center justify-between px-4 border-b border-gray-500 sm:px-10 md:px-14 lg:px-28 py-4
      ${HomePage? "bg-[#0f172a]" : "bg-white"} ${isCourseListPage? "bg-white" : "bg-[#0f172a]"}`}>
      <div className='flex items-center gap-2'>
        <img onClick={function(){
          navigate("/")
        }} src={assets.logo} className='w-8 lg:w-9 cursor-pointer'/>
        <ul className={`flex text-2xl gap-1`}>
         <p className='text-red-500 font-bold hover:scale-180 transition'>E</p>
         <p className='text-orange-500 font-bold hover:scale-180 transition'>d</p>
         <p className='text-yellow-500 font-bold hover:scale-180 transition'>u</p>
         <p className='text-green-500 font-bold hover:scale-180 transition'>R</p>
         <p className='text-indigo-500 font-bold hover:scale-180 transition'>i</p>
         <p className='text-pink-500 font-bold hover:scale-180 transition'>s</p>
         <p className='text-purple-500 font-bold hover:scale-180 transition'>e</p>
        </ul>
      </div>
      <div className='md:block hidden'>
        <div className='border border-black py-4 px-8 flex gap-5 rounded-full text-white'>
        <NavLink to="/course-list">
        <p>Course</p>
        <hr className='m-auto w-2/4 border-none h-[1px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to="/testimonials">
        <p>Testimonials</p>
           <hr className='m-auto w-2/4 border-none h-[1px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to="/faqs">
          <p>FAQs</p>
           <hr className='m-auto w-2/4 border-none h-[1px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to={"/educator"}>
          {
            user && <> <button className='cursor-pointer'>{isEducator?"Educator Dashboard": "Become Educator"}</button></>
          }
        </NavLink>
        <NavLink to={"/my-enrollments"}>
             {user && 
          <>
          <p>My Enrollments</p>
          <hr className='m-auto w-2/4 border-none h-[1px] bg-gray-700 hidden'/>
          </>}
        </NavLink>
      </div>
      </div>
      <div className='hidden md:flex items-center gap-5 text-gray-500'>
       {user?<UserButton/> : <button onClick={()=>openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer'>Create Account</button>}
      </div>
      {/* for mobile */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
        <div className='flex flex-col text-xs gap-1'>
          {user && <>
         <button >Become Educator</button>
         <p className='h-0.5 w-14 bg-gray-600 m-auto'></p>
        <Link to={"/my-enrollments"}>My Enrollments</Link>
        </>}
        </div>
        {user ?<UserButton/>:<button onClick={()=>openSignIn()} className=''><img src={assets.user_icon}/></button>}
      </div>
    </div>
  )
}

export default Navbar 
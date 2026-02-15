import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { assets } from '../../assets/assets'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Navbar = () => {
  const { openSignIn } = useClerk()
  const { user } = useUser()
  const navigate = useNavigate()
  const {backendUrl, getToken,isEducator,setEducator} = useContext(AppContext)
  const [hasPurchases, setHasPurchases] = useState(false)

  useEffect(() => {
    async function fetchMyCourses() {
      try {
        const token = await getToken()
        const { data } = await axios.get(
          backendUrl + '/api/v1/educator/enrolled-students',
          { headers: { Authorization: `Bearer ${token}` } }
        )
        if (data.success && data.enrolledStudents.length>0) {
          setHasPurchases(true)
        } else setHasPurchases(false)
      } catch (error) {
        setHasPurchases(false)
      }
    }
    fetchMyCourses()
  }, [backendUrl, getToken])

  async function BecomeEducator() {
    try {
      if (isEducator) {
        navigate('/educator')
        return
      }
      const token = await getToken()
      const { data } = await axios.get(
        backendUrl + '/api/v1/educator/update-role',
        { headers: { Authorization: `Bearer ${token}` } }
      )
      if (data.success) {
        setEducator(true)
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  // async function BecomeDefaultStudent(){
  //   try{
  //      const token=await getToken()
  //      const {data}=await axios.get(backendUrl+"/api/v1/educator/student-role",{headers:{Authorization:`Bearer ${token}`}})
  //     if(data.success){
  //     setStudent(true)
  //     toast.success(data.message)
  //   }
  //   else{
  //       toast.error(data.message)
  //     }
  //   }
  //   catch (error) {
  //     toast.error(error.message)
  //   }
  // }

  //set this is Student account
  
  

  return (
    <motion.div
      className="bg-gray-900 flex items-center justify-between px-4 border-b border-gray-500 sm:px-10 md:px-10 lg:px-8 py-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Logo */}
      <motion.div
        className="flex items-center gap-2 ml-13"
        whileHover={{ scale: 1.05 }}
        onClick={() => navigate('/')}
      >
        <img  onClick={()=>navigate("/")} className="w-22 h-22 object-contain rounded-2xl" src={assets.project_logo} alt="EduRise Logo"/>
      </motion.div>

      {/* Desktop Nav */}
      <div className="hidden md:block">
        <div className="border border-blue-600 py-3 px-12 flex gap-5 rounded-full text-white">
          <NavLink to="/course-list">Course</NavLink>
          <NavLink to="/testimonials">Testimonials</NavLink>
          <NavLink to="/faqs">FAQs</NavLink>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Dropdown */}
        <div className="relative group">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 stroke-blue-500 fill-yellow-300 cursor-pointer"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347
                 A48.62 48.62 0 0 1 12 20.904
                 a48.62 48.62 0 0 1 8.232-4.41
                 60.46 60.46 0 0 0-.491-6.347
                 m-15.482 0a50.636 50.636 0 0 0-2.658-.813
                 A59.906 59.906 0 0 1 12 3.493
                 a59.903 59.903 0 0 1 10.399 5.84
                 c-.896.248-1.783.52-2.658.814
                 m-15.482 0A50.717 50.717 0 0 1 12 13.489
                 a50.702 50.702 0 0 1 7.74-3.342
                 M6.75 15a.75.75 0 1 0 0-1.5
                 .75.75 0 0 0 0 1.5Z"
            />
          </motion.svg>
          <div className="hidden group-hover:block absolute top-0 right-0 mt-3 bg-white shadow-lg rounded-md w-40 py-3 px-5 text-gray-700 z-50 cursor-pointer">
            {user && (
              <>
              {/* <button onClick={BecomeDefaultStudent}  className="block w-full text-left mb-2 hover:text-blue-600">
                {isStudent? "You are now Student" : "Student"}
              </button>
                <button onClick={BecomeEducator} className="block w-full text-left mb-2 hover:text-blue-600">
                  {isEducator ? 'Educator Dashboard' : 'Become Educator'}
                </button> */}
                
                {/* {hasPurchases ? (
                  <NavLink to="/my-enrollments" className="block hover:text-blue-600">
                    My Enrollments
                  </NavLink>
                ) : (
                  <button
                    type="button"
                    onClick={() => toast.info("You haven't purchased any courses yet!")}
                    className="block text-left text-gray-500"
                  >
                    My Enrollments
                  </button>
                )} */}
              </>
            )}
               <button onClick={() =>{BecomeEducator(),window.location.href = "https://edu-riseuser.vercel.app/educator"}}>
               If you want to be an Educator, click here
               </button>
          </div>
        </div>

        {/* Auth */}
        <div className="hidden md:flex items-center gap-5 text-gray-500">
          {user ? (
           <UserButton appearance={{elements: {userButtonAvatarBox: "w-10 h-10"},}}/>
            ) : (
            <button
              onClick={() => openSignIn()}
              className="bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer"
            >
              Create Account
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-4">
          {user ? (
            <>
              <button onClick={BecomeEducator} className="text-sm">
                {isEducator ? 'Educator Dashboard' : 'Become Educator'}
              </button>
              {hasPurchases ? (
                <Link to="/my-enrollments" className="text-sm">
                  My Enrollments
                </Link>
              ) : null}
              <UserButton />
            </>
          ) : (
            <button onClick={() => openSignIn()}>
              <img src={assets.user_icon} className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar

import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { NavLink,Link, useLocation} from 'react-router-dom'
import { useClerk,UserButton,useUser,} from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { toast } from 'react-toastify'

const Navbar = () => {
  const {openSignIn}=useClerk()
  const {user}=useUser()
  const navigate=useNavigate()
  const {isEducator,setEducator,backendUrl,getToken}=useContext(AppContext)
  const [hasPurchases, setHasPurchases] = useState(false);

  useEffect(()=>{
    async function fetchMyCourses(){
      try{
      const token=await getToken();
      const {data}=await axios.get(backendUrl+"/api/v1/educator/enrolled-students",{headers:{Authorization:`Bearer ${token}`}})
      if(data.success && data.enrolledStudents.length>0){
        setHasPurchases(true)
      }
      else setHasPurchases(false)
      }
      catch(error){
        setHasPurchases(false);
      }
    }
    fetchMyCourses()
  },[])

  async function BecomeEducator(){
    try{
      if(isEducator){
        navigate("/educator")
        return;
      }
      const token=await getToken()
      const {data}=await axios.get(backendUrl+"/api/v1/educator/update-role",{headers:{Authorization:`Bearer ${token}`}})
      if(data.success){
        setEducator(true)
        toast.success(data.message)
      }
      else{
        toast.error(data.message)
      }
    }
    catch(error){
      toast.error(error.message)
    }
  }


  return (
    <div className={`bg-gray-900 flex items-center justify-between px-4 border-b border-gray-500 sm:px-10 md:px-10 lg:px-8 py-4`}>
      <div className='flex items-center gap-2'>
        <ul onClick={()=>navigate("/")} className={`flex text-2xl gap-1`}>
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
        <div  className='border border-blue-600 py-3 px-12 flex gap-5 rounded-full text-white'>
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
      </div>
      </div>

         <div className='flex items-center gap-6'>
          <div className='group relative'> 
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5"
           className='w-10 h-10 stroke-blue-500 fill-yellow-300 hover:stroke-red-500 hover:fill-green-300 transition-colors duration-300'>
           <path strokeLinecap="round" strokeLinejoin="round"
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
           .75.75 0 0 0 0 1.5
           Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443
           m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
      />
    </svg>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div onClick={BecomeEducator} className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
          {
            user && <> <button className='cursor-pointer'>{isEducator?"Educator Dashboard": "Become Educator"}</button></>
          }
           <NavLink to={hasPurchases? "/my-enrollments" : "You haven't purchased any courses yet!"}>
             {user && 
          <>
          <p>My Enrollments</p>
          <hr className='m-auto w-2/4 border-none h-[1px] bg-gray-700 hidden'/>
          </>}
        </NavLink>
        </div>
          </div>
        </div>



       <div className='hidden md:flex items-center gap-5 text-gray-500'>
       {user?<UserButton/> : <button onClick={()=>openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer'>Create Account</button>}
      </div>

      </div>

      {/* for mobile */}
      <div className='md:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
       </svg>



      </div>
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
        <div className='flex flex-col text-xs gap-1'>
          {user && <>
         <button onClick={BecomeEducator}>{isEducator? "Educator Dashboard" : "Become Educator"}</button>
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
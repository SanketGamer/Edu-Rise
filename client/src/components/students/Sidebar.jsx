import React from 'react'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sm:block hidden'>
    <div className=' bg-blue-100 flex flex-col gap-6 h-screen px-5 py-8  overflow-hidden'>
        <h1 className='text-gray-700 '>Main Menu</h1>
      <NavLink className={`${({isActive})=> isActive? "bg-blue-500 font-bold": "text-gray-700"} flex gap-2`} to={"/"}>
        <svg className='w-8  text-gray-900' class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
      </svg>
       <p>Home</p>
        </NavLink>
           <NavLink className={`${({isActive})=> isActive? "bg-blue-500 font-bold": "text-gray-700"} flex gap-2`} to={"/course-list"}>
            <svg className='w-8' class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
           </svg>
           <p>Courses</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar
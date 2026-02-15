import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { EducatorContext } from '../context/EducatorContext'
import { assets } from '../assets/assets'


const Sidebar = () => {
  //const {isEducator}=useContext(EducatorContext)
  const MenuItems=[
    {name:"Dashboard", path:"/educator", icons:assets.home_icon},
    {name:"Add Course", path:"/educator/add-course", icons:assets.add_icon},
    {name:"My Courses", path:"/educator/my-course", icons:assets.my_course_icon},
    {name:"Students Enrolled", path:"/educator/student-enrolled", icons:assets.person_tick_icon},
  ]

  return  (
    <div className='border-r min-h-screen w-16 md:w-64 text-gray-500 py-2 flex flex-col text-base'>
      {
        MenuItems.map((item,index)=>{
          return <NavLink to={item.path} key={item.name} end={item.path==="/educator"} className={({isActive})=>
          `flex items-center md:flex-row flex-col md:justify-start justify-center py-3.5 gap-3 md:px-10
            ${isActive? "bg-indigo-50 border-indigo-500/90 border-r-[6px]" : "hover:bg-gray-500/90 border-r-[6px] border-white hover:border-gray-100/90"}`
          }>
            <img src={item.icons} className='w-6 h-6' />
            <p className='text-center md:block hidden'>{item.name}</p>
          </NavLink>
        })
      }
    </div>
  )
}

export default Sidebar
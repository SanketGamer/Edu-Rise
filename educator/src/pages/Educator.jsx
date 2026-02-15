import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'


const Educator = () => {
  return (
    <div className='text-default min-h-screen bg-white w-screen'>
      <Navbar/>
      <div className='flex'>
        <Sidebar/>
      <div className='flex-1'>
      {<Outlet/>}
      </div>
    </div>
    <Footer/>
     </div>
  )
}

export default Educator
import React from 'react'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { UserButton,useUser } from '@clerk/clerk-react'


const Navbar = () => {
  const navigate=useNavigate();
  const {user}=useUser()
  
  return (
    <div className='border-b border-gray-500 flex items-center justify-between py-4 px-4 md:px-8 '>
       <ul onClick={()=>navigate("/")} className='flex gap-1 text-2xl cursor-pointer'>
        <li className='transition hover:scale-180 text-red-500 font-bold'>E</li>
        <li className='transition hover:scale-180 text-orange-500 font-bold'>d</li>
        <li className='transition hover:scale-180 text-yellow-500 font-bold'>u</li>
        <li className='transition hover:scale-180 text-green-500 font-bold'>R</li>
        <li className='transition hover:scale-180 text-indigo-500 font-bold'>i</li>
        <li className='transition hover:scale-180 text-pink-500 font-bold'>s</li>
        <li className='transition hover:scale-180 text-purple-500 font-bold'>e</li>
       </ul>
       <div className='flex items-center gap-5 text-gray-500 relative'>
        <p>{user? user.fullName : "Developer"}</p>
        {user ? <UserButton/> : <img className='max-w-10 max-h-7 rounded-full' src={assets.backend_dev}/>}
      </div>
    </div>
  )
}

export default Navbar
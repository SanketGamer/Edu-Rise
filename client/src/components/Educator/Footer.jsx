import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Footer = () => {
  const navigate=useNavigate();

  return (
   <footer className='flex justify-between md:flex-row flex-col-reverse items-center text-left w-full px-8 border-t'>
    <div className='flex items-center gap-4'>
       <ul onClick={()=>navigate("/")} className='flex gap-1 text-2xl cursor-pointer'>
        <li className='transition hover:scale-180 text-red-500 font-bold'>E</li>
        <li className='transition hover:scale-180 text-orange-500 font-bold'>d</li>
        <li className='transition hover:scale-180 text-yellow-500 font-bold'>u</li>
        <li className='transition hover:scale-180 text-green-500 font-bold'>R</li>
        <li className='transition hover:scale-180 text-indigo-500 font-bold'>i</li>
        <li className='transition hover:scale-180 text-pink-500 font-bold'>s</li>
        <li className='transition hover:scale-180 text-purple-500 font-bold'>e</li>
       </ul>
        <div className='hidden md:block h-7 w-px bg-gay-500/60'></div>
      <p className='py-4 text-center text-xs md:text-sm text-gray-500'>Copyright 2024 © GreatStack. All Right Reserved.</p>
    </div>
       <div className='flex gap-4 max-md:mt-4'>
         <FaTwitter onClick={()=>navigate("/")} className='text-[#1DA1F2] cursor-pointer h-6 w-6'/>
         <FaLinkedin onClick={()=>navigate("/")} className='text-[#0A66C2] cursor-pointer h-6 w-6'/>
         <FaFacebook onClick={()=>navigate("/")} className='text-[#1877F2] cursor-pointer h-6 w-6'/>
         <FaInstagram onClick={()=>navigate("/")} className='text-[#E4405F] cursor-pointer h-6 w-6'/>
       </div>
   </footer>
  )
}

export default Footer
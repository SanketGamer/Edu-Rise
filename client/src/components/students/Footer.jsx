import React from 'react'
import { assets } from '../../assets/assets'
import {Link} from "react-router-dom"
import { FaLinkedin,FaGithub,FaTwitter,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
     <div className='bg-blue-100 rounded-t-3xl w-full'>
    <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between py-10 px-4 gap-10'>
        <div className='flex gap-4'>
      <div className='flex flex-col gap-3 items-center'>
      <img className="w-28 h-28 rounded-full object-cover" src={assets.frontend_dev} alt="" />
      <p className='prata-regular text-gray-700 text-center'>Frontend Developer</p>
    </div>
    <div className='flex flex-col gap-3 items-center'>
    <img className="w-28 h-28 rounded-full object-cover" src={assets.backend_dev} alt="" />
      <p className='prata-regular text-gray-700 text-center'>Backend Developer</p>
    </div>
    </div>

      <div className='flex flex-col gap-2'>
        <p className='font-semibold text-base'>Quick Links</p>
        <div className='flex flex-col gap-1 text-blue-400'>
          <Link to={"/terms&condition"}>Terms & Conditions</Link>
          <Link to={"/privacy&policy"}>Privacy Policy</Link>
          <Link to={"/refund-policy"}>Refunds & Cancellation Policy</Link>
        </div>
      </div>
      <div>
        <div className='flex flex-col gap-2'>
        <p className='text-2xl font-medium text-center'>Download App</p>
        <div className='flex items-center px-4 -py-1 rounded-xl w-fit bg-black mt-1'>
          <svg className='w-12' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
        <path fill="#4db6ac" d="M7.705,4.043C7.292,4.15,7,4.507,7,5.121c0,1.802,0,18.795,0,18.795S7,42.28,7,43.091c0,0.446,0.197,0.745,0.5,0.856l20.181-20.064L7.705,4.043z"></path><path fill="#dce775" d="M33.237,18.36l-8.307-4.796c0,0-15.245-8.803-16.141-9.32C8.401,4.02,8.019,3.961,7.705,4.043l19.977,19.84L33.237,18.36z"></path><path fill="#d32f2f" d="M8.417,43.802c0.532-0.308,15.284-8.825,24.865-14.357l-5.601-5.562L7.5,43.947C7.748,44.038,8.066,44.004,8.417,43.802z"></path><path fill="#fbc02d" d="M41.398,23.071c-0.796-0.429-8.1-4.676-8.1-4.676l-0.061-0.035l-5.556,5.523l5.601,5.562c4.432-2.559,7.761-4.48,8.059-4.653C42.285,24.248,42.194,23.5,41.398,23.071z"></path>
        </svg> 
        <div className='text-white leading-light flex flex-col gap-4'>
          <p className='text-base font-light pl-5'>GET IT ON</p>
          <p className='text-3xl -mt-3 pl-2'>Google Play</p>
        </div>
        </div> 
        </div>
        <div className='mt-4'>
          <h1 className='text-xl text-gray-700 text-center'>Follow us</h1>
          <div className='flex gap-2 text-3xl justify-center'>
            <Link to="https://www.linkedin.com/in/sanket-das1348" target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'><FaLinkedin/></Link>
            <Link to="https://github.com/SanketGamer" target='_blank' rel='noopener noreferrer' aria-label='GitHub'><FaTwitter/></Link>
            <Link to="#" target='_blank' rel='noopener noreferrer' aria-label='Twitter'><FaGithub/></Link>
            <Link to="#" target='_blank' rel='noopener noreferrer' aria-label='Instagram'><FaInstagram/></Link>
          </div>
        </div>
      </div>
       </div>
    </div>
  )
}

export default Footer
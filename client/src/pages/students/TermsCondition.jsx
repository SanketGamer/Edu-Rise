import React from 'react'
import {motion} from "framer-motion"
import {fadeIn} from "../../variant"
const TermsCondition = () => {
  return (
    <motion.div
    variants={fadeIn("left",0.3)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0.7}}
     className='flex flex-col gap-4'>
       <h1 className='text-center'>Terms and Conditions</h1>
      <div>
      <p>Welcome, if you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy Edurise relationship with you in relation to this website.</p>
      <p>The term ‘EduRise’ or ‘us’ or ‘we’ refers to the owner of the website. The term ‘you’ refers to the user or viewer of our website.</p>
      <p>The use of this website is subject to the following terms of use</p>   
      </div>
      <p></p>
    </motion.div>
  )
}

export default TermsCondition
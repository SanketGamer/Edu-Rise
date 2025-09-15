import React, { useState } from 'react'

const Faqs = () => {

  return (
    <div className='w-screen bg-gray-900 h-screen sm:px-28 px-1 py-4'>
      <h1 className='text-3xl font-medium prata-regular text-white'>FAQs</h1>
      <div className='flex flex-col gap-3 mt-6'>
          <FaqsSection title="Q. Why should I choose EduRise?">
          <div>No compromises. With EduRise, you don't have to choose between different tutors and random tutorials. Get the power of building production-ready applications.</div>
     </FaqsSection>
        <FaqsSection title="Q. Who will be teaching me?">
          <div>⁠Learn from the best. Sanniv das & Anupam is the top instructor in India for landing jobs freshers.</div>
     </FaqsSection>
     <FaqsSection title="Q.Is EduRise suitable for beginners?">
          <div>Yes, EduRise is perfect for beginners. Start from the basics and advance to complex technologies through projects.</div>
     </FaqsSection>
     <FaqsSection title="Q. How will EduRise help me grow as a developer?">
          <div>Learn, build, and ship — without the fear of missing out. Reach your inflection point and become a self-sufficient developer in just a few months.</div>
     </FaqsSection>
     <FaqsSection title="Q. How can I get my doubts resolved quickly?">
          <div>Personal TAs are available to help you get your doubts solved. Get it fixed by asking in the Discord community!</div>
     </FaqsSection>
      <FaqsSection title="Q. Are there hands-on assignments?">
          <div>Definitely. We craft assignments to ensure a hands-on learning experience.</div>
     </FaqsSection>
      <FaqsSection title="Q. What is the refund policy?">
          <div>We offer a 7-day no-questions-asked refund policy</div>
     </FaqsSection>
      </div>
    </div>
  )
}

function FaqsSection({title,children,}){
  const [open,setopen]=useState(false)
  return (
    <div className='border-b border-gray-800 rounded-t-3xl rounded-b-3xl px-4 py-3 bg-gray-950'>
      <div onClick={()=>setopen(!open)} className='p-4 cursor-pointer flex justify-between items-center text-white font-semibold'>
        <span>{title}</span>
      </div>
      {open && <div className='text-white pl-4 pb-7 text-left'>{children}</div>}
    </div>
  )
}

export default Faqs
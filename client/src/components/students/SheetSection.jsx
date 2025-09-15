import React, { useState } from 'react'
const SheetSection = ({title,prevcnt=0,count,children,progess}) => {
    const [isOpen,setopen]=useState(false)

  return (
    <div className='bg-gray-900 py-3 border-b'>
    <div onClick={()=>setopen(!isOpen)} className='p-4 cursor-pointer flex justify-between items-center text-white font-semibold'>
    <div className='flex gap-1 items-center'>
       <svg onClick={()=>setopen(!isOpen)} className={`w-8 h-5 ${isOpen?"rotate-90":""}`} class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
       </svg>
    <span>{title}</span>
    </div>
    <div className='flex items-center gap-6'>
    <div className="w-45">{progess}</div>
    <span>{`${prevcnt} / ${count}`}</span>
    </div>
    </div>
    {/* nested div show */}
    {isOpen && <div className='pl-6 pb-4 text-white'>
      {children}
      </div>}
    </div>
  )
}

export default SheetSection
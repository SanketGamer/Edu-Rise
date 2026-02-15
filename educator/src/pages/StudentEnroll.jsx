import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { EducatorContext } from '../context/EducatorContext'
import Loading from '../components/Loading'


const StudentEnroll = () => {
  const [enrolledStudents,setenrolledStudnets]=useState(null)
  const {backendUrl,isEducator,token}=useContext(EducatorContext)
  async function fetchEnrollStudent(){
    try{
      const {data}=await axios.get(backendUrl+"/api/v1/educator/enrolled-students",{headers:{Authorization:`Bearer ${token}`}})
      if(data.success){
        setenrolledStudnets(data.enrolledStudents.reverse())
      }
      else{
        toast.error(data.message)
      }
    }
    catch(error){
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(isEducator){
      fetchEnrollStudent()
    }
  },[isEducator])

  return enrolledStudents ? (
    <div className='min-h-screen flex flex-col justify-between md:p-8 md:pb-0 pb-0 p-4 pt-8'>
      <div className='flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20'>
        <table className='table-fixed md:table-auto w-full overflow-hidden sm:table-cell'>
          <thead className='border-b text-gray-900 border-gray-500/20 text-sm text-left '>
            <tr>
              <th className='px-4 py-3 font-semibold text-center hidden sm:table-cell'>#</th>
              <th  className='px-4 py-3 font-semibold'>Studnets Name</th>
              <th className='px-4 py-3 font-semibold'>Course Title</th>
              <th className='px-4 py-3 font-semibold hidden sm:table-cell'>Date</th>
            </tr>
          </thead>
          <tbody className='text-sm text-gray-500'>
            {
              enrolledStudents.map((item,index)=>{
              return <tr className='border-b border-gray-500/20' key={index}>
                <td className='px-4 py-3 text-center hidden sm:table-cell'>{index+1}</td>
                <td className='md:px-4 px-2 py-3 flex items-center space-x-3'>
                  <img src={item.student.imageUrl} className='w-9 h-9 rounded-full'/>
                  <span className='truncate'>{item.student.name}</span>
                </td>
                <td className='px-4 py-3 truncate'>{item.courseTitle}</td>
                <td className='px-4 py-3 hidden sm:table-cell'>{new Date(item.purchaseDate).toLocaleDateString()}</td>
              </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  ) : <Loading/>
}

export default StudentEnroll
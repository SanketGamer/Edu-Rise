import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { assets,dummyDashboardData } from '../../assets/assets'
import Loading from '../../components/students/Loading'


const Dashboard = () => {
  const {currency}=useContext(AppContext)
  const [dashboardData,setdashboardData]=useState(null)

  function fetchDashboardData(){
    setdashboardData(dummyDashboardData)
  }

  useEffect(()=>{
    fetchDashboardData()
  },[])

  return dashboardData? (
    <div className='min-h-screen flex flex-col gap-8 md:p-8 md:pb-0 p-4 pt-8 pb-0'>
      <div className='spce-y-5'>
        <div className='flex flex-wrap gap-5 items-center'>
          {/* total enrollments section */}
          <div className='flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 pb-0'>
            <img src={assets.patients_icon}/>
            <div>
              <p className='text-2xl font-medium text-gray-700'>{dashboardData.enrolledStudentsData.length}</p>
              <p className='text-base text-gray-500'>Total Enrollments</p>
            </div>
          </div>
          {/* Total courses */}
          <div className='flex items-center gap-3 shadow-card border border-blue-500 w-56 pb-0 p-4'>
            <img src={assets.appointments_icon}/>
            <div>
              <p className='text-2xl font-medium text-gray-600'>{dashboardData.totalCourses}</p>
              <p className='text-base text-gray-500'>Total Courses</p>
            </div>
          </div>
          {/* Total Revenue */}
                 <div className='flex items-center gap-3 shadow-card border border-blue-500 w-56 pb-0 p-4'>
            <img src={assets.earning_icon}/>
            <div>
              <p className='text-2xl font-medium text-gray-600'>{currency}{dashboardData.totalEarnings}</p>
              <p className='text-base text-gray-500'>Total Revenue</p>
            </div>
          </div>
        </div>

        {/* Total Enrollments */}
        <div>
          <h2 className='text-lg pb-4 font-medium'>Latest Enrollments</h2>
          <div>
            <table>
              <thead>
                <tr>
                  <th className='px-4 py-3 font-semibold text-center hidden sm:table-cell'>#</th>
                  <th className='px-4 py-3 font-semibold'>Students name</th>
                  <th className='px-4 py-3 font-semibold'>Course Title</th>
                </tr>
              </thead>
              <tbody>
                {
                dashboardData.enrolledStudentsData.map((item,index)=>{
                  return <tr key={index}>
                    <td className='md:px-4 px-2 py-3 items-center space-x-3 hidden sm:table-cell'>
                      <img src={item.student.imageUrl} className='w-9 h-9 rounded-full'/>
                    </td>
                    <td className='px-4 py-3'><span className='truncate'>{item.student.name}</span></td>
                    <td className='px-4 py-3 truncate'>{item.courseTitle}</td>
                  </tr>
                })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ) : <Loading/>
}

export default Dashboard
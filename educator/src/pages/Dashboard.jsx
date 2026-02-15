import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { toast } from 'react-toastify'
import { EducatorContext } from '../context/EducatorContext'
import Loading from '../components/Loading'
import { assets } from '../assets/assets'


const Dashboard = () => {
  const {currency,backendUrl,isEducator,token,setToken}=useContext(EducatorContext)
  const [dashboardData,setdashboardData]=useState(null)

 async function fetchDashboardData() {
  try {
    const { data } = await axios.get(
      backendUrl + "/api/v1/educator/dashboard",
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (data.success) {
      setdashboardData(data.dashboardData);
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
}


  useEffect(()=>{
    if(isEducator){
      fetchDashboardData()
    }
  },[isEducator])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }

  const tableVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  }

  return dashboardData? (
    <motion.div 
      className='min-h-screen flex flex-col gap-8 md:p-8 md:pb-0 p-4 pt-8 pb-0'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className='space-y-5'>
        <motion.div 
          className='flex flex-wrap gap-5 items-center'
          variants={containerVariants}
        >
          {/* total enrollments section */}
          <motion.div 
            className='flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 pb-0'
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.img 
              src={assets.patients_icon}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            />
            <div>
              <motion.p 
                className='text-2xl font-medium text-gray-700'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                {dashboardData.enrollStudentData.length}
              </motion.p>
              <p className='text-base text-gray-500'>Total Enrollments</p>
            </div>
          </motion.div>
          {/* Total courses */}
          <motion.div 
            className='flex items-center gap-3 shadow-card border border-blue-500 w-56 pb-0 p-4'
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.img 
              src={assets.appointments_icon}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            />
            <div>
              <motion.p 
                className='text-2xl font-medium text-gray-600'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              >
                {dashboardData.totalCourse}
              </motion.p>
              <p className='text-base text-gray-500'>Total Courses</p>
            </div>
          </motion.div>
          {/* Total Revenue */}
          <motion.div 
            className='flex items-center gap-3 shadow-card border border-blue-500 w-56 pb-0 p-4'
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.img 
              src={assets.earning_icon}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            />
            <div>
              <motion.p 
                className='text-2xl font-medium text-gray-600'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              >
                {currency}{dashboardData.totalearnings}
              </motion.p>
              <p className='text-base text-gray-500'>Total Revenue</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Total Enrollments */}
        <motion.div
          variants={tableVariants}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className='text-lg pb-4 font-medium'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Latest Enrollments
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <table>
              <thead className=''>
                <tr>
                  <th className='px-4 py-3 font-semibold text-center hidden sm:table-cell'>#</th>
                  <th className='px-4 py-3 font-semibold'>Students name</th>
                  <th className='px-4 py-3 font-semibold'>Course Title</th>
                </tr>
              </thead>
              <tbody>
                {
                dashboardData.enrollStudentData.map((item,index)=>{
                  return (
                    <motion.tr 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        backgroundColor: "#f8fafc",
                        scale: 1.01,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <td className='md:px-4 px-2 py-3 items-center space-x-3 hidden sm:table-cell'>
                        <motion.img 
                          src={item.student.imageUrl} 
                          className='w-9 h-9 rounded-full'
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        />
                      </td>
                      <td className='px-4 py-3'>
                        <span className='truncate'>{item.student.name}</span>
                      </td>
                      <td className='px-4 py-3 truncate'>{item.courseTitle}</td>
                    </motion.tr>
                  )
                })
                }
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  ) : <Loading/>
}

export default Dashboard
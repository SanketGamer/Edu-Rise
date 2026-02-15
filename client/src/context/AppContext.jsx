import { createContext, useEffect, useState } from "react";
import humanizeDuration from "humanize-duration";
import {useAuth,useUser} from "@clerk/clerk-react"
import axios from "axios";
import {toast} from "react-toastify"
export const AppContext=createContext();

export const AppContextProvider=(props)=>{
const backendUrl=import.meta.env.VITE_BACKEND_URL
const currency=import.meta.env.VITE_CURRENCY
const [allcourses,setAllcourses]=useState([])
const [isEducator,setEducator]=useState(false)
const [student,setStudent]=useState(false)
const [enrolledCourses,setEnrolledcourses]=useState([])
const [showNavbar,setshowNavbar]=useState(false)
const [filteredcourse,setfilteredcourse]=useState([])
const [isAlreadyEnrolled,setisAlreadyEnrolled]=useState(false)
const [userData,setUserData]=useState(null)
const {getToken}=useAuth()
const {user}=useUser()

//fetch all courses
async function fetchAllCourses(){
try{
  const {data}=await axios.get(backendUrl+"/api/v1/course/all")
  if(data.success){
    setAllcourses(data.courses)
  }
  else{
    toast.error(data.message)
  }
}
  catch(error){
   toast.error(error.message)
  }
}

async function fetchUserData(){
    // if(user.publicMetadata.role === 'educator'){
    //     setEducator(true)
    // }
    try{
       const token = await getToken();
       const {data}=await axios.get(backendUrl+"/api/v1/user/data",{headers: {Authorization: `Bearer ${token}`}})
       if(data.success){
        setUserData(data.user)
        setStudent(true);
       }
      //   else{
      //  toast.error(data.message)
      //  }
    }
    catch(error){
     toast.error(error.message)
    }
}


//function to calculate avg rating score
function calculateRating(course){
if(course.courseRatings.length===0){
    return 0;
}
let totalrating=0;
course.courseRatings.forEach(rating=>{
    totalrating+=rating.rating
})
return totalrating/course.courseRatings.length
}

//fetch user enrolled courses
async function FetchUserEnrolledCourses(){
    try{
     const token=await getToken()
    const {data} = await axios.get(backendUrl+"/api/v1/user/enrolled-courses",{headers:{Authorization:`Bearer ${token}`}})
     if(data.success){
       setEnrolledcourses(data.enrolledCourses.reverse());
      }
    //  else{
    //    toast.error(data.message)
    //    }
    }
    catch(error){
     toast.error(error.message)
    }
}

//calculate course Chapter time
 function CalculateChapterTime(lecture){
    let time=0;
    lecture.PrelectureContent.map((item)=>time+=item.lectureDuration)
    return humanizeDuration(time * 60 * 1000,{units:["h","m"]})
}

//calculate course Total duration duration
function TotalCourseDuration(course){
let time=0;
course.PreCourseContent.map((chapter)=>chapter.PrelectureContent.map((lecture)=>time+=lecture.lectureDuration))
return humanizeDuration(time*60*1000,{units: ["h","m"]})
}

//calculate number of lectures in the course
// function NumberOfLecture(course){
// let total=0;
// course.PreCourseContent.map((chapter,chapterindex)=>
//     chapter.PrelectureContent.map((lecture,lectureindex))=>total+=lecture.)
// }

// async function logToken(){
//     console.log(await getToken())
// }




useEffect(()=>{
fetchAllCourses()
},[setshowNavbar])

// useEffect(()=>{
//   async function showtoken(){
//     const token=await getToken();
// console.log(token)
//   }
//   showtoken()
// },[])

useEffect(()=>{
if(user){
   // logToken()
    fetchUserData()
    FetchUserEnrolledCourses()   
}
},[user])

const val={
currency,allcourses,calculateRating,student,setStudent,isEducator,setEducator,
enrolledCourses,setEnrolledcourses,FetchUserEnrolledCourses,
TotalCourseDuration,showNavbar,setshowNavbar,filteredcourse,
setfilteredcourse,backendUrl,userData,setUserData,getToken,
fetchAllCourses,isAlreadyEnrolled,setisAlreadyEnrolled
}

return (
    <AppContext.Provider value={val}>
    {props.children}
    </AppContext.Provider>
) 
}
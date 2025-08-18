import { createContext, useEffect, useState } from "react";
import {dummyCoursesData} from "../assets/assets"
import humanizeDuration from "humanize-duration";

export const AppContext=createContext();

export const AppContextProvider=(props)=>{
const currency=import.meta.env.VITE_CURRENCY
const [allcourses,setAllcourses]=useState([])
const [isEducator,setEducator]=useState(true)
const [enrolledcourses,setEnrolledcourses]=useState([])
const [showNavbar,setshowNavbar]=useState(false)
const [filteredcourse,setfilteredcourse]=useState([])

const courselogo="</>"

//fetch all courses
async function fetchAllCourses(){
setAllcourses(dummyCoursesData)
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
    setEnrolledcourses(dummyCoursesData)

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

useEffect(()=>{
fetchAllCourses()
FetchUserEnrolledCourses()
},[setshowNavbar])

const val={
currency,allcourses,calculateRating,courselogo,isEducator,setEducator,
enrolledcourses,setEnrolledcourses,FetchUserEnrolledCourses,TotalCourseDuration,showNavbar,setshowNavbar,filteredcourse,setfilteredcourse
}

return (
    <AppContext.Provider value={val}>
    {props.children}
    </AppContext.Provider>
) 
}
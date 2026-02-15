import Quill from 'quill';
import React, { useContext, useEffect,useRef, useState } from 'react'
import uniqid from "uniqid"
import { toast } from 'react-toastify';
import axios from 'axios';
import Educator from './Educator';
import { EducatorContext } from '../context/EducatorContext';
import { assets } from '../assets/assets';
import "quill/dist/quill.snow.css";


const Addcourse = () => {
  const {backendUrl,token}=useContext(EducatorContext)
  const quillRef=useRef();
  const editoRef=useRef();
  const [image,setimage]=useState(null)
  const [courseTitle,setcourseTitle]=useState("")
  const [coursePrice,setcoursePrice]=useState(0)
  const [discount,setDiscount]=useState(0)
  const [chapters,setchapters]=useState([])
  const [showPopUp,setShowPopUp]=useState(false)
  const [currchapterId,setcurrChapterId]=useState(null)
  const [isPublished, setIsPublished] = useState(false)
  const [syllabus,setSyllabus]=useState([
    {week:1, title: "", topics: [""]},
    {week:2, title: "", topics: [""]},
    {week:3, title: "", topics: [""]},
    {week:4, title: "", topics: [""]},
    {week:5, title: "", topics: [""]},
    {week:6, title: "", topics: [""]},
    {week:7, title: "", topics: [""]},
    {week:8, title: "", topics: [""]},
  ])
  const [showsyllabus,setshowsyllabus]=useState(false)
  
  const [lectureDetails,setlectureDetails]=useState({
    lectureTitle:"",
    lectureUrl:"",
    practiceUrl:"",
    lectureDificulty:"", 
  })

  //add chapters
  function handleChapters(action,chapterId){
    if(action==='add'){
      const title=prompt("Enter Chapter Name:")
      if(title){
        const newChapter={
          chapterId: uniqid(),
          chapterTitle: title,
          chapterContent: [],
          collapsed: false,
          chapterOrder:chapters.length>0 ? chapters.slice(-1)[0].chapterOrder+1 : 1
        }
        setchapters([...chapters,newChapter])
      }
    }
    else if(action === 'remove'){
      setchapters(chapters.filter((chapter)=>chapter.chapterId !== chapterId))
    }
    else if(action === "toggle"){
      setchapters(chapters.map((chapter)=>chapter.chapterId === chapterId ? {...chapter, collapsed: !chapter.collapsed} :chapter))
    }
  }

//show syllabus
function handleSyllabus(){
setshowsyllabus(true)
}

//show lecture section
 function handleLecture(action,chapterId,lectureindex){
  if(action === 'add'){
    setcurrChapterId(chapterId)
    setShowPopUp(true)
  }
  else if(action === 'remove'){
    setchapters(chapters.map((chapter)=>{
      if(chapter.chapterId === chapterId){
        chapter.chapterContent.splice(lectureindex,1) //1 means starting from index 1 lement remove
      }
      return chapter;
    }))
  }
 }

 //add lecture option
 function AddLecture(){
  setchapters(chapters.map((chapter)=>{
    if(chapter.chapterId === currchapterId){
      const newLecture={
        ...lectureDetails,
        lectureOrder: chapter.chapterContent.length>0 ? chapter.chapterContent.slice(-1)[0].lectureOrder+1 : 1,
        lectureId: uniqid()
      }
      chapter.chapterContent.push(newLecture)
    }
    return chapter;
  }))
    setShowPopUp(false)
     setlectureDetails({
     lectureTitle:"",
     lectureDuration:"",
     lectureUrl:"",
     lectureDificulty:"", 
    })
 }

  async function HanlerSubmit(e){
    try{
       e.preventDefault()
       if(!image){
        toast.error('Thumbnail Not Selected')
       }
       const courseData={
        courseTitle, 
        courseDescription: quillRef.current.root.innerHTML, 
        coursePrice: Number(coursePrice),
        discount: Number(discount),
        courseContent: chapters,
        syllabus,
        isPublished
       }
       const formData = new FormData()
       formData.append('courseData',JSON.stringify(courseData))
       formData.append('image',image)
       
       const {data}=await axios.post(backendUrl+"/api/v1/educator/add-course",formData,{headers: {Authorization: `Bearer ${token}`}})
       if(data.success){
        toast.success(data.message)
        setcourseTitle('')
        setcoursePrice(0)
        setDiscount(0)
        setimage(null)
        setchapters([])
        quillRef.current.root.innerHTML=""
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
    if(!quillRef.current && editoRef.current){
      quillRef.current=new Quill(editoRef.current,{theme:"snow"})
    }
  },[])

  return (
    <div className='h-screen overflow-scroll flex flex-col items-start justify-between md:p-8 p-4 md:pb-0 pb-0 pt-8'>
      <form onSubmit={HanlerSubmit}>
        {/* title */}
        <div className='flex flex-col gap-1'>
          <p>Course Title</p>
          <input onChange={(e)=>setcourseTitle(e.target.value)} value={courseTitle} type="text" placeholder='type here' className='outline-none border border-gray-500 rounded px-3 py-2 md:py-2.5'/>
        </div>
        {/* description */}
        <div>
          <p>Course Description</p>
          <div ref={editoRef}></div>
        </div>
        {/* Syllabus */}
       <div className="flex flex-col gap-1 mt-6">
     <h2 className="text-lg font-semibold">Syllabus</h2>
  <button onClick={handleSyllabus} type="button" className="bg-green-500 text-white px-4 py-2 rounded mt-4 cursor-pointer">+ Add Week</button>
</div>

        {/* price of the course && image download*/} 
        <div className='flex items-center justify-between flex-wrap'>
        <div className='flex flex-col gap-1 mt-4'>
          <p>Course Price</p>
          <input onChange={(e)=>setcoursePrice(e.target.value)} value={coursePrice} type="number" placeholder='$999+' className='outline-none border border-gray-500 rounded'/>
        </div>
        <div className='flex md:flex-row flex-col items-center pl-6 pt-9 gap-3'>
          <p>Course Thumbnail</p>
          <label htmlFor="thumbnailImage" className='flex items-center gap-3'>
            <img src={assets.file_upload_icon} className='p-3 bg-blue-500 rounded cursor-pointer'/>
            <input onChange={(e)=>setimage(e.target.files[0])} type="file" id='thumbnailImage' accept='image/*' hidden/>
           {image && (<img src={URL.createObjectURL(image)} className="max-h-10" />)}
          </label>
        </div>
        </div>
        {/* discount */}
        <div className='flex flex-col gap-1 mt-2'>
          <p>Discount</p>
          <input onChange={(e)=>setDiscount(e.target.value)} value={discount} type="number" placeholder='20% off' className='outline-none border border-gray-500 rounded'/>
        </div>

        {/*adding chapters add lecture */}
        <div>
          {
            chapters.map((chapter,index)=>{
              return <div key={index} className='bg-white border-rounded-lg mb-4'>
                <div className='flex justify-between items-center p-4 border-b'>
                  {/* chapter section */}
                  <div className='flex items-center'>
                    <img onClick={()=>handleChapters('toggle',chapter.chapterId)} src={assets.dropdown_icon} className={`w-4 mr-2 cursor-pointer transition-all
                       ${chapter.collapsed && "-rotate-90"}`}/>
                    <span className='font-semibold'>{index+1} {chapter.chapterTitle}</span>
                  </div>
                  <span>{chapter.chapterContent.length} Lectures</span>
                  <img onClick={()=>handleChapters('remove',chapter.chapterId)} src={assets.cross_icon}/>
                </div>
                {
                  !chapter.collapsed && (
                    <div className='p-4'>
                     {
                      //lecture section
                      chapter.chapterContent.map((lecture,lectureindex)=>{
                      return  <div key={lectureindex} className='flex justify-between items-center mb-2'>
                          <span className='flex gap-3'>
                            <p className=''>{lectureindex+1}</p>
                            <p>{lecture.lectureTitle}</p>
                          <a href={lecture.lectureUrl} className='text-blue-500'>Solution</a>
                          <a href={lecture.practiceUrl} className='bg-red-500'>Practice</a>
                          <a href={lecture.practice} className='bg-yellow-400'>Dificulty</a>
                          </span>
                          <img onClick={()=>handleLecture('remove',chapter.chapterId,lectureindex)} handleLecture src={assets.cross_icon} className='cursor-pointer'/>
                        </div>
                      })} 

                      <div onClick={()=>handleLecture('add',chapter.chapterId)} className='inline-flex bg-gray-100 p-2 rounded cursor-pointer'>+Add Lectures</div>
                    </div>
                  )}
              </div>
            })}
          {/* add chapters button */}
        <div onClick={()=>handleChapters('add')} className='flex justify-center items-center bg-blue-100 p-2 rounded-lg cursor-pointer'>+Add Chapters</div>
        {
          showPopUp && (
            <div className='fixed inset-0 flex items-center justify-center bg-gr bg-opacity-50'>
              <div className='bg-white text-gray-700 p-4 rounded relative w-full max-w-80'>
                <h2 className='text-lg font-smibold mb-4'>Add lectures</h2>

                <div className='mb-2'>
                  <p>Lecture Title</p>
                  <input type="text" className='mt-1 block w-full border rounded py-1 px-2'  value={lectureDetails.lectureTitle} 
                  onChange={(e)=>setlectureDetails({...lectureDetails,lectureTitle:e.target.value})}/>
                </div>

                 <div className='mb-2'>
                  <p>Lecture Solution Url</p>
                  <input type="text" className='mt-1 block w-full border rounded py-1 px-2'  value={lectureDetails.lectureUrl} 
                  onChange={(e)=>setlectureDetails({...lectureDetails,lectureUrl:e.target.value})}/>
                </div>

                 <div className='mb-2'>
                  <p>Lecture Practice Url</p>
                  <input type="text" className='mt-1 block w-full border rounded py-1 px-2'  value={lectureDetails.practiceUrl} 
                  onChange={(e)=>setlectureDetails({...lectureDetails,practiceUrl:e.target.value})}/>
                </div>

                  <div className='mb-2'>
                  <p>Dificulty Level</p>
                  <input type="text" className='mt-1 block w-full border rounded py-1 px-2'  value={lectureDetails.lectureDificulty} 
                  onChange={(e)=>setlectureDetails({...lectureDetails, lectureDificulty:e.target.value})}/>
                </div>

                <button onClick={AddLecture} type='button' className='w-full bg-blue-400 text-white px-4 py-2 rounded'>ADD</button>
                <img onClick={()=>setShowPopUp(false)} className='absoulte w-4 top-4 right-4 cursor-pointer' src={assets.cross_icon} />
              </div>
            </div>
          )
        }
        {/* add syllabus button */}
       {
          showsyllabus && (
          <div className='fixed inset-0 flex items-center justify-center bg-gray-800'>
            <div className='bg-white text-gray-700 p-4 rounded relative w-full max-w-80'>
              <h2>Add Syllabus</h2>
              <div className='mb-2'>
                {
                  syllabus.map((week,windex)=>(
                    <div key={windex}>
                      <div>
                        <p>Week {week.week}</p>
                        <input onChange={(e)=>{
                          const newsyllabus=[...syllabus]
                          newsyllabus[windex].title=e.target.value
                          setSyllabus(newsyllabus)
                        }} type="text" placeholder='Week Title' value={week.title}  className="border rounded p-2 w-full mt-2"/>
                      </div>
                    </div>
                  ))
                }
              </div>
              <button onClick={()=>setshowsyllabus(false)} type='button' className='w-full bg-blue-400 text-white px-4 py-2 rounded'>Add Syllabus</button>
              <img onClick={()=>setshowsyllabus(false)} className='absoulte w-4 mt-2 top-4 right-4 cursor-pointer' src={assets.cross_icon} />
            </div>
          </div>
        )
       }

        </div>
           <div className="flex items-center gap-2 mt-4">
          <input
            type="checkbox"
            id="isPublished"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
            className="w-4 h-4 cursor-pointer"
          />
          <label htmlFor="isPublished" className="text-gray-700">
            Publish this course
          </label>
        </div>
        <button type='submit' className='bg-black text-white w-max py-2.5 px-8 rounded my-4 cursor-pointer'>ADD</button>
      </form>
    </div>
  )
}

export default Addcourse
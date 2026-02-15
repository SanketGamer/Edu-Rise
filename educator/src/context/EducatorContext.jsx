import { createContext, useEffect,useState } from "react";


export const EducatorContext=createContext();

export const EducatorContextProvider=(props)=>{
const backendUrl=import.meta.env.VITE_BACKEND_URL
const [isEducator,setEducator]=useState(false)
// const [educatorData,setEducatorData]=useState(null)
const [token,setToken]=useState(localStorage.getItem("token") || "")

useEffect(()=>{
 if(token){
    localStorage.setItem("token",token)
    setEducator(true)
 }
 else{
    localStorage.removeItem("token",token)
    setEducator(false)
 }
},[token])


const val={
    backendUrl,isEducator,setEducator,token,setToken
}

return <EducatorContext.Provider value={val}>
    {props.children}
</EducatorContext.Provider>
}
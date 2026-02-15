import React, {  useContext, useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { EducatorContext } from '../context/EducatorContext'


const LoginPage = () => {
  const navigate=useNavigate()
  const [currentState,setcurrentState]=useState("Login")
  const {token,setToken,backendUrl}=useContext(EducatorContext)
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  async function onSubmitHandler(e){
    e.preventDefault()
    try{
      if(currentState==="Sign Up"){
        const res=await axios.post(backendUrl+"/api/v1/educator/signup",{email,name,password})
        if(res.data.success){
          setToken(res.data.token)
          localStorage.setItem("token",res.data.token);
        }
        else alert(res.data.message)
      }
      else{
        const res=await axios.post(backendUrl+"/api/v1/educator/signin",{email,password})
        if(res.data.success){
          setToken(res.data.token)
          localStorage.setItem("token",res.data.token)
        }
        else alert(res.data.message)
      }
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    if(token){
      navigate("/educator")
    }
  },[token])
  return (
    <div>
       <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800' action="">
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl'>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
        </div>
       {currentState==="Login"?"":<input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800'placeholder="Name" required/>}
         <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800'placeholder='Email' required/>
          <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800'placeholder='Password' required/>
          <div className='w-full flex justify-between text-sm mt-[-8px]'>
            <p className='cursor-pointer'>Forgot Your Password</p>
            {currentState==="Login"?
            <p onClick={()=>setcurrentState("Sign Up")} className='cursor-pointer'>Create account</p>:
            <p onClick={()=>setcurrentState("Login")} className='cursor-pointer'>Login here</p>}
          </div>
          <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState==="Login"?"Sign in":"Sign Up"}</button>
      </form>
    </div>
  )
}

export default LoginPage
import React, { useState } from 'react'

const Rating = ({initialRating=false,onRate}) => {

 const [rating,setRating]=useState(initialRating)

 function HandleRating(){
    setRating(prev=>{
        const newValue=!prev
        if(onRate) onRate(newValue? 1 : 0)
        return newValue
    })
 }



  return (
   <span className={`text-2xl sm:text-4xl cursor-pointer transition-colors ${rating ? "text-yellow-500" : "text-gray-400"}`} onClick={HandleRating}>&#9733;</span>
  )
}

export default Rating
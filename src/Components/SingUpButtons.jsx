import React from 'react'

function SingUpButtons({img,text}) {
  return (
    <div className="w-[190px] h-[48px]  mt-5 bg-white rounded-[48px] border flex items-center justify-center gap-3">
    
    <img src={img}  className="w-[24px] h-[24px]" />
   
    <p className="text-sm font-medium text-[12px] text-black">Sign up with{text}</p>
  </div>
  )
}

export default SingUpButtons

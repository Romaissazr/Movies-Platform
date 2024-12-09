import React from 'react'
import SideBar from '../../Components/SideBar'
import Header from '../../Components/Header'
import { Outlet } from 'react-router-dom'

function AccueilSeries() {
  return (
    <div className="flex h-full">
    <SideBar />
    <div className="flex flex-col w-full relative left-[300px] mr-[300px]">
      <Header />
  
      <Outlet /> 
    </div>
  </div>
  )
}

export default AccueilSeries

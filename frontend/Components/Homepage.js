"use client"
import React from 'react'
import Navbar from './Navbar'
import Mainslider from './Mainslider'

const Homepage = () => {
  return (
    <>
    <div className='lg:min-h-screen md:min-h-screen h-[48vh] w-full bg-gradient-to-r from-violet-500 to-blue-300 overflow-hidden'>
    <Navbar/>
    <h1 className='uppercase font-extrabold font-[gilroy] text-[26px] md:text-[50px] sm:text-[32px] sm:mt-100 md:mt-30 leading-tight px-4 lg:text-[70px] text-center mt-26 mb-1 lg:mb-0 lg:mt-[10%] sm:mt-10
      md:mt-12 text-indigo-950'>Shop smart, shop easy, shop your style</h1>
    <Mainslider/>
    </div>
    </>
  )
}

export default Homepage
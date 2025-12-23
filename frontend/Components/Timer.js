"use client"
import React from 'react'
import { useState,useEffect } from 'react';

const Timer = () => {
    const [timer, settimer] = useState(12600);
    useEffect(()=>{
        setInterval(() => {
            settimer(prev=>prev-1);
        }, 1000);
    },[]);
    const hours = Math.floor(timer/3600);
    const mins = Math.floor((timer%3600)/60);
    const secs = timer%60;
    const formattime = (time)=>String(time).padStart(2,0);
  return (
    <>
    <div className='px-4 md:px-10 lg:px-20'>
        <h1 className='uppercase font-extrabold font-[gilroy] text-center mt-4 md:mt-6 lg:mt-10 
                 text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl
                 bg-gradient-to-br from-white via-orange-500 to-red-900 bg-clip-text text-transparent
'>BIGWINTER SALE STARTS IN</h1>
    </div>
    <div className='flex items-center justify-around gap-2 sm:gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-8 w-[60vw] lg:w-full max-w-lg mx-auto bg-violet-100 rounded-2xl p-4'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[gilroy] font-extrabold text-red-700'>{formattime(hours)} :</h1>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[gilroy] font-extrabold text-red-700'>{formattime(mins)} :</h1>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[gilroy] font-extrabold text-red-700'>{formattime(secs)}</h1>
    </div>
    <h5 className='uppercase font-extrabold font-[gilroy] text-center mt-4 mb-12 md:mt-6 lg:mt-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-br from-white via-orange-500 to-red-900 bg-clip-text text-transparent'>GRAB BEST DEALS AND OFFERS!</h5>
    </>
  )
}

export default Timer
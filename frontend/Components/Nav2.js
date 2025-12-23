"use client"
import React from 'react'
import { FaShoppingBag } from "react-icons/fa";

const Nav2 = () => {
  return (
    <>
    <div className='w-full px-4 py-2 md:px-8 md:py-6 lg:py-8 font-[gilroy] bg-[#ffffff90] backdrop-blur-sm border-black p-[50px] flex items-center justify-between items-center fixed top-0 left-0 z-50'>
            <div className='flex'>
                <h1 className='text-orange-800 text-[28px] font-extrabold sm:text-[32px] md:text-[38px] lg:text-[40px]'>Shopzilla</h1><FaShoppingBag className='text-orange-700 text-[34px] sm:text-[40px]md:text-[46px] lg:text-[50px] ' />
            </div>
    </div>
    </>
  )
}

export default Nav2
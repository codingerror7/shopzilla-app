import React from 'react'
import { FaShoppingBag } from "react-icons/fa";

const page = () => {
  return (
    <>
    <div className='min-h-[100vh] bg-orange-100 font-[gilroy] overflow-hidden'>
        <div className='h-[15%] w-[100%] font-[gilroy] bg-[#ffffff90] backdrop-blur-sm border-black p-[50px] flex items-center justify-between fixed z-40'>
        <div className='flex items-center justify-between'>
            
            <div className='flex'>
                <h1 className='text-orange-800 text-[40px] font-extrabold'>Shopzilla</h1><FaShoppingBag className='text-[50px] text-orange-700' />
            </div>
        </div>
    </div>
    <h1 className='text-6xl text-red-800 font-[extrabold] text-center uppercase mt-30 mb-5'>THIS IS USER DASHBOARD</h1>
    <hr className='w-[90vw] mx-auto text-blue-900'></hr>
    <p className='text-xl text-black font-[semibold] font-[gilroy] text-center'>MORE FEATURES COMING SOON!</p>
    </div>
    </>
  )
}

export default page
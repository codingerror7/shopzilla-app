"use client"
import React from 'react'
import Slider1 from './Slider1'
import Slider2 from './Slider2'
import Slider3 from './Slider3'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Page2 = () => {
    let router = useRouter();
     function call(){
       router.push("/all");
     }
  return (
    <>
    <div className='min-h-screen md:min-h-[310vh] lg:min-h-[300vh] w-[100%] bg-gradient-to-r from-violet-500 to-blue-300 overflow-hidden'>
        <div className='w-[90vw] md:w-[50vw] lg:w-[40vw] lg:h-[10vh] mx-auto flex items-center lg:justify-around justify-between p-[1%] mt-0 md:mt-0 lg:mt-10 font-[gilroy] font-semibold'>
        <div className='lg:h-[70%] lg:w-[31%] rounded-[30px] text-[8px] lg:text-[14px] text-center text-white bg-indigo-950 px-4 py-2 lg:p-[0.5%]'>Cash on Delivery</div>
        <div className='lg:h-[70%] lg:w-[31%] rounded-[30px] px-4 py-2 text-[8px] lg:text-[14px] text-center text-white bg-indigo-950 lg:p-[0.5%]'>Easy 7 day returns</div>
        <div className='lg:h-[70%] lg:w-[31%] rounded-[30px] px-4 py-2 text-[8px] lg:text-[14px] text-center text-white bg-indigo-950 lg:p-[0.5%]'>Lowest prices %</div>
    </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-[90vw] lg:mt-[2%] mx-auto mt-[4%] gap-6 place-items-center'>
            <Link href='/product/mens' className="bg-gray-100 rounded-2xl shadow-white cursor-pointer transition hover:scale-105 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[260px] lg:h-[300px] p-4 sm:p-4 md:p-6">
                <img className='w-full h-[120px] sm:h-[160px] md:h-[180px] lg:h-[240px] rounded-xl object-cover' src="/Men/mencombo1.jpg"></img>
                <h3 className="text-center font-semibold
      text-[12px] sm:text-[14px] md:text-[16px] lg:text-xl
      mt-1">MENSWEAR</h3>
            </Link>
            <Link href='/product/womens' className="bg-gray-100 rounded-2xl shadow-white cursor-pointer transition hover:scale-105 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[260px] lg:h-[300px] p-4 sm:p-4 md:p-6">
                <img className='w-full h-[120px] sm:h-[160px] md:h-[180px] lg:h-[240px] rounded-xl object-cover' src="/womens.jpg"></img>
                <h3 className="text-center font-semibold
      text-[12px] sm:text-[14px] md:text-[16px] lg:text-xl
      mt-1">WOMENS</h3>
            </Link>
            <Link href='/product/kids' className="bg-gray-100 rounded-2xl shadow-white cursor-pointer transition hover:scale-105 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[260px] lg:h-[300px] p-4 sm:p-4 md:p-6">
                <img className='w-full h-[120px] sm:h-[160px] md:h-[180px] lg:h-[240px] rounded-xl object-cover' src="/kidswear.jpg"></img>
                <h3 className="text-center font-semibold
      text-[12px] sm:text-[14px] md:text-[16px] lg:text-xl
      mt-1">KIDSWEAR</h3>
            </Link>
            <Link href='/product/beauty' className="bg-gray-100 rounded-2xl shadow-white cursor-pointer transition hover:scale-105 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[260px] lg:h-[300px] p-4 sm:p-4 md:p-6">
                <img src='/Beauty/beauty2.jpg' className='w-full h-[120px] sm:h-[160px] md:h-[180px] lg:h-[240px] rounded-xl object-cover'></img>
                <h3 className="text-center font-semibold
      text-[12px] sm:text-[14px] md:text-[16px] lg:text-xl
      mt-1">BEAUTY</h3>
            </Link>
            <Link href='/product/health' className="bg-gray-100 rounded-2xl shadow-white cursor-pointer transition hover:scale-105 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[260px] lg:h-[300px] p-4 sm:p-4 md:p-6">
                <img className='w-full h-[120px] sm:h-[160px] md:h-[180px] lg:h-[240px] rounded-xl object-cover' src="/Health/health3.jpg"></img>
                <h3 className="text-center font-semibold
      text-[12px] sm:text-[14px] md:text-[16px] lg:text-xl
      mt-1">Health</h3>
            </Link>
        </div>
        <h1 className='font-extrabold text-[28px] sm:text-[36px] md:text-[45px] lg:text-[50px] ml-2 sm:ml-[2%] mt-[12%] sm:mt-[7%]'>MENS COMBO</h1> 
        <Slider1/>
        <h1 className='font-extrabold text-[28px] sm:text-[36px] md:text-[45px] lg:text-[50px] ml-2 sm:ml-[2%] mt-[12%] sm:mt-[7%]'>WOMENS COMBO</h1> 
        <Slider2/>
        <h1 className='font-extrabold text-[28px] sm:text-[36px] md:text-[45px] lg:text-[50px] ml-2 sm:ml-[2%] mt-[12%] sm:mt-[7%]'>KIDS COMBO</h1> 
        <Slider3/>
        <button onClick={call} className="w-45 sm:w-56 md:w-60 px-6 sm:px-10 py-3 
               mt-15 mb-15 ml-1 sm:mt-14 md:mt-16 
               rounded-2xl bg-black text-md lg:text-xl text-white 
               shadow hover:scale-105 transition">
View All Products
</button>
    </div>
    </>
  )
}

export default Page2
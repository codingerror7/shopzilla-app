"use client"
import React from 'react'
import IconButton from '@mui/material/IconButton';
import { FaShoppingBag } from "react-icons/fa";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Search from './Search';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import { MdOutlineAccountCircle } from "react-icons/md";
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const [sign, setsign] = useState(false);
  const [popup, setpopup] = useState(false);
  useEffect(()=>{
    let token = localStorage.getItem("token");
    setsign(!!token);
    const handleStorageChange = () => {
      let token = localStorage.getItem("token");
      setsign(!!token);
    }
    window.addEventListener("storage",handleStorageChange);
    return()=> window.addEventListener("storage",handleStorageChange);
  },[]);

  const handlelogout = ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/");
    setsign(false);
  }
  return (
    <>
    {popup && <div onMouseEnter={()=>{
      setpopup(true)
    }} onMouseLeave={()=>{
      setpopup(false)
    }} className='absolute 
      top-[60px] 
      right-[20px] 
      bg-orange-50 
      shadow-xl 
      rounded-2xl 
      py-4 
      px-6 
      w-[180px] 
      z-[50] 
      font-[gilroy] 
      animate-fadeIn'>
      <ul className='space-y-3 text-gray-900'>
        <Link href='./Account' className='hover:text-orange-700 cursor-pointer font-semibold block'>ACCOUNT</Link>
        <li className='border-t border-gray-300 pt-3 hover:text-orange-700 cursor-pointer font-semibold'>PRIVACY</li><hr></hr>
        <li className='border-t border-gray-300 pt-3'>
          <button onClick={handlelogout} className='text-red-700 font-bold hover:text-red-800 cursor-pointer'>LOGOUT</button>
        </li>
      </ul>
    </div>}
    <div className='h-[10%] w-[100%] sm:h-[12%] md:h-[15%] lg:h-[15%] font-[gilroy] bg-[#ffffff90] backdrop-blur-sm p-2 md:p-6 lg:p-8 flex items-center justify-between fixed z-40 gap-6 lg:gap-0'>
        <div className='flex items-center justify-between'>
            
            <div className='flex items-center'>
                <h1 className='text-orange-800 text-[17px] font-extrabold sm:text-[32px] md:text-[38px] lg:text-[40px]'>Shopzilla</h1><FaShoppingBag className='text-orange-700 text-[20px] sm:text-[40px]md:text-[46px] lg:text-[50px] ' />
            </div>
            <Search/>
        </div>
        <div className='flex items-center justify-end sm:gap-4 md:gap-9 lg:gap-9 w-auto '>
            <Link className='hidden md:block lg:block bg-gray-200 font-[gilroy] text-[12px] sm:text-[14px] lg:text-[14px] text-indigo-900 font-semibold text-center px-4 py-2' href='./About'>About</Link>
            {sign?(<button onMouseEnter={()=>{
              setpopup(true)
            }} onMouseLeave={()=>{
              setpopup(false)
            }} className='flex items-center justify-between gap-2 font-[gilroy] rounded-[20px] text-[8px] sm:text-[14px] lg:text-[14px] bg-indigo-950 text-white font-semibold text-center px-3 py-1  lg:px-5 lg:py-2 cursor-pointer'>Profile<MdOutlineAccountCircle className='text-[10px] lg:text-[20px]'/></button>) : (<Link href='./Signup' className='font-[gilroy] rounded-[20px] text-[12px] lg:text-[14px] bg-indigo-950 text-white font-semibold text-center p-[8px] px-5 py-2 hover:bg-transparent hover:text-violet-950'>Signup</Link>)}
          <Link href='./Cart'><IconButton size = "large" sx={{
            color : "black",
          }}>
        <AddShoppingCartIcon />
      </IconButton></Link>
        </div>
    </div>
    </>
  )
}

export default Navbar
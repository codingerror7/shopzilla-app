"use client"
import React, { useState,useEffect } from 'react'
import { useForm,submitHandler } from 'react-hook-form';
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { FaShoppingBag } from "react-icons/fa";
import Link from 'next/link';
import Footer from '@/Components/Footer';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Message } from '@mui/icons-material';

const page = () => {
  let router = useRouter();
  const [eye, seteye] = useState(false);
    const [alert, setalert] = useState(false);
  const onSubmit= async (data)=>{
    try {
      let res = await axios.post("https://shopzilla-ecommerce-9anv.onrender.com/api/auth/login",data,{ withCredentials: true });
      localStorage.setItem("token",res.data.token);
      alert("login successfull");
      router.push("/");
      reset();
      setalert(true)
    } catch (error) {
      console.log({message:error});
    }
  }
   useEffect(()=>{
      if(alert){
        setTimeout(()=> setalert(false), 2000);  
      }
    }, [alert]);

      const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <>
    <div className='h-[70vh] lg:min-h-[90vh] w-full bg-indigo-950 flex flex-col items-center justify-start pt-[5%] overflow-hidden'>
            <h1 className='font-[gilroy] text-[45px] md:text-[60px] text-center text-white font-extrabold'>
      Welcome to 
      <span className='text-orange-800 ml-2 text-[55px] md:text-[70px] font-extrabold inline-flex items-center'>
        Shopzilla
        <FaShoppingBag className='ml-1 text-[65px] md:text-[80px] text-orange-700' />
      </span>
    </h1>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-[#f8eded] w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] h-[40vh] lg:min-h-[55vh] rounded-[20px] p-8 mt-10 shadow-xl relative'>
                <div className='mt-[7%] ml-[13%]'>
                  <TextField type='email' className='border-[1px] border-black p-[5px] ml-[10%] rounded-[20px] w-[80%] font-[gilroy]' name='email' {...register('email',{required:true})} id="outlined-basic" label="email" variant="outlined" />
                  {errors.email && <p className='text-red-700'>email is required.</p>}
                </div>
                <div className='mt-[7%] ml-[13%]'>
                   <TextField type={eye?"text":"password"} className='border-[1px] border-black p-[5px] ml-[10%] rounded-[20px] w-[80%] font-[gilroy]' name='password' {...register('password',{required:true})} id="outlined-basic" label="password" variant="outlined" />
                   {eye?(<IoMdEye className='absolute right-26 top-[40%] lg:right-27 lg:top-[42%] cursor-pointer text-[20px]' onClick={()=>{
                    seteye(prev=>!prev)
                   }}/>) : (<IoIosEyeOff className='absolute right-26 top-[40%] lg:right-27 lg:top-[42%] cursor-pointer text-[20px]' onClick={()=>{
                    seteye(prev=>!prev);
                   }}/>)}
                  {errors.password && <p className='text-red-700'>password is required.</p>}
                </div>
                <div className='mt-[7%]'>
                  <button className='mt-10 rounded-[20px] p-[10px] text-[15px] text-white bg-stone-900 font-semibold cursor-pointer w-[50%] mx-auto block hover:bg-transparent hover:text-black hover:border-[1px]'>Login</button>
                </div>
                <p className='text-[14px] text-black font-medium font-[gilroy] text-center mt-[5%]'>Didn't find yourself, <Link href='./Signup' className='font-semibold underline ml-1'>Signup</Link></p>
              </form>

               {alert && (
           <Alert
  icon={<CheckIcon fontSize="inherit" />}
  variant="filled"
  severity="success"
  sx={{
    position: "fixed",
    top: 70,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 9999,
    width: {
      xs: "80%",  // mobile width
      sm: "350px",
      md: "400px"
    },
    fontSize: {
      xs: "12px", // text size adjusts for small screens
      sm: "14px"
    },
    textAlign: "center"
  }}
>
  SIGNUP SUCCESSFUL! WELCOME USER.
</Alert>
          )}
        </div>
    <Footer/>
    </>
  )
}

export default page
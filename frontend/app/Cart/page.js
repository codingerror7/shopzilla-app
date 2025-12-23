"use client"
import React, { useState,useEffect } from 'react'
import Nav2 from '@/Components/Nav2'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const page = () => {
  const [cart, setcart] = useState([]);
  useEffect(()=>{
    async function cartItems(){
      try {
        const userId = localStorage.getItem("userId");
        if(!userId){
          return console.log("user id not exist");
        }
        const res = await axios.get(`https://shopzilla-ecommerce-9anv.onrender.com/api/cart/${userId}`);
        let data = res.data;
        setcart(data);
        console.log("item added to cart");
      } catch (error) {
        console.log("item not added",error);
      }
    }
    cartItems();
  },[]);

  
  return (
    <>
    <div className="min-h-[100vh] bg-orange-100 text-white overflow-hidden">
         <Nav2/>
            <h1 className="text-center text-violet-900 text-5xl font-extrabold mt-30 uppercase">ITEMS IN CART</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 p-5'>
              {cart?.length > 0 ? ( cart?.map((item)=>(
                <div key={item._id} className="w-[60%] mx-auto bg-gray-900 rounded-2xl shadow hover:shadow-xl transition cursor-pointer p-4 flex flex-col items-center">
                   <img className="h-48 w-48 object-cover rounded-xl mb-3" src={item?.productId?.image || ""}></img>
                   <h2 className="font-semibold text-lg text-white text-center">{item?.productId?.name || "No name"}</h2>
                   <p className='text-center text-white mt-1'>₹{item?.productId?.price || "no price"}</p>
                </div>
              ))) : (<p>Loading...</p>)}
            </div>
    </div>
    </>
  )
}

export default page
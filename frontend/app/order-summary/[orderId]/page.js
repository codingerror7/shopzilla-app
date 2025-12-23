'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useRadioGroup } from '@mui/material';

export default function page({params}){
  let router = useRouter();
  const [order, setorder] = useState(null); 
  const {orderId} = useParams();

const payNow = async () => {
  if (!window.Razorpay) {
  alert("Razorpay SDK failed to load. Check Internet.");
  return;
}

  const res = await axios.post("http://localhost:8000/api/order/create-payment", {
    amount: order.total,
    orderId: order._id
  });

  const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
    amount: res.data.amount,
    currency: "INR",
    order_id: res.data.razorpayOrderId,

    handler: async function (response) {
      await axios.post("http://localhost:8000/api/order/confirm", {
        orderId: order._id,
        paymentId: response.razorpay_payment_id,
      });

      alert("Payment Successful!");
      router.push("/");

    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};


const cancelOrder = () => {
  alert("order canceled");
  router.push("/");
}

  useEffect(()=>{
    async function fetchOrders(){
        try {
            let res = await axios.get(`http://localhost:8000/api/order/${orderId}`);
            let data = res.data;
            setorder(data);
        } catch (error) {
            console.log(error);
        }
    }
    fetchOrders();
  },[orderId]);

  return (
   <>
   <div className="min-h-[100vh] bg-gray-900 text-white overflow-hidden">
    <p className='text-white text-xl font-medium text-center mb-2 mt-5'>DIRECTLY PAY YOUR BILL AND THE ORDER WILL BE SHIPPED IMMEDIATELY AND IT WILL REACH AT YOUR DOORSTEP IN JUST 3 DAYS, ITS OUR POLICY!</p>
    {order && (
  <div className="z-50 h-150 w-100 border-black bg-orange-200 mx-auto mt-5 p-8 opacity-90 rounded-[20px] font-[gilroy] text-gray-900">
    
    <img
      className="h-80 w-[80%] mx-auto rounded-[20px]"
      src={order.products[0].productId.image}
    />

    <h1 className="text-4xl uppercase ml-[2%] font-extrabold mt-[2%]">
      {order.products[0].productId.brand}
    </h1>

    <h1 className="text-gray-900 text-2xl font-medium ml-[2%]">
      {order.products[0].productId.name}
    </h1>

    <p className="text-[20px] font-medium text-gray-900 ml-[2%]">
      ₹{order.total}
    </p>
    <button onClick={payNow} className='w-[90%] ml-[5%] text-white text-xl bg-black font-[gilroy] mt-2 rounded-2xl hover:cursor-pointer'>Place order</button>
    <p className='text-black text-md font-semibold font-medium text-center mt-2 mb-2'>Or</p>
    <button onClick={cancelOrder} className='w-[50%] ml-[25%] text-white text-xl bg-red-600 font-[gilroy] mt-2 rounded-2xl hover:cursor-pointer'>Cancel</button>
  </div>
)}
   </div>
   </>
  )
}

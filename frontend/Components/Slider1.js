"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider1 = () => {
  return (
    <>
    <Swiper spaceBetween={12}
      grabCursor={true}
      freeMode={true}
      touchRatio={1}
      simulateTouch={true}
      mousewheel={false}
      breakpoints={{
    0:    { slidesPerView: 2 },   // mobile
    480:  { slidesPerView: 2.5 }, // small phones landscape
    640:  { slidesPerView: 3 },   // tablets
    768:  { slidesPerView: 4 },   // portrait laptop
    1024: { slidesPerView: 5 },   // desktops
  }}>
        
     {[
    { img: "/Men/mencombo3.jpg", title: "Casual combo", price: "₹2500" },
    { img: "/Men/mencombo4.jpg", title: "Formal combo", price: "₹1500 a pair" },
    { img: "/Men/mencombo5.jpg", title: "Men's combo", price: "₹2000, special offer" },
    { img: "/Men/mencombo6.jpg", title: "trending combo", price: "₹3500rs only" },
    { img: "/Men/mencombo7.jpg", title: "Special combo", price: "₹3000 only" },
    { img: "/Men/mencombo8.jpg", title: "Formal combo", price: "₹2500 only" },
    { img: "/Men/mencombo9.jpg", title: "Ordinary combo", price: "₹1000 only" },
  ].map((item, index) => (
    <SwiperSlide key={index}>
      <div className="
          h-auto
          bg-white
          rounded-xl
          px-3 py-4
          shadow
          flex flex-col
          items-center
          gap-2
        "
      >
        <img
          src={item.img}
          className="w-full h-40 sm:h-48 md:h-52 object-cover rounded-xl"
        />
        <p className="text-sm md:text-base font-semibold">{item.title}</p>
        <p className="text-[12px] md:text-xs text-gray-600">{item.price}</p>
      </div>
    </SwiperSlide>
  ))}
    </Swiper>
    </>
  )
}

export default Slider1
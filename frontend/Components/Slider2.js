"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider2 = () => {
  return (
    <>
    <Swiper className='w-[95vw] mx-auto' spaceBetween={15}
      grabCursor={true}
      freeMode={true}
      touchRatio={1}
      simulateTouch={true}
      mousewheel={false}
      breakpoints={{
    0:    { slidesPerView: 2 },
    480:  { slidesPerView: 2.5 },
    640:  { slidesPerView: 3 },
    768:  { slidesPerView: 4 },
  }}>
       {[
    { img: "/Women/womencombo1.jpg", title: "Women combo", price: "₹1500 only" },
    { img: "/Women/womencombo2.jpg", title: "Women combo", price: "₹500 only" },
    { img: "/Women/womencombo3.jpg", title: "Trending combo", price: "₹2500, special offer" },
    { img: "/Women/womencombo5.jpg", title: "Casual combo", price: "₹3500 only" },
  ].map((item, index) => (
    <SwiperSlide key={index}>
      <div className="
        bg-white 
        rounded-2xl 
        shadow 
        px-3 py-4 
        flex flex-col items-center gap-2
      ">
        <img
          src={item.img}
          className="w-full h-40 sm:h-48 md:h-52 object-cover rounded-xl"
        />
        <p className="text-sm md:text-base font-semibold text-center">
          {item.title}
        </p>
        <p className="text-[11px] md:text-xs text-gray-600 text-center">
          {item.price}
        </p>
      </div>
    </SwiperSlide>
  ))}
    </Swiper>
    </>
  )
}

export default Slider2
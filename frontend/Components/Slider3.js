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
    <Swiper spaceBetween={7}
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
    1024: { slidesPerView: 5 },
  }}>
         {[
    "/Child/child1.jpg",
    "/Child/child2.jpg",
    "/Child/child3.jpg",
    "/Child/child4.jpg",
    "/Child/child5.jpg",
    "/Child/child6.jpg",
    "/Child/child7.jpg",
    "/Child/child8.jpg",
    "/Child/child10.jpg",
  ].map((img, index) => (
    <SwiperSlide key={index}>
      <div className="
        bg-white 
        rounded-2xl 
        shadow 
        px-3 py-4 
        flex flex-col items-center gap-2
      ">
        <img
          src={img}
          className="w-full h-40 sm:h-48 md:h-52 object-cover rounded-xl"
        />
        <p className="text-sm md:text-base font-semibold text-center">
          Kidswear Combo
        </p>
        <p className="text-[11px] md:text-xs text-gray-600 text-center">
          ₹2500 – Special offer
        </p>
      </div>
    </SwiperSlide>
  ))}
    </Swiper>
    </>
  )
}

export default Slider1
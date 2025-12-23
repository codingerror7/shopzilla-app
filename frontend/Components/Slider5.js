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
    <Swiper className='mt-4 w-[95vw] mx-auto' spaceBetween={10}
      grabCursor={true}
      freeMode={true}
      touchRatio={1}
      simulateTouch={true}
      mousewheel={false}
       breakpoints={{
    320: { slidesPerView: 1 },   // mobile
    480: { slidesPerView: 2 },   // small tablets
    768: { slidesPerView: 3 },   // tablets
    1024: { slidesPerView: 4 },  // laptops
    1280: { slidesPerView: 5 }   // desktops
  }}>
         {[
    { src: '/Beauty/beauty1.jpg', title: 'Bodylotion family pack', price: '₹2500 only' },
    { src: '/Beauty/beauty2.jpg', title: 'Shampoo combo', price: '₹500 only' },
    { src: '/Beauty/beauty3.jpg', title: 'Axe deodorant', price: '₹250 only' },
    { src: '/Beauty/beauty4.jpg', title: 'Garnier men facewash', price: '₹200 only' },
    { src: '/Beauty/beauty5.jpg', title: 'Head & Shoulders', price: '₹500 only' },
    { src: '/Beauty/beauty6.jpg', title: 'Ponds white cream', price: '₹200 only' },
    { src: '/Beauty/beauty7.jpg', title: 'Parachute hair oil', price: '₹180 only' },
    { src: '/Beauty/beauty8.jpg', title: 'Selfcare set', price: '₹2500 only' },
    { src: '/Beauty/beauty9.jpg', title: 'Vaseline wintercare', price: '₹1800 only' },
  ].map((item, idx) => (
    <SwiperSlide key={idx}>
      <div className="h-[260px] sm:h-[280px] md:h-[295px] bg-white rounded-xl p-4 flex flex-col items-center justify-start shadow-md hover:shadow-xl transition-all">
        <img
          className="h-[70%] w-full object-cover rounded-lg mb-2"
          src={item.src}
          alt={item.title}
        />
        <p className="text-sm sm:text-base md:text-lg font-semibold text-center">{item.title}</p>
        <p className="text-xs sm:text-sm text-center">{item.price}</p>
      </div>
    </SwiperSlide>
  ))}
    </Swiper>
    </>
  )
}

export default Slider1
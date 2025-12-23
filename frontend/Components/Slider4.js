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
    320: { slidesPerView: 1 },  // mobile
    480: { slidesPerView: 2 },  // small tablets
    768: { slidesPerView: 3 },  // tablets
    1024: { slidesPerView: 4 }, // laptops
    1280: { slidesPerView: 5 }  // desktops
  }}>
        {[
    { src: '/Electronics/headphone1.jpg', title: 'Turbo Headphone', price: '₹5000 only' },
    { src: '/Electronics/headphone2.jpg', title: 'Classic Headphone', price: '₹2000 Only' },
    { src: '/Electronics/phone1.jpg', title: 'Bold Smartphone', price: '₹8000, special price' },
    { src: '/Electronics/phone2.jpg', title: 'Samsung Smartphone', price: '₹60000 only' },
    { src: '/Electronics/phone3.jpg', title: 'Ultra Mobile', price: '₹7000 only' },
    { src: '/Electronics/headphone3.jpg', title: 'Vintage Earphones', price: '₹1200 only' },
    { src: '/Electronics/watch1.jpg', title: 'Mens Smartwatch', price: '₹8599 only' },
    { src: '/Electronics/phone4.jpg', title: 'Classic Phone', price: '₹3000 only' },
    { src: '/Electronics/phone5.jpg', title: 'Tecno Smartphone', price: '₹10000 only' },
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
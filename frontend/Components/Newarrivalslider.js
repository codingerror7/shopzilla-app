"use client"
import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Newarrivalslider = () => {
  return (
   <>
   <div className='w-[90vw] sm:w-[85vw] md:w-[80vw] mt-4 mb-12 sm:mt-6 md:mt-8 mx-auto rounded-2xl z-20'>
    <Swiper
    modules={[Autoplay,Pagination]}
    spaceBetween={20}
      slidesPerView={1}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      //pagination={{ clickable: true, color : "white"}}
      loop={true}
      grabCursor={true}
      freeMode={true}
      touchRatio={1}
      simulateTouch={true}
      mousewheel={false}
      breakpoints={{
      640: { slidesPerView: 1, spaceBetween: 20, height :200 }, // small screens
      768: { slidesPerView: 1, spaceBetween: 25, height:300 }, // tablets
      1024: { slidesPerView: 1, spaceBetween: 30, height:400 }  
    }}
      style={{
        width: "100%",
        height:"300px"
      }}>
        <SwiperSlide>
            <img className='w-full h-full object-cover rounded-2xl' src="/Newarrival/newarrival.jpeg"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-full object-cover rounded-2xl' src="/Newarrival/newarrival2.jpeg"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-full object-cover rounded-2xl' src="/Newarrival/newarrival3.jpeg"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-full object-cover rounded-2xl' src="/Newarrival/newarrival4.jpeg"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-full object-cover rounded-2xl' src="/Newarrival/newarrival5.jpeg"></img>
        </SwiperSlide>
    </Swiper>
   </div>
   </>
  )
}

export default Newarrivalslider
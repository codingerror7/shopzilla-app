"use client"
import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Mainslider = () => {
  return (
   <>
   <div className='w-[90vw] mt-[-2%] lg:h-[500px] md:h-[380px] sm:h-[220px] ml-[5vw] rounded-[20px] z-20'>
    <Swiper
    modules={[Autoplay,Pagination]}
    spaceBetween={30}
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
      mousewheel={false}>
        <SwiperSlide>
            <img className='w-full h-full object-cover rounded-[20px]' src="/fashionbanner.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-full object-cover rounded-[20px]' src="/beautybanner.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-full object-cover rounded-[20px]' src="fashionbanner2.jpg"></img>
        </SwiperSlide>
         <SwiperSlide>
            <img className='w-full h-full object-cover rounded-[20px]' src="gadgetbanner.jpg"></img>
        </SwiperSlide>
         <SwiperSlide>
            <img className='w-full h-full object-cover rounded-[20px]' src="fashionbanner3.jpg"></img>
        </SwiperSlide>
    </Swiper>
   </div>
   </>
  )
}

export default Mainslider
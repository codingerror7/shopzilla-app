"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const Slider1 = () => {
  return (
    <>
    <Swiper className='mt-[5%]' spaceBetween={7}
      modules={[Autoplay]}
      loop={true}
      freeMode={true}
      freeModeMomentum={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={2000} //slide animation speed
        breakpoints={{
    320: { slidesPerView: 2 },   // small phones
    480: { slidesPerView: 3 },   // medium phones
    768: { slidesPerView: 4 },   // tablet
    1024: { slidesPerView: 5 }   // desktop
  }}>
         {[
    "/Autoslider/levis.jpg",
    "/Autoslider/mango.jpg",
    "/Autoslider/gap.jpg",
    "/Autoslider/H&M.jpg",
    "/Autoslider/catandjack.jpg",
    "/Autoslider/Meeee.jpg",
    "/Autoslider/Milka.jpg",
    "/Autoslider/puma.jpg",
    "/Autoslider/tommyhilfigure.jpg",
    "/Autoslider/zara.jpg"
  ].map((src, i) => (
    <SwiperSlide key={i}>
      <img
        src={src}
        className="h-[18vh] w-[38vh] lg:h-[25vh] lg:w-[35vh] object-cover rounded-[10%]"
      />
    </SwiperSlide>
  ))}
    </Swiper>
    </>
  )
}

export default Slider1
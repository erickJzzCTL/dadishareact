import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import './bannerslider.css';

export default function BannerSlider() {
  return (
    <Swiper
      pagination={true}
      autoplay={{
        delay: 2500, // Delay between slides in milliseconds
        disableOnInteraction: false, // Continue autoplay even after user interaction
      }}
      loop={true} // Enable looping
      modules={[Autoplay, Pagination]}
      className="mySwiper bannermain"
    >
      <SwiperSlide className="overflow-hidden rounded-xl position-realtive ">
        <div
          className="w-100 overflow-hidden rounded-xl"
          style={{ height: '340px' }}
        >
          <img
            src="/tempimg/p1.jpg"
            alt="p1"
            className="w-100 h-100 object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="w-100 overflow-hidden rounded-xl"
          style={{ height: '340px' }}
        >
          <img
            src="/tempimg/p2.jpg"
            alt="p2"
            className="w-100 h-100 object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="w-100 overflow-hidden rounded-xl"
          style={{ height: '340px' }}
        >
          <img
            src="/tempimg/p3.jpg"
            alt="p3"
            className="w-100 h-100 object-cover"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

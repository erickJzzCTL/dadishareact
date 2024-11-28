import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Navigation, Pagination } from 'swiper/modules';
import './bannerslider.css';

export default function BannerSlider() {
  const prevButton = (
    <button className="custom-prev-button">
      <i class="fa-solid fa-chevron-left"></i>
    </button>
  );
  const nextButton = (
    <button className="custom-next-button">
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  );
  return (
    <Swiper
      navigation={{
        prevEl: '.custom-prev-button',
        nextEl: '.custom-next-button',
      }}
      pagination={true}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="w-100" style={{ height: '240px' }}>
          <img src="/tempimg/p1.jpg" alt="p1" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-100" style={{ height: '240px' }}>
          <img src="/tempimg/p1.jpg" alt="p1" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-100" style={{ height: '240px' }}>
          <img src="/tempimg/p1.jpg" alt="p1" />
        </div>
      </SwiperSlide>
      {prevButton}
      {nextButton}
    </Swiper>
  );
}

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import the autoplay CSS
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import the Autoplay module

const ProductCardImageSlider = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 2500, // Delay between transitions in milliseconds
        disableOnInteraction: false, // Continue autoplay even when user interacts with the slider
      }}
      className="w-full h-full"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            className="w-full h-full object-cover"
            alt={`Slide ${index + 1}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductCardImageSlider;

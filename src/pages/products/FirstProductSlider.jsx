import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { FreeMode, Mousewheel } from 'swiper/modules';
import { FaHeart } from 'react-icons/fa';
import { Rate } from 'antd';
import { IoCartOutline } from 'react-icons/io5';
import ProductCardImageSlider from './ProductCardImageSlider';
import './products.css';
export default function FirstProductSlider({ productArray }) {
  return (
    <div className="rounded-xl p-2 mt-4" style={{ backgroundColor: '#EBEEF6' }}>
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode, Mousewheel]}
        mousewheel={{
          // Enable and configure the mousewheel
          forceToAxis: true, // Scrolls only in the horizontal direction
          sensitivity: 1, // Adjust the sensitivity of scrolling
        }}
        freeMode={true}
      >
        {productArray.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card rounded-xl overflow-hidden">
              <div className="position-relative overflow-hidden">
                <ProductCardImageSlider images={item.images} />
                <div className="position-absolute top-0 w-full">
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      className=" text-white  fw-700  border-none px-4  h-fit mt-6"
                      style={{
                        fontSize: '12px',
                        backgroundColor: '#FBAE24 ',
                        borderTopRightRadius: '6px', // Customize this value as needed
                        borderBottomRightRadius: '10px',
                      }}
                    >
                      Dadisha Assured
                    </button>
                    <button
                      className="  rounded-full fw-700    py-1  h-30px w-30px d-flex justify-content-between align-items-center mt-6 me-2"
                      style={{
                        fontSize: '12px',
                        backgroundColor: 'transparent ',
                        border: '1px solid #999999',
                      }}
                    >
                      <FaHeart style={{ fontSize: '20px', color: '#000 ' }} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body bg-white d-flex align-items-start flex-column">
                <div
                  className="   border-none px-4  py-0 h-fit"
                  style={{
                    fontSize: '12px',
                    backgroundColor: '#ffa5004f ',
                    borderRadius: '40px',
                    color: '#0009',
                  }}
                >
                  15% OFF
                </div>
                <h5
                  className="mb-0 text-start fw-700 my-2 text-ellipsis line-clamp-2"
                  style={{ fontSize: '18px', lineHeight: '26px' }}
                >
                  {item.name}
                </h5>
                <div className="d-flex justify-content-between mt-4 gap-2">
                  <div className="d-flex align-items-center ">
                    <Rate
                      allowHalf
                      disabled
                      defaultValue={item.rating}
                      className="text-base-color"
                    />
                  </div>
                  <div className="ml-2">({item.rating})</div>
                </div>
                <div className="d-flex gap-3">
                  <p className="mb-0 mt-4 fw-700 " style={{ fontSize: '20px' }}>
                    {' '}
                    $ 2967
                  </p>
                  <p
                    className="mb-0 mt-4  "
                    style={{
                      fontSize: '16px',
                      textDecoration: 'line-through',
                    }}
                  >
                    {' '}
                    $ 2967
                  </p>
                </div>
                {/* <div className="buttons-container d-flex  align-items-center w-100 mt-2 gap-2">
                  <button
                    className=" text-dark-gray rounded fw-700 bg-white  px-1 py-1  h-30px w-30px d-flex justify-content-between align-items-center"
                    style={{
                      fontSize: '12px',
                      border: '1px solid #fbae24',
                    }}
                  >
                    <IoCartOutline
                      style={{ fontSize: '20px', color: '#fbae24' }}
                    />
                  </button>
                  <button
                    className=" text-white rounded fw-700 border-none px-4  h-fit "
                    style={{
                      fontSize: '12px',
                      backgroundColor: '#fbae24',
                    }}
                  >
                    Buy Now
                  </button>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

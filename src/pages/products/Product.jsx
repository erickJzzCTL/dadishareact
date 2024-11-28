import React, { useState } from 'react';
import Header from '../../components/Header';
import AboutSectionFive from '../about/AboutSectionFive';
import HomeSectionEight from '../home/HomeSectionEight';
import { Fade, Slide } from 'react-awesome-reveal';
import { CiHeart } from 'react-icons/ci';
import { Rate } from 'antd';
import CategorySlider from './category/CategorySlider';
import BannerSlider from './banner/BannerSlider';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { FreeMode, Mousewheel } from 'swiper/modules';

const productArray = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description of Product 1',
    image: '/tempimg/p1.jpg',
    rating: 0.5,
  },
  {
    id: 2,
    name: 'Product 2',
    description:
      'Description of Product 2 hiscdjjncsdkjkmsknjknjsdjknkjnsdkjn adsjjhjas',
    image: '/tempimg/p2.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description of Product 3',
    image: '/tempimg/p3.jpg',
    rating: 2.5,
  },
  {
    id: 4,
    name: 'Product 3',
    description: 'Description of Product 3',
    image: '/tempimg/p4.jpg',
    rating: 4.5,
  },
  {
    id: 5,
    name: 'Product 3',
    description: 'Description of Product 3',
    image: '/tempimg/p5.jpg',
    rating: 2.5,
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'Description of Product 3',
    image: '/tempimg/p6.jpg',
    rating: 0.5,
  },

  {
    id: 5,
    name: 'Product 7',
    description: 'Description of Product 7',
    image: '/tempimg/p7.jpg',
    rating: 1.5,
  },
];

const categories = [
  {
    id: 1,
    name: 'Personal Protective',
    subCategories: [
      'Respiratory',
      'Body',
      'Foot',
      'Head',
      'Eye',
      'Hand',
      'Hearing',
    ],
  },
  {
    id: 2,
    name: 'QHSE',
    subCategories: [
      'Trash Bin',
      'Cupboard',
      'Station',
      'Office',
      'Fire first aid',
    ],
  },
  {
    id: 3,
    name: 'Way Finding',
    subCategories: [
      'Manufacturing',
      'Small and Medium Sized Enterprises',
      'Space',
      'Tourism',
      'Marine',
      'Agriculture',
      'Food',
    ],
  },
];

const languages = [
  { id: 1, name: 'English' },
  { id: 2, name: 'Hindi' },
  { id: 3, name: 'Arabic' },
  { id: 4, name: 'Spanish' },
];

export default function Product() {
  const [expandedCategories, setExpandedCategories] = useState({ 1: true });

  const toggleCategory = categoryId => {
    setExpandedCategories(prevState => ({
      ...prevState,
      [categoryId]: !prevState[categoryId],
    }));
  };

  console.log(expandedCategories);

  return (
    <div>
      <Header />

      <div className="container mx-auto  prd-top">
        <input
          className="mb-3  rounded border-black text-back"
          placeholder="search the product here"
        />
        <CategorySlider />
        <BannerSlider />

        <div className="mt-4 rounded mb-4">
          <h5 className="text-black">New Arrival</h5>
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
            {productArray.map(item => (
              <SwiperSlide key={item.id}>
                <div className="card">
                  <div className="">
                    <img
                      src={item.image}
                      className="card-img-top w-full h-full object-cover"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="mb-0" style={{ fontSize: '18px' }}>
                      {item.name}
                    </h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <p
                        className="mb-0 "
                        style={{ fontSize: '20px', color: '#6f7071' }}
                      >
                        {' '}
                        29 $
                      </p>
                      <Rate
                        allowHalf
                        disabled
                        defaultValue={item.rating}
                        className="text-base-color"
                      />
                    </div>
                    <p
                      className="text-ellipsis line-clamp-2"
                      style={{
                        minHeight: '40px',
                        fontSize: '12px',
                        lineHeight: '20px',
                      }}
                    >
                      {item.description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <button
                        className=" text-dark-gray rounded fw-700 bg-white border-1 px-1 py-1  h-30px w-30px d-flex justify-content-between align-items-center"
                        style={{ fontSize: '12px' }}
                      >
                        <CiHeart style={{ fontSize: '20px' }} />
                      </button>
                      <button
                        className=" text-white border-radius-30px fw-700 bg-black border-none px-4  h-fit "
                        style={{ fontSize: '12px' }}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <HomeSectionEight />
    </div>
  );
}

import React, { useState } from 'react';
import Header from '../../components/Header';
import AboutSectionFive from '../about/AboutSectionFive';
import HomeSectionEight from '../home/HomeSectionEight';
import { Fade, Slide } from 'react-awesome-reveal';
import { FaHeart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';
import { FaTruckFast } from 'react-icons/fa6';
import { IoReload } from 'react-icons/io5';
import { FaShield } from 'react-icons/fa6';
import { GiRabbit } from 'react-icons/gi';
import { IoMdHeadset } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import { Rate } from 'antd';
import CategorySlider from './category/CategorySlider';
import BannerSlider from './banner/BannerSlider';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { FreeMode, Mousewheel } from 'swiper/modules';
import BottomBanner from './banner/BottomBanner';
import { color } from 'framer-motion';
import TrendingSerach from './TrendingSerach';

import ProductFooter from './ProductFooter';
import FirstProductSlider from './FirstProductSlider';
import SecondProductSlider from './SecondProductSlider';

const productArray = [
  {
    id: 1,
    name: 'Air Purifier with True HEPA H14 Filter',
    description: 'Description of Product 1',
    images: ['/tempimg/p1.jpg', '/tempimg/p2.jpg', '/tempimg/p3.jpg'],
    rating: 0.5,
  },
  {
    id: 2,
    name: 'Air Purifier with True HEPA H14 Filter',
    description:
      'Description of Product 2 hiscdjjncsdkjkmsknjknjsdjknkjnsdkjn adsjjhjas',
    images: ['/tempimg/p2.jpg', '/tempimg/p1.jpg', '/tempimg/p3.jpg'],
    rating: 5,
  },
  {
    id: 3,
    name: 'Air Purifier with True HEPA H14 Filter',
    description: 'Description of Product 3',
    images: ['/tempimg/p3.jpg', '/tempimg/p2.jpg', '/tempimg/p1.jpg'],
    rating: 2.5,
  },
  {
    id: 4,
    name: 'Air Purifier with True HEPA H14 Filter',
    description: 'Description of Product 3',
    images: ['/tempimg/p4.jpg', '/tempimg/p5.jpg', '/tempimg/p1.jpg'],
    rating: 4.5,
  },
  {
    id: 5,
    name: 'Air Purifier with True HEPA H14 Filter',
    description: 'Description of Product 3',
    images: ['/tempimg/p5.jpg', '/tempimg/p2.jpg', '/tempimg/p3.jpg'],
    rating: 2.5,
  },
  {
    id: 6,
    name: 'Air Purifier with True HEPA H14 Filter',
    description: 'Description of Product 3',
    images: ['/tempimg/p6.jpg', '/tempimg/p4.jpg', '/tempimg/p3.jpg'],
    rating: 0.5,
  },

  {
    id: 5,
    name: 'Air Purifier with True HEPA H14 Filter',
    description: 'Description of Product 7',
    images: ['/tempimg/p7.jpg', '/tempimg/p5.jpg', '/tempimg/p6.jpg'],
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
        <div className="d-flex gap-2">
          <div className="position-relative w-full rounded overflow-hidden">
            <input
              className="  rounded border-[#F3F4F6] text-back  overflow-hidden"
              placeholder="Search for products, categories or brands..."
            />
            <div
              className="position-absolute end-0 top-0   px-4  py-2 h-full custom-pointer"
              style={{ backgroundColor: '#FFA500' }}
            >
              <div className="d-flex justify-content-center align-items-center h-full">
                <FiSearch className="text-white fs-5  " />
              </div>
            </div>
          </div>
        </div>
        <CategorySlider />
        {/* ---------------------banner slider------------------- */}
        <div className="row">
          <div className="col-8">
            <BannerSlider />
          </div>
          <div className="col-4">
            <div
              className="w-100 overflow-hidden rounded-xl position-relative"
              style={{ height: '340px' }}
            >
              <img
                src="/tempimg/banneside1.png"
                alt="p1"
                className="w-100 h-100 object-cover"
              />
              <div className="position-absolute bottom-0 w-100">
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <button className="bg-white text-black rounded-xl px-4 py-1 border-none fs-6">
                    Discover Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <BottomBanner />
        </div>
        {/* ---------------------banner slider------------------- */}

        <SecondProductSlider productArray={productArray} />
        <TrendingSerach />
        <div className="mt-6 rounded mb-4" style={{ marginTop: '10rem' }}>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="text-black fw-700">QHSE Sign Boards</h5>
            <a className="d-flex align-items-center gap-2">
              View All <IoIosArrowForward />
            </a>
          </div>
          <FirstProductSlider productArray={productArray} />
        </div>

        <div
          className="rounded-xl px-4 py-3 text-white mb-4"
          style={{ backgroundColor: '#F6AB4A', fontSize: '14px' }}
        >
          <div className="d-flex flex-wrap justify-content-between">
            <div className="d-flex justify-content-between align-items-center gap-2">
              <FaTruckFast />
              <p className="text-uppercase mb-0"> free shipping over $199</p>
            </div>
            <div className="d-flex justify-content-between align-items-center gap-2">
              <IoReload />
              <p className="text-uppercase mb-0"> 30 days money back</p>
            </div>
            <div className="d-flex justify-content-between align-items-center gap-2">
              <FaShield />
              <p className="text-uppercase mb-0"> 100% secure payment</p>
            </div>
            <div className="d-flex justify-content-between align-items-center gap-2">
              <GiRabbit />
              <p className="text-uppercase mb-0"> free product return</p>
            </div>
            <div className="d-flex justify-content-between align-items-center gap-2">
              <IoMdHeadset />
              <p className="text-uppercase mb-0">
                {' '}
                24/7 online & offline support
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded mb-4" style={{ marginTop: '10rem' }}>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="text-black fw-700">Recently viewed products</h5>
            <a className="d-flex align-items-center gap-2">
              View All <IoIosArrowForward />
            </a>
          </div>
          <FirstProductSlider productArray={productArray} />
        </div>
      </div>
      <ProductFooter />
    </div>
  );
}

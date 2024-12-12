import React from 'react';
import Header from '../../../components/Header';
import ProductFooter from '../ProductFooter';
import PrdSecOne from './PrdSecOne';
import { IoIosArrowForward } from 'react-icons/io';
import { FaTruckFast } from 'react-icons/fa6';
import { IoReload } from 'react-icons/io5';
import { FaShield } from 'react-icons/fa6';
import { GiRabbit } from 'react-icons/gi';
import { IoMdHeadset } from 'react-icons/io';
import FirstProductSlider from '../FirstProductSlider';

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

export default function ProductDetails() {
  return (
    <div>
      <Header />

      <PrdSecOne />

      <div className="container mx-auto ">
        <div className="mt-6 rounded mb-4" style={{ marginTop: '10rem' }}>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="text-black fw-700">Recommended products</h5>
            <a
              className="d-flex align-items-center gap-2 text-black custom-pointer"
              style={{ textDecoration: 'none' }}
            >
              View All <IoIosArrowForward />
            </a>
          </div>
          <FirstProductSlider productArray={productArray} />
        </div>
        <div
          className="rounded-xl px-4 py-3 text-white mb-4 mt-6"
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
            <a
              className="d-flex align-items-center gap-2 text-black custom-pointer"
              style={{ textDecoration: 'none' }}
            >
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

import React, { useState } from 'react';
import { MdFilterListOff } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import { Rate } from 'antd';
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './category.css';
import ProductCardImageSlider from '../../products/ProductCardImageSlider';
import { useNavigate } from 'react-router-dom';

const CategoryArray = [
  {
    id: 1,
    category: 'PPE',
    subCategory: [
      { subcategory: 'ppe Posters' },
      { subcategory: 'test sub' },
      { subcategory: 'test sub' },
      { subcategory: 'test sub' },
    ],
  },
  {
    id: 2,
    category: 'Safety Posters',
    subCategory: [
      { subcategory: 'Safety Sign Boards Posters' },
      { subcategory: 'Safety Sign Boards test sub' },
      { subcategory: 'test sub' },
      { subcategory: 'test sub' },
    ],
  },
  {
    id: 3,
    category: 'Safety Sign Boards',
    subCategory: [
      { subcategory: 'Safety Sign Boards Posters' },
      { subcategory: 'Safety Sign Boards test sub' },
    ],
  },
];

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

export default function FilterSection() {
  const navigate = useNavigate();

  return (
    <div className="row mt-4 mb-4">
      <div className="col-12 col-md-3">
        <button
          className="rounded bg-white p-2 w-100  mb-4 mb-sm-0"
          style={{ border: '1px solid #D9D9D9' }}
        >
          <span className="me-4">
            <MdFilterListOff />
          </span>
          Hide Filters
        </button>

        <div
          className="mt-4 rounded p-6 d-none d-md-block"
          style={{ border: '1px solid #D9D9D9' }}
        >
          <div style={{ borderBottom: '1px solid #E1E1E1' }} className="pb-6">
            <div className="">
              <h1
                className=" font-semibold fs-6 mb-0"
                style={{ lineHeight: '3rem' }}
              >
                PriceRange
              </h1>
              <div className=" mt-0 d-flex">
                <button
                  className="p-2  text-center border-none"
                  style={{ backgroundColor: '#E1E1E1', width: '5rem' }}
                >
                  AED
                </button>
                <input
                  className="rounded-none"
                  placeholder="Minimumprice"
                  style={{ padding: '2px 25px' }}
                />
              </div>
              <div className=" mt-4 d-flex">
                <button
                  className="p-2  text-center border-none"
                  style={{ backgroundColor: '#E1E1E1', width: '5rem' }}
                >
                  AED
                </button>
                <input
                  className="rounded-none"
                  placeholder="Maximum price"
                  style={{ padding: '2px 25px' }}
                />
              </div>
            </div>
          </div>
          <div style={{ borderBottom: '1px solid #E1E1E1' }}>
            <h1 className=" font-semibold fs-6  my-4">Product Categories</h1>
            <Accordion defaultActiveKey="0">
              {CategoryArray.map((category, index) => (
                <Accordion.Item key={category.id} eventKey={index.toString()}>
                  <Accordion.Header> {category.category}</Accordion.Header>
                  <Accordion.Body>
                    <div className="d-flex flex-column gap-2">
                      {category.subCategory.map((sub, subIndex) => (
                        <div
                          key={subIndex}
                          className="d-flex gap-2 align-items-center"
                        >
                          <input
                            type="checkbox"
                            style={{ width: '20px', height: '20px' }}
                          />
                          <div> {sub.subcategory}</div>
                        </div>
                      ))}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
          <div style={{ borderBottom: '1px solid #E1E1E1' }}>
            <h1 className=" font-semibold fs-6  my-4">Product Varients</h1>
            <Accordion defaultActiveKey="0">
              {CategoryArray.map((category, index) => (
                <Accordion.Item key={category.id} eventKey={index.toString()}>
                  <Accordion.Header> {category.category}</Accordion.Header>
                  <Accordion.Body>
                    <div className="d-flex flex-column gap-2">
                      {category.subCategory.map((sub, subIndex) => (
                        <div
                          key={subIndex}
                          className="d-flex gap-2 align-items-center"
                        >
                          <input
                            type="checkbox"
                            style={{ width: '20px', height: '20px' }}
                          />
                          <div> {sub.subcategory}</div>
                        </div>
                      ))}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-9">
        <div
          className="rounded  p-2 d-flex px-4 justify-content-between "
          style={{
            width: '100%',
            backgroundColor: '#f3f4f6',
          }}
        >
          <p className="mb-0 fs-6">Showing all 16 results</p>
          <div className="d-flex gap-4">
            <h1 className="mb-0 fs-6">
              Sort:{' '}
              <span
                style={{ backgroundColor: '#f3f4f6' }}
                className="fw-normal"
              >
                Sort by latest
              </span>
            </h1>
            <h1 className="mb-0 fs-6">
              Show:{' '}
              <span
                style={{ backgroundColor: '#f3f4f6' }}
                className="fw-normal"
              >
                20 Items
              </span>
            </h1>
          </div>
        </div>
        <div className="mt-4">
          <div className="row">
            {productArray.map((item, index) => (
              <div
                key={index}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              >
                <div className="card rounded-xl overflow-hidden">
                  <div
                    className="position-relative overflow-hidden"
                    onClick={() => navigate(`/productdetails/`)}
                  >
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
                          <FaHeart
                            style={{ fontSize: '20px', color: '#000 ' }}
                          />
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
                      <p
                        className="mb-0 mt-4 fw-700 "
                        style={{ fontSize: '20px' }}
                      >
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Rate } from 'antd';
import { IoCartOutline } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';
import ProductCardImageSlider from './ProductCardImageSlider';
import './products.css';

export default function SecondProductSlider({ productArray }) {
  return (
    <div className="rounded-xl p-2 mt-4" style={{ backgroundColor: '#EBEEF6' }}>
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="text-black fw-700 my-4">Best Weekly Deals</h5>
        <a className="d-flex align-items-center gap-2">
          View All <IoIosArrowForward />
        </a>
      </div>
      <div className="row">
        {productArray.map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
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
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="px-4 py-1  border-none fs-6 custom-button"
          style={{ borderRadius: '20px' }}
        >
          See All Products (63)
        </button>
      </div>
    </div>
  );
}

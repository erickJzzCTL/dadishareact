import React, { useState } from 'react';
import { Rate } from 'antd';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { FiShoppingCart } from 'react-icons/fi';
import { SlCreditCard } from 'react-icons/sl';
import { FiShield } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoShareOutline } from 'react-icons/io5';
import { RiLoopLeftFill } from 'react-icons/ri';
import { HiDocument } from 'react-icons/hi2';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { InputNumber } from 'primereact/inputnumber';
import 'primereact/resources/themes/saga-blue/theme.css'; // Theme
import 'primereact/resources/primereact.min.css'; // Core CSS
import 'primeicons/primeicons.css';

import './productdetail.css';

const PrdSecOne = () => {
  // Static product details for demonstration
  const productDetail = {
    brandName: { name: 'Marketside' },
    productName: 'Fresh Organic Bananas, Bunch',
    category: { name: 'Exotic Fruit & Veggies' },
    rating: 3.5,
    productImage: [
      '/tempimg/p1.jpg',
      '/tempimg/p2.jpg',
      '/tempimg/p3.jpg',
      '/tempimg/p4.jpg',
      '/tempimg/p5.jpg',
      '/tempimg/p6.jpg',
      '/tempimg/p7.jpg',
    ],
    selling: 294.89,
    price: 649.99,
    description:
      'Quisque varius diam vel metus mattis, id aliquam diam rnoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum laculis nith, at sodales leo maximus a. Nullam ultricies sodales nunc, in pelentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.',
    specifications: {
      General: {
        Brand: 'Marketside',
        ModelNumber: '#sdgf',
        OtherFeature: 'Organic',
        BranchName: 'Barytown',
      },
      Technical: {
        MaximumDocumentSize: 'Flatbed - A4/LTR (216 × 297 mm)',
        TotalNumberofNozzles: '1280',
        InkCartridges: 'POP-47, CL-575 (Optional: CL-57)',
        ImageQuality: '2 Positions (Draft, Standard)',
        DuplexPrint: 'No',
      },
    },
  };

  const variantsprd = [
    {
      color: [
        {
          name: 'Black',
        },
        {
          name: 'White',
        },
      ],
      size: [
        {
          name: 'Small',
        },
        {
          name: 'Medium',
        },
        {
          name: 'Large',
        },
      ],
    },
  ];

  console.log(variantsprd);
  const [activeTab, setActiveTab] = useState('description');
  // State to manage the active image
  const [activeImage, setActiveImage] = useState(productDetail.productImage[0]);

  // Zoom functionality
  const handleZoomImage = e => {
    const zoomContainer =
      e.currentTarget.parentElement.querySelector('.zoom-container');
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    zoomContainer.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
    zoomContainer.style.display = 'block';
  };

  const handleLeaveImageZoom = e => {
    const zoomContainer =
      e.currentTarget.parentElement.querySelector('.zoom-container');
    zoomContainer.style.display = 'none';
  };

  return (
    <div>
      <div className="container mx-auto details mt-10">
        <p className="mb-0">
          Home <i class="fa-solid fa-chevron-right"></i> MainCategory{' '}
          <i class="fa-solid fa-chevron-right"></i> SubCategory
        </p>
        <div className=" min-h-[200px]">
          <div className="row mt-4">
            {/* ------------product main image-------------- */}
            <div className="col-md-6 d-flex flex-column">
              <div className="mainimage rounded p-1 position-relative">
                <img
                  src={activeImage}
                  className="h-100 w-100 object-scale-down"
                  onMouseMove={handleZoomImage}
                  onMouseLeave={handleLeaveImageZoom}
                />
                {/* Zoom container */}
                <div
                  className="zoom-container position-absolute bg-white p-1 top-0 overflow-hidden"
                  style={{
                    backgroundImage: `url(${activeImage})`,
                    backgroundRepeat: 'no-repeat',
                    minHeight: '500px',
                    minWidth: '700px',
                    height: '100%',
                    right: '-510px',
                    zIndex: 10,
                    backgroundSize: '200% 200%', // Adjust zoom level here
                  }}
                ></div>
              </div>
              {/* ------------additional images swiper-------------- */}
              <div className="mt-3 position-relative">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={6}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  className="position-relative"
                  modules={[Navigation]}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={swiper => console.log(swiper)}
                >
                  {productDetail.productImage.map((img_url, i) => (
                    <SwiperSlide key={i}>
                      <div
                        className={`w-full bg-white rounded p-3 ${
                          activeImage === img_url ? ' borderprimary' : ''
                        }`}
                        style={{ height: '6rem', width: '6rem' }}
                        onClick={() => setActiveImage(img_url)}
                      >
                        <img
                          src={img_url}
                          className="h-100 w-100 object-scale-down mix-blend-multiply cursor-pointer"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* Custom Navigation Buttons */}
                <div className="swiper-nav-btns">
                  <button className="swiper-button-prev text-white">
                    <i class="fa-solid fa-chevron-left"></i>
                  </button>
                  <button className="swiper-button-next">
                    <i class="fa-solid fa-chevron-right text-white"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* ------------product main image-------------- */}
            {/* ------------product details-------------- */}
            <div className="col-md-6 d-flex flex-column gap-2 px-3">
              <h2 className="text-2xl lg:text-[32px] font-medium pname ">
                {productDetail?.productName}
              </h2>
              <div className="d-flex gap-4 align-items-center">
                <div className="d-flex gap-2">
                  <div className="d-flex align-items-center ">
                    <Rate
                      allowHalf
                      disabled
                      defaultValue={productDetail.rating}
                      className="text-base-color"
                    />
                  </div>
                  <div className="">({productDetail.rating})</div>
                </div>
                <p className="mb-0">
                  SKU : <span className="fw-bold">E7F8G9H0</span>
                </p>
              </div>
              <p className="text-muted mt-4">
                Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
                malesuada tincidunt. Class aptent taciti sociosqu ad litora
                torquent Vivamus adipiscing nisl ut dolor dignissim semper.
              </p>
              <div>
                <div className="d-flex gap-3 text-xl md:text-2xl align-items-center font-medium my-1 flex-wrap ">
                  <p className="detailprice mb-0">₹{productDetail?.selling}</p>
                  <p className="text-muted text-decoration-line-through mb-0">
                    ₹{productDetail?.price}
                  </p>
                </div>
                <p className="mb-2" style={{ color: '#16A34A' }}>
                  56% OFF
                </p>
              </div>
              <div className="d-flex gap-3 align-items-center">
                <p className="mb-0" style={{ color: '#FFA500' }}>
                  <span className="fw-bold"> Need Bulk Orders</span> & we are
                  there for you{' '}
                </p>
                <button
                  className="px-4  text-white py-1 border-none"
                  style={{
                    backgroundColor: '#FFA500',
                    borderRadius: '6px',
                    fontSize: '12px',
                  }}
                >
                  APPLY FOR BULK ORDER
                </button>
              </div>
              <div className="d-flex gap-2 mt-4">
                <InputNumber
                  value={1}
                  min={1}
                  onValueChange={e => {
                    changeFiled(e, 'max_peoples');
                  }}
                  showButtons
                  buttonLayout="horizontal"
                  style={{
                    width: '130px',
                    padding: '4px',
                    borderRadius: '6px',
                    border: '1px solid #dcdcdc',
                  }}
                  decrementButtonClassName="p-button-secondary"
                  incrementButtonClassName="p-button-secondary"
                  incrementButtonIcon="pi pi-plus"
                  decrementButtonIcon="pi pi-minus"
                />
                <button className="detailbtn-pri rounded px-4 d-flex align-items-center justify-content-center gap-2">
                  <HiOutlineShoppingBag />
                  Buy Now
                </button>
                <button className="detailbtn-sec rounded px-4 d-flex align-items-center justify-content-center gap-2">
                  <FiShoppingCart />
                  Add To Cart
                </button>
              </div>
              <div className="">
                {Object.keys(variantsprd[0]).map(variantType => (
                  <div
                    className="d-flex gap-2 mt-3 align-items-center"
                    key={variantType}
                  >
                    <h5
                      className="fs-6 mb-0 fw-bold"
                      style={{ color: '#6B7280' }}
                    >
                      {variantType.charAt(0).toUpperCase() +
                        variantType.slice(1)}
                    </h5>
                    <div className="d-flex">
                      {variantsprd[0][variantType].map((option, index) => (
                        <div
                          key={index}
                          className={`${variantType}-option me-2 px-2 py-1 rounded border border-[#dcdcdc] cursor-pointer`}
                        >
                          {option.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex gap-4 align-items-center mt-4">
                <SlCreditCard className="fs-3" />
                <p className="mb-0 fs-6">
                  Payment. Payment upon receipt of goods, Payment by card in the
                  department, Google Pay, Online card
                </p>
              </div>
              <div className="d-flex gap-4 align-items-center mt-4">
                <FiShield className="fs-3" />
                <p className="mb-0 fs-6">
                  Warranty. This product is under warranty. Check for detailed
                  warranty notes
                </p>
              </div>
              <div className="d-flex gap-4 align-items-center mt-4">
                <div className="d-flex gap-2 align-items-center fw-bold">
                  <IoMdHeartEmpty className="fs-5" />
                  <p className="mb-0 fs-6">Add to wishlist</p>
                </div>
                <div className="d-flex gap-2 align-items-center fw-bold">
                  <IoShareOutline className="fs-5" />
                  <p className="mb-0 fs-6">Share this Product</p>
                </div>
                <div className="d-flex gap-2 align-items-center fw-bold">
                  <RiLoopLeftFill className="fs-5" />
                  <p className="mb-0 fs-6">Add to Compare</p>
                </div>
              </div>
            </div>
            <div className="col-12 mt-4">
              <div className="tab-switcher">
                <button
                  className={activeTab === 'description' ? 'active' : ''}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                <button
                  className={activeTab === 'review' ? 'active' : ''}
                  onClick={() => setActiveTab('review')}
                >
                  Review
                </button>
              </div>

              {activeTab === 'description' && (
                <div className="mt-4">
                  <p>{productDetail?.description}</p>
                </div>
              )}

              {activeTab === 'review' && (
                <div className="mt-4">
                  <p>
                    review section Quisque varius diam vel metus mattis, id
                    aliquam diam rnoncus. Proin vitae magna in dui finibus
                    malesuada et at nulla. Morbi elit ex, viverra vitae ante
                    vel, blandit feugiat ligula. Fusce fermentum laculis nith,
                    at sodales leo maximus a. Nullam ultricies sodales nunc, in
                    pelentesque lorem mattis quis. Cras imperdiet est in nunc
                    tristique lacinia. Nullam aliquam mauris eu accumsan
                    tincidunt. Suspendisse velit ex, aliquet vel ornare vel,
                    dignissim a tortor.
                  </p>
                </div>
              )}
            </div>
            <div className="col-12 tab-switcher mt-4">
              <button className="active px-0">Product Specifications</button>

              <div className="d-flex flex-column gap-4">
                {Object.keys(productDetail.specifications).map(
                  (category, i) => (
                    <div key={i} className="">
                      <h4 className="my-3">{category}</h4>
                      <div
                        className="p-3"
                        style={{ border: '1px dashed #999999' }}
                      >
                        {Object.keys(
                          productDetail.specifications[category]
                        ).map((key, j) => (
                          <div key={j} className="row justify-content-between">
                            <div className="col-6">
                              <p>{key}</p>
                            </div>
                            <div className="col-6">
                              <p>
                                {productDetail.specifications[category][key]}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className=" tab-switcher mt-4">
              <button className="active px-0">In the box</button>
              <ol className="mt-3" style={{ listStyleType: 'disc' }}>
                <li>1 Surgical Gown, Pair Glove, 2 Mask, Pair Shoe cover</li>
              </ol>
            </div>
            <div className="tab-switcher mt-4">
              <button className="active px-0">Key Features</button>
              <ol
                className="mt-3 d-flex flex-column gap-2"
                style={{ listStyleType: 'disc' }}
              >
                <li>
                  Here goes features list kjsdhfk ksjhdfkjh kd kjsdhf kjdhs kjsh
                  kjfhds kj
                </li>
                <li>
                  Here goes features list kjsdhfk ksjhdfkjh kd kjsdhf kjdhs kjsh
                  kjfhds kj
                </li>
                <li>
                  Here goes features list kjsdhfk ksjhdfkjh kd kjsdhf kjdhs kjsh
                  kjfhds kj
                </li>
                <li>
                  Here goes features list kjsdhfk ksjhdfkjh kd kjsdhf kjdhs kjsh
                  kjfhds kj
                </li>
              </ol>
            </div>
            <div className=" tab-switcher mt-4">
              <button className="active px-0">In the box</button>
              <div
                className="d-grid gap-4 my-3 "
                style={{ gridTemplateColumns: '1fr 1fr' }}
              >
                <div className="d-flex gap-5">
                  <div
                    className="px-2 py-2 rounded"
                    style={{ backgroundColor: '#ffbebe99' }}
                  >
                    <HiDocument className="text-danger fs-3" />
                  </div>
                  <p className="mb-0">
                    Product documentation goes here - two line Product
                    documentation goes here - two line Product documentation
                    goes here - two line
                  </p>
                </div>
                <div className="d-flex gap-5">
                  <div
                    className="px-2 py-2 rounded"
                    style={{ backgroundColor: '#ffbebe99' }}
                  >
                    <HiDocument className="text-danger fs-3" />
                  </div>
                  <p className="mb-0">
                    Product documentation goes here - two line Product
                    documentation goes here - two line Product documentation
                    goes here - two line
                  </p>
                </div>
                <div className="d-flex gap-5">
                  <div
                    className="px-2 py-2 rounded"
                    style={{ backgroundColor: '#ffbebe99' }}
                  >
                    <HiDocument className="text-danger fs-3" />
                  </div>
                  <p className="mb-0">
                    Product documentation goes here - two line Product
                    documentation goes here - two line Product documentation
                    goes here - two line
                  </p>
                </div>
              </div>
            </div>
            <div className=" tab-switcher mt-4">
              <button className="active px-0">Standard Certificates</button>
              <div
                className="d-grid gap-4 my-3 "
                style={{ gridTemplateColumns: '1fr 1fr' }}
              >
                <div className="d-flex gap-5">
                  <div
                    className="px-2 py-2 rounded"
                    style={{ backgroundColor: '#ffbebe99' }}
                  >
                    <HiDocument className="text-danger fs-3" />
                  </div>
                  <p className="mb-0">
                    Product documentation goes here - two line Product
                    documentation goes here - two line Product documentation
                    goes here - two line
                  </p>
                </div>
                <div className="d-flex gap-5">
                  <div
                    className="px-2 py-2 rounded"
                    style={{ backgroundColor: '#ffbebe99' }}
                  >
                    <HiDocument className="text-danger fs-3" />
                  </div>
                  <p className="mb-0">
                    Product documentation goes here - two line Product
                    documentation goes here - two line Product documentation
                    goes here - two line
                  </p>
                </div>
              
              </div>
            </div>
            {/* ------------product details-------------- */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrdSecOne;

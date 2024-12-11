import React from 'react';
import { FaTruckFast } from 'react-icons/fa6';
import { IoReload } from 'react-icons/io5';
import { FaShield } from 'react-icons/fa6';
import { GiRabbit } from 'react-icons/gi';
import { IoMdHeadset } from 'react-icons/io';
import { FaTwitter } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

export default function ProductFooter() {
  return (
    <div>
      <div className="px-4 py-4" style={{ backgroundColor: '#FFA500' }}>
        <div className="d-flex gap-5 justify-content-center align-items-center flex-wrap">
          <h1 className="fs-4 text-white mb-0">
            Need Bulk Orders & we are there for you
          </h1>
          <img src="/img/plane.png" alt="" />
          <button
            className="btn text-white"
            style={{ backgroundColor: '#343A40', borderRadius: '20px' }}
          >
            Apply For Bulk order
          </button>
        </div>
      </div>
      <div className="rounded-xl px-4 py-3" style={{ fontSize: '14px' }}>
        <div className="d-flex flex-wrap justify-content-between">
          <div className="d-flex justify-content-between align-items-center gap-2">
            <FaTruckFast className="text-primary" />
            <p className="text-uppercase mb-0"> free shipping over $199</p>
          </div>
          <div className="d-flex justify-content-between align-items-center gap-2">
            <IoReload className="text-primary" />
            <p className="text-uppercase mb-0"> 30 days money back</p>
          </div>
          <div className="d-flex justify-content-between align-items-center gap-2">
            <FaShield className="text-primary" />
            <p className="text-uppercase mb-0"> 100% secure payment</p>
          </div>
          <div className="d-flex justify-content-between align-items-center gap-2">
            <GiRabbit className="text-primary" />
            <p className="text-uppercase mb-0"> free product return</p>
          </div>
          <div className="d-flex justify-content-between align-items-center gap-2">
            <IoMdHeadset className="text-primary" />
            <p className="text-uppercase mb-0">
              {' '}
              24/7 online & offline support
            </p>
          </div>
        </div>
      </div>
      <div style={{ borderBottom: '1px solid #DEE2E6' }}></div>
      <div className="container mt-2">
        <div className="row">
          <div class="col-12 col-sm-2 col-md-3 ">
            <h1 className="fw-bold fs-6 text-black mb-0">
              Dadisha Private limited
            </h1>
            <div className="d-flex flex-column gap-2 ">
              <p className="mb-0">About Us</p>
              <p className="mb-0">Privacy Policy</p>
              <p className="mb-0">Contact Us</p>
              <p className="mb-0">Terms & Conditions</p>
            </div>
            <div className="my-4 d-flex gap-3">
              <div
                className=" rounded-full d-flex justify-content-center align-items-center"
                style={{
                  border: ' 1px solid #DEE2E6',
                  width: '40px',
                  height: '40px',
                }}
              >
                <FaTwitter className="text-black" />
              </div>
              <div
                className=" rounded-full d-flex justify-content-center align-items-center"
                style={{
                  border: ' 1px solid #DEE2E6',
                  width: '40px',
                  height: '40px',
                }}
              >
                <FaFacebookF className="text-black" />
              </div>
              <div
                className=" rounded-full d-flex justify-content-center align-items-center"
                style={{
                  border: ' 1px solid #DEE2E6',
                  width: '40px',
                  height: '40px',
                }}
              >
                <FaInstagram className="text-black" />
              </div>
              <div
                className=" rounded-full d-flex justify-content-center align-items-center"
                style={{
                  border: ' 1px solid #DEE2E6',
                  width: '40px',
                  height: '40px',
                }}
              >
                <FaYoutube className="text-black" />
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-2 col-md-3 ">
            <h1 className="fw-bold fs-6 text-black mb-0">
              Your Account & Orders
            </h1>
            <div className="d-flex flex-column gap-2 ">
              <p className="mb-0">Your Account</p>
              <p className="mb-0">Shopping Cart</p>
              <p className="mb-0">Returns</p>
            </div>
          </div>
          <div class="col-12 col-sm-2 col-md-3 ">
            <h1 className="fw-bold fs-6 text-black mb-0">Resources</h1>
            <div className="d-flex flex-column gap-2 ">
              <p className="mb-0">FAQ</p>
              <p className="mb-0"> Careers</p>
              <p className="mb-0">Blog</p>
            </div>
          </div>
          <div class="col-12 col-sm-2 col-md-3 ">
            <h1 className="fw-bold fs-6 text-black mb-0">Partner</h1>
            <div className="d-flex flex-column gap-2 ">
              <p className="mb-0">Become Seller</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6" style={{ backgroundColor: '#EBEEF6' }}>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center py-2">
            <h1 className="fs-6 mb-0 ">
              © 2024{' '}
              <span className="text-black">Dadisha Private Limited .</span> All
              Rights Reserved
            </h1>
            <div className="d-flex gap-2 align-items-center">
              <img src="/img/pay.png" alt="" style={{ height: '20px' }} />
              <img src="/img/pay1.png" alt="" style={{ height: '20px' }} />
              <img src="/img/pay2.png" alt="" style={{ height: '20px' }} />
              <img src="/img/pay3.png" alt="" style={{ height: '20px' }} />
              <img src="/img/pay4.png" alt="" style={{ height: '20px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export default function BottomBanner() {
  return (
    <div className="row mt-3 w-100 px-0 mx-0">
      <div className="col-6">
        {' '}
        <div
          className="w-100 overflow-hidden rounded-xl position-relative"
          style={{ height: '240px' }}
        >
          <img
            src="/tempimg/bannerslide2.png"
            alt="p1"
            className="w-100 h-100 object-cover"
          />
          <div className="position-absolute bottom-0 w-100">
            <div className="d-flex justify-content-start align-items-center mb-2 ms-4">
              <button className="bg-white text-black rounded-xl px-4 py-1 border-none fs-6">
                Discover Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="row">
          <div className="col-6">
            {' '}
            <div
              className="w-100 overflow-hidden rounded-xl position-relative"
              style={{ height: '240px' }}
            >
              <img
                src="/tempimg/bannerslide3.png"
                alt="p1"
                className="w-100 h-100 object-cover"
              />
              <div className="position-absolute bottom-0 w-100">
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <button className="bg-white text-black rounded-xl px-4 py-1 border-none fs-6">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            {' '}
            <div
              className="w-100 overflow-hidden rounded-xl position-relative"
              style={{ height: '240px' }}
            >
              <img
                src="/tempimg/bannerslide4.png"
                alt="p1"
                className="w-100 h-100 object-cover"
              />
              <div className="position-absolute bottom-0 w-100">
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <button className="bg-white text-black rounded-xl px-4 py-1 border-none fs-6">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export default function TrendingSerach() {
  return (
    <div className="mt-6">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="text-black fw-700">Trending Search</h5>
        {/* <a className="d-flex align-items-center gap-2">
              View All <IoIosArrowForward />
            </a> */}
      </div>
      <div className="mt-2 d-flex gap-4 " style={{ flexWrap: 'wrap' }}>
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center  px-4 py-1  "
            style={{ backgroundColor: '#F0F0F0', borderRadius: '20px' }}
          >
            Vacuum Robot
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';

export default function CategoryBanner() {
  return (
    <div>
      <div className="w-100 overflow-hidden rounded-xl" style={{ height: '340px' }}>
        <img
          src="/tempimg/categoryimg.jpg"
          alt="p1"
          className="w-100 h-100 object-cover"
        />
      </div>
    </div>
  );
}

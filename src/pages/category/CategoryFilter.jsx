import React from 'react';
import Header from '../../components/Header';
import ProductFooter from '../products/ProductFooter';
import CategoryBanner from './categorySections/CategoryBanner';
import FiterSection from './categorySections/FiterSection';

export default function CategoryFilter() {
  return (
    <div>
      <Header />
      <div className="container mx-auto mt-10">
        <CategoryBanner />
        <FiterSection />
      </div>
      <ProductFooter />
    </div>
  );
}

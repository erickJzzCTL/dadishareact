import React from 'react';
import Header from '../../components/Header';
import HomeSectionOne from './HomeSectionOne';
import SideComponent from './SideComponent';
import HomeSectionTwo from './HomeSectionTwo';
import HomeSectionThree from './HomeSectionThree';
import HomeSectionFour from './HomeSectionFour';
import HomeSectionFive from './HomeSectionFive';
import HomeSectionSeven from './HomeSectionSeven';
import HomeSectionSix from './HomeSectionSix';
import HomeSectionEight from './HomeSectionEight';

export default function Home() {
  return (
    <div>
      <Header />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
      <HomeSectionSix />
      <HomeSectionSeven />
      <HomeSectionEight />
    </div>
  );
}

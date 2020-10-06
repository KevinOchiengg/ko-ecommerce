import React from 'react';
import Brand from '../../../Brand/Brand';
import ExclusiveProduct from '../../../ExclusiveProduct/ExclusiveProduct';
import FeaturedCategories from '../../../FeaturedCategories/FeaturedCategories';
import FeaturedProduct from '../../../FeaturedProduct/FeaturedProduct';
import Footer from '../../../Footer/Footer';
import Header from '../../../Header/Header';
import LatestProduct from '../../../LatestProduct/LatestProduct';

import Testimonial from '../../../Testimonial/Testimonial';

function Home() {
  return (
    <>
      <Header />
      <FeaturedCategories />
      <FeaturedProduct />
      <LatestProduct />
      <ExclusiveProduct />
      <Testimonial />
      <Brand />
      <Footer />
    </>
  );
}

export default Home;

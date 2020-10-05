import React from 'react';
import Brand from './components/Brand/Brand';
import ExclusiveProduct from './components/ExclusiveProduct/ExclusiveProduct';
import FeaturedCategories from './components/FeaturedCategories/FeaturedCategories';
import FeaturedProduct from './components/FeaturedProduct/FeaturedProduct';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LatestProduct from './components/LatestProduct/LatestProduct';
import Testimonial from './components/Testimonial/Testimonial';

const App = () => {
  return (
    <main>
      <Header />
      <FeaturedCategories />
      <FeaturedProduct />
      <LatestProduct />
      <ExclusiveProduct />
      <Testimonial />
      <Brand />
      <Footer />
    </main>
  );
};

export default App;

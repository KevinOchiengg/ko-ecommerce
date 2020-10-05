import React from 'react';
import category1 from '../../images/category-1.jpg';
import category2 from '../../images/category-2.jpg';
import category3 from '../../images/category-3.jpg';
import './FeaturedCategories.css';

const FeaturedCategories = () => {
  return (
    <div className='categories'>
      <div className='small-container'>
        <div className='row'>
          <div className='col-3'>
            <img src={category1} alt='' />
          </div>
          <div className='col-3'>
            <img src={category2} alt='' />
          </div>
          <div className='col-3'>
            <img src={category3} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;

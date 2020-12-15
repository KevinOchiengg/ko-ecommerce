import React from 'react';
import Product from '../Product/Product';
import './FeaturedProduct.css';

function FeaturedProduct() {
  return (
    <div className='small-container'>
      <h2 className='title'>Featured Products</h2>
      <div className='row'>
        <Product />
      </div>
    </div>
  );
}

export default FeaturedProduct;

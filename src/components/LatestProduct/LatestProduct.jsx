import React from 'react';
import './LatestProduct.css';
import Product from '../Product/Product';

const LatestProduct = () => {
  return (
    <div className='small-container'>
      <h2 className='title'>Latest Products</h2>
      <div className='row'>
        <Product />
      </div>
    </div>
  );
};

export default LatestProduct;

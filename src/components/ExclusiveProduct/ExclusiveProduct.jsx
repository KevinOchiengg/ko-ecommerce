import React from 'react';
import offer from '../../images/exclusive.png';
import './ExclusiveProduct.css';

const ExclusiveProduct = () => {
  return (
    <div className='offer'>
      <div className='small-container'>
        <div className='row'>
          <div className='col-2'>
            <img src={offer} alt='' className='offer-img' />
          </div>
          <div className='col-2'>
            <p>Exclusive Available on RedStore</p>
            <h1>Smart Band 4</h1>
            <small>
              The Mi Smart 4 features a 39.9% larger (than Mi Band 3) AMOLED
              color full-touch display with adjustable brightness, so everything
              is clear as can be.
            </small>
            <a href='' className='btn'>
              Buy Now &#8594;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveProduct;

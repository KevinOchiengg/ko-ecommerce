import React from 'react';
import { Link } from 'react-router-dom';
import offer from '../../images/exclusive.png';
import './ExclusiveProduct.css';

const ExclusiveProduct = () => {
  return (
    <div className='offer'>
      <div className='small-container'>
        <div className='row'>
          <div className='col-2'>
            <Link to='/productdetails'>
              <img src={offer} alt='' className='offer-img' />
            </Link>
          </div>
          <div className='col-2'>
            <p>Exclusive Available on RedStore</p>
            <h1>Smart Band 4</h1>
            <small>
              The Mi Smart 4 features a 39.9% larger (than Mi Band 3) AMOLED
              color full-touch display with adjustable brightness, so everything
              is clear as can be.
            </small>
            <Link to='productdetails' className='btn'>
              Buy Now &#8594;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveProduct;

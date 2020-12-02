import React from 'react';
import { Link } from 'react-router-dom';
import offer from '../../images/gallery-4.png';
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
            <p>Exclusive Available on Looqu store</p>
            <h1>Dope Hood</h1>
            <small>
              Move the swag way (rebrand yourself) AMOLED color full-touch
              display with adjustable brightness, so everything is clear as can
              be.
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

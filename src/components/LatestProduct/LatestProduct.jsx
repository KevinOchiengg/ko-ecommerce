import React from 'react';
import './LatestProduct.css';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import product1 from '../../images/product-1.jpg';
import product2 from '../../images/product-2.jpg';
import product3 from '../../images/product-3.jpg';
import product4 from '../../images/product-4.jpg';
import product5 from '../../images/product-5.jpg';
import product6 from '../../images/product-6.jpg';
import product7 from '../../images/product-7.jpg';
import product8 from '../../images/product-8.jpg';

const LatestProduct = () => {
  return (
    <div className='small-container'>
      <h2 className='title'>Latest Products</h2>
      <div className='row'>
        <div className='col-4'>
          <img src={product1} alt='' />
          <h4>Red Printed T-shirt</h4>
          <div className='rating'>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStarHalfAlt />
            </i>
          </div>
          <p>$50.00</p>
        </div>
        <div className='col-4'>
          <img src={product2} alt='' />
          <h4>Black shoes</h4>
          <div className='rating'>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStarHalfAlt />
            </i>
            <i>
              <FaStarHalfAlt />
            </i>
          </div>
          <p>$10.00</p>
        </div>
        <div className='col-4'>
          <img src={product3} alt='' />
          <h4>Grey Trouser</h4>
          <div className='rating'>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStarHalfAlt />
            </i>
            <i>
              <FaStarHalfAlt />
            </i>
            <i>
              <FaStarHalfAlt />
            </i>
          </div>
          <p>$40.00</p>
        </div>
        <div className='col-4'>
          <img src={product4} alt='' />
          <h4>Blue Printed T-shirt</h4>
          <div className='rating'>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStarHalfAlt />
            </i>
          </div>
          <p>$20.00</p>
        </div>
        <div className='col-4'>
          <img src={product5} alt='' />
          <h4>Blue Printed T-shirt</h4>
          <div className='rating'>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStarHalfAlt />
            </i>
          </div>
          <p>$20.00</p>
        </div>
        <div className='col-4'>
          <img src={product6} alt='' />
          <h4>Blue Printed T-shirt</h4>
          <div className='rating'>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStarHalfAlt />
            </i>
          </div>
          <p>$20.00</p>
        </div>
        <div className='col-4'>
          <img src={product7} alt='' />
          <h4>Blue Printed T-shirt</h4>
          <div className='rating'>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStarHalfAlt />
            </i>
          </div>
          <p>$20.00</p>
        </div>
        <div className='col-4'>
          <img src={product8} alt='' />
          <h4>Blue Printed T-shirt</h4>
          <div className='rating'>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStar />
            </i>
            <i>
              <FaStarHalfAlt />
            </i>
          </div>
          <p>$20.00</p>
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
import React from 'react';
import './LatestProduct.css';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import product1 from '../../images/product-1.png';
import product2 from '../../images/gallery-2.jpg';
import product3 from '../../images/product-3.png';
import product4 from '../../images/product-9.jpg';
import product5 from '../../images/product-5.png';
import product6 from '../../images/product-6.png';
import product7 from '../../images/product-11.png';
import product8 from '../../images/product-10.jpg';
import { Link } from 'react-router-dom';

const LatestProduct = () => {
  return (
    <div className='small-container'>
      <h2 className='title'>Latest Products</h2>
      <div className='row'>
        <div className='col-4'>
          <Link to='productdetails'>
            <img src={product1} alt='' />
          </Link>
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
          <Link to='productdetails'>
            <img src={product2} alt='' />
          </Link>
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
          <Link to='productdetails'>
            <img src={product3} alt='' />
          </Link>
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
          <Link to='productdetails'>
            <img src={product4} alt='' />
          </Link>
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
          <Link to='productdetails'>
            <img src={product5} alt='' />
          </Link>
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
          <Link to='productdetails'>
            <img src={product6} alt='' />
          </Link>
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
          <Link to='productdetails'>
            <img src={product7} alt='' />
          </Link>
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
          <Link to='productdetails'>
            <img src={product8} alt='' />
          </Link>
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

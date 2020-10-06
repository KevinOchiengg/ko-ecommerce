import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import product1 from '../../../images/product-1.jpg';
import product2 from '../../../images/product-2.jpg';
import product3 from '../../../images/product-3.jpg';
import product4 from '../../../images/product-4.jpg';
import Navigation from '../../Navigation/Navigation';
import Footer from '../../Footer/Footer';
import './ProductPage.css';

const ProductPage = () => {
  return (
    <>
      <Navigation />
      <div className='row row-2'>
        <h2>All Products</h2>
        <select>
          <option>Default</option>
          <option>Sort by price</option>
          <option>Sort by popularity</option>
          <option>Sort by rating</option>
          <option>Sort by sales</option>
        </select>
      </div>
      <div className='small-container'>
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
        </div>{' '}
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
        </div>{' '}
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
        </div>
        <div className='page-btn'>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>&#8594;</span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;

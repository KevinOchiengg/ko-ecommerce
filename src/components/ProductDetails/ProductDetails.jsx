import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import product1 from '../../images/product-1.jpg';
import product2 from '../../images/product-2.jpg';
import product3 from '../../images/product-3.jpg';
import product4 from '../../images/product-4.jpg';
import Footer from '../Footer/Footer';
import gallery1 from '../../images/gallery-1.jpg';
import gallery2 from '../../images/gallery-2.jpg';
import gallery3 from '../../images/gallery-3.jpg';
import gallery4 from '../../images/gallery-4.jpg';
import './ProductDetails.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='small-container single__product'>
        <div className='row'>
          <div className='col-2'>
            <img src={gallery1} alt='' id='product__img' />

            <div className='small__img__row'>
              <div className='small__img__col'>
                <img src={gallery1} alt='' />
              </div>
              <div className='small__img__col'>
                <img src={gallery2} alt='' />
              </div>
              <div className='small__img__col'>
                <img src={gallery3} alt='' />
              </div>
              <div className='small__img__col'>
                <img src={gallery4} alt='' />
              </div>
            </div>
          </div>
          <div className='col-2'>
            <p>Home/ T-shirt</p>
            <h1>Read Printed T-shirt by HRX</h1>
            <h4>$50.00</h4>
            <select>
              <option>Select Size</option>
              <option>XXL</option>
              <option>XL</option>
              <option>Large</option>
              <option>Medium</option>
              <option>Small</option>
            </select>
            <input type='number' value='1' />
            <button to='cart' className='btn'>
              Add to cart
            </button>
            <h3>
              Product Details
              <i>
                <FaStar />
              </i>
            </h3>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
              excepturi! Modi, quaerat iusto! Repellat eveniet officiis
              explicabo adipisci obcaecati non?
            </p>
          </div>
        </div>
      </div>
      <div className='small-container'>
        <div className='row row-2'>
          <h2>Related Product</h2>
          <p>View more</p>
        </div>
      </div>
      <div className='small-container'>
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;

import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import product1 from '../../../images/product-1.png';
import product2 from '../../../images/product-2.png';
import product3 from '../../../images/product-3.png';
import product4 from '../../../images/product-4.png';
import Product from '../../Product/Product';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import './ProductPage.css';

const ProductPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
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
          <Product
            image={product1}
            title='Red T-shirt'
            rating={4}
            halfstar={<FaStarHalfAlt />}
            price={10}
          />
          <Product
            image={product2}
            title='Black shoes'
            rating={4}
            halfstar={<FaStarHalfAlt />}
            price={20}
          />
          <Product
            image={product3}
            title='Grey Trouser'
            rating={4}
            halfstar={<FaStarHalfAlt />}
            price={15}
          />
          <Product
            image={product4}
            title='Blue Printed T-shirt'
            rating={4}
            halfstar={<FaStarHalfAlt />}
            price={10}
          />
        </div>
        <div className='row'>
          <Product
            image={product1}
            title='Red T-shirt'
            rating={4}
            halfstar={<FaStarHalfAlt />}
            price={10}
          />
          <Product
            image={product3}
            title='Grey Trouser'
            rating={4}
            halfstar={<FaStarHalfAlt />}
            price={15}
          />
          <Product
            image={product1}
            title='Red T-shirt'
            rating={4}
            halfstar={<FaStarHalfAlt />}
            price={10}
          />
          <Product
            image={product3}
            title='Grey Trouser'
            rating={4}
            halfstar={<FaStarHalfAlt />}
            price={15}
          />
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

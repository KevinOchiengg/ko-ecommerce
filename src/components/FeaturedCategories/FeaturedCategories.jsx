import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './FeaturedCategories.css';
import { products } from '../../data';
import { useStateValue } from '../../StateProvider';
import Product from '../Product/Product';

const FeaturedCategories = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='categories'>
      <div className='small-container'>
        <div className='row'>
          <Product />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;

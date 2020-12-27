import React from 'react';
import { products } from '../../data';
import { useStateValue } from '../../StateProvider';
import './Product.css';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Products = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
      {products.map((product) => {
        const {
          id,
          image,
          title,
          description,
          price,
          rating,
          halfstar,
        } = product;

        const addToBasket = () => {
          // dispatch the item into the data layer
          dispatch({
            type: 'ADD_TO_BASKET',
            item: {
              id: id,
              title: title,
              image: image,
              price: price,
              rating: rating,
            },
          });
        };

        return (
          <div className='col-3 product-item'>
            <figure>
              <Link to='/productdetails'>
                <img src={image} alt='Image' className='img-fluid' />
              </Link>
            </figure>

            <h3>
              <Link to='/productdetails'>{title}</Link>
            </h3>

            <div className='rating'>
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <i>{<FaStar />}</i>
                ))}
              <i>{halfstar}</i>
            </div>

            <span className='price'>Ksh {price}</span>

            <p className='description'>{description}</p>
            <div className='buttons__container'>
              <button onClick={addToBasket} className='btn'>
                Add
              </button>
              <button className='btn'>
                <Link to='/productdetails'>View</Link>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Products;

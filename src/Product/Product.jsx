import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

const Product = ({ image, title, rating, button, halfstar, price }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the data layer

    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className='col-4'>
      <Link to='productdetails'>
        <img src={image} alt='' />
      </Link>
      <h4>{title}</h4>
      <div className='rating'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <i>{<FaStar />}</i>
          ))}
        <i>{halfstar}</i>
      </div>
      <p>${price}</p>
      <button onClick={addToBasket} to='cart' className='btn'>
        Add to cart
      </button>
    </div>
  );
};

export default Product;

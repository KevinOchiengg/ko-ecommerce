import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { products } from '../../data';

const Product = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      {products.map((product) => {
        const { id, image, title, price, rating, halfstar } = product;

        const addToBasket = () => {
          //dispatch the item into the data layer

          dispatch({
            type: 'ADD_TO_BASKET',
            item: {
              id: id,
              image: image,
              title: title,
              price: price,
              rating: rating,
            },
          });
        };
        return (
          <div key={title} className='col-3'>
            <Link to='/productdetails'>
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
      })}
    </>
  );
};

export default Product;

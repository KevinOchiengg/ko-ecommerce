import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useStateValue } from '../../StateProvider';

const CheckoutProduct = ({ id, price, rating, value, title, image }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({ type: 'REMOVE_FROM_BASKET', id: id });
  };
  return (
    <>
      <tr>
        <td>
          <div className='cart-info'>
            <img src={image} alt='' />
            <div>
              <p>{title}</p>
              <small>Price: ${price}</small>
              <div className='rating'>
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <i>{<FaStar />}</i>
                  ))}
                <i>
                  <FaStarHalfAlt />
                </i>
              </div>
              <button className='btn' onClick={removeFromBasket}>
                Remove
              </button>
            </div>
          </div>
        </td>
        <td>
          <input type='number' value={value} />
        </td>
        <td>${price}</td>
      </tr>
      <button className='btn'>Checkout</button>
    </>
  );
};

export default CheckoutProduct;

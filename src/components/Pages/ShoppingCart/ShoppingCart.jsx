import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer';
import './ShoppingCart.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../../StateProvider';
import { getBasketTotal } from '../../../reducer';
import CheckoutProduct from '../../CheckoutProduct/CheckoutProduct';
import EmptyCart from '../../EmptyCart/EmptyCart';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const [{ basket }] = useStateValue();

  if (basket.length < 1) return <EmptyCart />;
  return (
    <>
      <div className='small-container cart-page'>
        <table>
          <tbody>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </tbody>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              rating={item.rating}
              price={item.price}
              value={item.value}
              image={item.image}
            />
          ))}
        </table>

        <div className='total-price'>
          <CurrencyFormat
            renderText={(value) => (
              <table>
                <tbody>
                  <tr>
                    <td>Total Items</td>
                    <td>{basket.length}</td>
                  </tr>
                  <tr>
                    <td>Total Price</td>
                    <td>{value}</td>
                  </tr>
                </tbody>
              </table>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
          />
          <Link to='/payment' className='checkout-btn btn'>
            Checkout &#8594;
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;

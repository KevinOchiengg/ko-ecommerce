import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import product1 from '../../../images/product-1.jpg';
import product2 from '../../../images/product-2.jpg';
import product3 from '../../../images/product-3.jpg';
import product4 from '../../../images/product-4.jpg';
import Footer from '../../Footer/Footer';
import './ShoppingCart.css';
import Navbar from '../../Navbar/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../../StateProvider';
import { getBasketTotal } from '../../../reducer';
import CheckoutProduct from '../../CheckoutProduct/CheckoutProduct';

const ShoppingCart = () => {
  const [{ basket }] = useStateValue();
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='small-container cart-page'>
        <table>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
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
                <tr>
                  <td>Total Items</td>
                  <td>{basket.length}</td>
                </tr>
                <tr>
                  <td>Subtotal</td>
                  <td>{value}</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td>{value}</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>{value}</td>
                </tr>
              </table>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;

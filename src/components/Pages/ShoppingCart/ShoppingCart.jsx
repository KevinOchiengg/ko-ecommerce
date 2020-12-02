import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import './ShoppingCart.css';
import Navbar from '../../Navbar/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../../StateProvider';
import { getBasketTotal } from '../../../reducer';
import CheckoutProduct from '../../CheckoutProduct/CheckoutProduct';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Axios from 'axios';

const ShoppingCart = () => {
  const [{ basket }] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(false);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await Axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  console.log('secret client +++++', clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        history.replace('/Cart');
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };
  return (
    <>
      <Navbar />
      <Sidebar />
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
                    <td>Total</td>
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
        </div>
      </div>
      <div className='small-container cart-page'>
        <table>
          <tbody>
            <tr>
              <th>Payment method</th>
              <th>Card Details</th>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Number</td>
              <td>MM/YY/CVC</td>
            </tr>
          </tbody>
        </table>
        <form onSubmit={handleSubmit}>
          <CardElement onChange={handleChange} />
          <div className='total-price'>
            <CurrencyFormat
              renderText={(value) => (
                <table>
                  <tbody>
                    <tr>
                      <td>Total</td>
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
            <button
              className='btn'
              disabled={processing || disabled || succeeded}
            >
              <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
            </button>
          </div>
          {error && <div>{error}</div>}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;

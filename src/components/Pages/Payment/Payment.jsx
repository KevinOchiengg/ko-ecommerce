import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../../StateProvider';
import { getBasketTotal } from '../../../reducer';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const Payment = () => {
  const [{ basket }] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  const stringClientSecret = clientSecret.toString();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.stringClientSecret);
    };
    getClientSecret();
  }, [basket]);
  console.log('secret client >>>>>>>', stringClientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(stringClientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        history.replace('/products');
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  return (
    <>
      <div className='small-container cart-page'>
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
export default Payment;

// const [succeeded, setSucceeded] = useState(false);
// const [error, setError] = useState(null);
// const [processing, setProcessing] = useState('');
// const [disabled, setDisabled] = useState(true);
// const [clientSecret, setClientSecret] = useState('');
// const stripe = useStripe();
// const elements = useElements();
// useEffect(() => {
//   // Create PaymentIntent as soon as the page loads
//   window
//     .fetch('/create-payment-intent', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ items: [{ id: 'xl-tshirt' }] }),
//     })
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       setClientSecret(data.clientSecret);
//     });
// }, []);
// const cardStyle = {
//   style: {
//     base: {
//       color: '#32325d',
//       fontFamily: 'Arial, sans-serif',
//       fontSmoothing: 'antialiased',
//       fontSize: '16px',
//       '::placeholder': {
//         color: '#32325d',
//       },
//     },
//     invalid: {
//       color: '#fa755a',
//       iconColor: '#fa755a',
//     },
//   },
// };
// const handleChange = async (event) => {
//   // Listen for changes in the CardElement
//   // and display any errors as the customer types their card details
//   setDisabled(event.empty);
//   setError(event.error ? event.error.message : '');
// };
// const handleSubmit = async (ev) => {
//   ev.preventDefault();
//   setProcessing(true);
//   const payload = await stripe.confirmCardPayment(clientSecret, {
//     payment_method: {
//       card: elements.getElement(CardElement),
//     },
//   });
//   if (payload.error) {
//     setError(`Payment failed ${payload.error.message}`);
//     setProcessing(false);
//   } else {
//     setError(null);
//     setProcessing(false);
//     setSucceeded(true);
//   }
// };
// return (
//   <>
//     <form id='payment-form' className='payment-form' onSubmit={handleSubmit}>
//       <CardElement
//         id='card-element'
//         options={cardStyle}
//         onChange={handleChange}
//       />
//       <button
//         disabled={processing || disabled || succeeded}
//         id='submit'
//         className='payment-btn'
//       >
//         <span id='button-text'>
//           {processing ? <div className='spinner' id='spinner'></div> : 'Pay'}
//         </span>
//       </button>
//       {/* Show any error that happens when processing the payment */}
//       {error && (
//         <div className='card-error' role='alert'>
//           {error}
//         </div>
//       )}
//       {/* Show a success message upon completion */}
//       <p className={succeeded ? 'result-message' : 'result-message hidden'}>
//         Payment succeeded, see the result in your
//         <a href={`https://dashboard.stripe.com/test/payments`}>
//           Stripe dashboard.
//         </a>
//         Refresh the page to pay again.
//       </p>
//     </form>

/*

import { Link, useHistory } from "react-router-dom";
import React, {useEffect, useState} from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { getBasketTotal } from "./reducer";
import axios from './axios';
import { db } from "./Firebase";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true)
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [clientSecret, setClientSecret] = useState('')
    const history = useHistory();


    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
    }, [basket])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                description: "test",
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            console.log("handleSubmit -> paymentIntent", paymentIntent)
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            db.collection['users']
                .doc(user?.uid)
                .collection('orders')
                .doc(user?.uid + parseInt(Date.now()/1000))
                .set({
                    basket: basket,
                    amount: 100,
                    created: parseInt(Date.now()/1000),
                })
            dispatch({
                type: 'EMPTY_BASKET'
            })
            history.replace('/orders')
        })
    }
    const handleChange = (e) => {
        setDisabled(e.target);
        setError(e.error ? e.error : '')
    }
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket.length} items.</Link>
                    )
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Bihar</p>
                        <p>India</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map((item, index) => (
                            <CheckoutProduct
                                key={index}
                                id={item.id}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                title={item.title}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <p>
                                                Subtotal {basket?.length} items: <strong>{`${value}`}</strong>
                                            </p>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)} // Part of the homework
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                            />
                            <button disabled = {processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

*/

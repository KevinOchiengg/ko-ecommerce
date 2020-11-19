import React from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../../images/logo-white.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='footer-col-1'>
            <h3>Download Our App</h3>
            <p>Download App for Android for Android and ios mobile phone</p>
          </div>

          <div className='footer-col-2'>
            <Link to='productdetails'>
              <img src={logoWhite} alt='logo' />
            </Link>

            <p>
              Our purpose Is To Sustainably Make the pleasure and Benefits of
              Sports Accessible to the Many
            </p>
          </div>
          <div className='footer-col-3'>
            <h3>Useful Links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Affiliate</li>
            </ul>
          </div>
          <div className='footer-col-4'>
            <h3>Follow us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className='copyright'>
          Copyright 2020 - powered by K&O Technologies
        </p>
      </div>
    </div>
  );
};

export default Footer;

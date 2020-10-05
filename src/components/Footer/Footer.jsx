import React from 'react';
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
            <img src={logoWhite} alt='' />
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
        <p className='copyright'>Copyright 2020 - K&O Technologies</p>
      </div>
    </div>
  );
};

export default Footer;

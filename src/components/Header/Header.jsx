import React from 'react';
import { Link } from 'react-router-dom';
import headerImage from '../../images/product-4.png';
import './Header.css';

const Header = () => {
  return (
    <section className='header'>
      <div className='container'>
        <div className='row'>
          <div className='hero__text col-2'>
            <h1>
              Welcome To <span>Integro</span> <br />
              Wears
            </h1>
            <p>
              Switch Your Swag Mode On
              <br /> & Dress like you already famous
            </p>
            <Link to='/products' className='btn'>
              Explore Now &#8594;
            </Link>
          </div>
          <div className='hero__image col-2'>
            <img src={headerImage} alt='local' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

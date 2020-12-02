import React from 'react';
import { Link } from 'react-router-dom';
import headerImage from '../../images/gallery-3.png';
import './Header.css';

const Header = () => {
  return (
    <section className='header'>
      <div className='container'>
        <div className='row'>
          <div className='hero__text col-2'>
            <h1>
              Give Your Swag <br />A New Look!
            </h1>
            <p>
              Success isn't always about greatness. It's about consistency{' '}
              <br />
              hard work gains success. Greatness will come
            </p>
            <Link to='products' className='btn'>
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

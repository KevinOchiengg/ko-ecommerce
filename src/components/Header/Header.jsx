import React from 'react';
import headerImage from '../../images/image1.png';
import cart from '../../images/cart.png';
import menu from '../../images/menu.png';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='navbar'>
          <div className='logo'>
            <img src={logo} alt='ReadStore' style={{ width: '125px' }} />
          </div>
          <nav>
            <ul>
              <li>
                <a href=''>Home</a>
              </li>
              <li>
                <a href=''>Products</a>
              </li>
              <li>
                <a href=''>About</a>
              </li>
              <li>
                <a href=''>Contact</a>
              </li>
              <li>
                <a href=''>Account</a>
              </li>
            </ul>
          </nav>
          <img
            src={cart}
            alt='cart'
            style={{ width: '30px', height: '30px' }}
          />
          <img src={menu} alt='cart' className='menu-icon' />
        </div>
        <div className='row'>
          <div className='col-2'>
            <h1>
              Give Your Workout <br />A New Style!
            </h1>
            <p>
              Success isn't always about greatness. It's about consistency{' '}
              <br />
              hard work gains success. Greatness will come
            </p>
            <a
              href='http://'
              className='btn'
              target='_blank'
              rel='noopener noreferrer'
            >
              Explore Now &#8594;
            </a>
          </div>
          <div className='col-2'>
            <img src={headerImage} alt='header-Image' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

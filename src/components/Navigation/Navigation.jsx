import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../../images/cart.png';
import menu from '../../images/menu.png';
import logo from '../../images/logo.png';
import './Navigation.css';

function Navigation() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt='ReadStore' style={{ width: '125px' }} />
      </div>
      <nav>
        <ul>
          <Link to='/home'>
            <li>Home</li>
          </Link>

          <Link to='/products'>
            <li>Products</li>
          </Link>

          <Link to='/about'>
            <li>About</li>
          </Link>

          <Link to='/contact'>
            <li>Contact</li>
          </Link>

          <Link to='/account'>
            <li>Account</li>
          </Link>
        </ul>
      </nav>
      <img src={cart} alt='cart' style={{ width: '30px', height: '30px' }} />
      <img src={menu} alt='cart' className='menu-icon' />
    </div>
  );
}

export default Navigation;

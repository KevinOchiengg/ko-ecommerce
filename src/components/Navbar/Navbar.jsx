import React from 'react';
import logo from '../../images/logo.png';
import { useGlobalContext } from '../../context';
import cart from '../../images/cart.png';
import menu from '../../images/menu.png';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  const { checkActive } = useGlobalContext();
  const [{ basket }] = useStateValue();

  return (
    <nav className='nav'>
      <div className='nav-center'>
        <NavLink to='/'>
          <img src={logo} className='nav-logo' alt='' />
        </NavLink>
        <ul className='nav-links'>
          <li>
            <NavLink
              to='/'
              className='link-btn'
              activeClassName='active'
              isActive={checkActive}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/Products'
              className='link-btn'
              activeClassName='active'
              isActive={checkActive}
            >
              products
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/Account'
              className='link-btn'
              activeClassName='active'
              isActive={checkActive}
            >
              Account
            </NavLink>
          </li>
        </ul>
        <img
          src={menu}
          alt='menu'
          className='toggle-btn'
          style={{ width: '30px', height: '30px' }}
          onClick={openSidebar}
        />
        <div className='right__item'>
          <NavLink to='/Account'>
            <button className='signin-btn'>Sign up</button>
          </NavLink>
          <NavLink to='/Account'>
            <button className='signin-btn'>Sign up</button>
          </NavLink>
          <div className='nav-container'>
            <NavLink to='/Cart'>
              <img src={cart} alt='cart' className='cart' />
            </NavLink>
            <div className='amount-container'>
              <p className='total-amount'>{basket?.length}</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

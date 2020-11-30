import React from 'react';
import logo from '../../images/logo.png';
import { useGlobalContext } from '../../context';
import cart from '../../images/cart.png';
import menu from '../../images/menu.png';
import './Navbar.css';
import { NavLink, useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';

const Navbar = () => {
  const history = useHistory();
  const { openSidebar } = useGlobalContext();
  const { checkActive } = useGlobalContext();
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

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
              Profile
            </NavLink>
          </li>
        </ul>

        <div className='right__item'>
          <NavLink to={!user && '/Account'}>
            <button className='signin-btn' onClick={handleAuthentication}>
              {user ? 'Log out' : 'Log in'}
            </button>
          </NavLink>

          <div className='nav-container'>
            <img
              src={cart}
              alt='cart'
              className='cart'
              onClick={(e) => history.push('/Cart')}
            />

            <div className='amount-container'>
              <p>{basket?.length}</p>
            </div>
          </div>
          <img
            src={menu}
            alt='menu'
            className='toggle-btn'
            style={{ width: '20px', height: '20px' }}
            onClick={openSidebar}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import logo from '../../images/logo.png';

const Logo = () => {
  return (
    <div className='logo'>
      <img src={logo} alt='ReadStore' style={{ width: '125px' }} />
    </div>
  );
};

export default Logo;

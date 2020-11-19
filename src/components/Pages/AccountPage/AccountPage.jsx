import React from 'react';
import Footer from '../../Footer/Footer';
import image1 from '../../../images/image1.png';
import './AccountPage.css';
import Navbar from '../../Navbar/Navbar';
import Sidebar from '../../Sidebar/Sidebar';

const AccountPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='account-page'>
        <div className='container'>
          <div className='row'>
            <div className='col-2'>
              <img src={image1} alt='' style={{ width: '100%' }} />
            </div>
            <div className='col-2'>
              <div className='form-container'>
                <div className='form-btn'>
                  <span>Login</span>
                  <span>Register</span>
                  <hr id='indicator' />
                </div>
                <form action='' id='login-form'>
                  <input type='text' placeholder='Username' />
                  <input type='password' placeholder='Password' />
                  <button type='submit' className='btn'>
                    Login
                  </button>
                  <a href=''>Forgot password</a>
                </form>
                <form action='' id='reg-form'>
                  <input type='text' placeholder='Username' />
                  <input type='email' placeholder='Email' />
                  <input type='password' placeholder='Password' />
                  <button type='submit' className='btn'>
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AccountPage;

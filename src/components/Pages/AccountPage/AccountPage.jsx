import React, { useState } from 'react';
import Footer from '../../Footer/Footer';
import image1 from '../../../images/gallery-4.png';
import './AccountPage.css';
import Navbar from '../../Navbar/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../../firebase';

const AccountPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((error) => alert(error.message));
    //firebase login
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push('/');
        }
      })
      .catch((error) => alert(error.message));
    //firebase register
  };
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
                  <input
                    type='email'
                    placeholder='E-mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button type='submit' className='btn' onClick={signIn}>
                    Login
                  </button>
                  <Link to=''>Forgot password</Link>
                </form>
                <form action='' id='reg-form'>
                  <input
                    type='email'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button type='submit' className='btn' onClick={register}>
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

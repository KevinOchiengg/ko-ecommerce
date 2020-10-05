import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import userOne from '../../images/user-1.png';
import userTwo from '../../images/user-2.png';
import userThree from '../../images/user-3.png';
import './Testimonial.css';

function Testimonial() {
  return (
    <div className='testimonial'>
      <div className='small-container'>
        <div className='row'>
          <div className='col-3'>
            <i className='quote'>
              <FaStar />
            </i>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              placeat mollitia porro excepturi ab repellendus eligendi quos
              impedit tempore? Quae?
            </p>
            <div className='rating'>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStarHalfAlt />
              </i>
              <i>
                <FaStarHalfAlt />
              </i>
              <i>
                <FaStarHalfAlt />
              </i>
            </div>
            <img src={userOne} alt='' />
            <h3>Kevin Ochieng</h3>
          </div>

          <div className='col-3'>
            <i className='quote'>
              <FaStar />
            </i>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              placeat mollitia porro excepturi ab repellendus eligendi quos
              impedit tempore? Quae?
            </p>
            <div className='rating'>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStarHalfAlt />
              </i>
              <i>
                <FaStarHalfAlt />
              </i>
              <i>
                <FaStarHalfAlt />
              </i>
            </div>
            <img src={userTwo} alt='' />
            <h3>Kevin Ochieng</h3>
          </div>
          <div className='col-3'>
            <i className='quote'>
              <FaStar />
            </i>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              placeat mollitia porro excepturi ab repellendus eligendi quos
              impedit tempore? Quae?
            </p>
            <div className='rating'>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStarHalfAlt />
              </i>
              <i>
                <FaStarHalfAlt />
              </i>
              <i>
                <FaStarHalfAlt />
              </i>
            </div>
            <img src={userThree} alt='' />
            <h3>Kevin Ochieng</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

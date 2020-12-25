import React from 'react';
import { FaTimes } from 'react-icons/fa';
import logo from '../../images/logo.png';
import { useGlobalContext } from '../../context';
import './Sidebar.css';

import { social, links } from './data';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt='looqu' />
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <Link to={url} onClick={closeSidebar}>
                {icon}
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className='social-icons'>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <Link
                to={{
                  pathname: url,
                }}
                target='_blank'
              >
                {icon}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;

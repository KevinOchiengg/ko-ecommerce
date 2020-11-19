import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
export const sublinks = [
  {
    page: 'Home',
    links: [
      { label: 'Home', icon: <FaCreditCard />, url: '/' },
      { label: 'terminal', icon: <FaCreditCard />, url: '/' },
      { label: 'connect', icon: <FaCreditCard />, url: '/' },
    ],
  },
  {
    page: 'Products',
    links: [
      { label: 'plugins', icon: <FaBook />, url: '/products' },
      { label: 'libraries', icon: <FaBook />, url: '/products' },
      { label: 'help', icon: <FaBook />, url: '/products' },
      { label: 'billing', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    page: 'Account',
    links: [
      { label: 'Account', icon: <FaBriefcase />, url: '/account' },
      { label: 'customers', icon: <FaBriefcase />, url: '/account' },
    ],
  },
];

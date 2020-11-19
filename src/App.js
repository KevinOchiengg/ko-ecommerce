import React from 'react';
import ProductPage from './components/Pages/ProductPage/ProductPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AccountPage from './components/Pages/AccountPage/AccountPage';
import HomePage from './components/Pages/HomePage/HomePage';
import ShoppingCart from './components/Pages/ShoppingCart/ShoppingCart';
import ProductDetails from './components/ProductDetails/ProductDetails';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/products'>
          <ProductPage />
        </Route>
        <Route path='/account'>
          <AccountPage />
        </Route>
        <Route path='/cart'>
          <ShoppingCart />
        </Route>
        <Route path='/productdetails'>
          <ProductDetails />
        </Route>
        <Route exact path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

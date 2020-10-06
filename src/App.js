import React from 'react';
import Brand from './components/Brand/Brand';
import ExclusiveProduct from './components/ExclusiveProduct/ExclusiveProduct';
import FeaturedCategories from './components/FeaturedCategories/FeaturedCategories';
import FeaturedProduct from './components/FeaturedProduct/FeaturedProduct';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LatestProduct from './components/LatestProduct/LatestProduct';
import ProductPage from './components/Pages/ProductPage/ProductPage';
import Testimonial from './components/Testimonial/Testimonial';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './components/Pages/ProductPage/Home/Home';

const App = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route path='/home' component={Home} />
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
          <Route path='/products' component={ProductPage} />
        </Switch>
      </>
    </Router>
  );
};

export default App;

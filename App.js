
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProductPage from './AllProductPage';
import ProductDetailsPage from './ProductDetailsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllProductPage} />
        <Route path="/product/:productId" component={ProductDetailsPage} />
      </Switch>
    </Router>
  );
}

export default App;


import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Posts from './components/Posts';
import Header from "./components/Header";
import ShoppingCards from './components/shoppingCards';
import Users from "./components/users";
import Estimations from "./components/Estimations";
import Footer from './components/Footer';
const ReactRouter = () => {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={App} />
      <Route path='/posts' component={Posts} />
      <Route path="/cards" component={ShoppingCards} />
      <Route path="/Users" component={Users} />
      <Route path="/estimations" component={Estimations} />
      <Footer />
    </Router>
  );
};
export default ReactRouter;

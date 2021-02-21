import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';

import Header from "./components/Header";
import Footer from './components/Footer';
import routes from './routes';

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

const ReactRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
      {/* <Footer /> */}

    </Router>
  );
};
export default ReactRouter;

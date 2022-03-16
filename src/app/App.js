

import { Fragment } from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Shop from './pages/Shop';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path='/' exact>
          <Redirect to="/ReactShop/login" />
        </Route>
        <Route path='/ReactShop/login'>
          <Login/>
        </Route>
        <Route path="/ReactShop/main">
          <Shop/>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;

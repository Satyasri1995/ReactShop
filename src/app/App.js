

import { Fragment, useEffect, useRef } from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import Login from './pages/Login';
import Shop from './pages/Shop';
import { useSelector } from 'react-redux';
import SignUp from './pages/SignUp';
import { useHistory } from 'react-router-dom';

function App() {

  const toastRef = useRef(null);
  const toast = useSelector(state=>state.ui.toast);
  const clearToast = useSelector(state=>state.ui.clearToast);
  const redirect = useSelector(state=>state.ui.redirect);
  const history = useHistory();

  useEffect(()=>{
    if(redirect){
      history.push(redirect);
    }
  },[redirect,history])

  useEffect(()=>{
    toastRef.current.show({...toast});
  },[toast,toastRef]);

  useEffect(()=>{
    toastRef.current.clear();
  },[clearToast,toastRef])


  return (
    <Fragment>
      <Toast ref={toastRef} />
      <Switch>
        <Route path='/' exact>
          <Redirect to="/ReactShop/login" />
        </Route>
        <Route path='/ReactShop/login'>
          <Login/>
        </Route>
        <Route path='/ReactShop/SignUp'>
          <SignUp/>
        </Route>
        <Route path="/ReactShop/main">
          <Shop/>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;

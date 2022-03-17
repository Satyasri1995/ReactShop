import { Fragment, useEffect, useReducer, useState } from "react";
import { InputText } from "primereact/inputtext";
import InputWrapper from "./InputWrapper";
import {
  LoginActions,
  LoginReducer,
  LoginInitialState,
} from "../reducers/LoginReducer";
import ErrorMsg from "./ErrorMsg";
import { Button } from "primereact/button";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SignIn } from "../store/Actions/AuthHttpActions";
import Auth from "../models/Auth";

const LoginForm = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const auth = useSelector(state=>new Auth(state.auth));

  const loading = useSelector(state=>state.ui.loading);

  const [show, setShow] = useState(false);

  const toogleShow = (e)=>{
    setShow(value=>!value)
  }

  useEffect(()=>{
    if(auth.isAuthenticated){
      history.push("/ReactShop/main");
    }
  },[auth,history])

  const [loginState, dispatchLogin] = useReducer(
    LoginReducer,
    LoginInitialState
  );

  const mailDispatch = (e) => {
    dispatchLogin({ type: LoginActions.EMAIL, payload: e.target.value });
  };

  const passwordDispatch = (e) => {
    dispatchLogin({ type: LoginActions.PASSWORD, payload: e.target.value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    dispatch(SignIn(data));
  };

  return (
    <Fragment>
      <form
        className="p-d-flex p-flex-column"
        style={{ width: "25rem" }}
        onSubmit={loginHandler}
      >
        <InputWrapper label="User Name">
          <InputText
            id="username"
            required={true}
            name="username"
            disabled={loading}
            value={loginState.email.value}
            onChange={mailDispatch}
            className={(!loginState.email.isValid && loginState.email.touched)?'p-invalid':''}
            onFocus={mailDispatch}
          />
          <ErrorMsg>
            {!loginState.email.isValid && loginState.email.touched && (
              <span>Please Enter valid E-Mail ID</span>
            )}
          </ErrorMsg>
        </InputWrapper>
        <InputWrapper label="Password">
        <span className="p-input-icon-right">
            <i className={show?"pi pi-eye":"pi pi-eye-slash"} onClick={toogleShow}/>
            <InputText
              id="password"
              required={true}
              name="password"
              className={
                !loginState.password.isValid && loginState.password.touched
                  ? "p-invalid"
                  : ""
              }
              disabled={loading}
              type={show?"text":"password"}
              style={{ width: "100%" }}
              value={loginState.password.value}
              onChange={passwordDispatch}
              onFocus={passwordDispatch}
            />
          </span>
          <ErrorMsg>
            {!loginState.password.isValid && loginState.password.touched && (
              <span>Please Enter valid Password</span>
            )}
          </ErrorMsg>
        </InputWrapper>
        <Button
          label="Log In"
          type="submit"
          disabled={!(loginState.email.isValid && loginState.password.isValid)}
          loading={loading}
        />
      </form>
    </Fragment>
  );
};

export default LoginForm;

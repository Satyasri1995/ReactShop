import { Fragment, useReducer } from "react";
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

const LoginForm = (props) => {
  const history = useHistory();

  const [loginState, dispatchLogin] = useReducer( LoginReducer,LoginInitialState );

  const mailDispatch = (e)=>{
    dispatchLogin({ type: LoginActions.EMAIL, payload: e.target.value, });
  }

  const passwordDispatch = (e) =>{
    dispatchLogin({ type: LoginActions.PASSWORD, payload: e.target.value });
  }

  const loginHandler = (e) => {
    e.preventDefault();
    dispatchLogin({ type: LoginActions.LOADING, payload: true });
    setTimeout(() => {
      dispatchLogin({ type: LoginActions.LOADING, payload: false });
      history.push("/ReactShop/main");
    }, 1000);
    console.log("hello");
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
            value={loginState.email.value}
            onChange={mailDispatch}
            onFocus={mailDispatch}
          />
          <ErrorMsg>
            {!loginState.email.isValid && loginState.email.touched && (
              <span>Please Enter valid E-Mail ID</span>
            )}
          </ErrorMsg>
        </InputWrapper>
        <InputWrapper label="Password">
          <InputText
            id="password"
            required={true}
            value={loginState.password.value}
            onChange={passwordDispatch}
            onFocus={passwordDispatch}
          />
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
          loading={loginState.loading}
        />
      </form>
    </Fragment>
  );
};

export default LoginForm;

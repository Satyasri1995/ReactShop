import { Fragment, useReducer, useState } from "react";
import { InputText } from "primereact/inputtext";
import InputWrapper from "./InputWrapper";
import ErrorMsg from "./ErrorMsg";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { Sign_Up } from "../store/Actions/AuthHttpActions";
import { Checkbox } from "primereact/checkbox";

import {
  SignUpActions,
  SignUpReducer,
  SignUpInitialState,
} from "../reducers/SignUpReducer";

const SignUpForm = (props) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const toogleShow = (e)=>{
    setShow(value=>!value)
  }

  const loading = useSelector((state) => state.ui.loading);

  const [signupState, dispatchSignUp] = useReducer(
    SignUpReducer,
    SignUpInitialState
  );

  const mailDispatch = (e) => {
    dispatchSignUp({ type: SignUpActions.EMAIL, payload: e.target.value });
  };

  const passwordDispatch = (e) => {
    dispatchSignUp({ type: SignUpActions.PASSWORD, payload: e.target.value });
  };
  const verifyPasswordDispatch = (e) => {
    dispatchSignUp({
      type: SignUpActions.VERIFY_PASSWORD,
      payload: e.target.value,
    });
  };
  const isAdminDispatch = (e) => {
    dispatchSignUp({
      type: SignUpActions.IS_ADMIN,
      payload: e.checked,
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    dispatch(Sign_Up(data));
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
            className={
              !signupState.email.isValid && signupState.email.touched
                ? "p-invalid"
                : ""
            }
            disabled={loading}
            value={signupState.email.value}
            onChange={mailDispatch}
            onFocus={mailDispatch}
          />
          <ErrorMsg>
            {!signupState.email.isValid && signupState.email.touched && (
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
                !signupState.password.isValid && signupState.password.touched
                  ? "p-invalid"
                  : ""
              }
              disabled={loading}
              type={show?"text":"password"}
              style={{ width: "100%" }}
              value={signupState.password.value}
              onChange={passwordDispatch}
              onFocus={passwordDispatch}
            />
          </span>
          <ErrorMsg>
            {!signupState.password.isValid && signupState.password.touched && (
              <span>Please Enter valid Password</span>
            )}
          </ErrorMsg>
        </InputWrapper>
        <InputWrapper label="Verify Password">
          <span className="p-input-icon-right">
          <i className={show?"pi pi-eye":"pi pi-eye-slash"} onClick={toogleShow}/>
            <InputText
              id="verifyPassword"
              required={true}
              name="verifyPassword"
              className={
                !signupState.verifyPassword.isValid &&
                signupState.verifyPassword.touched
                  ? "p-invalid"
                  : ""
              }
              disabled={loading}
              type={show?"text":"password"}
              style={{ width: "100%" }}
              value={signupState.verifyPassword.value}
              onChange={verifyPasswordDispatch}
              onFocus={verifyPasswordDispatch}
            />
          </span>
          <ErrorMsg>
            {!signupState.verifyPassword.isValid &&
              signupState.verifyPassword.touched && (
                <span>Password and Verify Password should be same.</span>
              )}
          </ErrorMsg>
        </InputWrapper>
        <div className="field-checkbox p-mb-3">
          <Checkbox
            inputId="binary"
            checked={signupState.isAdmin.value}
            onChange={isAdminDispatch}
          />
          <label htmlFor="binary" className="p-ml-2">
            {signupState.isAdmin.value ? "Admin" : "User"}
          </label>
        </div>
        <Button
          label="Sign Up"
          type="submit"
          disabled={
            !(
              signupState.email.isValid &&
              signupState.password.isValid &&
              signupState.verifyPassword.isValid
            )
          }
          loading={loading}
        />
      </form>
    </Fragment>
  );
};

export default SignUpForm;

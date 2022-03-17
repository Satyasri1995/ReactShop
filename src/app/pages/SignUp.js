import { Fragment } from "react";
import styled from "styled-components"
import { Card } from 'primereact/card';
import SignUpForm from "../widgets/SignUpForm";
import { NavLink } from "react-router-dom";

const LoginContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`

const SignUp = (props) => {
  return <Fragment>
      <LoginContainer>
          <Card title="SignUp">
            <SignUpForm/>
            <NavLink to="/ReactShop/Login">
              Login
            </NavLink>
          </Card>
      </LoginContainer>
  </Fragment>;
};

export default SignUp;

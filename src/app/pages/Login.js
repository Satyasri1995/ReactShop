import { Fragment } from "react";
import styled from "styled-components"
import { Card } from 'primereact/card';
import LoginForm from "../widgets/LoginForm";
import { NavLink } from "react-router-dom";

const LoginContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`

const Login = (props) => {
  return <Fragment>
      <LoginContainer>
          <Card title="Login">
            <LoginForm/>
            <NavLink to="/ReactShop/SignUp">
              SignUp
            </NavLink>
          </Card>
      </LoginContainer>
  </Fragment>;
};

export default Login;

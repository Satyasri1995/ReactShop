import { useRouteMatch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  height: 60px;
  background: #609af8;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled(NavLink)`
  color: white;
  margin: 0rem 2rem;
  cursor:pointer;
  text-decoration: none;
  font-size:1.5rem;
  font-weight:500
`;
const StyledNavLink = styled(NavLink)`
  padding: 5px 10px;
  border-radius: 20px;
  text-decoration: none;
  margin: 0rem 2rem;
  color:white;
  font-weight:500;
  &:hover,
  &.active {
    background: white;
    color: black;
  }
`;

const NavBar = (props) => {
    const {url}=useRouteMatch();
  return (
    <StyledHeader>
      <Title to={`${url}`}>ReactShop</Title>
      <nav>
        <StyledNavLink to={`${url}/products`}>Products</StyledNavLink>
        <StyledNavLink to={`${url}/cart`}>Cart</StyledNavLink>
        <StyledNavLink to={`${url}/orders`}>Orders</StyledNavLink>
      </nav>
    </StyledHeader>
  );
};

export default NavBar;

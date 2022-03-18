import { useRouteMatch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Badge } from "primereact/badge";
import { useDispatch, useSelector } from "react-redux";
import { confirmPopup } from "primereact/confirmpopup";
import { AuthActions } from "../store/slices/AuthSlice";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

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
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
`;
const StyledNavLink = styled(NavLink)`
  padding: 5px 10px;
  border-radius: 20px;
  text-decoration: none;
  margin: 0rem 2rem;
  color: white;
  font-weight: 500;
  &:hover,
  &.active {
    background: white;
    color: black;
  }
`;

const StyledLogout = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    color: black;
  }
`;

const NavBar = (props) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const { url } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    if (!isAuthenticated) {
      history.replace("/");
    }
  }, [isAuthenticated, history]);

  const totalCartItems = useSelector((state) =>
    state.cart.cartItems.reduce((total, item) => {
      return (total += item.quantity);
    }, 0)
  );

  const confirm = (event) => {
    confirmPopup({
      target: event.currentTarget,
      message: "Are you sure you want to proceed?",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        dispatch(AuthActions.loggedOut());
      },
    });
  };

  const totalOrderedItems = useSelector(
    (state) => state.order.orderItems.length
  );

  return (
    <StyledHeader>
      <Title to={`${url}`}>ReactShop</Title>
      <nav>
        {isAdmin && (
          <StyledNavLink to={`${url}/product`}>Add/Edit Products</StyledNavLink>
        )}
        <StyledNavLink to={`${url}/products`}>Products</StyledNavLink>
        <StyledNavLink to={`${url}/cart`}>
          <i
            className="pi pi-shopping-cart p-overlay-badge"
            style={{ fontSize: "20px" }}
          >
            <Badge value={totalCartItems} />
          </i>
          &nbsp;Cart
        </StyledNavLink>
        <StyledNavLink to={`${url}/orders`}>
          <i
            className="pi pi-book p-overlay-badge"
            style={{ fontSize: "20px" }}
          >
            <Badge value={totalOrderedItems} />
          </i>
          &nbsp;Orders
        </StyledNavLink>
        <StyledLogout className="p-mr-4" onClick={confirm}>
          <i className="pi pi-power-off" style={{ fontSize: "20px" }}></i>
        </StyledLogout>
      </nav>
    </StyledHeader>
  );
};

export default NavBar;

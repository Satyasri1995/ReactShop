import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchCart } from "../store/Actions/CartHttpActions";
import { fetchOrders } from "../store/Actions/OrderHttpActions";
import { fetchProducts } from "../store/Actions/ProductHttpActions";

const WelcomeMessage = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  justify-content: center;
  align-items: center;
`;

const Welcome = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCart());
    dispatch(fetchOrders());
  }, [dispatch]);
  return (
    <WelcomeMessage>
      <h1>Welcome to ReactShop</h1>
    </WelcomeMessage>
  );
};

export default Welcome;

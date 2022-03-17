import { Fragment } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import OrderItem from "../widgets/OrderItem";

let OrderContainer = styled.div`
  margin: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 40rem;
`;
const MsgContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  justify-content: center;
  align-items: center;
`;

const Orders = (props) => {
  const orders = useSelector((state) => state.order);

  return (
    <Fragment>
      {orders.length ? (
        <div className="p-d-flex p-flex-row p-jc-center">
          <OrderContainer>
            {orders.map((cartItem, index) => {
              return <OrderItem item={cartItem} key={index} />;
            })}
          </OrderContainer>
        </div>
      ) : (
        <MsgContainer>
          <h2>Currently You Don't have any Orders</h2>
        </MsgContainer>
      )}
    </Fragment>
  );
};

export default Orders;

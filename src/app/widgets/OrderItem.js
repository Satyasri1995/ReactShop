import { Button } from "primereact/button";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { OrderActions } from "../store/slices/OrderSlice";

const Title = styled.span`
  font-size: 2rem;
  font-style: bold;
`;

const OrderItem = (props) => {
  const dispatch = useDispatch();

  const cancelOrder = (order) => {
    dispatch(OrderActions.cancelOrder(order));
  };

  return (
    <Fragment>
      <div
        className="p-d-flex p-flex-row p-card-content p-m-2  p-card"
        style={{ height: "14rem" }}
      >
        <img
          alt={props.item.product.name}
          width="300"
          src={props.item.product.url}
        />
        <div
          className="p-d-flex p-flex-column p-jc-between p-m-1"
          style={{ flex: 1, height: "100%", fontWeight: "500" }}
        >
          <Title>{props.item.product.name}</Title>
          <span>Price : {`$${props.item.product.price}`}</span>
          <span>Quantity : {`x ${props.item.quantity}`}</span>
          <span>
            Total Price :{" "}
            {`${props.item.quantity} 
                    x $${props.item.product.price} = 
                    $${props.item.quantity * props.item.product.price} `}
          </span>
          <span>Order ID : {props.item.id}</span>
          <div className="p-d-flex p-flex-row p-jc-between p-mb-3">
            <Button
              label="Cancel Order"
              style={{ width: "100%" }}
              onClick={() => {
                cancelOrder(props.item);
              }}
              className="p-button-text p-button-sm"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default OrderItem;

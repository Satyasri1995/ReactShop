import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { CartActions } from "../store/slices/CartSlice";
import { OrderActions } from "../store/slices/OrderSlice";

const Title = styled.span`
  font-size: 2rem;
  font-style: bold;
`;

const StyledInputNumber = styled(InputNumber)`
  & input {
    width: 4rem;
    padding: 0px 10px !important;
  }
`;

const CartItem = (props) => {
  const dispatch = useDispatch();

  const updateCart = (product, quantity) => {
    const payload = { product: product, quantity: quantity };
    dispatch(CartActions.updateProduct(payload));
  };

  const deleteProduct = (product) => {
    dispatch(CartActions.deleteProduct(product));
  };

  const placeOrder = (order)=>{
    dispatch(OrderActions.placeOrder(order));
    dispatch(CartActions.deleteProduct(order.product));
  }

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
          <div className="p-d-flex p-flex-row p-ai-center">
            <span>Quantity : </span>&nbsp;
            <StyledInputNumber
              inputId="minmax-buttons"
              value={props.item.quantity}
              className="p-inputtext-sm"
              onValueChange={(e) => {
                updateCart(props.item.product, e.target.value);
              }}
              showButtons
              min={1}
              max={100}
            />
          </div>
          <span>
            Total Price :{" "}
            {`${props.item.quantity} 
                    x $${props.item.product.price} = 
                    $${props.item.quantity * props.item.product.price} `}
          </span>
          <div className="p-d-flex p-flex-row p-jc-between p-mb-3">
            <Button label="Place Order" onClick={()=>{placeOrder(props.item)}} className="p-button-text p-button-sm" />
            <Button
              label="Delete"
              onClick={() => {
                deleteProduct(props.item.product);
              }}
              className="p-button-text p-button-sm"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartItem;

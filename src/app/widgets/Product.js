import { Fragment } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useDispatch } from "react-redux";
import {CartActions} from "../store/slices/CartSlice";

const Product = (props) => {

  const dispatch = useDispatch();

  const addToCart=(product)=>{
    dispatch(CartActions.addProduct(product))
  }


  const header = <img alt={props.product.name} width="100" height="200" src={props.product.url} />;
  const footer = (
    <Button className="p-button-text p-button-sm" onClick={()=>{addToCart(props.product)}} style={{width:"100%"}} label="Add To Cart" />
  );
  return (
    <Fragment>
      <Card
        title={props.product.name}
        subTitle={`Price:$${props.product.price}`}
        header={header}
        footer={footer}
        style={{width:"20rem",margin:"1rem"}}
      >
      </Card>
    </Fragment>
  );
};

export default Product;

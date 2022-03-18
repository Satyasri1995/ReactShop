import { Fragment } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { CartActions } from "../store/slices/CartSlice";
import { ProductActions } from "../store/slices/ProductSlice";
import { UIActions } from "../store/slices/UISlice";

const Product = (props) => {
  const dispatch = useDispatch();

  const isAdmin = useSelector((state) => state.auth.isAdmin);

  const addToCart = (product) => {
    dispatch(CartActions.addProduct(product));
  };

  const editProduct = (product) => {
    dispatch(ProductActions.editProduct(product));
    dispatch(UIActions.redirect("/ReactShop/main/product"));
  };

  const deleteProduct = (product) => {
    dispatch(ProductActions.deleteProduct(product));
    dispatch(UIActions.redirect("/ReactShop/main/products"));
  };

  const header = (
    <img
      alt={props.product.name}
      width="100"
      height="200"
      src={props.product.url}
    />
  );
  const footer = (
    <div className="p-d-flex p-flex-row p-jc-around">
      <Button
        className="p-button-text p-button-sm"
        onClick={() => {
          addToCart(props.product);
        }}
        label="Add To Cart"
      />
      {isAdmin && (
        <Button
          className="p-button-text p-button-sm"
          onClick={() => {
            editProduct(props.product);
          }}
          label="Edit"
        />
      )}
      {isAdmin && (
        <Button
          className="p-button-text p-button-sm"
          onClick={() => {
            deleteProduct(props.product);
          }}
          label="Delete"
        />
      )}
    </div>
  );
  return (
    <Fragment>
      <Card
        title={props.product.name}
        subTitle={`Price:$${props.product.price}`}
        header={header}
        footer={footer}
        style={{ width: "20rem", margin: "1rem" }}
      ></Card>
    </Fragment>
  );
};

export default Product;

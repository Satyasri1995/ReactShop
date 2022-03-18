import { Fragment, useEffect, useReducer } from "react";
import styled from "styled-components";
import { Button } from "primereact/button";
import InputWrapper from "../widgets/InputWrapper";
import { InputText } from "primereact/inputtext";
import ErrorMsg from "../widgets/ErrorMsg";
import {
  EditProductActions,
  EditProductReducer,
  InitEditProductState,
} from "../reducers/EditProductReducer";
import { useDispatch, useSelector } from "react-redux";
import { ProductActions } from "../store/slices/ProductSlice";
import { UIActions } from "../store/slices/UISlice";

let EditContainer = styled.div`
  margin: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 25rem;
`;

const EditProduct = (props) => {
  const loading = useSelector((state) => state.ui.loading);
  const editProduct = useSelector((state) => state.product.editProduct);
  const dispatch = useDispatch();

  const [productState, dispatchEditProduct] = useReducer(
    EditProductReducer,
    InitEditProductState
  );

  useEffect(() => {
    if (editProduct.id) {
      dispatchEditProduct({
        type: EditProductActions.EDIT,
        payload: editProduct,
      });
    }
  }, [editProduct, dispatch]);

  const nameDispatch = (e) => {
    dispatchEditProduct({
      type: EditProductActions.NAME,
      payload: e.target.value,
    });
  };
  const urlDispatch = (e) => {
    dispatchEditProduct({
      type: EditProductActions.URL,
      payload: e.target.value,
    });
  };
  const priceDispatch = (e) => {
    dispatchEditProduct({
      type: EditProductActions.PRICE,
      payload: e.target.value,
    });
  };

  const saveProductDispatch = (e) => {
    e.preventDefault();
    if(editProduct.id){
      const data = {
        name: e.target.product.value,
        url: e.target.url.value,
        price: e.target.price.value,
        id:editProduct.id
      };
      dispatch(ProductActions.updateProduct(data));
    }else{
      const data = {
        name: e.target.product.value,
        url: e.target.url.value,
        price: e.target.price.value,
      };
      dispatch(ProductActions.addProduct(data));
    }
    dispatch(UIActions.redirect("/ReactShop/main/products"));
  };

  return (
    <Fragment>
      <div className="p-d-flex p-flex-row p-jc-center">
        <EditContainer>
          <div className="p-card p-p-3">
            <img
              alt={productState.name.value}
              width="100%"
              height="200"
              src={productState.url.value}
              onError={(e) =>
                (e.target.src =
                  "https://telkomuniversity.ac.id/wp-content/themes/eikra/assets/img/noimage-420x273.jpg")
              }
            />
            <form onSubmit={saveProductDispatch}>
              <InputWrapper label="Produce Name">
                <InputText
                  id="product"
                  className={
                    !productState.name.isValid && productState.name.touched
                      ? "p-inputtext-sm p-invalid"
                      : "p-inputtext-sm"
                  }
                  required={true}
                  value={productState.name.value}
                  onChange={nameDispatch}
                  name="name"
                />
                <ErrorMsg>
                  {!productState.name.isValid && productState.name.touched && (
                    <span>Please Enter Product Name</span>
                  )}
                </ErrorMsg>
              </InputWrapper>
              <InputWrapper label="Product Url">
                <InputText
                  id="url"
                  className={
                    !productState.url.isValid && productState.url.touched
                      ? "p-inputtext-sm p-invalid"
                      : "p-inputtext-sm"
                  }
                  required={true}
                  name="url"
                  value={productState.url.value}
                  onChange={urlDispatch}
                  type="text"
                />
                <ErrorMsg>
                  {!productState.url.isValid && productState.url.touched && (
                    <span>Please Enter Product URL</span>
                  )}
                </ErrorMsg>
              </InputWrapper>
              <InputWrapper label="Product Price">
                <InputText
                  id="name"
                  className={
                    !productState.price.isValid && productState.price.touched
                      ? "p-inputtext-sm p-invalid"
                      : "p-inputtext-sm"
                  }
                  required={true}
                  name="price"
                  prefix="$"
                  type="number"
                  value={productState.price.value}
                  onChange={priceDispatch}
                  min="1"
                />
                <ErrorMsg>
                  {!productState.price.isValid &&
                    productState.price.touched && (
                      <span>Please Enter Product Price</span>
                    )}
                </ErrorMsg>
              </InputWrapper>
              <div className="p-d-flex p-flex-row p-jc-around">
                <Button
                  className="p-button-text p-button-sm"
                  type="submit"
                  label="Save"
                  loading={loading}
                  disabled={
                    !(
                      productState.name.isValid &&
                      productState.url.isValid &&
                      productState.price.isValid
                    )
                  }
                />
              </div>
            </form>
          </div>
        </EditContainer>
      </div>
    </Fragment>
  );
};

export default EditProduct;

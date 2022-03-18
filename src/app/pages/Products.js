import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Product from "../widgets/Product";
import { Fragment, useEffect } from "react";
import { saveProducts } from "./../store/Actions/ProductHttpActions";


let ProductContainer = styled.div`
  margin: 2rem;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
`;

const MsgContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  justify-content: center;
  align-items: center;
`;

const Products = (props) => {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(!products.saved){
        dispatch(saveProducts(products.productItems));
    }
  },[products,dispatch])

  return (
    <Fragment>
      {products.productItems.length ? (
        <ProductContainer>
          {products.productItems.map((product, index) => {
            return (
              <Product
                style={{ width: "10rem", height: "20rem" }}
                product={product}
                key={product.id}
              />
            );
          })}
        </ProductContainer>
      ) : (
        <MsgContainer>
          <h2>Product not available...</h2>
        </MsgContainer>
      )}
    </Fragment>
  );
};

export default Products;

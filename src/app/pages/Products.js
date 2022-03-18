import styled from "styled-components";
import { useSelector } from "react-redux";
import Product from "../widgets/Product";
import { Fragment } from "react";



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

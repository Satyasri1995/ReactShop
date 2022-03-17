
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import Product from "../widgets/Product";
import { useEffect } from "react";


let ProductContainer = styled.div`
    margin:2rem;
    padding:1rem;
    display:flex;
    flex-wrap:wrap;
`


const Products = (props)=>{

    
    const products = useSelector(state=>state.product);
    const dispatch = useDispatch();

    useEffect(()=>{
       // dispatch(fetchProducts());
        console.log("fetching products")
    },[dispatch])

    useEffect(()=>{
        console.log("products changed")
    },[products,dispatch])

    return <ProductContainer>
        {
            products.map((product,index)=>{
                return <Product style={{width:"10rem",height:"20rem"}} product={product} key={product.id}/>
            })
        }
    </ProductContainer>
}

export default Products;

import styled from "styled-components";
import {useSelector} from "react-redux";
import Product from "../widgets/Product";

let ProductContainer = styled.div`
    margin:2rem;
    padding:1rem;
    display:flex;
    flex-wrap:wrap;
`


const Products = (props)=>{

    const products = useSelector(state=>state.product)

    return <ProductContainer>
        {
            products.map((product,index)=>{
                return <Product style={{width:"10rem",height:"20rem"}} product={product} key={product.id}/>
            })
        }
    </ProductContainer>
}

export default Products;

import styled from "styled-components";

import Product from "../widgets/Product";

let products=[
    {
        name:"React",
        url:"https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/0e6ff/React.jpg",
        price:100
    },
    {
        name:"PrimeReact",
        url:"https://www.rezourze.com/rz-storage/2020/09/PrimeReact-UI-Component-Libraries-Frameworks.jpg",
        price:20
    },
    {
        name:"React Router",
        url:"https://miro.medium.com/max/1400/1*sX8rBJBol5dBp5WIJQrYyw.png",
        price:10
    }
]

let ProductContainer = styled.div`
    margin:2rem;
    padding:1rem;
    display:flex;
    flex-wrap:wrap;
`


const Products = (props)=>{
    return <ProductContainer>
        {
            products.map((product,index)=>{
                return <Product style={{width:"10rem",height:"20rem"}} product={product} key={index}/>
            })
        }
    </ProductContainer>
}

export default Products;
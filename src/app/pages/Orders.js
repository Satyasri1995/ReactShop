import { Fragment } from "react";
import styled from "styled-components";
import OrderItem from "../widgets/OrderItem";

let orders=[
    {
        name:"React",
        url:"https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/0e6ff/React.jpg",
        price:100,
        quantity:10,
        totalPrice:500
    },
    {
        name:"PrimeReact",
        url:"https://www.rezourze.com/rz-storage/2020/09/PrimeReact-UI-Component-Libraries-Frameworks.jpg",
        price:20,
        quantity:10,
        totalPrice:500
    },
    {
        name:"React Router",
        url:"https://miro.medium.com/max/1400/1*sX8rBJBol5dBp5WIJQrYyw.png",
        price:10,
        quantity:10,
        totalPrice:500
    }
]
let OrderContainer = styled.div`
    margin:2rem;
    padding:1rem;
    display:flex;
    flex-direction:column;
    width:40rem;
`
const Orders = (props) => {
    return <Fragment>
        <div className="p-d-flex p-flex-row p-jc-center">
            <OrderContainer>
                {
                    orders.map((cartItem,index)=>{
                        return <OrderItem item={cartItem} key={index} />
                    })
                }
            </OrderContainer>
        </div>
    </Fragment>
}

export default Orders;
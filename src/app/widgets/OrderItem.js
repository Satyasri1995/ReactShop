import { Button } from "primereact/button";
import { Fragment } from "react";
import styled from "styled-components";

const Title = styled.span`
    font-size:2rem;
    font-style:bold;
`

const OrderItem = (props) =>{
    return <Fragment>
        <div className="p-d-flex p-flex-row p-card-content p-m-2  p-card" style={{height:"14rem"}}>
            <img alt={props.item.name} width="300"  src={props.item.url}  />
            <div className="p-d-flex p-flex-column p-jc-between p-m-1" style={{flex:1,height:"100%",fontWeight:"500"}}>
                <Title>{props.item.name}</Title>
                <span>Price : {`$${props.item.price}`}</span>
                <span>Quantity : {`x ${props.item.quantity}`}</span>
                <span>
                    Total Price : {`${props.item.quantity} 
                    x $${props.item.price} = 
                    $${props.item.quantity*props.item.price} `}
                </span>
                <span>Order ID : {Math.random().toString().substring(2)}</span>
                <div className="p-d-flex p-flex-row p-jc-between p-mb-3">
                    <Button label="Cancel Order" style={{width:"100%"}} className="p-button-text p-button-sm" />
                </div>
            </div>
        </div>
    </Fragment>
}

export default OrderItem;
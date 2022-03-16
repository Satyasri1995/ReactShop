import { Button } from "primereact/button";
import {InputNumber} from "primereact/inputnumber"
import { Fragment } from "react";
import styled from "styled-components";

const Title = styled.span`
    font-size:2rem;
    font-style:bold;
`

const StyledInputNumber = styled(InputNumber)`
    & input{
        width:4rem;
        padding:0px 10px !important;
    }
`

const CartItem = (props) =>{
    return <Fragment>
        <div className="p-d-flex p-flex-row p-card-content p-m-2  p-card" style={{height:"14rem"}}>
            <img alt={props.item.name} width="300"  src={props.item.url}  />
            <div className="p-d-flex p-flex-column p-jc-between p-m-1" style={{flex:1,height:"100%",fontWeight:"500"}}>
                <Title>{props.item.name}</Title>
                <span>Price : {`$${props.item.price}`}</span>
                <div className="p-d-flex p-flex-row p-ai-center">
                    <span>Quantity : </span>&nbsp;
                    <StyledInputNumber 
                        inputId="minmax-buttons" 
                        value={props.item.quantity}
                        className="p-inputtext-sm"
                        onValueChange={(e) => {}} 
                        showButtons 
                        min={0} 
                        max={100} />    
                </div>
                <span>
                    Total Price : {`${props.item.quantity} 
                    x $${props.item.price} = 
                    $${props.item.quantity*props.item.price} `}
                </span>
                <div className="p-d-flex p-flex-row p-jc-between p-mb-3">
                    <Button label="Place Order" className="p-button-text p-button-sm" />
                    <Button label="Delete" className="p-button-text p-button-sm" />
                </div>
            </div>
        </div>
    </Fragment>
}

export default CartItem;
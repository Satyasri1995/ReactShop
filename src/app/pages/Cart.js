import { Fragment } from "react";
import styled from "styled-components";
import CartItem from "../widgets/CartItem";
import { useSelector } from "react-redux";

let CartContainer = styled.div`
    margin:2rem;
    padding:1rem;
    display:flex;
    flex-direction:column;
    width:40rem;
`
const Cart = (props) => {

    const cart = useSelector(state=>state.cart);

    return <Fragment>
        <div className="p-d-flex p-flex-row p-jc-center">
            <CartContainer>
                {
                    cart.map((cartItem,index)=>{
                        return <CartItem item={cartItem} key={index} />
                    })
                }
            </CartContainer>
        </div>
    </Fragment>
}

export default Cart;
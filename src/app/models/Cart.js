class Cart{
    constructor(data){
        this.cartItems=data?data.cartItems:[];
        this.saved=data?data.saved:true;
    }
}

export default Cart;
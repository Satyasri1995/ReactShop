class Cart{
    constructor(data){
        this.cartItems=data?data.cartItems:[];
        this.saved=data?data.saved:true;
    }
}

module.exports=Cart;
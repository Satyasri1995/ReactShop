class Order{
    constructor(data){
        this.orderItems=data?data.orderItems:[];
        this.saved=data?data.saved:true;
    }
}

module.exports=Order;
class Products{
    constructor(data){
        this.productItems=data?data.productItems:[];
        this.saved=data?data.saved:true;
        this.editProduct=data?data.editProduct:{};
    }
}

module.exports=Products;
class Products{
    constructor(data){
        this.productItems=data?data.productItems:[];
        this.saved=data?data.changed:true;
        this.editProduct=data?data.editProduct:{};
    }
}

module.exports=Products;
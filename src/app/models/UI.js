const Toast = require("./Toast");

class UI{
    constructor(data){
        this.toast=new Toast();
        this.clearToast=data?data.clearToast:false;
        this.loading=data?data.loading:false;
    }
}
module.exports=UI;
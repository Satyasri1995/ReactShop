class Toast{
    constructor(data){
        this.severity=data?data.severity:"error";
        this.summary=data?data.summary:"Error";
        this.detail=data?data.detail:"Oops Something went wrong...!";
        this.life=data?data.life:5000;
        this.sticky=data?data.sticky:false;
    }
}

export default Toast;
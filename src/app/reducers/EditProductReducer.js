export const EditProductActions ={
    NAME:0,
    URL:1,
    PRICE:2,
    EDIT:3
};

export const InitEditProductState = {
    name: { value: "", touched: false, isValid: false },
    url: {
      value:"",
      touched: false,
      isValid: false,
    },
    price: { value: 1, touched: false, isValid: false },
  };

export const EditProductReducer = (state,actions)=>{
    switch(actions.type){
        case EditProductActions.NAME:
            return {
                ...state,
                name:{
                    value:actions.payload,
                    touched:true,
                    isValid:actions.payload!==""
                }
            }
        case EditProductActions.URL:
            return {
                ...state,
                url:{
                    value:actions.payload,
                    touched:true,
                    isValid:actions.payload!==""
                }
            }
        case EditProductActions.PRICE:
            return {
                ...state,
                price:{
                    value:actions.payload,
                    touched:true,
                    isValid:actions.payload>0
                }
            }
        case EditProductActions.EDIT:
            return {
                name: { value: actions.payload.name, touched: true, isValid: true },
                url: {
                  value:actions.payload.url,
                  touched: true,
                  isValid: true,
                },
                price: { value: actions.payload.price, touched: true, isValid: true },
              }
        default:
            return {...state};
    }
}
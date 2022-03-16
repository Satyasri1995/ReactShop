export const LoginActions = {
  EMAIL: 0,
  PASSWORD: 1,
  LOADING: 2
};

export const LoginInitialState = {
  email: { value: "test@test.com", isValid: false, touched: false },
  password: { value: "Pass@123", isValid: false, touched: false },
  loading:false
};

export const LoginReducer = (state, action) => {
  switch (action.type) {
    case LoginActions.EMAIL:
      return {
        ...state,
        email: {
          value: action.payload,
          touched:true,
          isValid: action.payload.match(
            // eslint-disable-next-line no-useless-escape
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
          )
            ? true
            : false,
        },
      };
    case LoginActions.PASSWORD:
      return {
        ...state,
        password: {
          value: action.payload,
          touched:true,
          isValid: action.payload.match(
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
          )
            ? true
            : false,
        },
      };
    case LoginActions.LOADING:
        return {
            ...state,
            loading:action.payload
        }
    default:
      return {...LoginInitialState};
  }
};

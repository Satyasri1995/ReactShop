export const SignUpActions = {
  EMAIL: 0,
  PASSWORD: 1,
  VERIFY_PASSWORD: 2,
  IS_ADMIN: 3,
};

export const SignUpInitialState = {
  email: { value: "", isValid: false, touched: false },
  password: { value: "", isValid: false, touched: false },
  verifyPassword: { value: "", isValid: false, touched: false },
  isAdmin: { value: false, isValid: false, touched: false },
};

export const SignUpReducer = (state, actions) => {
  switch (actions.type) {
    case SignUpActions.EMAIL:
      return {
        ...state,
        email: {
          value: actions.payload,
          touched: true,
          isValid: actions.payload.match(
            // eslint-disable-next-line no-useless-escape
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
          )
            ? true
            : false,
        },
      };
    case SignUpActions.PASSWORD:
      return {
        ...state,
        password: {
          value: actions.payload,
          touched: true,
          isValid: actions.payload.match(
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
          )
            ? true
            : false,
        },
        verifyPassword: {
          value: state.verifyPassword.value,
          touched: true,
          isValid: state.verifyPassword.value === actions.payload,
        },
      };
    case SignUpActions.VERIFY_PASSWORD:
      return {
        ...state,
        verifyPassword: {
          value: actions.payload,
          touched: true,
          isValid: actions.payload === state.password.value,
        },
      };
    case SignUpActions.IS_ADMIN:
      return {
        ...state,
        isAdmin: {
          value: actions.payload,
          touched: true,
          isValid: true,
        },
      };
    default:
      return { ...SignUpInitialState };
  }
};
